<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Auth;
use Markdown;
class Article extends Model
{
	protected $appends = ['votes_info','authorized','urls','parsed_content'];
    protected $with = ['catigory', 'author'];
    protected $hidden = [ 'votes', 'author_id', 'catigory_id' ,'image'];



	public function author()
	{
		return $this->belongsTo('App\User','author_id');
	}

	public function catigory()
	{
		return $this->belongsTo('App\Catigory','catigory_id');
	}

	public function image()
	{
		return $this->morphOne('App\Image','imageable');
	}

	public function votes()
	{
		return $this->morphMany('App\Vote','voteable');
	}



	public function getVotesInfoAttribute(){
		
		if(Auth::guest())
			$state = 0;
		else
			$state =$this->votes
				->where('user_id',Auth::user()->id)
				->sum('value');

		return [
			'score' => $this->votes->sum('value'),
			'state' => $state
		];
	}

	public function getCatigoryAttribute()
	{
		return $this->catigory;
	}

	public function getAuthorizedAttribute()
	{
		if(Auth::guest())
			return false;
		return Auth::user()->can('edit',$this);
	}

	

	public function getParsedContentAttribute()
	{
		return Markdown::parse($this->attributes['content']);
	}

	public function getUrlsAttribute()
	{
		return [
			'image'=> route('show_image',['image' => $this->image->id]),
			'delete'=> route('delete_article',['article' => $this->id]),
			'edit'=> route('edit_article',['article' => $this->id])
		];
	}
	
}
