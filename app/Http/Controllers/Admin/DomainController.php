<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Domain;
use App\Repositories\Admin\DomainRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DomainController extends Controller
{
    protected $DomainRepository;

    public function __construct(DomainRepository $DomainRepository)
    {
        $this->DomainRepository = $DomainRepository;
    }

    public function index()
    {
        $domains = DB::table('domains')->where('user_id',Auth::user()->id)->get();
        return Inertia::render('Module/Domain/Index', [
            'domains' => $domains
        ]);
    }

    public function edit(Domain $domain)
    {
        return Inertia::render('Module/Domain/Edit', [
            'domain' => $domain
        ]);
    }

    public function domainCreate()
    {
        return Inertia::render('Module/Domain/Create');
    }

    public function domainStore(Request $request)
    {
        $result = $this->DomainRepository->store($request);
        return to_route('admin.domains')->with('success', $result['message']);
    }

    public function update(Request $request)
    {
        $result = $this->DomainRepository->update($request);
        return to_route('admin.domains')->with('success', $result['message']);
    }

    public function domainEdit($id){
        $domain = DB::table('domains')->where('id',$id)->first();
        return Inertia::render('Module/Domain/Edit', [
            'domain' => $domain
        ]);
    }

    public function domainUpdate(Request $request, $id){
        $result = $this->DomainRepository->store($request,$id);
        return to_route('admin.domains')->with('success', $result['message']);
    }

    public function domainStatus(Request $request){
        $message = $this->DomainRepository->statusUpdate($request);
        return back()->with('success', $message['message']);
    }

    public function domainDelete($id)
    {
        DB::table('domains')->where('id', $id)->delete();
        return back()->with('success', 'Domain Delete Successfully');
    }

    public function domainDetails($id){
        $data = $this->DomainRepository->domainUrl($id);
        $domain = DB::table('domains')->where('id', $id)->first();
        return Inertia::render('Module/Domain/Details', ['result' => $data,'domain' => $domain]);
    }

    public function domainCsv($id){
        return Inertia::render('Module/Domain/Csv', [
            'domain_id' => $id
        ]);
    }

    public function domainCsvUpload(Request $request){
        $domain_id = (int)$request['domain_id'];
        $message = $this->DomainRepository->csvUpload($request,$domain_id);
        return to_route('admin.domain.details', ['id' => $domain_id])->with('success', $message['message']);
    }
}
