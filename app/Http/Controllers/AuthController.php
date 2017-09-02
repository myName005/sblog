<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Auth;
use App\User;
class AuthController extends Controller
{
	


    public function login(Request $request)
    {
    	$this->validate($request, [
	        'email' => 'required',
	        'password' => 'required|min:6',
	    ]);

	    $credentials = [
	    	'email' => $request->input('email'),
	    	'password' => $request->input('password'),
	    ];

    	if(Auth::attempt($credentials))
    		return redirect('/');

    	return redirect()->back()
    	->withErrors('wrong password/email')->withInput();
    }


    public function signin(Request $request)
    {
    	$this->validate($request,[
    		'name' => 'required|min:3|max:255',
    		'email' => 'required|unique:users',
    		'password' => 'required|min:6'
    	]);
    	
    	$user = new User();
    	$user->name = $request->input('name');
    	$user->email = $request->input('email');
    	$user->password = bcrypt($request->input('password'));

    	if(!$user->save())
    		abort(500);

    	Auth::login($user);

    	return redirect('/');
    }

    
}
