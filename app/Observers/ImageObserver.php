<?php  
namespace App\Observers;

use Illuminate\Support\Facades\Storage;

use App\Image;

class ImageObserver 
{

	public function deleting(Image $image)
	{
		Storage::delete('public/images/'.$image->hashName); 
	}
}