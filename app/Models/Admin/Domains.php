<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domains extends Model
{
    use HasFactory;
    protected $table = 'domains';
    protected $fillable = [
        'domain',
        'user_name',
        'user_pass',
        'status',
    ];
}
