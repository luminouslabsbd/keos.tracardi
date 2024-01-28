<?php

namespace Database\Seeders;
use App\Models\Admin\GeneralSettings;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GeneralSettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currency = [];
        // basic info
        GeneralSettings::create(['slug' => 'app_title', 'value' => 'Eshop']);
        GeneralSettings::create(['slug' => 'call_us', 'value' => '01796234234']);
        GeneralSettings::create(['slug' => 'address', 'value' => 'Mirpur-12 DOHS']);
        GeneralSettings::create(['slug' => 'country', 'value' => 'Dhaka']);
        GeneralSettings::create(['slug' => 'state', 'value' => 'Mirpur']);
        GeneralSettings::create(['slug' => 'copy_right_text', 'value' => 'Copy right Luminous Labs']);
        GeneralSettings::create(['slug' => 'email', 'value' => 'sajjad.cse.ku@gmail.com']);
        GeneralSettings::create(['slug' => 'news_latter', 'value' => 'sajjad.cse.ku@gmail.com']);
        // seo settings
        GeneralSettings::create(['slug' => 'meta_author', 'value' => 'Egens-Lab',]);
        GeneralSettings::create(['slug' => 'meta_description', 'value' => 'Egens-Lab - Jobs-Portal']);
        GeneralSettings::create(['slug' => 'meta_keywords', 'value' => 'business,eCommerce, Ecommerce, ecommerce, shop, shopify, shopify ecommerce, creative, woocommerce, design, gallery, minimal, modern, html, html5, responsive']);


        GeneralSettings::create(['slug' => 'currency', 'value' => 'Luminous Labs']);
        GeneralSettings::create(['slug' => 'home_page_selector', 'value' => 1]);
    }
}
