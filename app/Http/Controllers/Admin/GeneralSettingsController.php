<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\GeneralSettings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GeneralSettingsController extends Controller
{
    public function GeneralSettings()
    {
        $result = GeneralSettings::get();
        return Inertia::render('Module/GeneralSettings/Index',[
            'result' => $result
        ]);
    }
}
