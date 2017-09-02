<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::middleware('guest')->group(function ()
{
	Route::view('/login','auth.login');
	Route::post('/login','AuthController@login');

	Route::view('/signin','auth.signin');
	Route::post('/signin','AuthController@signin');
});


Route::view('/make_article','article.make');
Route::post('/make_article','ArticleController@make');

Route::get('/show_article/{id}','ArticleController@show');

Route::get('/', 'HomePageController@index');
