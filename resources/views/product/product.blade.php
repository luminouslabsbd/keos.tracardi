<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product | {{ $product->product_name ?? "Product Name"}}</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

    <style>
        .description-wrapper {
            height: 220px;
            overflow: hidden;
        }
    </style>
</head>
<body>
<div class="font-[sans-serif]">
    <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="w-full lg:sticky top-0 sm:flex gap-2">
                <img src="{{url('storage/product/'.$product->thumbnail) ?? 'https://readymadeui.com/images/product2.webp'}}" alt="Product" class="w-4/5 rounded object-cover" />
            </div>
            <div>
                <h2 class="text-2xl font-extrabold text-purple-600">{{ $product->product_name ?? "Product Name" }}</h2>
                <div class="flex flex-wrap gap-4 mt-4">
                    <p class="text-gray-800 text-xl font-bold">$ {{ $product->single_product_price ?? '' }}</p>
                </div>

                <div class="mt-8">
                    <h3 class="text-lg font-bold text-gray-800">About the product</h3>
                        @if(\Illuminate\Support\Str::limit($product->product_description) > 50)
                        <div class="description-wrapper">
                            <p>{!! $product->product_description !!}</p>
                        </div>

                        <div class="mt-3">
                            <button class="px-4 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white showMore">Show More...</button>
                            <button class="px-4 py-1 rounded bg-purple-600 hover:bg-purple-700 text-white showLess hidden">Show Less...</button>
                        </div>
                            @else
                        <p>{!! $product->product_description !!}</p>

                    @endif

                </div>
            </div>
        </div>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $(".showLess").hide(); // Hide the "Show Less" button initially

        $(".showMore").click(function(){
            $(this).hide();
            $(".showLess").show();
            $(".description-wrapper").css('height', 'auto');
        })
        $(".showLess").click(function(){
            $(this).hide();
            $(".showMore").show();
            $(".description-wrapper").css('height', '220px');
        })



        // $(".more").click(function() {
        //     $(".description-wrapper").css('height', 'auto'); // Set height to 290px
        //     $(".less").show(); // Show the "Show More" button
        //     $(this).hide(); // Hide the "Show Less" button
        // });
        //
        // $(".less").click(function() {
        //     $(".description-wrapper").css('height', '290px'); // Set height to auto
        //     $(".more").show(); // Show the "Show Less" button
        //     $(this).hide(); // Hide the "Show More" button
        // });
    });
</script>

</body>
</html>
