<?php

namespace App\Http\Controllers\Frontend\Pages;

use App\Http\Controllers\Controller;

class CheckoutController extends Controller
{
    public function index() {
        return view('frontend.pages.checkout');
    }
}
