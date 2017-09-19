<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //the order is important
       	$this->call(UsersTableSeeder::class);
       	$this->call(CatigoriesTableSeeder::class);
        $this->call(ImagesTableSeeder::class);
        $this->call(ArticlesTableSeeder::class);


    }
}
