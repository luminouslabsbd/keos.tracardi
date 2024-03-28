<?php


use Illuminate\Support\Facades\Route;


use Illuminate\Http\Request;
Route::get('/', function () {
    return redirect()->route('login');
});
Route::get('export-product', [\App\Http\Controllers\ExportController::class, 'exportAllEmployee'])->name('export.all.employee');


