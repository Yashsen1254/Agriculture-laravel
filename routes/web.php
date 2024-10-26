<?php

use App\Http\Controllers\Frontend\Pages\IndexController;
use App\Http\Controllers\Frontend\Pages\AboutController;
use App\Http\Controllers\Frontend\Pages\CartController;
use App\Http\Controllers\Frontend\Pages\CheckoutController;
use App\Http\Controllers\Frontend\Pages\ContactController;
use App\Http\Controllers\Frontend\Pages\ShopController;
use App\Http\Controllers\Frontend\Pages\WishlistController;
use Illuminate\Support\Facades\Route;

Route::get('/', [IndexController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/shop', [ShopController::class, 'index']);
Route::get('/cart', [CartController::class, 'index']);
Route::get('/checkout', [CheckoutController::class, 'index']);
Route::get('/wishlist', [WishlistController::class, 'index']);