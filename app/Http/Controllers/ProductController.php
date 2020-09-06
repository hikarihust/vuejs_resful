<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Model\Product;

class ProductController extends Controller
{
    public function index() {
        $product = DB::table('products')->get();
        return view('product.index', compact('product'));
    }

    public function create() {
        return view('product.create');
    }
}
