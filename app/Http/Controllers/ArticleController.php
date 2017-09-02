<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Article;
use \Auth;

class ArticleController extends Controller
{
    public function make(Request $request)
    {
    	$this->validate($request,[
    		'title'=> 'required|max:255',
    		'content'=>'required'
    	]);
    	$article = new Article();
    	$article->title = $request->input('title');
    	$article->content = $request->input('content');
    	$article->author_id = Auth::user()->id;

    	if(!$article->save())
    		abort(500);

    	return redirect()->route('show_article',['id'=>$article->id]);
    }

    public function show($id)
    {
    	$article = Article::find($id);
    	if($article == null)
    		abort(404);

    	return view('article.show', ['article'=>$article]);
    }
}
