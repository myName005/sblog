<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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

}
