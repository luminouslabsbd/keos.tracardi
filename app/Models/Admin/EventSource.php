<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventSource extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'script_code'
    ];
}
