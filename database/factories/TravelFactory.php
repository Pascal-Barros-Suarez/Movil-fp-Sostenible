<?php

namespace Database\Factories;

use App\Models\Travels;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TravelFactory extends Factory
{
    protected $model = Travels::class;

    public function definition()
    {
        return [
            'origin' => $this->faker->city,
            'destination' => $this->faker->city,
            'date' => $this->faker->date,
            'hour' => $this->faker->time,
            'price' => $this->faker->numberBetween($min = 10, $max = 100),
            'seats' => $this->faker->numberBetween($min = 1, $max = 4),
            'user_id' => User::factory(),
        ];
    }
}