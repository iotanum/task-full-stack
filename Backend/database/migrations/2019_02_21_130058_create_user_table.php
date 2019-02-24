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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('username');
            $table->text('email') -> unique();
            $table->text('address_street') -> nullable();
            $table->text('address_suite') -> nullable();
            $table->text('address_city') -> nullable();
            $table->text('address_zipcode') -> nullable();
            $table->text('geo_lat') -> nullable();
            $table->text('geo_lng') -> nullable();
            $table->text('phone') -> nullable();
            $table->text('website') -> nullable();
            $table->text('company_name') -> nullable();
            $table->text('company_catchPhrase') -> nullable();
            $table->text('company_bs') -> nullable();
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
