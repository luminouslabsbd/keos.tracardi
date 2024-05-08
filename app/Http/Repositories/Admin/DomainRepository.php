<?php

namespace App\Http\Repositories\Admin;
use Illuminate\Support\Facades\DB;
use App\Models\Admin\Domains;

class DomainRepository {
    protected $model;
    public function __construct(Domains $model)
    {
        $this->model=$model;
    }


    public function store($request, $id = null){
        $data = $this->model::updateOrCreate(
            ['id' => $id],
            ['domain' => $request->domain,'user_name' => $request->user_name,'user_pss' => $request->user_pss,]
        );

        // $id = $request->attribute_id;

        if ($data->wasRecentlyCreated) {
            $message = "Domain Created Successfully";
        } else {
            $message = "Domain Updated Successfully";
        }
        // return ['id' => $id, 'message' => $message,];
        return ['message' => $message,];
    }

    public function statusUpdate($request){
        DB::table('domains')->where('id',$request->id)->update([
            'status'=>$request->status
        ]);

        $message = "Domain status updated successfully";
        return ['message' => $message,];
    }
}