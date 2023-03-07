<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingsController extends Controller
{
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

    // Return a response indicating success
    return Inertia::render('Home');
}
}
