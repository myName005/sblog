<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Article;
class Catigory extends Model
{
    public function setNameAttribute($value)
    {
    	$this->attributes['name'] = strtolower($value);
    }

    public function getNameAttribute($value)
    {
    	return strtolower($value);
    }

    public function articles()
    {
    	return $this->hasMany('App\Article');
    }
    public function paginatedArticles()
    {
        return Article::where('catigory_id',$this->id)
            ->paginate(5);
    }

}
