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

use App\Http\Controllers\VeiculosController;

Route::get('/', function () {
    return view('index');
});

Route::get('/api/veiculos/cadastrar', 'VeiculosController@store');
Route::post('/api/veiculos/cadastrar', 'VeiculosController@store');
Route::get('/api/veiculos/{id?}', 'VeiculosController@show');
Route::put('/api/veiculos/atualizar/{id}', 'VeiculosController@update');
Route::delete('/api/veiculos/deletar/{id}', 'VeiculosController@destroy');