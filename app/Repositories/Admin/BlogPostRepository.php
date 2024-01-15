<?php
namespace App\Repositories\Admin;

use App\Models\Admin\BlogPost;


class BlogPostRepository {
    protected $model;

    public function __construct(BlogPost $model)
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
                 return ['status'=>true , 'message'=>'Size Delete successfully'];
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

            $path = "";
            if($action == 'save'){
                if($request->thumbnail){
                    $path =  fileUpload($request->thumbnail[0] , "blog_post");
                }
            }
            if($action == 'update'){
                if(!empty($request->thumbnail)){
                    $path =  fileUpload($request->thumbnail[0] , "blog_post");
                }else if(isset($category->thumbnail)){
                    $path = $category->thumbnail;
                }
            }

            $data = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [
                    'blog_category_id' => $request->blog_category_id,
                    'name' => $request->name,
                    'tags' => $request->tag,
                    'thumbnail' => $path,
                    'blog_details' => $request->blog_details,
                    'allow_seo' => $request->allow_seo == true ? 1 : 0,
                    'meta_keywords' => $request->allow_seo == true ?? $request->meta_keywords,
                    'meta_description' => $request->allow_seo == true ?? $request->meta_description,
                ]
            );
            if ($data) {
                $message = $action == "save" ?"Blog Category Save Successfully" :"Blog Category Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

//        } catch (\Exception $e) {
//            return ['status' => false, 'errors' =>  $e->getMessage()];
//        }
    }
}