<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
	private function addImagesFiles($value='')
	{
		$config = config('models.image');

		\Storage::deleteDirectory( $config['directory'] );
		\Storage::makeDirectory( $config['directory'] );
		
		for($i=0; $i < $config['seeding']['files_count']; $i++){
    		
    		$imageFileContent = file_get_contents('http://lorempixel.com/640/480/');
    		$imageFileName = $config['directory'].uniqid('',true).'.jpg';
    		\Storage::put($imageFileName,$imageFileContent);
    	}
	}
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$this->addImagesFiles();

    }
}
