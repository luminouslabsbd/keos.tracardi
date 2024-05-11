<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Admin\Domain;
use Illuminate\Http\Request;
use App\Models\Admin\DomainUrl;
use App\Http\Requests\Admin\DomainUrlRequest;
use Illuminate\Support\Facades\DB;

class DomainUrlController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $result = DomainUrl::get();

        return Inertia::render('Module/DomainUrl/Index', ['result' => $result]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        return Inertia::render('Module/DomainUrl/Create', ['domain_id' => $id]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $domain = Domain::findOrFail($request->domain_id);
        $domain_id = $request['domain_id'];
        DB::table('domain_urls')->insert([
            'domain_id'  => $domain_id,
            'url'        => $request->url,
            'action'     => $request->action,
            'role'       => $request->role,
            'event_name' => $request->event_name,
            'event_type' => $request->event_type
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, $jsonData);
        return to_route('admin.domain.details', ['id' => $domain_id])->with('success', 'Url successfully added.');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id, $domain_id)
    {
        $domain_url_data = DomainUrl::where('id',$id)->first();
        return Inertia::render('Module/DomainUrl/Edit', [
            'domain_url_data' => $domain_url_data,
            'domain_id' => $domain_id
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $domain = Domain::findOrFail($request->domain_id);
        DB::table('domain_urls')->where('id',$request->id)->update([
            'url' => $request->url,
            'action' => $request->action,
            'role' => $request->role,
            'event_name' => $request->event_name,
            'event_type' => $request->event_type
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, $jsonData);
        return to_route('admin.domain.details', ['id' => $request->domain_id])->with('success', 'Url successfully updated.');
    }

    public function status(Request $request)
    {
        $domain = Domain::findOrFail($request->domain_id);

        DB::table('domain_urls')->where('id',$request->id)->update([
            'status' => $request->status
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, $jsonData);

        return back()->with('success', 'Domain url status update');
    }

    /**
     * Remove the specified resource from storage.
     */


    public function destroy($id, $domain_id)
    {
        $domain = Domain::findOrFail($domain_id);
        DB::table('domain_urls')->where('id',$id)->delete();


        //Create Fresh new json
        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, $jsonData);

        return back()->with('success', 'Url successfully deleted.');
    }
}
