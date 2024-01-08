<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Models\Admin\Brand;
use App\Repositories\Admin\BrandRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends Controller
{
    protected $brand;
    public function __construct(BrandRepository $brand)
    {
        $this->brand = $brand;
    }

    public function index(){
        return Inertia::render('Module/Brand/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Brand::query();
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

        return Inertia::render('Module/Brand/Add');
    }
    public function store(BrandRequest $request){
        $result = $this->brand->store($request);
        if($result['status']== true){
//            dd($result['message']);
            return to_route('admin.brand')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->brand->edit($id);
        return Inertia::render('Module/Brand/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->brand->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->brand->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->brand->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Brand/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Brand::query();
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
        $record = Brand::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.brand')->with('success', 'Delete the brand');
    }
    public function permanentDeleteAll(){
        Brand::onlyTrashed()->forceDelete();
        return to_route('admin.brand')->with('success', 'Delete all brand');
    }
    public function undoTrashed($id){
        $record = Brand::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.brand')->with('success', 'Restored the brand');
    }
    public function restoreAll(){
        Brand::onlyTrashed()->restore();
        return to_route('admin.brand')->with('success', 'Restored all brand');
    }
}
