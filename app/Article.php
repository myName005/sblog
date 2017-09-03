<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
	public function author()
	{
		return $this->belongsTo('App\User','author_id');
	}

	public function tags()
	{
		return $this->belongsToMany('App\Tag');
	}
}
