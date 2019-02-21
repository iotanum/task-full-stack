<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getRandomUser() 
    {
    	$client = new Client();
    	$randomInt = rand(1,9);
    	$res = $client -> get('https://jsonplaceholder.typicode.com/users');
    	$randomUser = $res -> getBody();

    	return $randomUser;

    }

    public function getUser() 
    {
    	$users = DB::table('user')->select('*')->get();

    	return $users -> toJson();
    }

    public function removeUser(Request $request, $username)
    {
    	$username = $request->username;
    	return $username -> toJson(); 
    }

}
