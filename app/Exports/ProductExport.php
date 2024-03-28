<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;

class ProductExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings(): array
    {
        return [
            'id',
            'Title',
            'Description',
            'Availability',
            'Condition',
            'Price',
            'Link',
            'Image',
            'Brand'
        ];
    }

    public function collection()
    {
        $productLists = [];

        $products = \App\Models\Admin\Product::get();

        foreach ($products as $product) {
            $productLists[] = [
                'id' => $product->id,
                'product_name' => $product->product_name,
                'product_description' => $product->product_description,
                'single_product_quantity' => $product->single_product_quantity > 0 ? "in stock" : "Out of stock",
                'condition' => "yes",
                'single_product_price' => $product->single_product_price,
                'url'=> url("/product/".$product->id),
                'thumbnail' => url("/storage/product/".$product->thumbnail),
                'brand' => "Luminous Labs",
            ];
        }
        return collect($productLists);
    }
}
