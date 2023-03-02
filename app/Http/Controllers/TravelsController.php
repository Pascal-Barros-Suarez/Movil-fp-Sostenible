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
        // return response()->json($travels);
        return view('travels.index', compact('travels'));
    }



    public function create()
    {
        //lo lleva al formulario
        return view('travelsForm.index');
    }

    public function store(Request $request)
{
    // $travel = new Travels;
    // $travel->destination = $request->destination;
    // $travel->departure_date = $request->departure_date;
    // $travel->seats = $request->seats;
    // $travel->save();

    // return redirect()->route('travels.index');
}
}
