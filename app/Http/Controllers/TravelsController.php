<?php

namespace App\Http\Controllers;
/////////////////////////
use App\Models\Travels;
use Error;
use Exception;
use Illuminate\Support\Facades\Auth;
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

    public function show()
    {
        return view('travelsForm.index');
    }

    public function create(Request $request)
    {
        $travel = new Travels();
        $travel->origin = $request->input('origin');
        $travel->destination = $request->input('destination');
        $travel->date = $request->input('date');
        $travel->hour = $request->input('hour');
        $travel->price = $request->input('price');
        $travel->seats = $request->input('seats');
        $travel->idusers = Auth::user()->id; // set user_id to the id of the currently authenticated user
        $travel->save();

        return redirect()->route('travels.index');

        //lo lleva al formulario
        // return view('travelsForm.index');
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

    /////////////  LISTA DE VIAJES DASHBOARD  //////////////
    public function getViajesList()
    {
        $travels = Travels::orderBy('id', 'DESC')->get();
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
}
