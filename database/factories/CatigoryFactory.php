<?php

use Faker\Generator as Faker;

$factory->define(App\Catigory::class, function (Faker $faker) {
    return [
        'name'=>$faker->unique()->word(10),
        'color'=>$faker->hexColor
    ];
});
