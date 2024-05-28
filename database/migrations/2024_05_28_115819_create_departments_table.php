<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sett_departments', function (Blueprint $table) {
            $table->id();

            $table->string('dept_name', 100);
            $table->string('dept_slug', 100);
            $table->enum('dept_type', ['Academic', 'Administration']);
            $table->date('dept_start_date');
            $table->date('dept_end_date')->nullable();
            $table->longText('dept_attachments')->nullable();
            $table->tinyInteger('dept_active')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sett_departments');
    }
};
