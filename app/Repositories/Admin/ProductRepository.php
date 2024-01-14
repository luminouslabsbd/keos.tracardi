<?php
namespace App\Repositories\Admin;


use App\Models\Admin\Color;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class ProductRepository {
    protected $model;

    public function __construct(Color $model)
    {
        $this->model=$model;
    }
    public function getAll(){
         return  $this->model::paginate(10);
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
                 return ['status'=>true , 'message'=>'Color Delete successfully'];
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
            DB::beginTransaction();

            $type = ($request->type == "physical") ? 1 : (($request->type == "digital") ? 2 : 3);

            $product = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [

                    'category_id' => $request->category_id,
                    'sub_category_id' => $request->sub_category_id,
                    'brand_id' => $request->brand_id,
                    'type' => $type,
                    'product_variation'=> $request->product_variation,
                    'product_sku'=> $request->product_sku,
                    'product_name' => $request->product_name,

                    'single_product_price' => $request->single_product_price ?? null,
                    'single_product_discount' => $request->single_product_discount ?? null,
                    'single_product_quantity' => $request->single_product_quantity ?? null,

                    'product_description' => $request->product_description,
                    'product_buy_return_policy' => $request->product_buy_return_policy,

                    'meta_keywords' => $request->meta_keywords,
                    'meta_description' => $request->meta_description,

                    'thumbnail' => $request->thumbnail,

                ]
            );
            if ($product) {
                $personal_data = EmployeePersonal::updateOrCreate(
                    [
                        'user_id'=>$request->user_id,
                    ],
                    [
                        'company_id'=>'',
                    ]);
                DB::commit();
                $message = $action == "save" ?"Product Save Successfully" :"Product Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

        } catch (\Exception $e) {
            DB::rollback();
            return ['status' => false, 'errors' =>  $e->getMessage()];
        }
    }
}