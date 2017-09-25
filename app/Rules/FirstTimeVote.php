<?php

namespace App\Rules;


use App\Vote;
use Illuminate\Contracts\Validation\Rule;

class FirstTimeVote implements Rule
{
    
    private $voteable_type;
    private $user_id;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($voteable_type, $user_id)
    {
        $this->voteable_type = $voteable_type;
        $this->user_id = $user_id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return Vote::where('voteable_type',$this->voteable_type)
            ->where('voteable_id',$value)
            ->where('user_id',$this->user_id)
            ->count() == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'the user already has a vote';
    }
}
