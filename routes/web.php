<?php


use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;


use Illuminate\Http\Request;
Route::get('/', function () {
    return redirect()->route('login');
});
Route::get('export-product', [\App\Http\Controllers\ExportController::class, 'exportAllEmployee'])->name('export.all.employee');


Route::get('/product/{id}',[ProductController::class,'getSingleProduct']);

Route::get('/send-multi-product',[ProductController::class,'sendMultipleProduct']);