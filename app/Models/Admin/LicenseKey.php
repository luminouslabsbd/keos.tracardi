<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LicenseKey extends Model
{
    use HasFactory;
    protected $table = 'license_keys';
    protected $fillable = [
        'license_id',
        'key',
        'quantity',
    ];
}
