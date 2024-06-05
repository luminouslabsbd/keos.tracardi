<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\DomainController;
use App\Http\Controllers\DomainUrlController;
use App\Http\Controllers\Admin\EventSourceController;

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
        Route::post('/store', [DomainController::class, 'domainStore'])->name('domain.store');
        Route::get('/edit/{domain}', [DomainController::class, 'edit'])->name('domain.edit');
        Route::post('/update', [DomainController::class, 'update'])->name('domain.update');
        Route::post('/status', [DomainController::class, 'domainStatus'])->name('domain.status');
        Route::delete('/delete/{id}', [DomainController::class, 'domainDelete'])->name('domain.delete');
        Route::get('/csv/{id}', [DomainController::class, 'domainCsv'])->name('domain.csv');
        Route::post('/csv-upload', [DomainController::class, 'domainCsvUpload'])->name('domain.csvupload');
        Route::get('/details/{id}', [DomainController::class, 'domainDetails'])->name('domain.details');

        Route::get('/domain-url/create/{id}', [DomainUrlController::class, 'create'])->name('domainurl.create');
        Route::post('/domain-url/store', [DomainUrlController::class, 'store'])->name('domainurl.store');
        Route::get('/domain-url/edit/{id}/{domain_id}', [DomainUrlController::class, 'edit'])->name('domainurl.edit');
        Route::post('/domain-url/update', [DomainUrlController::class, 'update'])->name('domainurl.update');
        Route::post('/domain-url/status', [DomainUrlController::class, 'status'])->name('domainurl.status');
        Route::delete('/domain-url/delete/{id}/{domain_id}', [DomainUrlController::class, 'destroy'])->name('domainurl.delete');
    });

    Route::group(['prefix' => 'event-sources'], function () {
        Route::get('/', [EventSourceController::class, 'index'])->name('event-sources.index');
        Route::get('/create', [EventSourceController::class, 'create'])->name('domainevent-sources.create');
        Route::post('/store', [EventSourceController::class, 'store'])->name('domainevent-sources.store');
        Route::get('/edit/{eventSource}', [EventSourceController::class, 'edit'])->name('domainevent-sources.edit');
        Route::post('/update', [EventSourceController::class, 'update'])->name('domainevent-sources.update');
        Route::post('/status', [EventSourceController::class, 'status'])->name('domainevent-sources.status');
        Route::delete('/delete/{eventSource}', [EventSourceController::class, 'destroy'])->name('domainevent-sources.delete');
        Route::get('/details/{eventSource}', [EventSourceController::class, 'details'])->name('domainevent-sources.details');
    });
});
