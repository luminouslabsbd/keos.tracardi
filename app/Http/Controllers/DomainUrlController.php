<?php

namespace App\Http\Controllers;

use Exception;
use Inertia\Inertia;
use App\Models\Admin\Domain;
use Illuminate\Http\Request;
use App\Models\Admin\DomainUrl;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
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
            'event_type' => $request->event_type,
            'button_id' => $request->button_id
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);
        file_put_contents($filePath, $jsonData);
        $this->minifyJson($domainName);
        return to_route('admin.domain.details', ['id' => $domain_id])->with('success', 'Url successfully added.');
    }

    private function minifyJson($domainName)
    {
        // Normalize the domain name for filenames
        $domainName = str_replace(' ', '_', strtolower($domainName));

        // Construct the filenames
        $jsonFile = public_path("assets/json/{$domainName}.json");
        $jsFile = public_path("assets/js/{$domainName}.js");
        $minJsFile = public_path("assets/js/{$domainName}.min.js");

        // Check if the JSON file exists and read its content
        if (!File::exists($jsonFile)) {
            throw new Exception("JSON file not found: {$jsonFile}");
        }
        $jsonContent = File::get($jsonFile);

        // Check if the JavaScript file exists and read its content
        if (!File::exists($jsFile)) {
            throw new Exception("JavaScript file not found: {$jsFile}");
        }
        $scriptJsContent = File::get($jsFile);

        // Escape the JSON content to be embedded in JavaScript
        $escapedJsonContent = addslashes($jsonContent);

        // Replace the placeholder with the escaped JSON content
        $modifiedScriptJsContent = str_replace('<json>', $escapedJsonContent, $scriptJsContent);

        // Check if the minified JavaScript file exists and delete it if so
        if (File::exists($minJsFile)) {
            File::delete($minJsFile);
        }

        // Write the modified content to the new minified JavaScript file
        File::put($minJsFile, $modifiedScriptJsContent);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id, $domain_id)
    {
        $domain_url_data = DomainUrl::where('id', $id)->first();
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
        $minJsFile = public_path("assets/js/{$domain->name}.min.js");
        if (File::exists($minJsFile)) {
            File::delete($minJsFile);
        }
        DB::table('domain_urls')->where('id', $request->id)->update([
            'url' => $request->url,
            'action' => $request->action,
            'role' => $request->role,
            'event_name' => $request->event_name,
            'event_type' => $request->event_type,
            'button_id' => $request->button_id
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);
        file_put_contents($filePath, $jsonData);
        $this->minifyJson($domainName);
        return to_route('admin.domain.details', ['id' => $request->domain_id])->with('success', 'Url successfully updated.');
    }

    public function status(Request $request)
    {
        $domain = Domain::findOrFail($request->domain_id);

        DB::table('domain_urls')->where('id', $request->id)->update([
            'status' => $request->status
        ]);

        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);
        file_put_contents($filePath, $jsonData);

        return back()->with('success', 'Domain url status update');
    }

    /**
     * Remove the specified resource from storage.
     */


    public function destroy($id, $domain_id)
    {
        $domain = Domain::findOrFail($domain_id);
        DB::table('domain_urls')->where('id', $id)->delete();


        //Create Fresh new json
        $urls = $domain->urls()->select(['id', 'domain_id', 'url', 'action', 'role', 'event_name', 'event_type', 'button_id'])->get();
        $jsonData = json_encode($urls);

        $domainName = $domain->domain;
        $fileName = str_replace(' ', '_', strtolower($domainName)) . '.json';
        $filePath = public_path('assets/json/' . $fileName);
        file_put_contents($filePath, $jsonData);
        $this->minifyJson($domainName);
        return back()->with('success', 'Url successfully deleted.');
    }
}
