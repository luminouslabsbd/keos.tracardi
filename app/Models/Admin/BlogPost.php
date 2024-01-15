<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlogPost extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'blog_category_id',
        'name',
        'tags',
        'thumbnail',
        'blog_details',
        'allow_seo',
        'meta_keywords',
        'meta_description',
        'status',
    ];
}
