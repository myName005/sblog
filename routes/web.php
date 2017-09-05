<?php
//basic pages routes
Route::get('/', 'HomePageController@index')
	->name('home_page');








//auth routs
Auth::routes();




Route::view('/logout', 'auth.logout') -> name( 'logout_page' );








//article routes

Route::get('/show_article/{article}', 'ArticleController@show')
	->name( 'show_article' );


Route::get('/list_article/', 'ArticleController@list')
	->name( 'list_article' );




Route::middleware( ['can:make,App\Article'] ) -> group(function (){

	Route::get('/make_article', 'ArticleController@makePage')
		->name( 'make_article_page' );

	Route::post('/make_article', 'ArticleController@make')
		->name( 'make_article' );

});




Route::middleware( ['can:edit,article'] ) -> group(function (){

	Route::get( '/edit_article/{article}', 'ArticleController@editPage' )
		->name( 'edit_article_page' );

	Route::post( '/edit_article/{article}' , 'ArticleController@edit' )
		->name( 'edit_article' );

});




Route::middleware( ['can:delete,article'] ) -> group(function (){

	Route::get( '/delete_article/{article}', 'ArticleController@deletePage')
		->name( 'delete_article_page' );

	Route::post( '/delete_article/{article}', 'ArticleController@delete' )
		->name( 'delete_article' );

});








//Catigory Routes

Route::get('/show_catigory/{catigory}','CatigoryController@show')
	->name('show_catigory');

Route::get('/list_catigory','CatigoryController@list')
	->name('list_catigory');




Route::view('/make_catigory', 'catigory.make')
	->name('make_catigory_page');

Route::post('/make_catigory', 'CatigoryController@make')
	->name('make_catigory');




Route::get('/edit_catigory/{catigory}', 'CatigoryController@editPage')
	->name('edit_catigory_page');

Route::post('/edit_catigory/{catigory}', 'CatigoryController@edit')
	->name('edit_catigory');




Route::get('/delete_catigory/{catigory}', 'CatigoryController@deletePage')
	->name('delete_catigory_page');

Route::post('/delete_catigory/{catigory}', 'CatigoryController@delete')
	->name('delete_catigory');
