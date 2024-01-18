<?php
namespace App\Repositories\Admin;



use App\Models\Admin\Language;
use Illuminate\Support\Facades\File;


class LanguageRepository {
    protected $model;

    public function __construct(Language $model)
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
            $result=$this->edit($id);
            removeFile(base_path().'/lang/' . $result->code . '.json');
            $result->delete();
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

    public function translate($id)
    {
        try {
            $result=$this->edit($id);
            $json = file_get_contents(base_path().'/lang/' . $result->code . '.json');
            $data = json_decode($json);
            if($result){
                return ['status'=>true , 'data'=>$data, 'message'=>'Color Delete successfully'];
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
            $path = "";
            if($action == 'save'){

                $rootpath = base_path().'/lang/'.'en.json';
                $data = file_get_contents($rootpath) ;
                $json_file = strtolower($request->code) . '.json';
                $path = base_path().'/lang/'. $json_file;


                File::put($path, $data);

                if($request->icon){
                    $path =  fileUpload($request->icon[0] , "language");
                }
            }
            if($action == 'update'){
                if(!empty($request->icon)){
                    $path =  fileUpload($request->icon[0] , "language");
                }else if(isset($category->icon)){
                    $path = $category->icon;
                }
            }


            $data = $this->model::updateOrCreate(
                ['id' => isset($request->id) ? $request->id : ''],
                [
                    'name' => $request->name,
                    'code' => $request->code,
                    'thumbnail' => $path,
                ]
            );
            if ($data) {
                $message = $action == "save" ?"Language Save Successfully" :"Language Update Successfully";
                return ['status' => true, 'message' => $message,];
            }

        } catch (\Exception $e) {
            return ['status' => false, 'errors' =>  $e->getMessage()];
        }
    }
}