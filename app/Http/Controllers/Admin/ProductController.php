<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Admin\Brand;
use App\Models\Admin\Category;
use App\Models\Admin\Color;
use App\Models\Admin\Product;
use App\Models\Admin\Size;
use App\Models\Admin\Unit;
use App\Repositories\Admin\ProductRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $product;
    public function __construct(ProductRepository $product)
    {
        $this->product = $product;
    }

    public function index(){
        return Inertia::render('Module/Product/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Product::query();
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
    public function create($type){
        if($type == "physical" || $type == "digital" || $type == "license"){
            if($type == "physical"){
                $categories = Category::where('parent_id', null)->select('id','name')->get();
                $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
                $brands = Brand::select('id','name')->get();
                $colors = Color::select('id','name')->get();
                $sizes = Size::select('id','name')->get();
                $units = Unit::select('id','name')->get();
                return Inertia::render('Module/Product/Physical',[
                    'categories'=>$categories,
                    'sub_categories'=>$sub_categories,
                    'brands'=>$brands,
                    'colors'=>$colors,
                    'sizes'=>$sizes,
                    'units'=>$units,
                    'type'=>$type,
                ]);
            }elseif($type == "digital"){
                $categories = Category::where('parent_id', null)->select('id','name')->get();
                $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
                $brands = Brand::select('id','name')->get();
                $colors = Color::select('id','name')->get();
                $sizes = Size::select('id','name')->get();
                $units = Unit::select('id','name')->get();
                return Inertia::render('Module/Product/Digital',[
                    'categories'=>$categories,
                    'sub_categories'=>$sub_categories,
                    'brands'=>$brands,
                    'colors'=>$colors,
                    'sizes'=>$sizes,
                    'units'=>$units,
                    'type'=>$type,
                ]);
            }else{
                $categories = Category::where('parent_id', null)->select('id','name')->get();
                $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
                $brands = Brand::select('id','name')->get();
                $units = Unit::select('id','name')->get();
                return Inertia::render('Module/Product/License',[
                    'categories'=>$categories,
                    'sub_categories'=>$sub_categories,
                    'brands'=>$brands,
                    'units'=>$units,
                    'type'=>$type,
                ]);
            }
        }else{
            return back()->with("error","Invalid type");
        }

//        return Inertia::render('Module/Product/Add');
    }
    public function store(ProductRequest $request){
        $result = $this->product->store($request);
        if($result['status']== true){
            return to_route('admin.product')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }

    public function digitalStore(ProductRequest $request){
        $result = $this->product->digitalStore($request);
        if($result['status']== true){
            return to_route('admin.product')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function licenseStore(ProductRequest $request){
        $result = $this->product->licenseStore($request);
        if($result['status']== true){
            return to_route('admin.product')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->product->edit($id);
        if($result->type == PHYSICAL){
            $categories = Category::where('parent_id', null)->select('id','name')->get();
            $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
            $brands = Brand::select('id','name')->get();
            $colors = Color::select('id','name')->get();
            $sizes = Size::select('id','name')->get();
            $units = Unit::select('id','name')->get();

            $product = Product::with('category','brand','productcolor','productsize','physical','physical.unit','variationprice','wholesale')->where('id', $id)->first();
            return Inertia::render('Module/Product/PhysicalEdit',[
                'product'=>$product,
                'categories'=>$categories,
                'sub_categories'=>$sub_categories,
                'brands'=>$brands,
                'colors'=>$colors,
                'sizes'=>$sizes,
                'units'=>$units,
            ]);
        }elseif($result->type == DIGITAL){
            $categories = Category::where('parent_id', null)->select('id','name')->get();
            $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
            $brands = Brand::select('id','name')->get();
            $units = Unit::select('id','name')->get();
            $product = Product::with('digital','category','brand')->where('id', $id)->first();
            return Inertia::render('Module/Product/DigitalEdit',[
                'product'=>$product,
                'categories'=>$categories,
                'sub_categories'=>$sub_categories,
                'brands'=>$brands,
                'units'=>$units,
            ]);
        }else{
            $categories = Category::where('parent_id', null)->select('id','name')->get();
            $sub_categories = Category::where('parent_id', !null)->select('id','name')->get();
            $brands = Brand::select('id','name')->get();
            $units = Unit::select('id','name')->get();
            $product = Product::with('license','category','brand')->where('id', $id)->first();
            return Inertia::render('Module/Product/LicenseEdit',[
                'product'=>$product,
                'categories'=>$categories,
                'sub_categories'=>$sub_categories,
                'brands'=>$brands,
                'units'=>$units,
            ]);
        }

    }
    public function update(Request $request){
        $result=$this->product->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->product->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->product->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/Product/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Product::query();
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
        $record = Product::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.product')->with('success', 'Delete the product');
    }
    public function permanentDeleteAll(){
        Product::onlyTrashed()->forceDelete();
        return to_route('admin.product')->with('success', 'Delete all product');
    }
    public function undoTrashed($id){
        $record = Product::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.product')->with('success', 'Restored the product');
    }
    public function restoreAll(){
        Product::onlyTrashed()->restore();
        return to_route('admin.product')->with('success', 'Restored all product');
    }

    public function type(){
        return Inertia::render('Module/Product/Type');
    }

    public function productSettings() {
        return Inertia::render('Module/Product/Settings');
    }
}
