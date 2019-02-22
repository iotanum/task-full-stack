<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'username', 
        'email', 
        'address_street',
        'address_suite',
        'address_city',
        'address_zipcode',
        'geo_lat',
        'geo_lng',
        'phone',
        'website',
        'company_name',
        'company_catchPhrase',
        'company_bs',

    ];
}
