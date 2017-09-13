<?php

use Faker\Generator as Faker;



$factory->define(App\Image::class, function (Faker $faker) {
    return [
        'imageable_id'=>App\Article::all()->random()->id,
        'imageable_type'=>'App\Article',
        'hashName'=>function (){
        	return collect(\Storage::files('public/images'
        		))->map(function ($imageFilePath){
        			//to get rid of 'public/images/' part from file name
        			return str_replace('public/images/','',$imageFilePath);
        		})->random();
        }
    ];
});
