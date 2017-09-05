<?php

namespace App\Policies;

use App\User;
use App\Catigory;
use Illuminate\Auth\Access\HandlesAuthorization;

class CatigoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can make catigories.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function make(User $user)
    {
        return $user->role == "admin";
    }

    /**
     * Determine whether the user can edit the catigory.
     *
     * @param  \App\User  $user
     * @param  \App\Catigory  $catigory
     * @return mixed
     */
    public function edit(User $user, Catigory $catigory)
    {
        return $user->role == "admin";
    }

    /**
     * Determine whether the user can delete the catigory.
     *
     * @param  \App\User  $user
     * @param  \App\Catigory  $catigory
     * @return mixed
     */
    public function delete(User $user, Catigory $catigory)
    {
        return $user->role == "admin";
    }
}
