<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SizeRequest;
use App\Models\Admin\Size;
use App\Repositories\Admin\SizeRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SizeController extends Controller
{
    protected $size;
    public function __construct(SizeRepository $size)
    {
        $this->size = $size;
    }

    public function index(){
        return Inertia::render('Module/Size/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Size::query();
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
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function create(){

        return Inertia::render('Module/Size/Add');
    }
    public function store(SizeRequest $request){
        $result = $this->size->store($request);
        if($result['status']== true){
//            dd($result['message']);
            return to_route('admin.size')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->size->edit($id);
        return Inertia::render('Module/Size/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->size->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->size->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->size->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Size/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Size::query();
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
        $record = Size::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.size')->with('success', 'Delete the size');
    }
    public function permanentDeleteAll(){
        Size::onlyTrashed()->forceDelete();
        return to_route('admin.size')->with('success', 'Delete all size');
    }
    public function undoTrashed($id){
        $record = Size::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.size')->with('success', 'Restored the size');
    }
    public function restoreAll(){
        Size::onlyTrashed()->restore();
        return to_route('admin.size')->with('success', 'Restored all size');
    }
}
