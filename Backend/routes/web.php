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

Route::get('/seed/{seedOne}', array('middleware' => 'cors', 'uses' => 'UserController@seed'));
Route::get('/users', array('middleware' => 'cors', 'uses' => 'UserController@getUsers'));
Route::get('/drop', array('middleware' => 'cors', 'uses' => 'UserController@dropContents'));
Route::get('/user/{id}/info', array('middleware' => 'cors', 'uses' => 'UserController@viewUser'));
Route::post('/user/remove', array('middleware' => 'cors', 'uses' => 'UserController@removeUser'));
Route::post('/user/update', array('middleware' => 'cors', 'uses' => 'UserController@updateUser'));
Route::post('/user/add', array('middleware' => 'cors', 'uses' => 'UserController@addUser'));