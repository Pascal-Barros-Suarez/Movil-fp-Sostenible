<?php

namespace Database\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'bookings';

    /**
     * Run the migrations.
     * @table bookings
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idtravels');
            $table->unsignedBigInteger('idusers');

            $table->index(["idtravels"], 'fk_bookings_travels1_idx');

            $table->index(["idusers"], 'fk_bookings_users1_idx');
            $table->nullableTimestamps();


            $table->foreign('idtravels', 'fk_bookings_travels1_idx')
                ->references('id')->on('travels')
                ->onDelete('Cascade')
                ->onUpdate('no action');

            $table->foreign('idusers', 'fk_bookings_users1_idx')
                ->references('id')->on('users')
                ->onDelete('Cascade')
                ->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->tableName);
    }
};