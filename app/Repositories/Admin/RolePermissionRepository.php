<?php

namespace App\Repositories\Admin;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

class RolePermissionRepository
{
    protected $model;

    public function __construct(Role $model)
    {
        $this->model=$model;
    }

    public function store($request){
        return $this->storeOrUpdate($request , $action="save");
    }
    public function edit(int $id){
        return $this->model::find($id);
    }

    public function update($request){
        return $this->storeOrUpdate($request , $action="update");
    }
    public function delete($id){
        try {
            $result=$this->edit($id)->delete();
            if($result){
                return ['status'=>true , 'message'=>'Role Delete successfully with All Included Permission'];
            }
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false, 'errors' =>  $th->getMessage()];
        }

    }
    public function status($id){
        try {
            $result = $this->model::find($id);
            if ($result->status == 1) {
                $result->update(['status' => 0]);
                return ['status' => true, 'message' => 'Status updated successfully'];
            } elseif ($result->status == 0) {
                $result->update(['status' => 1]);
                return ['status' => true, 'message' => 'Status updated successfully'];
            } else {
                return ['status' => false, 'message' => 'Invalid status value'];
            }
        } catch (\Throwable $th) {
            //throw $th;
            return ['status' => false, 'errors' =>  $th->getMessage()];
        }
    }
    protected function storeOrUpdate($request, $action)
    {
        try {
            $companyId = \App\Models\User::where('id', auth()->user()->id)->value('company_id');
            $data = $this->model::updateOrCreate(
                ['id' =>isset( $request->id)?  $request->id : ''],
                [
                    'name' => $request->name,
                    'branch_code' => $request->branch_code,
                    'branch_name' => $request->branch_name,
                    'created_by'=>Auth::user()->id,
                    'company_id'=>$companyId
                ]
            );
            if ($data) {
                $message = $action == "save" ?"Warehouse Save Successfully" :"Warehouse Update Successfully";
                return ['status' => true, 'message' => $message,];
            }


        } catch (\Exception $e) {
            return ['status' => false, 'errors' =>  $e->getMessage()];
        }
    }

    //trashed
    public function trashed(){

    }
    public function undoTrashed(){

    }
    public function undoTrashedAll(){

    }
    public function permanentDelete(){

    }
    public function permanentDeleteAll(){

    }
}
