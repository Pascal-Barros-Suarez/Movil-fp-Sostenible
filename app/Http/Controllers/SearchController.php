<?php
namespace App\Http\Controllers;

use App\Models\Travels;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $travels = Travels::all();
        
        return Inertia::render('Search', [
            'travels' => $travels,
        ]);
    }
    public function search()
{
    $travelTable = Inertia::component('TravelTable', [
        'travels' => []
    ]);
    return Inertia::render('Search', [
        'travelTable' => $travelTable
    ]);
}
}