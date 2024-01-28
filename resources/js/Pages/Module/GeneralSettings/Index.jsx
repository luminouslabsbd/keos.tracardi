import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/Mainlayout";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useForm } from "react-hook-form";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";

function Index() {
    const { result } = usePage().props;
    const [selectedTab, setSelectedTab] = useState('inbox');
    const [socialLinkData, setsocialLinkData] = useState();
    const [data] = useState(result);
    
    const getSlugValue = (slug) => {
        return data.find((item) => item.slug === slug)?.value;
    };
    
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            app_title: getSlugValue('app_title'),
            copy_right_text: getSlugValue('copy_right_text'),
        }
    });


    
    // get social link data
    function getSocialLink() {
        setSelectedTab('social_link');
        
        const fetchLinkData = async () => {
            try {
                const response = await axios.get('/admin/social-link/get-social-link-data');
                setsocialLinkData(response.data);

                setValue('facebook_link', response.data?.facebook_link || '');
                setValue('linkedin_link', response.data?.linkedin_link || '');
                setValue('twitter_link', response.data?.twitter_link || '');
                setValue('instagram_link', response.data?.instagram_link || '');
                setValue('pinterest_link', response.data?.pinterest_link || '');
                setValue('youtube_link', response.data?.youtube_link || '');
                setValue('tiktok_link', response.data?.tiktok_link || '');
                setValue('tumblr_link', response.data?.tumblr_link || '');
                setValue('quora_link', response.data?.quora_link || '');
                setValue('reddit_link', response.data?.reddit_link || '');
            } catch (error) {
                console.error(error);
            }
        }

        fetchLinkData();
    }

    function generalSettingsOnSubmit(data) {
        router.post("/admin/general-settings/general-settings", data);
    }
    
    function socialLinkOnSubmit(data) {

        router.post("/admin/social-link/update-social-link", data);
    }

    return (
        <div>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div
                    className="panel xl:block p-4 dark:gray-50 w-[250px] max-w-full flex-none space-y-3 xl:relative absolute z-10 xl:h-auto h-full hidden ltr:xl:rounded-r-md ltr:rounded-r-none rtl:xl:rounded-l-md rtl:rounded-l-none overflow-hidden"
                >
                    <div className="flex flex-col h-full pb-16">
                        <PerfectScrollbar
                            className="relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow">
                            <div className="space-y-1">
                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'inbox' ? 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]' : ''
                                        }`}
                                    onClick={() => {
                                        setSelectedTab('inbox');

                                    }}
                                >
                                    <div className="flex items-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <path
                                                opacity="0.5"
                                                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="ltr:ml-3 rtl:mr-3">Inbox</div>
                                    </div>

                                </button>


                                <button
                                    type="button"
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'social_link' ? 'bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]' : ''
                                        }`}
                                        onClick={getSocialLink}
                                    // onClick={() => {
                                    //     setSelectedTab('social_link');

                                    // }}
                                >
                                    <div className="flex items-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <path
                                                d="M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path opacity="0.5" d="M6 18L21 3" stroke="currentColor" strokeWidth="1.5"
                                                strokeLinecap="round" />
                                        </svg>

                                        <div className="ltr:ml-3 rtl:mr-3">Social Link</div>
                                    </div>
                                </button>

                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className="panel p-0 flex-1 overflow-x-hidden h-full">

                    <div className="flex flex-col h-full">
                        <div>
                            <div className="p-4">

                                {
                                    selectedTab == "inbox" && (
                                        <>

                                            <div className="flex items-center justify-between mb-5">
                                                <h5 className="font-semibold text-lg dark:text-white-light">
                                                    General Settings Form
                                                </h5>
                                            </div>
                                            <form className="space-y-5" onSubmit={handleSubmit(generalSettingsOnSubmit)} method="post">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label> App Title <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("app_title", { required: "App Title Is required" })}
                                                            type="text"
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.app_title &&
                                                            <p className="text-red-600 pt-2">{errors.app_title.message}</p>}
                                                    </div>



                                                    <div>
                                                        <label> Copy Right Text <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("copy_right_text", { required: "Copy Right Text required" })}
                                                            type="text"
                                                            // defaultValue={getSlugValue('copy_right_text')|| ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.copy_right_text &&
                                                            <p className="text-red-600 pt-2">{errors.copy_right_text.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> Contact Number <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("call_us", { required: "Contact Number Is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('call_us') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.call_us &&
                                                            <p className="text-red-600 pt-2">{errors.call_us.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> Email <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("email", { required: "Email is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('email') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.email &&
                                                            <p className="text-red-600 pt-2">{errors.email.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> Address <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("address", { required: "Address Is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('address') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.address &&
                                                            <p className="text-red-600 pt-2">{errors.address.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> State <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("state", { required: "State Is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('state') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.state &&
                                                            <p className="text-red-600 pt-2">{errors.state.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> Country <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("country", { required: "Country Is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('country') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.country &&
                                                            <p className="text-red-600 pt-2">{errors.country.message}</p>}
                                                    </div>
                                                    <div>
                                                        <label> News Letter <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("news_latter", { required: "News Letter Is required" })}
                                                            type="text"
                                                            defaultValue={getSlugValue('news_latter') || ''}
                                                            className="form-input"
                                                            placeholder="Enter Color Name"
                                                        />
                                                        {errors.news_latter &&
                                                            <p className="text-red-600 pt-2">{errors.news_latter.message}</p>}
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary !mt-6"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </>
                                    )
                                }
                                {
                                   selectedTab == "social_link" && (
                                    <>
                                        <div className="flex items-center justify-between mb-5">
                                            <h5 className="font-semibold text-lg dark:text-white-light">
                                                Social Link Form
                                            </h5>
                                        </div>

                                        <form className="space-y-5" onSubmit={handleSubmit(socialLinkOnSubmit)} method="post">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label>Facebook Link</label>
                                                    <input
                                                        {...register("facebook_link")}
                                                        type="text"
                                                        className="form-input"
                                                        placeholder="Enter Facebook Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>LinkedIn Link</label>
                                                    <input
                                                        {...register("linkedin_link")}
                                                        type="text"
                                                        // value={socialLinkData?.linkedin_link}
                                                        className="form-input"
                                                        placeholder="Enter LinkedIn Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Twitter Link</label>
                                                    <input
                                                        {...register("twitter_link")}
                                                        type="text"
                                                        // value={socialLinkData?.twitter_link}
                                                        className="form-input"
                                                        placeholder="Enter Twitter Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Instagram Link</label>
                                                    <input
                                                        {...register("instagram_link")}
                                                        type="text"
                                                        // value={socialLinkData?.instagram_link}
                                                        className="form-input"
                                                        placeholder="Enter Instagram Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Pinterest Link</label>
                                                    <input
                                                        {...register("pinterest_link")}
                                                        type="text"
                                                        // value={socialLinkData?.pinterest_link}
                                                        className="form-input"
                                                        placeholder="Enter Pinterest Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>YouTube Link</label>
                                                    <input
                                                        {...register("youtube_link")}
                                                        type="text"
                                                        // value={socialLinkData?.youtube_link}
                                                        className="form-input"
                                                        placeholder="Enter YouTube Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Tiktok Link</label>
                                                    <input
                                                        {...register("tiktok_link")}
                                                        type="text"
                                                        // value={socialLinkData?.tiktok_link}
                                                        className="form-input"
                                                        placeholder="Enter Tiktok Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Tumblr Link</label>
                                                    <input
                                                        {...register("tumblr_link")}
                                                        type="text"
                                                        // value={socialLinkData?.tumblr_link}
                                                        className="form-input"
                                                        placeholder="Enter Tumblr Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Quora Link</label>
                                                    <input
                                                        {...register("quora_link")}
                                                        type="text"
                                                        // value={socialLinkData?.quora_link}
                                                        className="form-input"
                                                        placeholder="Enter Quora Link"
                                                    />
                                                </div>

                                                <div>
                                                    <label>Reddit Link</label>
                                                    <input
                                                        {...register("reddit_link")}
                                                        type="text"
                                                        // value={socialLinkData?.reddit_link}
                                                        className="form-input"
                                                        placeholder="Enter Reddit Link"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary !mt-6"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </>

                                   )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

Index.layout = (page) => (
    <MainLayout children={page} title="Settings || Luminous-Ecommerce" />
);

export default Index;
