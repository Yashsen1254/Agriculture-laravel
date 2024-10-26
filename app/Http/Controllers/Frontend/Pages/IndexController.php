<?php

namespace App\Http\Controllers\Frontend\Pages;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public  function index() {
        return view('frontend.pages.index');
    }
}
