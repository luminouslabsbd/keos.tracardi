<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RolePermissionRequest;
use App\Repositories\Admin\RolePermissionRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
class RolePermissionController extends Controller
{
    protected $role_permission;
    public function __construct(RolePermissionRepository $role_permission)
    {
        $this->role_permission = $role_permission;
    }

    public function index(){
        return Inertia::render('Module/RolePermission/Index');
    }
    public function data(Request $request){
        $start = $request->query('start', 0);
        $size = $request->query('size', 10);
        $filters = json_decode($request->query('filters', '[]'), true);
        $globalFilter = $request->query('globalFilter', '');
        $sorting = json_decode($request->query('sorting', '[]'), true);
        $query = Role::query();
        if (!empty($filters)) {
            foreach ($filters as $filter) {
                $field = $filter['id']; // Change 'field' to 'id'
                $value = $filter['value'];
                $query->whereRaw('LOWER('.$field.') LIKE ?', ['%' . strtolower($value) . '%']);
            }
        }
        if (!empty($globalFilter)) {
            $query->where(function ($q) use ($globalFilter) {
                $q->where('name', 'LIKE', '%' . $globalFilter . '%');
            });
        }
        if (!empty($sorting)) {
            foreach ($sorting as $sort) {
                $id = $sort['id'];
                $direction = $sort['desc'] ? 'desc' : 'asc';
                $query->orderBy($id, $direction);
            }
        }
        $totalRowCount = $query->count();
        $data = $query
            ->with('permissions')
            ->skip($start)
            ->take($size)
            ->orderBy('id','DESC')
            ->get();
        return response()->json([
            'data' => $data,
            'meta' => [
                'totalRowCount' => $totalRowCount,
            ],
        ]);
    }
    public function create(){
        $permissions = Permission::all()->groupBy('group_name')->toArray();

        return Inertia::render('Module/RolePermission/Add',[
            'permissions'=>$permissions
        ]);
    }
    public function store(RolePermissionRequest $request){
        $permission = $request->permissionIds;
        if (!empty($permission)) {
            $role = Role::create(['name' => $request->role]);
            $role->syncPermissions($permission);
            return to_route('admin.role.permission')->with('success', "Role and Permission Saved");
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function edit($id){
        $role = Role::where('id',$id)->first();
        $result = $role->permissions->groupBy('group_name');
        $permissionsData = Permission::all()->groupBy('group_name')->toArray();
        return Inertia::render('Module/RolePermission/Edit',['result'=>$result,'permissionsData'=>$permissionsData,'role'=>$role]);
    }
    public function update(Request $request){
        $role = Role::findById($request->id);
        $permission = $request->permissionIds;

        if (!empty($permission)) {
            $syncPermissions = $role->syncPermissions($permission);
            if($syncPermissions){
                $role->update([
                    'name'=>$request->role,
                ]);
                return to_route('admin.role.permission')->with('success', "Role and Permission Saved");
            }else{
                return back()->with('error', 'Data Does not Insert');
            }
        }


        $result=$this->role_permission->update($request);
        if($result['status']== true){
            return to_route('admin.role.permission')->with('success', $result['message']);
        }else{
            return back()->with('error', 'Data Does not Insert');
        }
    }
    public function delete($id){

//        $delete = Role::where('id', $id)->delete();

        $result= $this->role_permission->delete($id);
        return back()->with('success', $result['message']);
    }
    public function status($id){
        $result = $this->role_permission->status($id);
        return back()->with('success', $result['message']);
    }
}
