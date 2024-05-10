<?php

namespace App\Imports;

use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class CsvImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        dd($row);
        DB::table('your_table')->insert([
            'column1' => $row['column1'],
            'column2' => $row['column2'],
        ]);
    }
}
