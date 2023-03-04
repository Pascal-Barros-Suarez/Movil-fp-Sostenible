<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Inertia\Inertia;
///////////////////////////////////////
use App\Http\Controllers\TravelsController;
use App\Http\Controllers\UserController;


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

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::get('/', function () {
    return Inertia::render('Initiated');
});

//errores 404 y 500
Route::get('/404', function () {
    Route::view('404');
});
Route::get('/500', function () {
    Route::view('500');
});

// USER //
Route::post('/profile-edit', [UserController::class, 'editProfile'])->name('User.edit->Profile');
Route::get('/profile', [UserController::class, 'show'])->name('User.show->Profile');

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');


//////////////////////////////
Route::get('/travels', [TravelsController::class, 'index'])->name('travels.index');
//F O R M //
Route::get('/newride', [TravelsController::class, 'show'])->name('newride.form');
Route::post('/newride', [TravelsController::class, 'create'])->name('travels.create');

//////////////////////////////
// lista de viajes if auth
Route::get('/get/viajes/list', [TravelsController::class, 'getViajesList'])->name('viajes.lista');

//////////////////////////////
// detalles viajes
Route::post('/get/individual/viaje/details',[TravelsController::class, 'getViajesList'])->name('viajes.details');
///////////////////////////
Auth::routes();
