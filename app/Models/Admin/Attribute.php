<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $table = 'attribute';
    protected $fillable = [
        'name',
    ];

    public function items()
    {
        return $this->hasMany(AttributeItems::class, 'attribute_id');
    }

}