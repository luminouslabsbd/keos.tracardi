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

    public function physical()
    {
        return $this->hasOne(Physical::class,'product_id');
    }
    public function license()
    {
        return $this->hasOne(License::class,'product_id');
    }
    public function digital()
    {
        return $this->hasOne(Digital::class,'product_id');
    }
    public function variationprice()
    {
        return $this->hasMany(VariationPrice::class,'product_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class,'brand_id');
    }

    public function wholesale()
    {
        return $this->hasMany(WholeSale::class,'product_id');
    }



}
