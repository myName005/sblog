<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Auth;
class AuthController extends Controller
{
	function __construct()
	{
		$this->middleware('guest');
	}
	

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
}
