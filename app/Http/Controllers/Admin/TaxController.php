<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\TaxRequest;
use App\Models\Admin\Tax;
use App\Repositories\Admin\TaxRepository;



class TaxController extends Controller
{
    protected $tax;
    public function __construct(TaxRepository $tax)
    {
        $this->tax = $tax;
    }

    public function index(){
        return Inertia::render('Module/Tax/Index');
    }

    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Tax::query();

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
        return Inertia::render('Module/Tax/Add');
    }

    public function store(TaxRequest $request){
        $result = $this->tax->store($request);

        if($result['status']== true){
            return to_route('admin.tax')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }

    public function status($id){
        $result = $this->tax->status($id);
        return back()->with('success', $result['message']);
    }
}
