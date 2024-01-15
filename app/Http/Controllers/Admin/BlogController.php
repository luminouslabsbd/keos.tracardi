<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
class BlogController extends Controller
{
    public function create()
    {
        return Inertia::render('Module/Blog/Add');
    }
}
