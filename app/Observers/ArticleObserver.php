<?php  
namespace App\Observers;


use App\Article;

class ArticleObserver 
{

	public function deleting(Article $article)
	{
		$article->image->delete();
	}
}