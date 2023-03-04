<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UsersSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 50; $i++) {
            User::create([
                'name' => $faker->name,
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'years' => $faker->numberBetween(18, 65),
                'smoker' => $faker->boolean,
                'admin' => false,
                'blocked' => false,
                'validated' => false,
                'coupon' => $faker->randomFloat(2, 0, 100),
            ]);
        }
    }
}