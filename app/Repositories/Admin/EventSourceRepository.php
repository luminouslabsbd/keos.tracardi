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
        // dd(Auth::guard('admin')->id());
        $data = $this->model::updateOrCreate(
            ['id' => $request->id],
            [
                'user_id' => Auth::user()->id,
                'name' => $request->name,
                'script_code' => $request->script_code,
            ]
        );
        if (!$request->id && $data->wasRecentlyCreated) {
            $message = "Event source Created Successfully";
            $this->createJsFile($request->name, $request->script_code);
        } else {
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
        $this->model->where('id', $request->id)->update([
            'status' => $request->status
        ]);

        $message = "Domain status updated successfully";
        return ['message' => $message,];
    }
}
