<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('sub_category_id')->nullable();
            $table->foreign('sub_category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedBigInteger('brand_id')->nullable();
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
            $table->string('product_sku');
            $table->string('product_name');
            $table->integer('type')->default(PHYSICAL);
            $table->double('single_product_price')->nullable();
            $table->double('single_product_discount')->nullable();
            $table->double('single_product_quantity')->default(0);
            $table->tinyInteger('product_variation')->default(1);
//            $table->tinyInteger('allow_seo')->default(0);
            $table->string('meta_keywords')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('thumbnail')->nullable();
//            $table->string('gallery')->nullable();
            $table->text('product_description')->nullable();
            $table->text('product_buy_return_policy')->nullable();

            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
