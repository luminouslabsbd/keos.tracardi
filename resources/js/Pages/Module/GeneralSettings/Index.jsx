import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/Mainlayout";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useForm } from "react-hook-form";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";
// import PopupBanner from "../../Component/PopupBanner";

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
        // router.post("/admin/general-settings/general-settings", data);
        console.log(data);
    }
    
    function socialLinkOnSubmit(data) {

        router.post("/admin/social-link/update-social-link", data);
    } 



  ///////////////////

  function websiteLogoSubmit(data){
    console.log(data)
  }


    // For Header Logo Image Handle
    const [isSvgShow, setSvgShow] = useState(true);
    const [selectedImage, setSelectedImage] = useState(result?.headerLogo ? `/storage/brand/${result?.headerLogo}` : '/assets/images/user-profile.jpeg');
    const handleHeaderLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };
    function handleDeleteImage() {
        setSelectedImage(null);
        reset({ headerLogo: '' });
    }
    // For Header Logo Image Handle end


    // Footer Logo Image Handle 
    const [footerImage ,  setFooterImage] = useState(result?.footerLogo ? `/storage/brand/${result?.footerLogo}` : '/assets/images/user-profile.jpeg');
    const handleFooterLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFooterImage(URL.createObjectURL(file));
        }
    };

    function handleFooterDeleteImage() {
        setFooterImage(null);
        reset({ footerLogo: '' });
    }
    // Footer Logo Image Handle End

    //////////////////////////////////////////

    // Invoice Logo Image Handle 
     const [invoiceImage ,  setInvoiceImage] = useState(result?.invoiceLogo ? `/storage/brand/${result?.invoiceLogo}` : '/assets/images/user-profile.jpeg');
     const handleInvoiceLogoChange = (e) => {
         const file = e.target.files[0];
         if (file) {
            setInvoiceImage(URL.createObjectURL(file));
         }
     };
 
     function handleInvoiceDeleteImage() {
        setInvoiceImage(null);
         reset({ invoiceLogo: '' });
     }
     // Invoice Logo Image Handle End


///////////////////////////////////////////////////


    //  Popup Banner Handle
    const [popupBanner ,  setPopupBanner] = useState(result?.popupBanner ? `/storage/brand/${result?.popupBanner}` : '/assets/images/popUpBanner.jpg');
    const handlePopupBanner = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPopupBanner(URL.createObjectURL(file));
        }
    };

    function handlePopupBannerDelete() {
        setPopupBanner(null);
        reset({ popupBanner: '' });
    }
     
    function popupBannerSubmit(data){
        console.log(data)
      }

     //  Popup Banner Handle End


   ////////////////////////////////////////////////////


      //  Favicon Handle
    const [favicon ,  setFavicon] = useState(result?.favicon ? `/storage/brand/${result?.favicon}` : '/assets/images/favicon.png');
    const handleFavicon = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFavicon(URL.createObjectURL(file));
        }
    };

    function handleFaviconDelete() {
        setFavicon(null);
        reset({ favicon: '' });
    }
     
    function fabiconSubmit(data){
        console.log(data)
      }

     //  Favicon Handle End




/////////////////////////////////////////////////


    // Website Loader 

          // Website Loader Handle
          const [loader ,  setloader] = useState(result?.loader ? `/storage/brand/${result?.loader}` : '/assets/images/Loader.gif');
          const handleLoader = (e) => {
              const file = e.target.files[0];
              if (file) {
                setloader(URL.createObjectURL(file));
              }
          };
      
          function handleLoaderDelete() {
            setloader(null);
              reset({ loader: '' });
          }
           
          function loaderSubmit(data){
              console.log(data)
            }
      
           //  Website Loader Handle


        // Admin Loader Handle

        const [adminLoader ,  setAdminLoader] = useState(result?.adminLoader ? `/storage/brand/${result?.adminLoader}` : '/assets/images/Loader.gif');

        const handleAdminLoader = (e) => {
            const file = e.target.files[0];
            if (file) {
                setAdminLoader(URL.createObjectURL(file));
            }
        };
    
        function handleAdminLoaderDelete() {
            setAdminLoader(null);
            reset({ adminLoader: '' });
        }

        // Admin Loader Handle End

    // Website Loader End


 ////////////////////////////////////////////////////////////////


    //Breadcumb Banner Handle

    const [breadcumb ,  setBreadcumb] = useState(result?.breadcumb ? `/storage/brand/${result?.breadcumb}` : '/assets/images/popUpBanner.jpg');
    const handleBreadcumb = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBreadcumb(URL.createObjectURL(file));
        }
    };

    function handleBreadcumbDelete() {
        setBreadcumb(null);
        reset({ adminLoader: '' });
    }
     
    function breadcumbSubmit(data){
        console.log(data)
      }

    //Breadcumb Banner Handle End

   ////////////////////////////////////////////////////////////


       //Error Banner Handle

       const [errorBanner1 ,  setErrorBanner1] = useState(result?.errorBanner1 ? `/storage/brand/${result?.errorBanner1}` : '/assets/images/404Error.jpg');
       const [errorBanner2 ,  setErrorBanner2] = useState(result?.errorBanner2 ? `/storage/brand/${result?.errorBanner2}` : '/assets/images/404Error.jpg');
    //-------------------------
       const handleErrorBanner1 = (e) => {
           const file = e.target.files[0];
           if (file) {
            setErrorBanner1(URL.createObjectURL(file));
           }
       };

       const handleErrorBanner2 = (e) => {
        const file = e.target.files[0];
        if (file) {
        setErrorBanner2(URL.createObjectURL(file));
        }
    };

    // ---------------------------------
   
       function handleErrorBanner1Delete() {
        setErrorBanner1(null);
           reset({ errorBanner1: '' });
       }
        
       function handleErrorBanner2Delete() {
        setErrorBanner2(null);
           reset({ errorBanner2: '' });
       }
        
    // ----------------------------

       function errorBannerSubmit(data){
           console.log(data)
         }
   
       //Breadcumb Banner Handle End
   
    //  Handle Affiliate Program 

    const [featuredImage ,  setFeaturedImage] = useState(result?.featuredImage ? `/storage/brand/${result?.featuredImage}` : '/assets/images/404Error.jpg');

    const handleFeaturedImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFeaturedImage(URL.createObjectURL(file));
        }
    };

    function handleFeaturedImageDelete() {
        setFeaturedImage(null);
           reset({ featuredImage: '' });
       }

    function affiliateProgramSubmit(data){
        console.log(data)
    }

    // End Affiliate Program

    // Handle Website Maintenance
     
    function MaintenanceOnSubmit(data){
        console.log(data)
    }

    // Handle Website Maintenance End


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
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'inbox' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
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
                                    className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'social_link' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
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

                                        {/* for Logo Uploader */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'logo' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('logo');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Logo</div>
                                            </div>
                                        </button>
                                        {/*for Logo Uploader End */}

                                        {/* For PopUp Banner */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Popup Banner' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Popup Banner');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Popup Banner</div>
                                            </div>
                                        </button>
                                        {/* For PopUp Banner End */}

                                        {/* For Upload Loader */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Loader' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Loader');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Loader</div>
                                            </div>
                                        </button>
                                        {/* For Upload Loader End */}

                                        {/* For FavIcon Uploader */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Favicon' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Favicon');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Favicon</div>
                                            </div>
                                        </button>
                                        {/* For FavIcon Uploader End */}

                                        {/*For Affiliate Program  */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Affiliate Program' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Affiliate Program');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Affiliate Program</div>
                                            </div>
                                        </button>
                                        {/*For Affiliate Program End */}

                                        {/*Breadcrumb Banner*/}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Breadcrumb Banner' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Breadcrumb Banner');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Breadcrumb Banner</div>
                                            </div>
                                        </button>
                                        {/*Breadcrumb Banner End */}

                                        {/* Error Banner */}
                                        <button
                                            type="button"
                                            className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Error Banner' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                                }`}
                                            
                                            onClick={() => {
                                                setSelectedTab('Error Banner');

                                            }}
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

                                                <div className="ltr:ml-3 rtl:mr-3">Error Banner</div>
                                            </div>
                                        </button>
                                        {/* Error Banner End */}

                                        {/* Website Maintenance */}
                                        <button
                                        type="button"
                                        className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Website Maintenance' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                            }`}
                                        
                                        onClick={() => {
                                            setSelectedTab('Website Maintenance');

                                        }}
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

                                            <div className="ltr:ml-3 rtl:mr-3">Website Maintenance</div>
                                        </div>
                                        </button>
                                        {/*Website Maintenance End */}

                                        {/* Website Contents */}
                                        <button
                                        type="button"
                                        className={`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-[#FF6243] hover:text-[#FF6243] dark:hover:bg-[#181F32] font-medium h-10 ${selectedTab === 'Website Contents' ? 'bg-gray-100 dark:text-[#FF6243] text-[#FF6243] dark:bg-[#181F32]' : ''
                                            }`}
                                        
                                        onClick={() => {
                                            setSelectedTab('Website Contents');

                                        }}
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

                                            <div className="ltr:ml-3 rtl:mr-3">Website Contents</div>
                                        </div>
                                        </button>
                                        {/*Website Contents End */}

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
                                                    className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
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
                                                className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </>

                                   )
                                }
                                {/* This is For Logo */}
                                {
                                  selectedTab == "logo" && (
                                    

                                    <>
                                    <div className="flex items-center justify-between mb-5">
                                        <h5 className="font-bold text-2xl dark:text-white-light">
                                           Website Logo
                                        </h5>
                                    </div>

                                    <form className="space-y-5" onSubmit={handleSubmit(websiteLogoSubmit)} method="post">
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                           
                                       {/* Header Logo */}      
                                            <div className="panel" id="forms_grid">
                                
                                                <div>
                                                    <label className="text-xl font-semibold mb-6 ">Header Logo</label>

                                                        <>
                                                        { selectedImage && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}>
                                                                <img className="rounded-lg max-w-[100px]" src={selectedImage} alt="Selected Avatar" />
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleDeleteImage}
                                                                        className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>
                                                    <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("headerLogo")}
                                                        onChange={handleHeaderLogoChange}
                                                    />
                                                </div>
                                              
                                              </div>
                                              {/* Header logo End */}

                                          {/* Footer Logo */}
                                            <div className="panel" id="forms_grid" >  
                                                <div>
                                                    <label className="text-xl font-semibold mb-6 ">Footer Logo</label>

                                                        <>
                                                        { footerImage && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}>
                                                                <img className="rounded-lg max-w-[100px]" src={footerImage} alt="Selected Avatar" />
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleFooterDeleteImage}
                                                                        className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>
                                                    <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("footerLogo")}
                                                        onChange={handleFooterLogoChange}
                                                    />
                                                </div>                                              
                                           </div>    
                                          {/* Footer Logo End */}

                                           {/* invoiceLogo */}
                                           <div className="panel" id="forms_grid">                                                                         
                                                <div>
                                                    <label className="text-xl font-semibold mb-6 ">Invoice Logo</label>

                                                        <>
                                                        { invoiceImage && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}>
                                                                <img className="rounded-lg max-w-[100px]" src={invoiceImage} alt="Selected Avatar" />
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleInvoiceDeleteImage}
                                                                        className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>
                                                    <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("invoiceLogo")}
                                                        onChange={handleInvoiceLogoChange}
                                                    />
                                                </div>                                            
                                           </div>
                                         {/* invoiceLogo End */}
                                              
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                   </>

                                  )
 
                                }
                                {/* Logo Uploader part End  */}

                                {/* This is For PopUp Banner Uploader */}
                                
                                {
                                  selectedTab == "Popup Banner" && (
                                  
                                    <div  id="forms_grid">

                                      <div className="flex justify-center">
                                        <h5 className="font-bold text-2xl dark:text-white-light mb-10">
                                           Popup Banner
                                        </h5>
                                      </div>
                                
                                     <form className="panel" id="forms_grid" onSubmit={handleSubmit(popupBannerSubmit)} method="post">

                                          
                                               <div className="grid grid-cols-3">
                                                <div></div>
                                                
                                                <div>
                                                        <>
                                                        { popupBanner && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}> 
                                                            
                                                            <div className=" w-[400px] mb-5">
                                                            <img className="rounded-lg max-w-full" src={popupBanner} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handlePopupBannerDelete}
                                                                        className="absolute top-[-15px] left-[93%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("popupBanner")}
                                                        onChange={handlePopupBanner}
                                                    />

                                                </div>
  

                                               </div>
                                                  


                                       <div className="flex justify-center mt-10">

                                       <button type="submit" className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]" >
                                            Submit
                                        </button>

                                       </div>

                                     </form>
                                  
                                  </div>
                                 
                                   )
 
                                }
                              
                                {/* This For popUp Banner End */}

                                {/* This is for Favicon */}

                                  {
                                  selectedTab == "Favicon" && (
                                  
                                    <div  id="forms_grid">

                                      <div className="flex justify-center">
                                        <h5 className="font-bold text-2xl dark:text-white-light mb-10">
                                         Favicon
                                        </h5>
                                      </div>
                                
                                     <form className="panel" id="forms_grid" onSubmit={handleSubmit(fabiconSubmit)} method="post">

                                          
                                               <div className="grid grid-cols-3">
                                                <div></div>
                                                
                                                <div>
                                                        <>
                                                        { favicon && (
                                                            <div style={{ position: 'relative',
                                                             left: "150px"
                                                            }}> 
                                                            
                                                            <div className=" w-[50px] mb-5">
                                                            <img className="rounded-lg max-w-full" src={favicon} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleFaviconDelete}
                                                                        className="absolute top-[-15px] left-[13%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("favicon")}
                                                        onChange={handleFavicon}
                                                    />

                                                </div>
  

                                               </div>
                                                  


                                       <div className="flex justify-center mt-10">

                                       <button type="submit" className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]" >
                                            Submit
                                        </button>

                                       </div>

                                     </form>
                                  
                                  </div>
                                 
                                   )
 
                                }

                                {/* This is for Favicon */}
                               

                               {/* This is for Loader */}
                                  
                               {
                                  selectedTab == "Loader" && (
                                    

                                    <>
                                    <div className="flex items-center justify-between mb-5">
                                        <h5 className="font-bold text-2xl dark:text-white-light">
                                          Website Loader
                                        </h5>
                                    </div>

                                    <form className="space-y-5" onSubmit={handleSubmit(loaderSubmit)} method="post">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                           
                                       {/* Website Loader */}      
                                            <div className="panel" id="forms_grid">
                                
                                                <div>
                                                    <label className="text-xl font-semibold mb-6 ">Website loader</label>

                                                        <>
                                                        { loader && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}>
                                                                <img className="rounded-lg max-w-[100px]" src={loader} alt="Selected Avatar" />
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleLoaderDelete}
                                                                        className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>
                                                    <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("websiteloader")}
                                                        onChange={handleLoader}
                                                    />
                                                </div>
                                              
                                              </div>
                                              {/* Website Loader End */}

                                          {/* Admin Loader */}
                                            <div className="panel" id="forms_grid" >  
                                                <div>
                                                    <label className="text-xl font-semibold mb-6 ">Admin loader</label>

                                                        <>
                                                        { adminLoader && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}>
                                                                <img className="rounded-lg max-w-[100px]" src={adminLoader} alt="Selected Avatar" />
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleAdminLoaderDelete}
                                                                        className="absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>
                                                    <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("adminloader")}
                                                        onChange={handleAdminLoader}
                                                    />
                                                </div>                                              
                                           </div>    
                                          {/* Admin Loader End */}
                                              
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                   </>

                                  )
 
                                }

                               {/* This is For loader End */}

                               {/* This is For Breadcumb Banner */}
                                  {
                                    selectedTab == "Breadcrumb Banner" && (

                                        <>
                                        <div className="flex justify-center">
                                        <h5 className="font-bold text-2xl dark:text-white-light mb-10">
                                        Breadcrumb Banner
                                        </h5>
                                      </div>
                                
                                     <form className="panel" id="forms_grid" onSubmit={handleSubmit(breadcumbSubmit)} method="post">

                                          
                                               <div className="grid grid-cols-3">
                                                <div></div>
                                                
                                                <div>
                                                    <label className="flex flex-col">Banner Image 404 *<span>(Preferred Size: 600 X 600 Pixel)</span></label>
                                                        <>
                                                        { breadcumb && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}> 
                                                            
                                                            <div className="w-[600px] ">
                                                            <img className="rounded-lg max-w-full" src={breadcumb} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleBreadcumbDelete}
                                                                        className="absolute top-[-15px] left-[143%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("popupBanner")}
                                                        onChange={handleBreadcumb}
                                                    />

                                                </div>
  

                                               </div>
                                                  


                                       <div className="flex justify-center mt-10">

                                       <button type="submit" className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]" >
                                            Submit
                                        </button>

                                       </div>

                                     </form>
                                     </>
                                    )
                                  }
                               {/* This is For Breadcumb Banner End*/}
                                       

                               {/* This is for Error page banner */}
                               {
                                    selectedTab == "Error Banner" && (

                                        <>
                                        <div className="flex justify-center">
                                        <h5 className="font-bold text-2xl dark:text-white-light mb-10">
                                       Error Banner
                                        </h5>
                                      </div>
                                
                                     <form className="panel" id="forms_grid" onSubmit={handleSubmit(errorBannerSubmit)} method="post">

                                          
                                               <div className="grid grid-cols-2 gap-4">
                                                
                                                  <div>
                                                    <label className="flex flex-col">Banner Image 404 *<span>(Preferred Size: 600 X 600 Pixel)</span></label>
                                                        <>
                                                        { errorBanner1 && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}> 
                                                            
                                                            <div className="w-[600px] ">
                                                            <img className="rounded-lg max-w-full" src={errorBanner1} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleErrorBanner1Delete}
                                                                        className="absolute top-[-15px] left-[93%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("errorBanner1")}
                                                        onChange={handleErrorBanner1}
                                                    />

                                                 </div>
                                                

                                                 <div>
                                                    <label className="flex flex-col">Banner Image 500 *<span>(Preferred Size: 600 X 600 Pixel)</span></label>
                                                        <>
                                                        { errorBanner2 && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}> 
                                                            
                                                            <div className="w-[600px] ">
                                                            <img className="rounded-lg max-w-full" src={errorBanner2} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleErrorBanner2Delete}
                                                                        className="absolute top-[-15px] left-[93%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("popupBanner")}
                                                        onChange={handleErrorBanner2}
                                                    />

                                                </div>

                                               </div>
                                                  


                                       <div className="flex justify-center mt-10">

                                       <button type="submit" className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]" >
                                            Submit
                                        </button>

                                       </div>

                                     </form>
                                     </>
                                    )
                                  }
                               {/* Error page Banner End */}


                               {/* This is for Affilate Program */}
                                    {
                                        selectedTab == "Affiliate Program" && (
                                            <>

                                            <div className="flex items-center justify-between mb-10">
                                                <h5 className="font-semibold text-lg dark:text-white-light">
                                                  Affilate Program
                                                </h5>
                                            </div>
                                            <form className="space-y-5" onSubmit={handleSubmit(affiliateProgramSubmit)} method="post">


                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                       
                                                         {/* Web Based Affiliate */}
                                                         <div>
                                                            <label>Web Based Affilate</label>

                                                        <select className="form-select text-white-dark"
                                                            {...register("web_based_affilate",{ required: "Web Based Affilate required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.web_based_affilate && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.web_based_affilate.message}
                                                            </p>
                                                        )}
                                                         </div>    
                                                      {/* Web Based Affiliate End*/}

                                                       {/* Product Based Affiliate */}
                                                         <div>
                                                        <label> Affilate Bonus(%) <span className="text-danger">*</span> </label>
                                                        <input
                                                            {...register("Affilate_Bonus", { required: "Affilate Bonus required" })}
                                                            type="text"
                                                            className="form-input"
                                                            placeholder="Write here"
                                                        />
                                                        {errors.Affilate_Bonus &&
                                                            <p className="text-red-600 pt-2">{errors.Affilate_Bonus.message}</p>}
                                                        </div>
                                                         {/* Product Based Affiliate End*/}


                                                     {/*Affiliate Bonous */}
                                                        <div>
                                                            <label>Product Based Affilate</label>

                                                        <select className="form-select text-white-dark"
                                                            {...register("product_based_affilate",{ required: "Product Based Affilate required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.product_based_affilate && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.product_based_affilate.message}
                                                            </p>
                                                        )}
                                                        </div>
                                                     {/*Affiliate Bonous End*/}

                                                     {/* Current Featured Image */}
                                                     <div>
                                                    <label >Current Featured Image *</label> 
                                                        <>
                                                        { featuredImage && (
                                                            <div style={{ position: 'relative',
                                                             left: "10px"
                                                            }}> 
                                                            
                                                            <div className="w-[300px] ">
                                                            <img className="rounded-lg max-w-full" src={featuredImage} alt="Selected Avatar" />
                                                            </div>
                                                    
                                                                {isSvgShow && (
                                                                    <span
                                                                        onClick={handleFeaturedImageDelete}
                                                                        className="absolute top-[-15px] left-[66%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                                                                    >
                                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                                                                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}
                                                            </div>
                                                        )}

                                                        </>

                                                        <input
                                                        type="file"
                                                        className="form-input mt-6"
                                                        {...register("featuredImage")}
                                                        onChange={handleFeaturedImage}
                                                    />

                                                     </div>
                                                      {/* Current Featured Image End */}
                                                   

                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </>
                                        )
                                    }
                               {/* End Affilate Program */}

                               {/* This is For WebSite Maintenance */}

                               {
                                selectedTab == "Website Maintenance" && (

                                         <>

                                            <div className="flex items-center justify-between mb-5">
                                                <h5 className="font-semibold text-lg dark:text-white-light">
                                                   Website Maintenance
                                                </h5>
                                            </div>
                                            <form className="space-y-5" onSubmit={handleSubmit(MaintenanceOnSubmit)} method="post">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                                                         <div>
                                                            <label>Website Maintenance</label>

                                                        <select className="form-select text-white-dark"
                                                            {...register("website_maintenance",{ required: "Web Based Affilate required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.website_maintenance && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.website_maintenance.message}
                                                            </p>
                                                        )}
                                                         </div> 

                                                         <div>
                                                        <label> Maintenance Text <span className="text-danger">*</span> </label>
                                                            <textarea
                                                             className="form-input" 
                                                             {...register("maintenance_text", { required: "Maintenance Text Is required" })}
                                                             type="text"
                                                             placeholder="Enter Maintenance Text"
                                                             defaultValue="Web Site Under Maintenance"
                                                            >
                                                                
                                                            </textarea>
                                                            {errors.maintenance_text &&
                                                            <p className="text-red-600 pt-2">{errors.maintenance_text.message}</p>}
                                                    </div>

                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </>

                                )
                               }

                               {/* This is For WebSite Maintenance End */}

                               {/* This is For Website Contents */}
                                {
                                    selectedTab == "Website Contents" && (
                                        <>

                                        <div className="flex items-center justify-between mb-5">
                                            <h5 className="font-semibold text-lg dark:text-white-light">
                                               Website Contents
                                            </h5>
                                        </div>
                                        <form className="space-y-5" onSubmit={handleSubmit(generalSettingsOnSubmit)} method="post">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                                

                                                        <div>
                                                                    <label>Website Title <span className="text-danger">*</span> </label>
                                                                    <input
                                                                        {...register("website_title", { required: "Website Title Is required" })}
                                                                        type="text"
                                                                        className="form-input"
                                                                        placeholder="Enter Title"
                                                                    />
                                                                    {errors.website_title &&
                                                                        <p className="text-red-600 pt-2">{errors.website_title.message}</p>}
                                                        </div>
                                                    
                                                           <div>
                                                            <label> Copyright Text <span className="text-danger">*</span> </label>
                                                            <input
                                                                {...register("copy_right_text", { required: "Copy Right Text required" })}
                                                                type="text"
                                                                className="form-input"
                                                                placeholder="Enter Color Name"
                                                            />
                                                            {errors.copy_right_text &&
                                                                <p className="text-red-600 pt-2">{errors.copy_right_text.message}</p>}
                                                          </div>


                                                          <div>
                                                        <label>Debug Mode</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("debug_mode",{ required: "debug_mode required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.debug_mode && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.debug_mode.message}
                                                            </p>
                                                        )}
                                                         </div> 

                                                          <div>
                                                        <label>Header Style</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("header_style",{ required: "header style required" })}>
                                                            <option value="1">Light</option>
                                                            <option value="2">Dark</option>
                                                        
                                                        </select>
                                                        {errors?.header_style && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.header_style.message}
                                                            </p>
                                                        )}
                                                         </div>

                                                          <div>
                                                        <label>Cookie</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("cookie",{ required: "Cookie style required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.cookie && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.cookie.message}
                                                            </p>
                                                        )}
                                                         </div>

                                                          <div>
                                                        <label>Use HTTPS</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("use_https",{ required: "Use HTTPS required" })}>
                                                            <option value="1">Yes</option>
                                                            <option value="2">No</option>
                                                        
                                                        </select>
                                                        {errors?.use_https && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.use_https.message}
                                                            </p>
                                                        )}
                                                          </div>

                                                          <div>
                                                        <label>Capcha</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("capcha",{ required: "Capcha required" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.capcha && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.capcha.message}
                                                            </p>
                                                        )}
                                                          </div>

                                                          <div>
                                                                    <label>Google ReCapcha Site Key <span className="text-danger">*</span> </label>
                                                                    <input
                                                                        {...register("google_reCapcha_site_key", { required: "Google ReCapcha Site Key Is required" })}
                                                                        type="text"
                                                                        className="form-input"
                                                                        placeholder="6LcnPoEaAAAAAF6QhKPZ8V4744yiEnr41li3SYDn"
                                                                    />
                                                                    {errors.google_reCapcha_site_key &&
                                                                        <p className="text-red-600 pt-2">{errors.google_reCapcha_site_key.message}</p>}
                                                        </div>

                                                        <div>
                                                         <label>Google ReCapcha Secret Key <span className="text-danger">*</span> </label>
                                                         <input
                                                         {...register("google_reCapcha_secret_key", { required: "Google ReCapcha Secret Key Is required" })}
                                                         type="text"
                                                         className="form-input"
                                                         placeholder="6LcnPoEaAAAAAF6QhKPZ8V4744yiEnr41li3SYDn"
                                                        />
                                                        {errors.google_reCapcha_secret_key &&
                                                        <p className="text-red-600 pt-2">{errors.google_reCapcha_secret_key.message}</p>}
                                                        </div>

                                                         <div>
                                                        <label>Sign Up Verification</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("sign_up_verification",{ required: "sign_up_verification" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.sign_up_verification && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.sign_up_verification}
                                                            </p>
                                                        )}
                                                         </div> 

                                                         <div>
                                                        <label>Tawk.to</label>
                                                        <select className="form-select text-white-dark"
                                                            {...register("tawk_to",{ required: "tawk_to" })}>
                                                            <option value="1">Activated</option>
                                                            <option value="2">Deactivated</option>
                                                        
                                                        </select>
                                                        {errors?.tawk_to && (
                                                            <p className="text-red-600 pt-2">
                                                                {errors?.tawk_to}
                                                            </p>
                                                        )}
                                                         </div> 


                                                         <div>
                                                                    <label>Tawk.to ID  <span className="text-danger">*</span> </label>
                                                                    <input
                                                                        {...register("tawk_to_id", { required: "Tawk.to ID Is required" })}
                                                                        type="text"
                                                                        className="form-input"
                                                                        placeholder="Enter Title"
                                                                    />
                                                                    {errors.tawk_to_id &&
                                                                        <p className="text-red-600 pt-2">{errors.tawk_to_id.message}</p>}
                                                        </div>

                                                      <div>
                                                                    <label>Cronjob URL  <span className="text-danger">*</span> </label>
                                                                    <input
                                                                        {...register("cronjob_url", { required: "cronjob_url Is required" })}
                                                                        type="text"
                                                                        className="form-input"
                                                                        placeholder="Enter Title"
                                                                    />
                                                                    {errors.cronjob_url &&
                                                                        <p className="text-red-600 pt-2">{errors.cronjob_url.message}</p>}
                                                     </div>

                                                     <div>
                                                      <label>Cronjob URL  <span className="text-danger">*</span> </label>
                                                       <input
                                                        {...register("cronjob_url", { required: "cronjob_url Is required" })}
                                                         type="text"
                                                         className="form-input"
                                                         placeholder="Enter Title"
                                                         />
                                                         {errors.cronjob_url &&
                                                        <p className="text-red-600 pt-2">{errors.cronjob_url.message}</p>}
                                                     </div>

                                                     
                                                     <div>
                                                      <label>Partner Header  <span className="text-danger">*</span> </label>
                                                       <input
                                                        {...register("partner_header", { required: "partner_header Is required" })}
                                                         type="text"
                                                         className="form-input"
                                                         placeholder="Enter Title"
                                                         />
                                                         {errors.partner_header &&
                                                        <p className="text-red-600 pt-2">{errors.partner_header.message}</p>}
                                                     </div>

                                                     <div>
                                                      <label>Partner Header  <span className="text-danger">*</span> </label>
                                                       <input
                                                        {...register("partner_header", { required: "partner_header Is required" })}
                                                         type="text"
                                                         className="form-input"
                                                         placeholder="Enter Title"
                                                         />
                                                         {errors.partner_header &&
                                                        <p className="text-red-600 pt-2">{errors.partner_header.message}</p>}
                                                     </div>

                                                     <div>
                                                      <label>Partner Text  <span className="text-danger">*</span> </label>
                                                       <input
                                                        {...register("partner_text", { required: "partner_text Is required" })}
                                                         type="text"
                                                         className="form-input"
                                                         placeholder="Enter Title"
                                                         />
                                                         {errors.partner_text &&
                                                        <p className="text-red-600 pt-2">{errors.partner_text.message}</p>}
                                                     </div>

                                                    </div>


                                                <button
                                                type="submit"
                                                className="btn btn-primary !mt-6 border border-solid border-[#FF6243] bg-[#FF6243]"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                        </>
                                    )
                                }
                               {/* This is For Website Contents End */}

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
