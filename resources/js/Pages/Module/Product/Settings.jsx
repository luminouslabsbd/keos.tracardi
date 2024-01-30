import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
function ProductSettings() {

    const { flash, categories, sub_categories, brands, type, units } = usePage().props;



    const { control, register, handleSubmit, setValue, reset, formState: { errors }, watch } = useForm({
        defaultValues: {
            type: type
        }
    });

    function onSubmit(data) {
        console.log(data);
        // router.post("/admin/product/license/store", data);
    }
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                    >
                        <path
                            d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            opacity="0.5"
                            d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="#" className="text-[#ff6243] hover:underline">
                           Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Product Settings</span>
                    </li>
                </ul>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">


                             <div className="panel lg:col-span-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Display Stock Number */}
                                        <div>
                                        <label>Display Stock Number *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("display_stock_number",{ required: "display_stock_number required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.display_stock_number && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_stock_number.message}
                                            </p>
                                            )}
                                        </div> 
        
                                    {/* Product Whole Sale Max Quantity  */}
                                            <div>
                                                <label>Product Whole Sale Max Quantity *</label>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        {...register("product_whole_sale_max_quantity", { required: "Product Quantoty Is required" })}
                                                        type="number"
                                                        className="form-input"
                                                        placeholder="6"
                                                    />
                                                    {errors?.product_whole_sale_max_quantity && (
                                                      <p className="text-red-600 pt-2">
                                                     {errors?.product_whole_sale_max_quantity.message}
                                                    </p>
                                                      )}
                                                </div>
                                            </div> 

                                 </div>
                            </div>


                             <div className="panel">
                                <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">HOME PAGE SECTION</h5>
                                </div>
                        
                                <div>
                                    <label>Display Flash Deal Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_flash_deal_products", { required: "Display Flash Deal Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.display_flash_deal_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_flash_deal_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Hot Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_hot_products", { required: "Display Hot Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_hot_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_hot_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display New Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_new_products", { required: "Display New Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_new_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_new_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                 <div>
                                    <label>Display Sale Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_sale_products", { required: "Display Sale Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_sale_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_sale_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Best Seller Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_best_saller_products", { required: "Display best Saler Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_best_saller_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_best_saller_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Popular Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_popular_products", { required: "Display popular Saler Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_popular_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_popular_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Top Rated Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_top_rated_products", { required: "Display top rated Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_top_rated_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_top_rated_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Big Save Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_big_save_products", { required: "Display Big Save Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_big_save_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_big_save_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label>Display Trending Products *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_trending_products", { required: "Display Trending Products Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10"
                                        />
                                        {errors?.display_trending_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_trending_products.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                             </div>


                               <div className="panel">
                                <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">VENDOR PRODUCT CREATE ENABLE & DISABLE</h5>
                                </div>
                                       
                                       {/* Vendor Physical Product */}
                                        <div>
                                        <label>Vendor Physical Products *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("vendor_physical_products",{ required: "Vendor Physical Products required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.vendor_physical_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.vendor_physical_products.message}
                                            </p>
                                            )}
                                        </div> 
                                       
                                       {/* Vendor Digital Products */}
                                         <div>
                                        <label>Vendor Digital Products *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("vendor_digital_products",{ required: "Vendor Physical Products required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.vendor_digital_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.vendor_digital_products.message}
                                            </p>
                                            )}
                                        </div>

                                          {/* Vendor License Products */}
                                           <div>
                                        <label>Vendor License Products *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("vendor_license_products",{ required: "Vendor License Products required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.vendor_license_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.vendor_license_products.message}
                                            </p>
                                            )}
                                          </div>

                                           {/* Vendor Affilite  Products */}
                                           <div>
                                        <label>Vendor Affilite Products *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("vendor_affilite_products",{ required: "Vendor Affiliate Products required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.vendor_affilite_products && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.vendor_affilite_products.message}
                                            </p>
                                            )}
                                          </div>

                                            <div className="flex items-center justify-between mb-5 mt-5">
                                            <h5 className="font-semibold text-lg dark:text-white-light">PRODUCT DETAILS PAGE SECTION</h5>
                                            </div>
                                            

                                             {/* Display Contact Seller */}
                                             <div>
                                        <label>Display Contact Seller *</label>
                                        <select className="form-select text-white-dark"
                                        {...register("display_contact_seller",{ required: "Display Contact Seller required" })}>
                                        <option value="1">Activated</option>
                                        <option value="2">Deactivated</option>
                                        </select>
                                        {errors?.display_contact_seller && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_contact_seller.message}
                                            </p>
                                            )}
                                            </div>
                                            
                                             {/* Display Product By Seller */}
                                         <div>
                                            <label>Display Product By Seller *</label>
                                            <div className="flex items-center gap-2">
                                            <input
                                            {...register("display_product_by_seller", { required: "Display F Product By Seller Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                           />
                                           {errors?.display_product_by_seller && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_product_by_seller.message}
                                            </p>
                                            )}
                                         </div>
                                         </div>

                                    <div className="flex items-center justify-between my-5">
                                    <h5 className="font-semibold text-lg dark:text-white-light">WISHLIST PAGE SECTION</h5>
                                   </div>
                                        {/*Wishlist Display Products Per Page */}
                                      <div>
                                    <label>Display Products Per Page  *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("wishlist_display_product_per_page", { required: "Display Products Per Page Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.wishlist_display_product_per_page && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.wishlist_display_product_per_page.message}
                                            </p>
                                            )}
                                     </div>
                                     </div>

                               </div>

                   
                </div>


                          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">

                              {/* Left */}
                               <div className="panel">
                                <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">CATALOG & FILTER SECTION</h5>
                                </div>
                                 {/* Minimum Price */}

                                 <div>
                                    <label>Minimum Price *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("minimum_price", { required: "Minimum Price Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.minimum_price && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.minimum_price.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                                {/* Maximum Price */}
                                <div>
                                    <label>Maximum Price *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("Maximum_price", { required: "Maximum Price Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.Maximum_price && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.Maximum_price.message}
                                            </p>
                                            )}
                                    </div>
                                </div>  

                                 {/*View Product Per Page  */}
                                 
                                 <div>
                                    <label>View Product Per Page  *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("view_product_per_page", { required: "View Product Per Page Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.view_product_per_page && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.view_product_per_page.message}
                                            </p>
                                            )}
                                    </div>
                                </div>

                               </div> 


                               {/* Right */}
                                 
                               <div className="panel">
                                <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">VENDOR PAGE SECTION</h5>
                                </div>

                                 {/* Display Products Per Page */}
                                 <div>
                                    <label>Display Products Per Page  *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_product_per_page", { required: "Display Products Per Page Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.display_product_per_page && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_product_per_page.message}
                                            </p>
                                            )}
                                    </div>
                                </div>
                                  
                                <div className="flex items-center justify-between my-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">CATEGORY PAGE SECTION</h5>
                                </div>
                                  
                                   {/* Display Products Per Page */}
                                 <div>
                                    <label>Display Products Per Page  *</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("display_product_per_page_ct", { required: "Display Products Per Page Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="6"
                                        />
                                        {errors?.display_product_per_page_ct && (
                                            <p className="text-red-600 pt-2">
                                            {errors?.display_product_per_page_ct.message}
                                            </p>
                                            )}
                                    </div>
                                </div>
                              
                               </div> 

                          </div>
                              
         
                <button
                    type="submit"
                    className="btn btn-primary bg-[#ff6243] border border-solid border-[#ff6243] !mt-6"
                >
                    Submit
                </button>
            </form>
            
        </>
    );
}

ProductSettings.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || ProductSettings" />
);

export default ProductSettings;
