<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserForm;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        return Inertia::render('UserProfile');
    }

    public function editProfile(UserForm $request, User $user)
    {
        // Valida los datos del formulario.
        $validatedData = $request->validated();
        $user = User::find(Auth::id());

        // edicion de usuarios
        $user->name = $validatedData['name'];
        $user->age = $validatedData['age'];
        $user->email = $validatedData['email'];
        $user->smoker = $validatedData['smoker'];
        // $user->password =  Hash::make($validatedData['password']);
        $user->save();
        $user->get();
        // return Inertia::render('Profile/Index', [ 'users' => $user, 'success', 'Los datos se han actualizado correctamente']);
        //devuelve el perfil del usuario 
        //return Inertia::render('profile')->with('mensaje', 'Los datos se han actualizado correctamente');
    }
    function editPassword()
    {
    }
}
