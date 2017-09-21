<?php

use Faker\Generator as Faker;

$factory->define(App\Catigory::class, function (Faker $faker) {
    return [
        'name'=>$faker->text(10),
        'color'=>$faker->hexColor
    ];
});
