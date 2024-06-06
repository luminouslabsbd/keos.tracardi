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
        // dd(!$request->id);
        if (!$request->id) {
            $message = "Event source Created Successfully";
            $o = $this->createJsFile($request->name, $request->script_code);
        } else {
            // dd($request->name, $request->script_code);
            $message = "Event source Updated Successfully";
            $this->updateJsFile($request->oldName, $request->name, $request->script_code);
        }
        return response()->json(['message' => $message]);
    }

    private function createJsFile($source, $code)
    {
        $fileName = str_replace(' ', '_', strtolower($source)) . '.source.js';
        $this->deleteJsFile($fileName);
        File::put(public_path("assets/js/$fileName"), $code);
    }

    private function updateJsFile($oldName, $source, $code)
    {
        // Check if the old JavaScript file exists Delete the old JavaScript file
        $this->deleteJsFile($oldName);
        // Create a new JavaScript file with the updated data
        $this->createJsFile($source, $code);
    }

    private function deleteJsFile($source)
    {
        $file = str_replace(' ', '_', strtolower($source)) . '.source.js';
        // dd(File::exists(public_path("assets/js/$file")));
        // Generate file names for the domain
        if (File::exists(public_path("assets/js/$file"))) {
            File::delete(public_path("assets/js/$file"));
        }
    }

    public function delete($source)
    {
        // Check if the file already exists Delete the old JavaScript file
        $this->deleteJsFile($source->name);
        $source->delete();
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
}
