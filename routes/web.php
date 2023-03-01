<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Inertia\Inertia;
use App\Http\Controllers\TravelsController;


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

Route::get('/welcomereact', function () {
    $user = new User();
    $user->name = "Mr. Bean";
    return Inertia::render('Welcome', ['user' => $user]);
});

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

//////////////////////////////
Route::get('/travels', [TravelsController::class, 'index'])->name('travels.index');
Route::get('/newride', [TravelsController::class, 'create'])->middleware(['auth', 'verified'])->name('travels.create');
//////////////////////////////

Auth::routes();
