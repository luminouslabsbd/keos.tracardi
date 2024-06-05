<?php

namespace App\Repositories\Admin;

use App\Imports\CsvImport;
use App\Models\Admin\EventSource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;

class EventSourceRepository
{
    protected $model;
    public function __construct(EventSource $model)
    {
        $this->model = $model;
    }

    public function update($request)
    {
        $message = $this->store($request, $request->id);
        return $message;
    }

    public function store($request)
    {
        $data = $this->model::updateOrCreate(
            ['id' => $request->id],
            [
                'name' => $request->name,
                'script_code' => $request->script_code,
            ]
        );

        if ($data->wasRecentlyCreated) {
            $message = "Domain Created Successfully";
            $o = $this->createJsFile($request->name, $request->script_code);
        } else {
            // $message = "Domain Updated Successfully";
            // $this->updateJsFile($oldDomain->domain, $request->domain, $request->backend_api_url);
        }
        return response()->json(['message' => $message]);
    }

    private function createJsFile($source, $code)
    {
        $fileName = str_replace(' ', '_', strtolower($source)) . '.source.js';
        $this->deleteJsFile($fileName);
        File::put(public_path("assets/js/$fileName"), $code);
    }

    private function updateJsFile($oldDomain, $newDomain, $apiUrl)
    {
        // Check if the old JavaScript file exists Delete the old JavaScript file
        $this->deleteJsFile($oldDomain);
        // Create a new JavaScript file with the updated data
        $this->createJsFile($newDomain, $apiUrl);
    }

    private function deleteJsFile($file)
    {
        // Generate file names for the domain
        if (File::exists(public_path("assets/js/$file"))) {
            File::delete(public_path("assets/js/$file"));
        }
    }

    public function delete($domain)
    {
        // Check if the file already exists Delete the old JavaScript file
        $this->deleteJsFile($domain->domain);
        $domain->delete();
    }

    public function domainDelete($id)
    {
        $domain = $this->model::findOrFail($id);

        $domain->delete();

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);
        file_put_contents($filePath, '');
    }

    public function statusUpdate($request)
    {
        DB::table('domains')->where('id', $request->id)->update([
            'status' => $request->status
        ]);

        $domain = $this->model::findOrFail($request['id']);
        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);

        if ($request->status == 1) {
            $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
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

            $domain = $this->model::findOrFail($request['domain_id']);

            $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
            $jsonData = json_encode($urls);

            $domainName = $domain->domain;
            $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
            $filePath = public_path('assets/json/' . $fileName);
            file_put_contents($filePath, $jsonData);

            $message = "CSV data imported successfully";
            return ['message' => $message];
        } else {
            $errorMessage = "No file uploaded";
            return ['message' => $errorMessage];
        }
    }
}
