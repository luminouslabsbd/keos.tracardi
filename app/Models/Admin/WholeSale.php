<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WholeSale extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'quantity',
        'discount',
    ];
}
