<?php

namespace App\Http\Controllers;

use App\Models\Travels;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\RideForm;
use App\Http\Requests\SearchForm;
use Error;
use Exception;

class TravelsController extends Controller
{
    //

    public function index()
    {
        $travels = Travels::all();
        // return response()->json($travels);
        return view('travels.index', compact('travels'));
    }

    public function show()
    {
        return Inertia::render('AddRide');
    }

    public function create(RideForm $request, Travels $travel)
    {
        $validatedData = $request->validated();

        $travel = new Travels();
        $travel->origin = $validatedData['origin'];
        $travel->destination = $validatedData['destination'];
        $travel->date = $validatedData['date'];
        $travel->hour = $validatedData['hour'];
        $travel->price = $validatedData['price'];
        $travel->seats = $validatedData['seats'];
        $travel->idusers = Auth::user()->id; // set user_id to the id of the currently authenticated user
        $travel->save();

        Session::flash('success', 'The travel was created successfully!');
        return Inertia::render('Home');
    }


    /////////////  LISTA DE VIAJES  //////////////
    public function getViajesListAll()
    {
        $travels = Travels::orderBy('id', 'DESC')->get();
        return response()->json($travels);
    }
    /////////////  LISTA DE VIAJES DASHBOARD  //////////////
    public function getViajesList()
    {
        $user_id = auth()->user()->id;
        $travels = Travels::where('idusers', $user_id)->orderBy('id', 'DESC')->get();
        return response()->json($travels);
    }
    /////////////  DETALLES DE VIAJES DASHBOARD INDIVIDUAL //////////////
    public function getViajesDetails(Request $request)
    {
        try {
            $viajeDatos = Travels::findOrFail($request->get('viajeId'));
            return response()->json($viajeDatos);
        } catch (\Throwable $exception) {
            return response()->json(['error' => $exception->getMessage()], 500);
        }
    }

    public function search(SearchForm $request,)
    {
        $validatedData = $request->validated();
        $origin = $validatedData['origin'];
        $destination = $validatedData['destination'];


        $travels = Travels::where('origin', 'LIKE', $origin)
            ->where('destination', 'LIKE', $destination)->latest()->get()->all();

        //dd($travels);
        //return $travels->paginate(3);
        return Inertia::render('Search', ['travels' => $travels]);
    }
}
