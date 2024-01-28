<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class TaxController extends Controller
{
    public function create(){
        // $categories = Category::where('parent_id',null)->select('id', 'name')->get();
        return Inertia::render('Module/Tax/Add');
    }

    public function edit(){
        // $categories = Category::where('parent_id',null)->select('id', 'name')->get();
        return Inertia::render('Module/Tax/Edit');
    }
}
