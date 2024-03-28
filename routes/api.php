<?php


use App\Http\Controllers\Api\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/products',[ProductController::class,'index']);
Route::post('/send-wp-message',[ProductController::class,'sendWpMessage']);