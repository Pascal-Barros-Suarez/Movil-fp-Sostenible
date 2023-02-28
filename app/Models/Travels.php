<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travels extends Model
{
    use HasFactory;

    protected $fillable = [
        'travel_id',
        'origin',
        'destination',
        'date',
        'hour',
        'seats',
        'user_id'
    ];
}
