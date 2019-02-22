<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('username');
            $table->text('email');
            $table->text('address_street');
            $table->text('address_suite');
            $table->text('address_city');
            $table->text('address_zipcode');
            $table->text('geo_lat');
            $table->text('geo_lng');
            $table->text('phone');
            $table->text('website');
            $table->text('company_name');
            $table->text('company_catchPhrase');
            $table->text('company_bs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
}
