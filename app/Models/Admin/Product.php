<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];

//    protected $fillable = [
//        'category_id',
//        'sub_category_id',
//        'product_name',
//        'type',
//        'single_product_price',
//        'single_product_discount',
//        'single_product_quantity',
//        'product_variation',
////        'allow_seo',
//        'meta_keywords',
//        'meta_description',
//        'thumbnail',
////        'gallery',
//        'product_description',
//        'product_buy_return_policy',
//
//        'allow_product_condition',
//        'allow_product_preorder',
//        'allow_product_whole_sale',
//
//        'status',
//    ];
    public function productcolor()
    {
        return $this->belongsToMany(Color::class, 'product_colors','product_id','color_id');
    }
    public function productsize()
    {
        return $this->belongsToMany(Size::class, 'product_sizes','product_id','size_id');
    }

}
