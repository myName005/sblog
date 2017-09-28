<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use \Auth;
use JavaScript;

use App\Article;
use App\Catigory;
use App\Image;

class ArticleController extends Controller
{

    


     /*
    | show article 
    |
    */ 
    public function show(Article $article)
    {
        JavaScript::put([
            'data'=>[
                'article_data'=>$article
            ]
        ]);
        return view('article.show');
    }


    public function list()
    {
        $articlesPerPage =config('models.article.pagination.count');
        $data = [
            'articles'=>Article::paginate($articlesPerPage)
        ];
        return view('article.list',$data);
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
            'catigory'=>'required|exists:catigories,id',
            'image'=>'required'
    	]);

    	$article = new Article();
    	$article->title = $request->input('title');
    	$article->content = $request->input('content');
    	$article->author_id = Auth::user()->id;
        $article->catigory_id = $request->input('catigory');

    	if(!$article->save())
    		abort(500);
    
    	
        $imageFile = $request->file('image');

        $image = new Image();
        $image->storeFile($imageFile);
        $image->imageable_type = "App\Article";
        $image->imageable_id = $article->id;

        $image->save();

        return redirect()->route('show_article',['artile'=>$article->id]);
    }





   
    /*
    | edit article 
    |
    */ 
    public function editPage(Article $article)
    {
        $input = ['article'=>$article,'catigories'=>Catigory::all()];
        return view('article.edit',$input); 
    }

    public function edit(Article $article,Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title'=> 'required|max:255',
            'content'=>'required',
            'catigory'=>'required|exists:catigories,id',
            'image'=>'required_if:edit_image,==,overwrite'
        ]);
        
        $article->title = $request->input('title');
        $article->content = $request->input('content');
        $article->catigory_id = $request->input('catigory');
        
        if($validator->fails())
        {
            $input = ['article'=>$article,'catigories'=>Catigory::all()];
            return view('article.edit',$input)
                ->withErrors($validator);
        }

        if(!$article->save())
            abort(500);

        if($request->input('edit_image')=="keep")
            return redirect()->route('show_article',['article'=>$article->id]);

        $article->image->delete();

        $imageFile = $request->file('image');

        $image = new Image();
        $image->storeFile($imageFile);
        $image->imageable_type = "App\Article";
        $image->imageable_id = $article->id;

        $image->save();

        return redirect()->route('show_article',['artile'=>$article->id]);
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
