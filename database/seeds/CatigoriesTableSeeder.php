<?php

use Illuminate\Database\Seeder;

class CatigoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Catigory::class,10)->create();
    }
}
