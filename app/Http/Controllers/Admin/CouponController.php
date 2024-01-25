<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CouponController extends Controller
{
    public function create()
    {
        return Inertia::render('Module/Coupon/Add');
    }

    public function edit()
    {
        return Inertia::render('Module/Coupon/Edit');
    }
}
