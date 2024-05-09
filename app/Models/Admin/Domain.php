<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    use HasFactory;
    protected $table = 'domains';
    protected $fillable = [
        'domain',
        'user_name',
        'user_pass',
        'backend_api_url',
        'status',
    ];
}
