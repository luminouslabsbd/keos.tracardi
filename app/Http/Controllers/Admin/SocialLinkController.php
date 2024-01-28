<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Admin\SocialLink;

class SocialLinkController extends Controller
{
    public function socialLinkData()
    {
        $socialLinkResult = SocialLink::first();

        // dd($socialLinkResult);

        return response()->json($socialLinkResult);
    }

    public function updateSocialLink(Request $request)
    {
        
        $data = [
            "facebook_link" => $request->facebook_link,
            "linkedin_link" => $request->linkedin_link,
            "twitter_link" => $request->twitter_link,
            "instagram_link" => $request->instagram_link,
            "pinterest_link" => $request->pinterest_link,
            "youtube_link" => $request->youtube_link,
            "tiktok_link" => $request->tiktok_link,
            "tumblr_link" => $request->tumblr_link,
            "quora_link" => $request->quora_link,
            "reddit_link" => $request->reddit_link
        ];
        
        try {
            SocialLink::updateOrCreate([], $data);

            return back()->with('success', 'Update Successfully');
        }catch(\Exception $e) {
            return back()->with('error', 'Something went wrong');
        }
    }
}
