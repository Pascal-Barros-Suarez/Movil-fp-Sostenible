<?php

namespace Database\Factories;

use App\Models\Travels;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travels>
 */
class TravelsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Travel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'origin' => $this->faker->city,
            'destination' => $this->faker->city,
            'date' => $this->faker->date(),
            'hour' => $this->faker->time(),
            'price' => $this->faker->numberBetween(3, 59),
            'seats' => $this->faker->numberBetween(1, 3),
            'idusers' => $this->faker->numberBetween(1, 10),
        ];
    }
}
