<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travels extends Model
{
    use HasFactory;
    // created at y updated at se pone automaticamente //
    public $timestamps = true;
    //
    protected $table = 'travels';
    protected $fillable = [
        
        'origin',
        'destination',
        'date',
        'hour',
        'price',
        'seats',
        'idusers'
    ];
}
