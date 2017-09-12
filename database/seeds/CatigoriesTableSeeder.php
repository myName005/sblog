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
    	$count = config('models.catigory.seeding.count');
        factory(App\Catigory::class,$count)->create();
    }
}
