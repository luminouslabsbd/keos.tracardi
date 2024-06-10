<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Admin\EventSource;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\EventSourceRequest;
use App\Repositories\Admin\EventSourceRepository;

class EventSourceController extends Controller
{
    protected $repository;

    public function __construct(EventSourceRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $sources = EventSource::get();
        $base_url = config('app.url');
        return Inertia::render('Module/EventSource/Index', [
            'sources' => $sources,
            'base_url' => $base_url,
        ]);
    }

    public function create()
    {
        return Inertia::render('Module/EventSource/Create');
    }

    public function store(EventSourceRequest $request)
    {
        $result = $this->repository->store($request);
        $data = json_decode($result->getContent(), true);

        if (isset($data['error'])) {
            $message = $data['error'];
            return back()->with('error', $message);
        } else {
            $message = $data['message'];
            return to_route('admin.event-sources.index')->with('success', $message);
        }
    }

    public function edit(EventSource $eventSource)
    {
        $base_url = config('app.url');
        return Inertia::render('Module/EventSource/Edit', [
            'eventSource' => $eventSource,
            'base_url' => $base_url
        ]);
    }

    public function update(EventSourceRequest $request)
    {
        $result = $this->repository->update($request);
        $data = json_decode($result->getContent(), true);

        if (isset($data['error'])) {
            $message = $data['error'];
            return back()->with('error', $message);
        } else {
            $message = $data['message'];
            return to_route('admin.event-sources.index')->with('success', $message);
        }
    }

    public function status(Request $request)
    {
        $message = $this->repository->statusUpdate($request);
        return back()->with('success', $message['message']);
    }

    public function destroy(EventSource $eventSource)
    {
        $this->repository->delete($eventSource);
        return back()->with('success', 'Domain Delete Successfully');
    }

    public function details(EventSource $eventSource)
    {
        // $data = $this->repository->domainUrl($id);
        // $domain = DB::table('domains')->where('id', $id)->first();
        // return Inertia::render('Module/EventSource/Details', ['result' => $data, 'domain' => $domain]);
    }
}
