<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/random_user', 'UserController@getRandomUser');
Route::get('/users', 'UserController@getUser');
Route::put('/remove/{username}', 'UserController@removeUser');