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

    public function create(){
        return Inertia::render('Module/Tax/Add');
    }

    public function store(TaxRequest $request){
        $result = $this->tax->store($request);

        if($result['status']== true){
            return to_route('admin.category')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
}
