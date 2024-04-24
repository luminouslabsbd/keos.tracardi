<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributeItems extends Model
{
    use HasFactory;
    protected $table = 'attribute_items';
    protected $fillable = [
        'attribute_id',
        'item_name',
    ];
}