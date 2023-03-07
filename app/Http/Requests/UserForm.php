<?php

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class UserForm  extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'age' => 'nullable|integer',
            'email' => 'required|email|max:255|unique:users,email,' . $this->user()->id,
            'smoker' => 'nullable|string|max:100',
        ];
    }
}