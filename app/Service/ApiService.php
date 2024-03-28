<?php

namespace App\Service;

class ApiService
{
    public function sendSmsInWhatsapp($data)
    {
        $url = "https://api.gupshup.io/sm/api/v1/msg";
        $apiKey = "cky6px6gylnajx0epf1xafnxqluh8lyh";

        $data = array(
            'channel' => 'WhatsApp',
            'source' => '573022177303',
            'destination' => $data,
            'message' => json_encode(array(
                "type" => "product_details",
                "subType" => "product",
                "catalogId" => "2676589475826894",
                "productId" => "xesw76jin3",
                "body" => array(
                    "text" => "body content!"
                ),
                "footer" => array(
                    "text" => "footer content!"
                )
            )),
            'src.name' => 'CoKeos4App'
        );
        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/x-www-form-urlencoded',
            'apikey: ' . $apiKey
        ));

        $response = curl_exec($ch);
        if(curl_error($ch)) {
            echo 'Error: ' . curl_error($ch);
        }
        curl_close($ch);
        return $response;
    }


}
