<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$count = config('models.user.seeding.count');
		factory(App\User::class, $count)->create();
	}
}
