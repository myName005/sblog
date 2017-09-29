<?php

use Illuminate\Database\Seeder;

class VotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::all()->random()->each(function ($user){
        	App\Article::all()->random()->each(function ($article) use ($user){
        		$vote = new App\Vote();
        		$vote->value = collect([1,-1])->random();
        		$vote->user_id = $user->id;
        		$vote->voteable_id = $article->id;
        		$vote->voteable_type = 'App\Article';
        		$vote->save();
        	});
        });
    }
}
