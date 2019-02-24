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

Route::get('/seed-random-user', array('middleware' => 'cors', 'uses' => 'UserController@seedOne'));
Route::get('/seed', array('middleware' => 'cors', 'uses' => 'UserController@seed'));
Route::get('/users', array('middleware' => 'cors', 'uses' => 'UserController@getUsers'));
Route::get('/user/{id}/remove', array('middleware' => 'cors', 'uses' => 'UserController@removeUser'));
Route::get('/user/{id}/view', array('middleware' => 'cors', 'uses' => 'UserController@viewUser'));
Route::get('/drop', array('middleware' => 'cors', 'uses' => 'UserController@dropContents'));
Route::post('/user/{id}/update', array('middleware' => 'cors', 'uses' => 'UserController@updateUser'));
Route::post('/user/add', array('middleware' => 'cors', 'uses' => 'UserController@addUser'));