<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ColorRequest;
use App\Models\Admin\Color;
use App\Repositories\Admin\ColorRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ColorController extends Controller
{
    protected $color;
    public function __construct(ColorRepository $color)
    {
        $this->color = $color;
    }

    public function index(){
        return Inertia::render('Module/Color/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Color::query();
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

        return Inertia::render('Module/Color/Add');
    }
    public function store(ColorRequest $request){
        $result = $this->color->store($request);
        if($result['status']== true){
            return to_route('admin.color')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->color->edit($id);
        return Inertia::render('Module/Color/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->color->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->color->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->color->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Color/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Color::query();
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
        $record = Color::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.color')->with('success', 'Delete the color');
    }
    public function permanentDeleteAll(){
        Color::onlyTrashed()->forceDelete();
        return to_route('admin.color')->with('success', 'Delete all color');
    }
    public function undoTrashed($id){
        $record = Color::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.color')->with('success', 'Restored the color');
    }
    public function restoreAll(){
        Color::onlyTrashed()->restore();
        return to_route('admin.color')->with('success', 'Restored all color');
    }
}
