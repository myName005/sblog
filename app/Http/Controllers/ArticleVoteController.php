<?php

namespace App\Http\Controllers;

use App\Vote;
use Illuminate\Http\Request;
use \Auth;
class ArticleVoteController extends Controller
{
    public function make(Request $request)
    {
    	$request->validate([
    		'value'=>'required|in:1,-1',
            'article_id'=>'exists:articles,id'
    	]);

        $vote = Vote::firstOrNew([
            'user_id'=> Auth::user()->id,
            'voteable_id'=> $request->article_id,
            'voteable_type'=>'App\Article'
        ]);

        $vote->value = $request->value;

        if(!$vote->save())
            abort(500);
        
        return response()->json([ 'success' => true ]);
    }


    public function delete(Request $request)
    {
        $request->validate([
            'id'=>'required|exists:articles,id',
        ]);

        Vote::where('voteable_type','App\Article')
            ->where('voteable_id',$request->id)
            ->where('user_id',$request->user()->id)
            ->delete();

        return response()->json([ 'success' => true ]);
    }
}
