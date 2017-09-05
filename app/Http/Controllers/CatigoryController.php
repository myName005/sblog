<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Catigory;

class CatigoryController extends Controller
{
    public function make(Request $request)
    {
    	$this->validate($request,[
    		'name'=>'required|max:255|unique:catigories'
    	]);

    	$catigory = new Catigory();
    	$catigory->name = $request->input('name');

    	if(!$catigory->save())
    		abort(500);

    	return $catigory->name;
    }

    public function show(Catigory $catigory)
    {
        return view('catigory.show', ['catigory' => $catigory]);
    }
}
