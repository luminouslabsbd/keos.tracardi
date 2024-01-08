<?php
namespace App\Repositories\Admin;

use App\Models\Admin\Category;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;


class CategoryRepository {
    protected $model;

    public function __construct(Category $model)
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
                 return ['status'=>true , 'message'=>'Category Delete successfully'];
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
        $category = Category::where('id',$request->id)->first();
        try
        {
            $path = "";
            if($action == 'save'){
                if($request->thumbnail){
                    $path =  fileUpload($request->thumbnail[0] , "category");
                }
            }
            if($action == 'update'){
                if(!empty($request->thumbnail)){
                    $path =  fileUpload($request->thumbnail[0] , "category");
                }else if(isset($category->thumbnail)){
                    $path = $category->thumbnail;
                }
            }

            $originalSlug = $request->slug ? Str::slug($request->slug) : Str::slug($request->name);
            $existingSlugs = $this->model::where('slug', 'like', $originalSlug . '%')
                ->where('id', '!=', $request->id)
                ->pluck('slug')
                ->toArray();

            $counter = 1;
            $slug = $originalSlug;

            while (in_array($slug, $existingSlugs)) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }


            $data = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [
                    'name' => $request->name,
                    'slug' => $slug,
                    'parent_id' => $request->parent_id,
                    'thumbnail' => $path,
                ]
            );
            if ($data) {
                $message = $action == "save" ?"Category Save Successfully" :"Category Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

        } catch (\Exception $e) {
            return ['status' => false, 'errors' =>  $e->getMessage()];
        }
    }
}