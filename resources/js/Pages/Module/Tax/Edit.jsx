import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
function Add() {
    const { result } = usePage().props;
    const [isSvgShow, setSvgShow] = useState(false);
    const { control, register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        defaultValues: {
            id: result.id,
            tax_name: result.tax_name,
            tax_type: result.tax_type,
            tax_amount: result.tax_amount,
            status: result.status
        }
    });
    
    const [IstaxType, settaxType] = useState(false);
    // End Of the State 

    const taxType = (event) => {
        const value = event.target.value;
        if (value === "1") {
            settaxType(false);
        }
        if (value === "2") {
            settaxType(true);
        }
    };

    function onSubmit(data) {
        // console.log(data);
        router.post("/admin/tax/update", data);
    }
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
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
                        <Link href="#" className="text-primary hover:underline">
                            Tax
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Edit</span>
                    </li>
                </ul>
            </div>
            
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Tax Edit Form
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div className="grid grid-cols-3 gap-6">
                                    <input
                                        type="hidden"
                                        {...register("id")}
                                    />
                                    <input
                                        type="hidden"
                                        {...register("status")}
                                    />

                                    <div>
                                        <label>Tax Name <span className="text-danger">*</span></label>
                                        <input
                                            {...register("tax_name", { required: "Tax Name Is Required" })}
                                            type="text"
                                            className="form-input"
                                            placeholder="Enter Tax Name"
                                        />
                                        {errors.tax_name && <p className="text-red-600 pt-2">{errors.tax_name.message}</p>}
                                    </div>

                                    <div className="items-center mb-7">
                                        <label>Select Tax Type</label>

                                        <select
                                            className="form-select text-white-dark"
                                            {...register("tax_type")}
                                            onChange={taxType}
                                        >
                                            <option value="1">Amount</option>
                                            <option value="2">Percentage</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label>{IstaxType ? "Parcentage" : "Amount"}<span className="text-red-600 ">*</span></label>
                                            <input
                                                {...register("tax_amount", {required: "Field Is Required"})}
                                                type="number"
                                                className="form-input"
                                                placeholder={IstaxType ? "Enter Parcentage" : "Enter Amount"}
                                            />
                                            {errors.tax_amount && <p className="text-red-600 pt-2">{errors.tax_amount.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
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
    <MainLayout children={page} title="Luminous-Ecommerce || Edit" />
);

export default Add;
