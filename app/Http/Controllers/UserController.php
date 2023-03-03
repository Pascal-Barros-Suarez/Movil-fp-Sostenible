<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /*
    public function edit()
    {
    $user = Auth::user();
    return view('profile.edit', compact('user'));
    }*/

    public function show()
    {
        return Inertia::render('UserProfile');
    }


    public function logout()
    {
        //
    }
}
