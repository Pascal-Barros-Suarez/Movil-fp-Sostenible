<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Inertia\Inertia;
///////////////////////////////////////
use App\Http\Controllers\TravelsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SearchController;

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
//una vez logueados
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');
//errores 404 y 500
Route::get('/404', function () {
    Route::view('404');
});
Route::get('/500', function () {
    Route::view('500');
});


Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

// USER //
Route::get('/profile', [UserController::class, 'show'])->middleware(['auth', 'verified'])->name('User.show->Profile');
Route::post('/profile-edit', [UserController::class, 'editProfile'])->middleware(['auth', 'verified'])->name('User.edit->Profile');
Route::post('/profile-edit-password', [UserController::class, 'editPassword'])->middleware(['auth', 'verified'])->name('User.edit.password->Profile');

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

// Todas los viajes
Route::get('/search', function () {
    return Inertia::render('Search');
});
Route::get('/get/viajes/list/all', [TravelsController::class, 'getViajesListAll'])->name('all->viajes');
Route::post('/search', [TravelsController::class, 'search'])->name('search');


//F O R M //
Route::get('/newride', [TravelsController::class, 'show'])->middleware(['auth', 'verified'])->name('newride.form');
Route::post('/newride', [TravelsController::class, 'create'])->middleware(['auth', 'verified'])->name('newride');
//////////////////////////////
//////////////////////////////

// lista de viajes if auth
Route::get('/get/viajes/list', [TravelsController::class, 'getViajesList'])->middleware(['auth', 'verified'])->name('viajes.lista');

// detalles viajes
Route::post('/get/individual/viaje/details', [TravelsController::class, 'getViajesList'])->name('viajes.details');

///////////////////////////
Auth::routes();
