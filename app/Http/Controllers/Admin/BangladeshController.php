<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BangladeshRequest;
use App\Models\Front\Bangladesh;
use App\Repositories\Admin\BangladeshRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BangladeshController extends Controller
{
    protected $bangladesh;
    public function __construct(BangladeshRepository $bangladesh)
    {
        $this->bangladesh = $bangladesh;
    }


    public function index(){
        // $data = $this->bangladesh->getAll();
        return Inertia::render('Module/Bangladesh/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);

        $query = Bangladesh::query();
        // Apply filters
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];

                // Modify this part to handle case-insensitive partial matches
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        // Apply global search
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('post_office', 'LIKE', '%' . $globalFilter . '%');
            });
        }

        // Apply sorting
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query->skip($start)->select('division','post_office','post_code')->take($size)->get();

        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);


    }
    public function create(){
        return Inertia::render('Module/Bangladesh/Add');
    }
    public function store(BangladeshRequest $request){
        $result = $this->bangladesh->store($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $result = $this->bangladesh->edit($id);
        return Inertia::render('Module/Bangladesh/Edit',['result'=>$result]);
    }
    public function update(Request $request){
        $result=$this->bangladesh->update($request);
        if($result['status']== true){
            return back()->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){
        $result= $this->bangladesh->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->bangladesh->status($id);
        return back()->with('success', $result['message']);
    }
}
