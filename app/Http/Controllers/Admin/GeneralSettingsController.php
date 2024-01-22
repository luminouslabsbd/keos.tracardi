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
    public function updateSettings(Request $request)
    {
        try {
            if (isset($request->app_title)) {
                GeneralSettings::where('slug', 'app_title')->update(['value' => $request->app_title]);
            }
            if (isset($request->call_us)) {
                GeneralSettings::where('slug', 'call_us')->update(['value' => $request->call_us]);
            }
            if (isset($request->email)) {
                GeneralSettings::where('slug', 'email')->update(['value' => $request->email]);
            }
            if (isset($request->address)) {
                GeneralSettings::where('slug', 'address')->update(['value' => $request->address]);
            }
            if (isset($request->state)) {
                GeneralSettings::where('slug', 'state')->update(['value' => $request->state]);
            }
            if (isset($request->country)) {
                GeneralSettings::where('slug', 'country')->update(['value' => $request->country]);
            }
            if (isset($request->news_letter)) {
                GeneralSettings::where('slug', 'news_latter')->update(['value' => $request->news_latter]);
            }
            if (isset($request->news_letter)) {
                GeneralSettings::where('slug', 'copy_right_text')->update(['value' => $request->copy_right_text]);
            }

            if (isset($request->meta_keywords)) {
                GeneralSettings::where('slug', 'meta_keywords')->update(['value' => $request->meta_keywords]);
            }
            if (isset($request->meta_author)) {
                GeneralSettings::where('slug', 'meta_author')->update(['value' => $request->meta_author]);
            }
            if (isset($request->meta_description)) {
                GeneralSettings::where('slug', 'meta_description')->update(['value' => $request->meta_description]);
            }
            if (isset($request->home_page_selector)) {
                GeneralSettings::where('slug', 'home_page_selector')->update(['value' => $request->home_page_selector]);
            }
            return back()->with('success', 'Update Successfully');
        }catch(\Exception $e) {
            return back()->with('success', 'Something went wrong');
        }
    }
}
