<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{	

	public function placeholderApiCall()
	{

		$client = new Client();
    	$res = $client -> get('https://jsonplaceholder.typicode.com/users');
    	$usersJson = $res -> getBody();

    	return json_decode($usersJson, true);

	}

    public function getRandomUser($seed=False) 
    {

    	$usersArray = $this -> placeholderApiCall();
    	$randomInt = rand(1,9);

    	if (!$seed){

    		return $usersArray[$randomInt];

    	} else {

    		return $usersArray;

    	}

    }

    public function seed()
    {

    	$usersArray = $this->getRandomUser($seed=True);
    	$items = array();

    	foreach($usersArray as $id => $user) {
#    		$items[] = $user['username'];
    		DB::table('user')->insert([
    			['name' => $user['name'],
    			'username' => $user['username'],
    			'email' => $user['email'],
    			'address_street' => $user['address']['street'],
    			'address_suite' => $user['address']['suite'],
    			'address_city' => $user['address']['city'],
    			'address_zipcode' => $user['address']['zipcode'],
    			'geo_lat' => $user['address']['geo']['lat'],
    			'geo_lng' => $user['address']['geo']['lng'],
    			'phone' => $user['phone'],
    			'website' => $user['website'],
    			'company_name' => $user['company']['name'],
    			'company_catchPhrase' => $user['company']['catchPhrase'],
    			'company_bs' => $user['company']['bs']
    		]]);
    	}

#    	return $items;
    	return json_encode('Successfuly seeded the database!');
    }

    public function getUsers() 
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
