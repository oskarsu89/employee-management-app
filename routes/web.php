<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employees/list', [App\Http\Controllers\EmployeesController::class, 'getEmployeeList'])->name('employee.list');

Route::post('/get/individual/employee/details', [App\Http\Controllers\EmployeesController::class, 'getEmployeeDetails'])->name('employee.details');

Route::post('/update/employee/data', [App\Http\Controllers\EmployeesController::class, 'updateEmployeeData']);

Route::delete('/delete/employee/data/{employee}', [App\Http\Controllers\EmployeesController::class, 'destroy']);

Route::post('/store/employee/data', [App\Http\Controllers\EmployeesController::class, 'store']);
