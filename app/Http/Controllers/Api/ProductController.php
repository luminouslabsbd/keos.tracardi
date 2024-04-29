<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Admin\Product;
use App\Service\ApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public static $apiService;

    public function __construct(ApiService $apiService)
    {
        self::$apiService = $apiService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $product = Product::query();
        if($request->input('query') != null && $request->input('query') != 'null' && !empty($request->input('query'))){
            $product->where('product_name', 'like', "%{$request->input('query')}%");
        }
        $product = $product->simplePaginate(8);
//            ->when(\request()->input('query'), function($query, $search){
//                $query->where('product_name', 'like', "%{$search}%");
//            })
//            ->get();
        return ProductResource::collection($product);
    }

    public function getAllProducts()
    {
        return ProductResource::collection(Product::simplePaginate(8));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      //
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::query()->findOrFail($id);
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Send whatsapp message here.
     */
    public function sendWpMessageSingleProduct(Request $request)
    {
        $data = $request->all();
        $whatsapNumber = $data['user']['visitor']['phone'][0]['phoneNumber'] ?? null;
        $productId = $data['product_id'];

        if (! $whatsapNumber){
            return response()->json([
                'status' => true,
                'message' => 'Send Success',
                'data' => "Whatsapp number cannot found"
            ],200);
        }

        $response = self::$apiService->sendSmsInWhatsapp($whatsapNumber,$productId);

        return response()->json([
           'status' => true,
           'message' => 'Send Success',
           'data' => $response
        ],200);
    }
    public function sendWpMessageCartProduct(Request $request)
    {

        $data = $request->all();
        $whatsapNumber = $data['user']['visitor']['phone'][0]['phoneNumber'] ?? null;
        $productsId = $data['products'];
        $totalProducts = count($productsId);

        $responseData = [];

//        while ($totalProducts){
//            $response = self::$apiService->sendSmsInWhatsapp($whatsapNumber,$productsId[$totalProducts - 1]);
//            $decodedResponse = json_decode($response, true);
//            $responseData[] = $decodedResponse;
//
//            $totalProducts --;
//        }

        foreach ($productsId as $key => $item){
            if($key == 1)
            {
                return "index 1";
                dd('index 1');
            }

//            $response = self::$apiService->sendSmsInWhatsapp($whatsapNumber,$item);
//            $decodedResponse = json_decode($response, true);
//            $responseData[] = $decodedResponse;
        }

        return response()->json([
           'status' => true,
           'message' => 'Return Request',
           'data' => $responseData
        ],200);
    }

    public function getSingleProduct($id)
    {
        $product = Product::findOrFail($id);
        return view('product.product',compact('product'));
    }


    public function sendMultipleProduct()
    {
        // API endpoint
        $apiUrl = 'https://api.gupshup.io/sm/api/v1/msg';

        // HTTP headers
        $headers = [
            'apikey' => 'cky6px6gylnajx0epf1xafnxqluh8lyh', // Your API key
            'Content-Type' => 'application/x-www-form-urlencoded', // Expected content type
        ];

        $requestData = [
            'channel' => 'whatsapp',
            'source' => '573022177303',
            'destination' => '8801784124291',
            'message' => [
                'type' => 'product_details',
                'subType' => 'product_list',
                'catalogId' => '2676589475826894',
                'productId' => '',
                'body' => [
                    'text' => 'body content!'
                ],
                'header' => [
                    'type' => 'text',
                    'text' => 'header content!'
                ],
                'footer' => [
                    'text' => 'footer content!'
                ],
                'sections' => [
                    [
                        'title' => 'Titulo',
                        'productList' => [
                            [
                                'productId' => '16'
                            ],
                            [
                                'productId' => '17'
                            ],
                            [
                                'productId' => '18'
                            ]
                        ]
                    ]
                ]
            ],
            'src.name' => 'Gersjdn',
        ];

        $response = Http::withHeaders($headers)->post($apiUrl, $requestData);

        return $response;
    }
}
