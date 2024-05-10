<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DomainUrl extends Model
{
    use HasFactory;

    protected $fillable = [
        'domain_id',
        'url',
        'action',
        'role',
        'event_name',
        'event_type'
    ];
}
