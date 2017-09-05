<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use \Auth;

use App\Article;
use App\Catigory;

class ArticleController extends Controller
{

    


     /*
    | show article 
    |
    */ 
    public function show(Article $article)
    {
        return view('article.show', ['article'=>$article]);
    }








    /*
    | make article 
    |
    */
    public function makePage()
    {
        $data = ['catigories' => Catigory::all()];
        return view('article.make', $data);
    }



    public function make(Request $request)
    {
    	$this->validate($request,[
    		'title'=> 'required|max:255',
    		'content'=>'required',
            'catigory'=>'required|exists:catigories,id'
    	]);

    	$article = new Article();
    	$article->title = $request->input('title');
    	$article->content = $request->input('content');
    	$article->author_id = Auth::user()->id;
        $article->catigory_id = $request->input('catigory');

    	if(!$article->save())
    		abort(500);

    	return redirect()->route('show_article',['id'=>$article->id]);
    }






   
    /*
    | edit article 
    |
    */ 
    public function editPage(Article $article)
    {
        $input = ['article'=>$article];
        return view('article.edit',$input); 
    }

    public function edit(Article $article,Request $request)
    {
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








    /*
    | delete article 
    |
    */

    public function deletePage(Article $article)
    {
        $input = ['article'=>$article];
        return view('article.delete',$input);
    }

    public function delete(Article $article)
    {
        $article->delete();
        return redirect('/');
    }

}
