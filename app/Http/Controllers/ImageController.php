<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Image;

class ImageController extends Controller
{
    public function show(Image $image)
    {
    	return response()
    		->file( storage_path('app/public/images/'.$image->hashName) );
    }
}
