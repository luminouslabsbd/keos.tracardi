<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Digital extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'upload_type',
        'upload_link',
        'upload_file',
    ];
}
