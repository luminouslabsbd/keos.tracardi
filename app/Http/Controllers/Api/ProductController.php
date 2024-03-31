<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Admin\Product;
use App\Service\ApiService;
use Illuminate\Http\Request;

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
    public function index()
    {
        return ProductResource::collection(Product::all());
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
        //
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

        $responseData = [];

        foreach ($productsId as $item){
            $response = self::$apiService->sendSmsInWhatsapp($whatsapNumber,$item);
            $responseData.push($response);
        }
//
//        if (! $whatsapNumber){
//            return response()->json([
//                'status' => true,
//                'message' => 'Send Success',
//                'data' => "Whatsapp number cannot found"
//            ],200);
//        }
//
//        $response = self::$apiService->sendSmsInWhatsapp($whatsapNumber,$productsId);

        return response()->json([
           'status' => true,
           'message' => 'Return Request',
           'data' => $responseData
        ],200);
    }
}
