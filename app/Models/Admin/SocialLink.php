<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    use HasFactory;
    protected $fillable = [
        'facebook_link',
        'linkedin_link',
        'twitter_link',
        'instagram_link',
        'pinterest_link',
        'youtube_link',
        'tiktok_link',
        'Tumblr_link',
        'Quora_link',
        'Reddit_link'
    ];
}