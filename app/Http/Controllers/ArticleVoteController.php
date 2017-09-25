<?php

namespace App\Http\Controllers;

use App\Vote;
use Illuminate\Http\Request;
use App\Rules\FirstTimeVote;

class ArticleVoteController extends Controller
{
    public function make(Request $request)
    {
    	$request->validate([
    		'value'=>'required|in:1,-1',
    		'id'=>[
                'required',
                'exists:articles,id',
                new FirstTimeVote('App\Article', $request->user()->id)
            ]
    	]);
        $vote = new Vote();
        $vote->user_id = $request->user()->id;
        $vote->voteable_id = $request->id;
        $vote->voteable_type = 'App\Article';
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
