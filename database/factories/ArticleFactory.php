<?php

use Faker\Generator as Faker;

$factory->define(App\Article::class, function (Faker $faker) {
    return [
        'title' => $faker->text(50),
        'content' => $faker->text(1000),
        'author_id' => App\User::whereIn('role',
        	['author','admin','editor'])->get()->random()->id,
        'catigory_id'=> App\Catigory::all()->random()->id

    ];
});
