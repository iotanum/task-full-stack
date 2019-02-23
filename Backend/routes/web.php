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

Route::get('/get-random-user', 'UserController@getRandomUser');
Route::get('/seed', 'UserController@seed');
Route::get('/users', array('middleware' => 'cors', 'uses' => 'UserController@getUsers'));
Route::get('/user/{id}/remove', 'UserController@removeUser');
Route::get('/user/{id}/view', 'UserController@viewUser');