<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Physical extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'unit_id',
        'product_stock',
        'allow_product_conditions',
        'allow_product_preorder',
        'allow_minimum_order_qty',
        'allow_estimated_shipping_time',
        'allow_whole_sale',
    ];
    public function unit()
    {
        return $this->belongsTo(Unit::class,'unit_id');
    }
}
