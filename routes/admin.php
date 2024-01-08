<?php


use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\BangladeshController;
use App\Http\Controllers\Admin\BrandController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ColorController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExtraController;
use App\Http\Controllers\Admin\ModuleController;
use App\Http\Controllers\Admin\PermissionsController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\SizeController;
use App\Http\Controllers\Admin\UnitController;
use App\Http\Controllers\Admin\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/sajjad', function () {
    return 'Sajjad';
});

Route::get('/login',[AuthController::class,'login'])->name('login');
Route::post('/login',[AuthController::class,'loginPost'])->name('login.post');

Route::group(['middleware' => ['auth:admin'],'as' =>'admin.'],function() {

    Route::get('/error',[DashboardController::class,'error'])->name('error');
    Route::get('dashboard', [DashboardController::class, 'adminDashboard'])->name('dashboard');
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');


    Route::group(['prefix' => 'user' ],function (){
        Route::get('/profile', [AdminProfileController::class, 'userProfile'])->name('user.profile');
        Route::post('/profile/update', [AdminProfileController::class, 'userProfileUpdate'])->name('user.profile.update');
        Route::post('/profile/change-password', [AdminProfileController::class, 'userProfileChangePassword'])->name('user.profile.update');

    });


    Route::group(['prefix' => 'category' ],function (){
        Route::get('', [CategoryController::class, 'index'])->name('category');
        Route::get('data', [CategoryController::class, 'data'])->name('category.data');
        Route::get('/create', [CategoryController::class, 'create'])->name('category.create');
        Route::post('/store', [CategoryController::class, 'store'])->name('category.store');
        Route::get('/edit/{id}', [CategoryController::class, 'edit'])->name('category.edit');
        Route::post('/update', [CategoryController::class, 'update'])->name('category.update');
        Route::get('/delete/{id}', [CategoryController::class, 'delete'])->name('category.delete');
        Route::get('/status/{id}', [CategoryController::class, 'status'])->name('category.status');

        Route::get('trashed', [CategoryController::class, 'trashed'])->name('category.trashed');
        Route::get('trashed/data', [CategoryController::class, 'trashedData'])->name('category.trashed.data');
        Route::get('/permanent-delete/{id}', [CategoryController::class, 'permanentDelete'])->name('category.permanent.delete');
        Route::get('permanent-delete-all', [CategoryController::class, 'permanentDeleteAll'])->name('category.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [CategoryController::class, 'undoTrashed'])->name('category.undo.trashed');
        Route::get('/restore-all', [CategoryController::class, 'restoreAll'])->name('category.restore.all');
    });

    //brand
    Route::group(['prefix' => 'brand' ],function (){
        Route::get('', [BrandController::class, 'index'])->name('brand');
        Route::get('data', [BrandController::class, 'data'])->name('brand.data');
        Route::get('/create', [BrandController::class, 'create'])->name('brand.create');
        Route::post('/store', [BrandController::class, 'store'])->name('brand.store');
        Route::get('/edit/{id}', [BrandController::class, 'edit'])->name('brand.edit');
        Route::post('/update', [BrandController::class, 'update'])->name('brand.update');
        Route::get('/delete/{id}', [BrandController::class, 'delete'])->name('brand.delete');
        Route::get('/status/{id}', [BrandController::class, 'status'])->name('brand.status');

        Route::get('trashed', [BrandController::class, 'trashed'])->name('brand.trashed');
        Route::get('trashed/data', [BrandController::class, 'trashedData'])->name('brand.trashed.data');
        Route::get('/permanent-delete/{id}', [BrandController::class, 'permanentDelete'])->name('brand.permanent.delete');
        Route::get('permanent-delete-all', [BrandController::class, 'permanentDeleteAll'])->name('brand.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [BrandController::class, 'undoTrashed'])->name('brand.undo.trashed');
        Route::get('/restore-all', [BrandController::class, 'restoreAll'])->name('brand.restore.all');
    });
    //end brand

    //color
    Route::group(['prefix' => 'color' ],function (){
        Route::get('', [ColorController::class, 'index'])->name('color');
        Route::get('data', [ColorController::class, 'data'])->name('color.data');
        Route::get('/create', [ColorController::class, 'create'])->name('color.create');
        Route::post('/store', [ColorController::class, 'store'])->name('color.store');
        Route::get('/edit/{id}', [ColorController::class, 'edit'])->name('color.edit');
        Route::post('/update', [ColorController::class, 'update'])->name('color.update');
        Route::get('/delete/{id}', [ColorController::class, 'delete'])->name('color.delete');
        Route::get('/status/{id}', [ColorController::class, 'status'])->name('color.status');

        Route::get('trashed', [ColorController::class, 'trashed'])->name('color.trashed');
        Route::get('trashed/data', [ColorController::class, 'trashedData'])->name('color.trashed.data');
        Route::get('/permanent-delete/{id}', [ColorController::class, 'permanentDelete'])->name('color.permanent.delete');
        Route::get('permanent-delete-all', [ColorController::class, 'permanentDeleteAll'])->name('color.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [ColorController::class, 'undoTrashed'])->name('color.undo.trashed');
        Route::get('/restore-all', [ColorController::class, 'restoreAll'])->name('color.restore.all');
    });
    //end color


    //size
    Route::group(['prefix' => 'size' ],function (){
        Route::get('', [SizeController::class, 'index'])->name('size');
        Route::get('data', [SizeController::class, 'data'])->name('size.data');
        Route::get('/create', [SizeController::class, 'create'])->name('size.create');
        Route::post('/store', [SizeController::class, 'store'])->name('size.store');
        Route::get('/edit/{id}', [SizeController::class, 'edit'])->name('size.edit');
        Route::post('/update', [SizeController::class, 'update'])->name('size.update');
        Route::get('/delete/{id}', [SizeController::class, 'delete'])->name('size.delete');
        Route::get('/status/{id}', [SizeController::class, 'status'])->name('size.status');

        Route::get('trashed', [SizeController::class, 'trashed'])->name('size.trashed');
        Route::get('trashed/data', [SizeController::class, 'trashedData'])->name('size.trashed.data');
        Route::get('/permanent-delete/{id}', [SizeController::class, 'permanentDelete'])->name('size.permanent.delete');
        Route::get('permanent-delete-all', [SizeController::class, 'permanentDeleteAll'])->name('size.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [SizeController::class, 'undoTrashed'])->name('size.undo.trashed');
        Route::get('/restore-all', [SizeController::class, 'restoreAll'])->name('size.restore.all');
    });
    //end size

    //size
    Route::group(['prefix' => 'unit' ],function (){
        Route::get('', [UnitController::class, 'index'])->name('unit');
        Route::get('data', [UnitController::class, 'data'])->name('unit.data');
        Route::get('/create', [UnitController::class, 'create'])->name('unit.create');
        Route::post('/store', [UnitController::class, 'store'])->name('unit.store');
        Route::get('/edit/{id}', [UnitController::class, 'edit'])->name('unit.edit');
        Route::post('/update', [UnitController::class, 'update'])->name('unit.update');
        Route::get('/delete/{id}', [UnitController::class, 'delete'])->name('unit.delete');
        Route::get('/status/{id}', [UnitController::class, 'status'])->name('unit.status');

        Route::get('trashed', [UnitController::class, 'trashed'])->name('unit.trashed');
        Route::get('trashed/data', [UnitController::class, 'trashedData'])->name('unit.trashed.data');
        Route::get('/permanent-delete/{id}', [UnitController::class, 'permanentDelete'])->name('unit.permanent.delete');
        Route::get('permanent-delete-all', [UnitController::class, 'permanentDeleteAll'])->name('unit.permanent.delete.all');
        Route::get('/undo-trashed/{id}', [UnitController::class, 'undoTrashed'])->name('unit.undo.trashed');
        Route::get('/restore-all', [UnitController::class, 'restoreAll'])->name('unit.restore.all');
    });
    //end size


    Route::get('custom-css', [ExtraController::class, 'customCss'])->name('custom.css');
    Route::post('custom-css/save', [ExtraController::class, 'customCssSave'])->name('custom.css.save');

    Route::group(['prefix' => 'backup' ],function (){
        Route::get('', [ExtraController::class, 'backup'])->name('backup');
        Route::get('save', [ExtraController::class, 'backupSave'])->name('backup.save');
        Route::get('delete/{file}', [ExtraController::class, 'backupDelete'])->name('backup.delete');
        Route::get('download/{file}', [ExtraController::class, 'backupDownload'])->name('backup.download');

    });

});