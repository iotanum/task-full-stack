<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\User;

class UserController extends Controller
{	

	public function placeholderApiCall()
	{

		$client = new Client();
    	$res = $client -> get('https://jsonplaceholder.typicode.com/users');
    	$usersJson = $res -> getBody();

    	return json_decode($usersJson, true);

	}

    public function seedRandomUser($seedOne) 
    {

    	$usersArray = $this -> placeholderApiCall();
    	$randomInt = rand(1,9);

    	if ($seedOne == "True"){

    		return [$usersArray[$randomInt]];

    	} else {

    		return $usersArray;

    	}

    }

    public function seed($seedOne)
    {

        $array = $this -> seedRandomUser($seedOne);

        foreach($array as $id => $user) {
            $userData = User::create([
                'name' => $user['name'],
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
            ]);

            $userData -> save();
        }

        return json_encode('Successfuly seeded the database!');

    }

    public function getUsers() 
    {

        return User::all() -> toJson();

    }

    public function removeUser($userId)
    {

        $user = User::find($userId);

        if ($user) {

            $user -> delete();
    	   return json_encode('User was successfuly deleted!');

        } else {

            return json_encode('User does not exist!');

        }

    }

    public function viewUser($userId)
    {

        $user = User::find($userId);

        if ($user) {

            return $user -> toJson();

        } else {

            return json_encode('User does not exist!');

        }
    }

    public function addUser(Request $request, $custom=false)
    {

        $userData = json_decode($request->getContent(), true);

        try {

            $user = User::create([
                'name' => $userData['name'],
                'username' => $userData['username'],
                'email' => $userData['email']
            ]);
    
            $user -> save();

            foreach($userData as $field => $data) {
                if ($data != "") {
    
                    $user -> $field = $data;
                    $user -> save();
    
                }
            }

            return json_encode('Successfuly added a user!');

        } catch(\Illuminate\Database\QueryException $e) {

            $errorStatusCode = $e->errorInfo[0];

            if ($errorStatusCode == 23000) {

                return json_encode('User already exists!');

            } else {

                return json_encode('Unkown error occured!');

            }
            
        }
    }

    public function updateUser(Request $request, $userId)
    {

        $userData = json_decode($request->getContent(), true);
        $user = User::find($userId);

        foreach($userData as $field => $data) {
            $user -> $field = $data;
            $user -> save();
        }
        
        return json_encode('Successfuly updated user!');

    }

    public function dropContents()
    {

        User::truncate();
        return json_encode("Successfuly cleaned the table!");

    }
}
