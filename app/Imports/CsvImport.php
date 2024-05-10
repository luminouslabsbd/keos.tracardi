<?php

namespace App\Imports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CsvImport implements ToModel, WithHeadingRow
{
    protected $domainId;

    public function __construct($domainId)
    {
        $this->domainId = $domainId;
    }

    public function model(array $row)
    {
        DB::table('roles')->insert([
            'domain_id'  => $this->domainId,
            'url'        => $row['url'],
            'event_name' => $row['event_name'],
            'event_type' => $row['event_type'],
            'role'       => $row['role'],
            'action'     => $row['action'],
        ]);
    }
}
