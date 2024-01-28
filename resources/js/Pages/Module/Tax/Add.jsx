import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import Tippy from '@tippyjs/react';
import { Link, router, usePage } from "@inertiajs/react";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
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




    // const { categories } = usePage().props;
    const { control, register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
        // router.post("/admin/category/store", data);
    }
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div  className="rounded-full bg-[#FF6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
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
                <ul className="flex space-x-2 rtl:space-x-reverse items-center">
                    <li>
                        <Link href="#" className="text-[#FF6243] hover:underline text-base">
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Tax</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                           Tax Add From
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                               
                             <div className="grid grid-cols-3 gap-6">

                                    <div>
                                        <label> Name <span className="text-danger">*</span> </label>
                                        <input
                                            {...register("name", { required: "Category Name Is required" })}
                                            type="text"
                                            className="form-input"
                                            placeholder="Enter Tax Name"
                                        />
                                        {errors.name && <p className="text-red-600 pt-2">{errors.name.message}</p>}
                                    </div>

                                    <div className="items-center mb-7">
                                        <label>Select Tax Type<span className="text-danger">*</span></label>

                                        <select
                                            className="form-select text-white-dark"
                                            {...register("product_variation")}
                                            onChange={productVariationValue}
                                        >
                                            <option value="1">Amount</option>
                                            <option value="2">Parcentage</option>
                                        </select>
                                        {errors?.product_variation && (
                                            <p className="text-red-600 pt-2">
                                                {errors?.product_variation}
                                            </p>
                                        )}
                                    </div>

                                    {IsproductVariationValue === true ? (
                                        <>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="md:col-span-2">
                                                        <label>Parcentage<span className="text-red-600 ">*</span></label>
                                                        <input
                                                           {...register(
                                                            "parcentage",
                                                            {
                                                                required:
                                                                    "parcentage Is required",
                                                            }
                                                        )}
                                                        type="text"
                                                        className="form-input"
                                                        placeholder="Enter Parcentage"

                                                        />
                                                    </div>
                                                </div>
                                        </>
                                    ) : (
                                        <>
                                               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="md:col-span-2">
                                                        <label>Amount<span className="text-danger">*</span></label>
                                                        <div className="flex items-center gap-2">
                                                            <input
                                                                {...register(
                                                                    "amount",
                                                                    {
                                                                        required:
                                                                            "amount Is required",
                                                                    }
                                                                )}
                                                                type="Text"
                                                                className="form-input"
                                                                placeholder="Enter Amount"
                                                            />
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
    <MainLayout children={page} title="Luminous-Ecommerce || Add" />
);

export default Add;
