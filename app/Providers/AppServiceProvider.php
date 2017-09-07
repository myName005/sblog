<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Image;
use App\Observers\ImageObserver;
use App\Article;
use App\Observers\ArticleObserver;
use App\Catigory;
use App\CatigoryObserver;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Image::observe(ImageObserver::class);
        Article::observe(ArticleObserver::class);
        Catigory::observe(CatigoryObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
