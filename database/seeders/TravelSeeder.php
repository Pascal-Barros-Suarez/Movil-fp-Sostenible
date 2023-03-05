<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Travels;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class TravelSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Get all user IDs to use when creating Travels
        $userIds = User::pluck('id')->toArray();

        for ($i = 0; $i < 50; $i++) {
            Travels::create([
                'origin' => $faker->city,
                'destination' => $faker->city,
                'date' => $faker->date,
                'price' => $faker->numberBetween(8, 15),
                'hour' => $faker->time(),
                'seats' => $faker->numberBetween(1, 5),
                'idusers' => $faker->randomElement($userIds),
            ]);
        }
    }
}