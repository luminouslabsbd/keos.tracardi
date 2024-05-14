<?php

namespace App\Repositories\Admin;

use Illuminate\Support\Facades\DB;
use App\Models\Admin\Domain;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\CsvImport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DomainRepository
{
    protected $model;
    public function __construct(Domain $model)
    {
        $this->model = $model;
    }


    public function store($request, $id = null)
    {
        $messages = [
            'domain.unique' => 'The domain has already been taken.',
        ];

        $rules = ['domain' => 'unique:domains,domain'];

        if ($id !== null) {
            $rules['domain'] .= ',' . $id;
        }

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()->first(),
            ], 422);
        }

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

        $message = $data->wasRecentlyCreated ? "Domain Created Successfully" : "Domain Updated Successfully";

        return response()->json(['message' => $message]);
    }

    public function update($request)
    {
        $message = $this->store($request, $request->id);
        return $message;
    }

    public function domainDelete($id)
    {
        $domain = Domain::findOrFail($id);

        $domain->delete();

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, '');
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

        if($request->status == 1){
            $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
            $jsonData = json_encode($urls);
            file_put_contents($filePath, $jsonData);
        }else{
            file_put_contents($filePath, '');
        }

        $message = "Domain status updated successfully";
        return ['message' => $message,];
    }

    public function domainUrl($id)
    {
        $domain_url = DB::table('domain_urls')->where('domain_id',$id)->get();
        return $domain_url;
    }

    public function csvUpload($request, $domain_id){
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
        }else{
            $errorMessage = "No file uploaded";
            return ['message' => $errorMessage];
        }
    }
}
