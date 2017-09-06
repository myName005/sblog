<?php

use Faker\Generator as Faker;

$factory->define(App\Article::class, function (Faker $faker) {
    return [
        'title' => $faker->text(50),
        'content' => $faker->text(1000),
        'author_id' => rand()%50+1,
        'catigory_id'=> rand()%10+1
    ];
});
