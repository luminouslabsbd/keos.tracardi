<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UnitRequest;
use App\Models\Admin\BlogCategory;
use App\Models\Admin\BlogPost;
use App\Repositories\Admin\BlogPostRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;


class BlogPostController extends Controller
{
    protected $blog_post;
    public function __construct(BlogPostRepository $blog_post)
    {
        $this->blog_post = $blog_post;
    }

    public function index(){
        return Inertia::render('Module/BlogPost/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = BlogPost::query();
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
    $blog_categories = BlogCategory::select('id','name')->get();
        return Inertia::render('Module/BlogPost/Add',[
            'blog_categories' => $blog_categories
        ]);
    }
    public function store(UnitRequest $request){
        $result = $this->blog_post->store($request);
        if($result['status']== true){
            return to_route('admin.blog-post')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->blog_post->edit($id);
        return Inertia::render('Module/BlogPost/Edit',[
            'result'=>$result
        ]);
    }
    public function update(Request $request){
        $result=$this->blog_post->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->blog_post->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->blog_post->status($id);
        return back()->with('success', $result['message']);
    }

    public function trashed(){
        return Inertia::render('Module/BlogPost/Trashed');
    }
    public function trashedData(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = BlogPost::query();
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
        $record = BlogPost::onlyTrashed()->where('id',$id)->first();
        $record->forceDelete();
        return to_route('admin.blog-category')->with('success', 'Delete the unit');
    }
    public function permanentDeleteAll(){
        BlogPost::onlyTrashed()->forceDelete();
        return to_route('admin.blog-category')->with('success', 'Delete all unit');
    }
    public function undoTrashed($id){
        $record = BlogPost::onlyTrashed()->where('id',$id)->first();
        $record->restore();
        return to_route('admin.blog-category')->with('success', 'Restored the unit');
    }
    public function restoreAll(){
        BlogPost::onlyTrashed()->restore();
        return to_route('admin.blog-category')->with('success', 'Restored all unit');
    }
}
