<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VariationPrice extends Model
{
    use HasFactory;
    protected $fillable = [
        'size_id',
        'color_id',
        'price',
        'qty',
        'discount',
        'thumbnail',
    ];
}
