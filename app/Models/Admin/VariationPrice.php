<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VariationPrice extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'size_id',
        'color_id',
        'price',
        'qty',
        'discount',
        'thumbnail',
    ];
}
