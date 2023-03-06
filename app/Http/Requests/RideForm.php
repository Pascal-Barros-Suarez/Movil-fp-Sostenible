<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RideForm extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'origin' => 'required|string|max:255',
            'destination' => 'required|string|max:255',
            'date' => 'required|date',
            'hour' => 'required|date_format:H:i',
            'price' => 'required|integer',
            'seats' => 'required|integer',
        ];
    }
}
