<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $guarded=['id'];
    use HasFactory;

    protected $table = "sett_departments";
}
