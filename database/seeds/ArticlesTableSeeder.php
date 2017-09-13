<?php

use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$count = config('models.article.seeding.count');
    	factory(App\Article::class,$count)->create();
    }
}
