<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Catigory;
class HomePageController extends Controller
{
    public function index()
    {
    	$data = [
    		'articles'=> Article::all()->take(20),
    		'catigories'=> Catigory::all()
    	];
    	return view('home',$data);
    }
}
