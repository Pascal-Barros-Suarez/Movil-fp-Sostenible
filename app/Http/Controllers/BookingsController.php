<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class BookingsController extends Controller
{
    public function index()
{
    $bookings = auth()->user()->bookings;

    $bookingsWithDetails = $bookings->map(function ($booking) {
        $travel = $booking->travel;
        return [
            'id' => $booking->id,
            'origin' => $travel->origin,
            'destination' => $travel->destination,
            'date' => $travel->date,
            'time' => $booking->time,
            'price' => $booking->price,
            'seats' => $booking->seats,
            'created_at' => $booking->created_at,
        ];
    });

    return response()->json(['bookings' => $bookingsWithDetails], 200);
}
    //

    public function store(Request $request)
{
    // Retrieve the data from the request
    $idtravels = $request->input('idtravels');

    // Get the ID of the logged-in user
    $idusers = Auth::id();
    if (!$idusers) {
        // User is not authenticated, return error response
        return redirect()->route('register');
    }

    // Insert the record in the bookingsTable
    $booking = new Bookings();
    $booking->idtravels = $idtravels;
    $booking->idusers = $idusers;
    $booking->save();

    Session::flash('success');

    // Return a response indicating success
    return Inertia::render('Home');
}
}
