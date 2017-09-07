<?php  
namespace App\Observers;


use App\Catigory;
use App\Article;

class ArticleObserver 
{

	public function deleting(Catigory $catigory)
	{
		$catigory->articles->each(function ($article)
		{
			$article->delete();
		})
	}
}