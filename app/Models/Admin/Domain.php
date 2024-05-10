<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Domain extends Model
{
    use HasFactory;
    protected $table = 'domains';
    protected $fillable = [
        'user_id',
        'domain',
        'user_name',
        'user_pass',
        'backend_api_url',
        'status',
    ];

    /**
     * Get all of the urls for the Domain
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function urls(): HasMany
    {
        return $this->hasMany(DomainUrl::class, 'domain_id');
    }
}
