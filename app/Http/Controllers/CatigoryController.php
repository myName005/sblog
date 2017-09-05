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


    public function editPage(Catigory $catigory)
    {
        $data = ['catigory'=>$catigory];
        return view('catigory.edit',$data);
    }

    public function edit(Catigory $catigory , Request $request)
    {
        $catigory->name = $request->input('name');
        $this->validate($request,[
            'name'=>'required|max:255|unique:catigories'
        ]);

        if(!$catigory->save())
            abort(500);

        return redirect()->route('show_catigory',['catigory'=>$catigory->id]);
    }

}