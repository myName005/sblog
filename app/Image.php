<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
class Image extends Model
{
	function StoreFile(UploadedFile $uploadedFile)
	{
		$uploadedFile->store('public/images');
		$this->fileName = $uploadedFile->hashName();
	}

   public function imageable()
   {
   	return $this->morphTo();
   }

   	

}
