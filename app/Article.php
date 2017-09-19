<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
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

	
}
