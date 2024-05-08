<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\DomainController;


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

    Route::group(['prefix' => 'domain' ],function (){
        Route::get('/domains', [DomainController::class, 'index'])->name('domains');
        Route::get('/create', [DomainController::class, 'domainCreate'])->name('domain.create');
        Route::post('/store', [DomainController::class, 'domainStore'])->name('domain.store');
        Route::post('/status', [DomainController::class, 'domainStatus'])->name('domain.status');
        Route::delete('/delete/{id}', [DomainController::class, 'domainDelete'])->name('domain.delete');
    });

});