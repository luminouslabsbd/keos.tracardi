<?php
namespace App\Repositories\Admin;


use App\Models\Admin\Color;
use App\Models\Admin\Physical;
use App\Models\Admin\Product;
use App\Models\Admin\VariationPrice;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class ProductRepository {
    protected $model;

    public function __construct(Product $model)
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

//        try
//        {
//            DB::beginTransaction();

        if(!empty($request->thumbnail)){
            $thumbnail =  fileUpload($request->thumbnail[0] , "product");
        }else if(isset($user->thumbnail)){
            $thumbnail = $user->thumbnail;
        }else{
            $thumbnail ="";
        }

            $type = ($request->type == "physical") ? 1 : (($request->type == "digital") ? 2 : 3);

            $product = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [
//
                    'category_id' => $request->category_id,
                    'sub_category_id' => $request->sub_category_id,
                    'brand_id' => $request->brand_id,
                    'type' => $type,
                    'product_variation'=> $request->product_variation,
                    'product_sku'=> $request->product_sku,
                    'product_name' => $request->product_name,

                    'single_product_price' => $request->single_product_price ?? 0,
                    'single_product_discount' => $request->single_product_discount ?? 0,
                    'single_product_quantity' => $request->single_product_quantity ?? 0,

                    'product_description' => $request->product_description,
                    'product_buy_return_policy' => $request->product_buy_return_policy,

                    'meta_keywords' => $request->meta_keywords,
                    'meta_description' => $request->meta_description,

                    'thumbnail' => $thumbnail,

                ]
            );

//            dd($product);
            if ($product) {

                $physical = Physical::updateOrCreate(
                    [
                        'product_id'=>$request->product_id,
                    ],
                    [
                        'product_id'=> $product->id,
                        'unit_id'=> $request->unit_id,
                        'allow_product_conditions'=> $request->allow_product_conditions === true ? 1 : 0,
                        'allow_product_preorder'=> $request->allow_product_preorder === true ? 1 : 0,
                        'allow_minimum_order_qty'=> $request->allow_product_conditions === true ? 1 : 0,
//                        'allow_estimated_shipping_time'=> '',
                        'allow_whole_sale'=> $request->allow_whole_sale ? 1 : 0,
                    ]);

//                dd($product,$physical);

                if($product->product_variation == 2){
                    $product->productcolor()->sync($request->color_id);
                    $product->productsize()->sync($request->size_id);

                    $attributes = $this->getDynamicData($request, 'product_attribute');
                    $discounts = $this->getDynamicData($request, 'product_discount');
                    $prices = $this->getDynamicData($request, 'product_price');
                    $quantities = $this->getDynamicData($request, 'product_quantity');

//                    dd($attributes,$discounts,$prices,$quantities);

                    // Assuming $request->product_id is available
                    $productId = $product->id;

                    foreach ($attributes as $key => $attribute) {
//
                        $index = substr($key, -1);
//                        dd($index);

                        $discount = $discounts["product_discount_$index"];
//                        dd($discount);
                        $price = $prices["product_price_$index"];
                        $quantity = $quantities["product_quantity_$index"];
                        list($sizeId, $colorId) = explode('/', $attribute);

//                        dd($discount,$price,$quantity);
                        // Use updateOrCreate to insert or update the record
                        VariationPrice::updateOrCreate(
                            [
                                'product_id' => $productId,
                                'size_id' => $sizeId,
                                'color_id' => $colorId,
                            ],
                            [
                                'product_id' => $productId,
                                'size_id' => $sizeId,
                                'color_id' => $colorId,
                                'price' => $price,
                                'qty' => $quantity,
                                'discount' => $discount,
                            ]
                        );
                    }

                }
//                dd('ok');

//                if ($physical->allow_whole_sale == 1) {
//
//                }
//                DB::commit();
                $message = $action == "save" ?"Product Save Successfully" :"Product Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

//        } catch (\Exception $e) {
//            DB::rollback();
//            return ['status' => false, 'errors' =>  $e->getMessage()];
//        }
    }



    private function getDynamicData($request, $prefix)
    {
        $data = [];

        // Loop through request data and find items with the specified prefix
        foreach ($request->all() as $key => $value) {
            if (strpos($key, $prefix) === 0) {
                $data[$key] = $value;
            }
        }

        return $data;
    }
}