<?php

namespace App\Repositories\Admin;

use Illuminate\Support\Facades\DB;
use App\Models\Admin\Domain;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CsvImport;

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
        $data = $this->model::updateOrCreate(
            ['id' => $id],
            [
                'domain' => $request->domain,
                'user_name' => $request->user_name,
                'user_pass' => $request->user_pass,
                'backend_api_url' => $request->backend_api_url,
            ]
        );

        if ($data->wasRecentlyCreated) {
            $message = "Domain Created Successfully";
        } else {
            $message = "Domain Updated Successfully";
        }
        return ['message' => $message,];
    }

    public function statusUpdate($request)
    {
        DB::table('domain')->where('id', $request->id)->update([
            'status' => $request->status
        ]);

        $message = "Domain status updated successfully";
        return ['message' => $message,];
    }

    public function csvUpload($request, $domain_id){
        if ($request->hasFile('file') && isset($request->file[0])) {
            Excel::import(new CsvImport($domain_id), $request->file[0]);

            $message = "CSV data imported successfully";
            return ['message' => $message];
        }else{
            $errorMessage = "No file uploaded";
            return ['message' => $errorMessage];
        }
    }
}
