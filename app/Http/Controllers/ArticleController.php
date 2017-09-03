<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use \Auth;

use App\Article;

class ArticleController extends Controller
{
    /*
    | make article 
    |
    */ 
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

    /*
    | show article 
    |
    */ 
    public function show($id)
    {
    	$article = Article::find($id);
    	if($article == null)
    		abort(404);

    	return view('article.show', ['article'=>$article]);
    }


    /*
    | edit article 
    |
    */ 
    public function editPage($id)
    {
        $article = Article::find($id);
        if($article == null)
            abort(404);

        $input = ['article'=>$article];
        return view('article.edit',$input); 
    }

    public function edit($id,Request $request)
    {
        $article = Article::find($id);
        
        if($article == null)
            abort(404);
        
        $validator = Validator::make($request->all(),[
            'title'=> 'required|max:255',
            'content'=>'required'
        ]);
        
        $article->title = $request->input('title');
        $article->content = $request->input('content');
        
        if($validator->fails())
        {
            $input = ['article'=>$article];
            return view('article.edit',$input)
                ->withErrors($validator);
        }

        if(!$article->save())
            abort(500);
        
        return redirect()->route('show_article',['id'=>$id]);
    }

}
