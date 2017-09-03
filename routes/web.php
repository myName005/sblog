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
	Route::view('/login','auth.login')
		->name('login_page');
	Route::post('/login','AuthController@login')
		->name('login');

	Route::view('/signin','auth.signin')
		->name('signin_page');
	Route::post('/signin','AuthController@signin')
		->name('signin_page');
});


Route::view('/make_article','article.make')
	->name('make_article_page');
Route::post('/make_article','ArticleController@make')
	->name('make_article');

Route::get('/show_article/{id}','ArticleController@show')
	->name('show_article');

Route::get('/edit_article/{id}','ArticleController@editPage')
	->name('edit_article_page');
Route::post('/edit_article/{id}','ArticleController@edit')
	->name('edit_article');

Route::get('/delete_article/{id}','ArticleController@deletePage')
	->name('delete_article_page');
Route::post('/delete_article/{id}','ArticleController@delete')
	->name('delete_article');

Route::get('/', 'HomePageController@index')
	->name('home_page');
