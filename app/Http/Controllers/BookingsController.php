<?php

namespace App\Http\Controllers;

use App\Models\Bookings;
use Illuminate\Http\Request;
use App\Models\Travels;
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
                'hour' => $travel->hour, // Use 'hour' property instead of 'time'
                // 'price' => $booking->price,
                // 'seats' => $booking->seats,
                'created_at' => $booking->created_at,
            ];
        });

        return response()->json(['bookings' => $bookingsWithDetails], 200);
    }

    public function store(Request $request)
    {
        // Retrieve the data from the request
        $idtravels = $request->input('idtravels');
        $travel = Travels::find($idtravels);

        // Get the ID of the logged-in user
        $idusers = Auth::id();
        if (!$idusers) {
            // User is not authenticated, return error response
            return redirect()->route('register');
        }

        // Insert the record in the bookingsTable
        if ($travel->seats > 0) {
            $booking = new Bookings();
            $booking->idtravels = $idtravels;
            $booking->idusers = $idusers;
            $booking->save();
            
            // Restar una plaza a los asientos disponibles
            $travel->seats = $travel->seats - 1;
            $travel->save();

            Session::flash('success', 'You have booked a place on the trip!');
            return Inertia::render('Home');

        } else {
            
            Session::flash('error', 'Sorry the trip is full!');
            return Inertia::render('Search');
        }
    }
}
