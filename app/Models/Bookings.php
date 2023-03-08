<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookings extends Model
{
    protected $table = 'bookings';
    protected $fillable = ['idtravels', 'idusers', 'time', 'price', 'seats'];

    public function travel()
    {
        return $this->belongsTo('App\Models\Travels', 'idtravels');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\Users', 'idusers');
    }
}