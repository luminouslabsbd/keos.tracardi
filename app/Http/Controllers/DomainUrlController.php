<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Models\Admin\Domain;
use Illuminate\Http\Request;
use App\Models\Admin\DomainUrl;
use App\Http\Requests\Admin\DomainUrlRequest;

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
    public function create()
    {
        $domains = Domain::select(['id', 'domain'])->get();
        return Inertia::render('Module/DomainUrl/Create', ['domains' => $domains]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DomainUrlRequest $request)
    {
        $domain = Domain::findOrFail($request->domain_id);
        $url = $domain->urls()->create([
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
        return to_route('admin.domainUrl.index')->with('success', 'Url successfully added.');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DomainUrl $domainUrl)
    {
        $domains = Domain::select(['id', 'domain'])->get();
        return Inertia::render('Module/DomainUrl/Edit', [
            'domainUrl' => $domainUrl,
            'domains' => $domains
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DomainUrl $domainUrl)
    {
        $domain = Domain::findOrFail($domainUrl->domain_id);
        $url = $domainUrl->update([
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
        return to_route('admin.domainUrl.index')->with('success', 'Url successfully updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DomainUrl $domainUrl)
    {
        $domain = Domain::findOrFail($domainUrl->domain_id);
        $domainUrl->delete();

        //Create Fresh new json
        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('json/' . $fileName);
        file_put_contents($filePath, $jsonData);

        return to_route('admin.domainUrl.index')->with('success', 'Url successfully deleted.');
    }
}
