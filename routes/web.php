<?php
use Illuminate\Http\Request;
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





Route::get('/show_article/{article}','ArticleController@show')
	->name('show_article');

Route::middleware(['can:make,App\Article'])->group(function (){
	Route::view('/make_article','article.make')
		->name('make_article_page');
	Route::post('/make_article','ArticleController@make')
		->name('make_article');
});

Route::middleware(['can:edit,article'])->group(function (){
	Route::get('/edit_article/{article}','ArticleController@editPage')
		->name('edit_article_page');
	Route::post('/edit_article/{article}','ArticleController@edit')
		->name('edit_article');
});

Route::middleware(['can:delete,article'])->group(function (){
	Route::get('/delete_article/{article}','ArticleController@deletePage')
		->name('delete_article_page');
	Route::post('/delete_article/{article}','ArticleController@delete')
		->name('delete_article');
});

Route::get('/', 'HomePageController@index')
	->name('home_page');


Auth::routes();
Route::view('/logout','auth.logout')->name('logout_page');

Route::get('/home', 'HomeController@index')->name('home');
