<?php

namespace App\Http\Controllers\Frontend\Pages;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function index() {
        return view('frontend.pages.contact');
    }
}
