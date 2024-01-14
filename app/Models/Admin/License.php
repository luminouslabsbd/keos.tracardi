<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;
    protected $fillable = [
        'upload_type',
        'upload_link',
        'upload_file',
        'license_platform',
        'license_type',
    ];
}
