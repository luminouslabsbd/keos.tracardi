<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LanguageRequest;
use App\Models\Admin\Language;
use App\Repositories\Admin\LanguageRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;

class LanguageController extends Controller
{
    protected $language;
    public function __construct(LanguageRepository $language)
    {
        $this->language = $language;
    }

    public function index(){
        return Inertia::render('Module/Language/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Language::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->orderBy('is_default',"DESC")
            ->skip($start)
            ->take($size)
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function create(){
        return Inertia::render('Module/Language/Add');
    }
    public function store(LanguageRequest $request){
        $result = $this->language->store($request);
        if($result['status']== true){
            return to_route('admin.language')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->language->edit($id);
        return Inertia::render('Module/Language/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->language->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->language->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->language->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Language/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Language::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->skip($start)
            ->take($size)
            ->onlyTrashed()
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function permanentDelete($id){
        $record = Language::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.language')->with('success', 'Delete the language');
    }
    public function permanentDeleteAll(){
        Language::onlyTrashed()->forceDelete();
        return to_route('admin.language')->with('success', 'Delete all language');
    }
    public function undoTrashed($id){
        $record = Language::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.language')->with('success', 'Restored the language');
    }
    public function restoreAll(){
        Language::onlyTrashed()->restore();
        return to_route('admin.language')->with('success', 'Restored all language');
    }

    public function translate($id)
    {

        $result = $this->language->translate($id);
        foreach ($result['data'] as $key => $value) {
            $itemObject = (object) [
                'key' => $key,
                'value' => $value,
            ];

            $resultArray[] = $itemObject;
        }
        return Inertia::render('Module/Language/Translate',[
            'langId'=>$id,
            'resultArray' => $resultArray
        ]);
    }
    public function storeKey($langId , Request $request)
    {
        $lang = Language::where('id', $langId)->first();
        $json = file_get_contents(base_path().'/lang/' . $lang->code . '.json');


        if (array_key_exists($request['key'], json_decode($json, true))) {
            return back()->with('error', '"' . $request['key'] . '" Already exists');
        }else{

            $newArr[$request['key']] = $request['value'];
            $itemsss = json_decode($json, true);
            $result = array_merge($itemsss, $newArr);
            file_put_contents(base_path().'/lang/' . $lang->code . '.json', json_encode($result));
            return back()->with('success', '"' . $request['key'] . '" has been added');
        }
    }
    public function editKey($langId,$key)
    {
        $lang = Language::where('id', $langId)->first();
        if ($lang) {
            $data = file_get_contents(base_path() . '/lang/' . $lang->code . '.json');
            $json_arr = json_decode($data, true);
            if (isset($json_arr[$key])) {
                $response = [
                    'key' => $key,
                    'value' => $json_arr[$key],
                ];
                return response()->json($response);
            } else {
                return response()->json(['error' => 'Key not found'], 404);
            }
        } else {
            return response()->json(['error' => 'Language not found'], 404);
        }
    }
    public function deleteKey($langId , Request $request)
    {
        $lang = Language::where('id',$langId)->first();
        $data = file_get_contents(base_path().'/lang/' . $lang->code . '.json');
        $json_arr = json_decode($data, true);
        unset($json_arr[$request->key]);
        file_put_contents(base_path().'/lang/' . $lang->code . '.json', json_encode($json_arr));
        return back()->with('success',  ' has been removed');
    }

    public function updateKey($langId, Request $request)
    {
        $reqkey = trim($request->key);
        $reqValue = $request->value;
        $lang = Language::find($langId);
        $data = file_get_contents(base_path().'/lang/' . $lang->code . '.json');
        $json_arr = json_decode($data, true);
        $json_arr[$reqkey] = $reqValue;
        file_put_contents(base_path().'/lang/' . $lang->code . '.json', json_encode($json_arr));
        return back()->with('success',  ' Updated successfully');
    }
}

