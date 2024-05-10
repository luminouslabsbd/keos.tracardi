<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\DomainController;
use App\Http\Controllers\DomainUrlController;

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'loginPost'])->name('login.post');

Route::group(['middleware' => ['auth:admin'], 'as' => 'admin.'], function () {


    Route::get('/error', [DashboardController::class, 'error'])->name('error');
    Route::get('dashboard', [DashboardController::class, 'adminDashboard'])->name('dashboard');
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');


    Route::group(['prefix' => 'user'], function () {
        Route::get('/profile', [AdminProfileController::class, 'userProfile'])->name('user.profile');
        Route::post('/profile/update', [AdminProfileController::class, 'userProfileUpdate'])->name('user.profile.update');
        Route::post('/profile/change-password', [AdminProfileController::class, 'userProfileChangePassword'])->name('user.profile.update');
    });

    Route::group(['prefix' => 'domain'], function () {
        Route::get('/domains', [DomainController::class, 'index'])->name('domains');
        Route::get('/create', [DomainController::class, 'domainCreate'])->name('domain.create');
        Route::get('/edit/{domain}', [DomainController::class, 'edit'])->name('domain.edit');
        Route::post('/store', [DomainController::class, 'domainStore'])->name('domain.store');
        Route::post('/update', [DomainController::class, 'update'])->name('domain.update');
        Route::post('/status', [DomainController::class, 'domainStatus'])->name('domain.status');
        Route::delete('/delete/{id}', [DomainController::class, 'domainDelete'])->name('domain.delete');
        Route::post('/settings/{id}', [DomainController::class, 'domainSettings'])->name('domain.settings');
        Route::post('/csv-upload', [DomainController::class, 'domainCsvUpload'])->name('domain.csvupload');
    });

    Route::group(['prefix' => 'domain'], function () {
        Route::resource('domainUrl', DomainUrlController::class);
        // Route::get('/', [DomainController::class, 'index'])->name('url.index');
        // Route::get('/create', [DomainController::class, 'domainCreate'])->name('url.create');
        // Route::get('/edit/{domainUrl}', [DomainController::class, 'edit'])->name('url.edit');
        // Route::post('/store', [DomainController::class, 'domainStore'])->name('url.store');
        // Route::post('/update', [DomainController::class, 'update'])->name('url.update');
        Route::post('/domainUrl/status', [DomainController::class, 'domainStatus'])->name('url.status');
        // Route::delete('/delete/{id}', [DomainController::class, 'domainDelete'])->name('url.delete');
    });
});
