<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LanguageRequest;
use App\Models\Admin\Language;
use App\Repositories\Admin\LanguageRepository;
use Illuminate\Http\Request;
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
        dd(array($result['data']));



        return Inertia::render('Module/Language/Translate',[
            'data' => $result['data']
        ]);
//        return to_route('admin.language.',[
//            'data' => $result['data']
//        ])->with('success', $result['message']);
    }
}
