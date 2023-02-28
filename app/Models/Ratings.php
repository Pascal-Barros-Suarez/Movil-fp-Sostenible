<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ratings extends Model
{
    use HasFactory;

    protected $fillable = [
        'rating_id',
        'user1_id',
        'user2_id',
        'score',
        'comment'
    ];
}
