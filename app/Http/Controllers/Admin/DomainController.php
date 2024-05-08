<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Repositories\Admin\DomainRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DomainController extends Controller
{
    protected $DomainRepository;

    public function __construct(DomainRepository $DomainRepository)
    {
        $this->DomainRepository = $DomainRepository;
    }

    public function index(){
        $domains = DB::table('domains')->get();
        return Inertia::render('Module/Domain/Index', [
            'domains' => $domains
        ]);
    }

    public function domainCreate(){
        return Inertia::render('Module/Domain/Create');
    }

    public function domainStore(Request $request){
        $result = $this->DomainRepository->store($request);
        return to_route('admin.domains')->with('success', $result['message']);
    }

    public function domainStatus(Request $request){
        $message = $this->DomainRepository->statusUpdate($request);
        return back()->with('success', $message['message']);
    }

    public function domainDelete($id){
        DB::table('domains')->where('id',$id)->delete();
        return back()->with('success', 'Domain Delete Successfully');
    }
}
