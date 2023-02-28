<?php

namespace App\Http\Controllers;
/////////////////////////
use App\Models\Travels;
/////////////////////////
use Illuminate\Http\Request;

class TravelsController extends Controller
{
    //

    public function index()
    {
        $travels = Travels::all();
        return response()->json($travels);
    }

}