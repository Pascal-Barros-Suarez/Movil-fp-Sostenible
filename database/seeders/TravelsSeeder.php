<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class TravelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 50) as $index) {
            DB::table('travels')->insert([
                'origin' => $faker->city,
                'destination' => $faker->city,
                'date' => $faker->date(),
                'hour' => $faker->time(),
                'price' => $faker->numberBetween(1000, 5000),
                'seats' => $faker->numberBetween(1, 10),
                'idusers' => $faker->numberBetween(1, 10),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
