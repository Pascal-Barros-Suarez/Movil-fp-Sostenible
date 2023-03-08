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
    public $tableName = 'ratings';

    /**
     * Run the migrations.
     * @table ratings
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->id();
            $table->integer('score')->nullable();
            $table->text('coment')->nullable();
            $table->unsignedBigInteger('user1_id');
            $table->unsignedBigInteger('user2_id');

            $table->index(["user1_id"], 'fk_ratings_users1_idx');

            $table->index(["user2_id"], 'fk_ratings_users2_idx');
            $table->nullableTimestamps();


            $table->foreign('user1_id', 'fk_ratings_users1_idx')
                ->references('id')->on('users')
                ->onDelete('Cascade')
                ->onUpdate('Cascade');

            $table->foreign('user2_id', 'fk_ratings_users2_idx')
                ->references('id')->on('users')
                ->onDelete('Cascade')
                ->onUpdate('Cascade');
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