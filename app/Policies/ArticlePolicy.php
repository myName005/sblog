<?php

namespace App\Policies;

use App\User;
use App\Article;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can make articles.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function make(User $user)
    {
        return  $user->role=='admin'|| $user->role=='editor'||$user->role=='author';
    }

    /**
     * Determine whether the user can edit the article.
     *
     * @param  \App\User  $user
     * @param  \App\Article  $article
     * @return mixed
     */
    public function edit(User $user, Article $article)
    {
        
        if($user->role=='admin'|| $user->role=='editor')
            return true;

        if( $user->role == 'author' &&
            $user->id == $article->author_id)
            return true;

        return false;

    }

    /**
     * Determine whether the user can delete the article.
     *
     * @param  \App\User  $user
     * @param  \App\Article  $article
     * @return mixed
     */
    public function delete(User $user, Article $article)
    {
        if($user->role=='admin'|| $user->role=='editor')
            return true;
        if($user->role == 'author' && $user->id == $article->author_id)
            return true;

        return false;
    }
}
