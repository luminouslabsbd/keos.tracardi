<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class BlogPostController extends Controller
{
    public function create()
    {
        return Inertia::render('Module/BlogPost/Add');
    }
}
