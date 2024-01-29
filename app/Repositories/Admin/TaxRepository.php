<?php
namespace App\Repositories\Admin;

use App\Models\Admin\Tax;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Illuminate\Http\Request;



class TaxRepository {
    protected $model;

    public function __construct(Tax $model)
    {
        $this->model = $model;
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
                 return ['status'=>true , 'message'=>'Tax Delete successfully'];
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
        try
        {
            $data = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [
                    'tax_name' => $request->tax_name,
                    'tax_type' => $request->tax_type,
                    'tax_amount' => $request->tax_amount ?? null,
                    'status' => $request->status ?? 1,
                ]
            );

            if ($data) {
                $message = $action == "save" ?"Tax Save Successfully" :"Tax Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

        } catch (\Exception $e) {
            return ['status' => false, 'errors' =>  $e->getMessage()];
        }
    }
}