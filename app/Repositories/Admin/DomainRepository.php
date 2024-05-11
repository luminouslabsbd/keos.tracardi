<?php

namespace App\Repositories\Admin;

use App\Imports\CsvImport;
use App\Models\Admin\Domain;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;

class DomainRepository
{
    protected $model;
    public function __construct(Domain $model)
    {
        $this->model = $model;
    }

    public function update($request)
    {
        $message = $this->store($request, $request->id);
        return $message;
    }


    public function store($request, $id = null)
    {
        $oldDomain = Domain::where('id', $id)->select(['id', 'domain'])->first();
        // dd($oldDomain);

        $data = $this->model::updateOrCreate(
            ['id' => $id],
            [
                'user_id' => Auth::user()->id,
                'domain' => $request->domain,
                'user_name' => $request->user_name,
                'user_pass' => $request->user_pass,
                'backend_api_url' => $request->backend_api_url,
            ]
        );

        if ($data->wasRecentlyCreated) {
            $message = "Domain Created Successfully";
            $this->createJsFile($request->domain, $request->backend_api_url);
        } else {
            $message = "Domain Updated Successfully";
            $this->updateJsFile($oldDomain->domain, $request->domain, $request->backend_api_url);
        }
        return ['message' => $message,];
    }

    private function createJsFile($domain, $apiUrl)
    {
        // Read the content of demo.js
        $demoJsContent = File::get(public_path('assets/js/tracardi.js'));

        // Create a new JavaScript file with the content of demo.js
        // and save it in public/js directory with the domain name as the file name
        $fileName = str_replace(' ', '_', strtolower($domain)) . '.js';
        $domain_name = str_replace(' ', '_', strtolower($domain));


        // Check if the file already exists Delete the old JavaScript file
        $this->deleteJsFile($fileName);

        $modifiedJsContent = str_replace('<domain-name>', $domain_name, $demoJsContent);
        $modifiedJsContent = str_replace('<API-URL>', $apiUrl, $modifiedJsContent);
        $modifiedJsContent = str_replace('<API-SCRIPT>', $apiUrl . '/tracker', $modifiedJsContent);
        File::put(public_path("assets/js/$fileName"), $modifiedJsContent);
    }

    private function updateJsFile($oldDomain, $newDomain, $apiUrl)
    {
        // Generate file names for the old and new domains
        $oldFileName = str_replace(' ', '_', strtolower($oldDomain)) . '.js';

        // Check if the old JavaScript file exists Delete the old JavaScript file
        $this->deleteJsFile($oldFileName);
        // Create a new JavaScript file with the updated data
        $this->createJsFile($newDomain, $apiUrl);
    }

    private function deleteJsFile($fileName)
    {
        if (File::exists(public_path("assets/js/$fileName"))) {
            File::delete(public_path("assets/js/$fileName"));
        }
    }

    public function delete($domain)
    {
        $fileName = str_replace(' ', '_', strtolower($domain->domain)) . '.js';

        // Check if the file already exists Delete the old JavaScript file
        $this->deleteJsFile($fileName);
        $domain->delete();
    }

    public function statusUpdate($request)
    {
        DB::table('domains')->where('id', $request->id)->update([
            'status' => $request->status
        ]);

        $domain = Domain::findOrFail($request['id']);
        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);

        if ($request->status == 1) {
            $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
            $jsonData = json_encode($urls);
            file_put_contents($filePath, $jsonData);
        } else {
            file_put_contents($filePath, '');
        }

        $message = "Domain status updated successfully";
        return ['message' => $message,];
    }

    public function domainUrl($id)
    {
        $domain_url = DB::table('domain_urls')->where('domain_id', $id)->get();
        return $domain_url;
    }

    public function csvUpload($request, $domain_id)
    {
        if ($request->hasFile('file') && isset($request->file[0])) {
            Excel::import(new CsvImport($domain_id), $request->file[0]);

            $domain = Domain::findOrFail($request['domain_id']);

            $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
            $jsonData = json_encode($urls);

            $domainName = $domain->domain;
            $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
            $filePath = public_path('json/' . $fileName);
            file_put_contents($filePath, $jsonData);

            $message = "CSV data imported successfully";
            return ['message' => $message];
        } else {
            $errorMessage = "No file uploaded";
            return ['message' => $errorMessage];
        }
    }
}
