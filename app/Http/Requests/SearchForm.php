<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SearchForm extends FormRequest
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
        ];
    }
}
