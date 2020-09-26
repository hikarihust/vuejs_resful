<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::apiResource('/employee', 'Api\EmployeeController');
Route::apiResource('/supplier', 'Api\SupplierController');
Route::apiResource('/category', 'Api\CategoryController');
Route::apiResource('/product', 'Api\ProductController');
Route::apiResource('/expense', 'Api\ExpenseController');

Route::Post('/salary/paid/{id}', 'Api\SalaryController@paid');
Route::Get('/salary', 'Api\SalaryController@allSalary');

Route::Get('/salary/view/{id}', 'Api\SalaryController@viewSalary');
Route::Get('/edit/salary/{id}', 'Api\SalaryController@editSalary');
Route::Post('/salary/update/{id}', 'Api\SalaryController@salaryUpdate');

Route::Post('/stock/update/{id}', 'Api\ProductController@stockUpdate');
