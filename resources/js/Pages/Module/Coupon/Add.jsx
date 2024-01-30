import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import Tippy from "@tippyjs/react";
import { Link, router, usePage } from "@inertiajs/react";
import { useForm ,Controller} from "react-hook-form";
import Select from "react-select"
function Add() {

//   Declearing State
const [IsproductVariationValue, setProductVariationValue] = useState(false);
// End Of the State 

const productVariationValue = (event) => {
    const value = event.target.value;
    if (value === "1") {
        setProductVariationValue(false);
    }
    if (value === "2") {
        setProductVariationValue(true);
    }
};



    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors },
    } = useForm();


    function onSubmit(data) {
        // router.post("/admin/color/store", data);
        console.log(data)
    }
    
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-[#FF6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 text-white"
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
                        <Link href="#" className="text-[#FF6243] hover:underline text-base">
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>Coupon</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Coupon Add Form
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form
                            className="space-y-5"
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label>
                                         Coupon Code
                                        <span className="text-danger">
                                            *
                                        </span>{" "}
                                    </label>
                                    <input
                                        {...register("coupon_code", {
                                            required: "Coupon Code Is required",
                                        })}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Color Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 pt-2">
                                            {errors.coupon_code.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label>
                                        {" "}
                                        Start Date{" "}
                                        <span className="text-danger">
                                            *
                                        </span>{" "}
                                    </label>
                                    <input
                                        {...register("start_date", {
                                            required: "Date required",
                                        })}
                                        type="date"
                                        className="form-input"
                                        placeholder="Enter Color Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 pt-2">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label>
                                        End Date
                                        <span className="text-danger">
                                            *
                                        </span>{" "}
                                    </label>
                                    <input
                                        {...register("end_date", {
                                            required: "End Date Is required",
                                        })}
                                        type="date"
                                        className="form-input"
                                        placeholder="Enter Color Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 pt-2">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>                            
                            </div>
                               
                    <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="panel">
                      
                        <div className="mb-5 space-y-5 relative">
                            <div className="grid grid-cols-1  gap-4">
                                <div>
                                    <label>Select Coupon Variation Type</label>

                                    <select
                                        className="form-select text-white-dark"
                                        {...register("coupon_variation")}
                                        // onChange={productVariationValue}
                                    >
                                        <option value="1">indivisual</option>
                                        <option value="2">Category</option>
                                        <option value="3">Sub-Category</option>
                                    </select>
                                    {errors?.product_variation && (
                                        <p className="text-red-600 pt-2">
                                            {errors?.product_variation}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label>Select Coupon Variation Type</label>

                                    <select
                                        className="form-select text-white-dark"
                                        {...register("coupon_variation_type")}
                                        // onChange={productVariationValue}
                                    >
                                        <option value="1">indivisual</option>
                                        <option value="2">Category</option>
                                        <option value="2">Sub-Category</option>
                                    </select>
                                    {errors?.product_variation && (
                                        <p className="text-red-600 pt-2">
                                            {errors?.product_variation}
                                        </p>
                                    )}
                                </div>
                            </div>

                        
                            
                        </div>
                    </div>

                    <div className="panel">

                                    <div className="items-center mb-7">
                                        <label>Select Coupon Variation Price</label>

                                        <select
                                            className="form-select text-white-dark"
                                            {...register("coupon_variation_price")}
                                            onChange={productVariationValue}
                                        >
                                            <option value="1">Discount</option>
                                            <option value="2">Parcentage</option>
                                        </select>
                                        {errors?.product_variation && (
                                            <p className="text-red-600 pt-2">
                                                {errors?.product_variation}
                                            </p>
                                        )}
                                    </div>

                        {IsproductVariationValue === true ?  (
                                       <>                          
                                       <div className="mb-5 space-y-5 relative">
                                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                               <div className="md:col-span-2">
                                                   <label>Parcentage<span className="text-red-600 ">*</span></label>
                                                    <input
                                                    
                                                    type="text"
                                                    className="form-input"
                                                    placeholder="Set Parcentage"
           
                                                    />
                                               </div>
                                           </div>
                                       </div>
                                   </>
                        ) : (
                             <>
                                    <div className="mb-5 space-y-5 relative">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="md:col-span-2">
                                                <label>Discount<span className="text-red-600 ">*</span></label>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        {...register(
                                                            "single_product_price",
                                                            {
                                                                required:
                                                                    "Product Name Is required",
                                                            }
                                                        )}
                                                        type="number"
                                                        className="form-input"
                                                        placeholder="Set Discount"
                                                    />
                                                </div>
                                            </div>                               
                                        </div>
                                    </div>
                            </>
                        )}
                    </div>
                    </div>

                            <button
                                type="submit"
                                className="btn btn-primary border border-solid border-[#FF6243] bg-[#FF6243] !mt-6"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

Add.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || Coupon Add" />
);

export default Add;
