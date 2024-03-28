import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import FlashMessage from "../../Component/FlashMessage.jsx";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Digital() {
    const { flash, categories, sub_categories, brands, type, units } = usePage().props;

    const [selectedColorOptions, setSelectedColorOptions] = useState([]);
    const [selectedSizeOptions, setSelectedSizeOptions] = useState([]);
    const [attributesLength, setAttributesLength] = useState([]);
    const [hiddenAttributesLength, setHiddenAttributesLength] = useState([]);
    const [IsproductVariationValue, setProductVariationValue] = useState(false);



    useEffect(() => {
        const generateInputValues = () => {
            const inputValues = [];
            const hiddenValues = [];

            selectedSizeOptions.forEach((sizeOption) => {
                selectedColorOptions.forEach((colorOption) => {
                    const inputValue = `${sizeOption.label}/${colorOption.label}`;
                    const hiddenValue = `${sizeOption.value}/${colorOption.value}`;
                    inputValues.push(inputValue);
                    hiddenValues.push(hiddenValue);
                });
            });
            setAttributesLength(inputValues);
            setHiddenAttributesLength(hiddenValues);

        };

        generateInputValues();
    }, [selectedColorOptions, selectedSizeOptions]);
    // console.log(attributesLength);


    const { control, register, handleSubmit, setValue, reset, formState: { errors }, watch } = useForm({
        defaultValues: {
            type: type
        }
    });
    const product_description = watch('product_description', '');
    const handleQuillChange = (value) => {
        setValue('product_description', value);
    };

    const product_buy_return_policy = watch('product_buy_return_policy', '');
    const productBuyReturnPolicy = (value) => {
        setValue('product_buy_return_policy', value);
    };

    const categoruOptions = categories.map((item) => ({
        value: item?.id,
        label: item?.name ? `${item.name}` : '',
    }));
    const unitOptions = units.map((item) => ({
        value: item?.id,
        label: item?.name ? `${item.name}` : '',
    }));
    const subCategoruOptions = sub_categories.map((item) => ({
        value: item?.id,
        label: item?.name ? `${item.name}` : '',
    }));
    const brandOptions = brands.map((item) => ({
        value: item?.id,
        label: item?.name ? `${item.name}` : '',
    }));


    const handleSelectCategory = (selectedOption) => {
        setValue('category_id', selectedOption?.value);
    };
    const handleSelectSubCategory = (selectedOption) => {
        setValue('sub_category_id', selectedOption?.value);
    };
    const handleSelectBrand = (selectedOption) => {
        setValue('brand_id', selectedOption?.value);
    };
    const handleSelectUnit = (selectedOption) => {
        setValue('unit_id', selectedOption?.value);
    };
    const [IsUploadType, setUploadType] = useState(true);

    const uploadType = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        if (value === "1") {
            setUploadType(true);
        }
        if (value === "2") {
            setUploadType(false);
        }

    }


    function onSubmit(data) {
        console.log(data);
        // router.post("/admin/product/digital/store", data);
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
                            Digital
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Add</span>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Basic</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label>Category</label>
                                    <Controller
                                        control={control}
                                        name="category_id"
                                        render={({ field }) => (
                                            <Select
                                                placeholder="Select an option"
                                                options={categoruOptions}
                                                value={categoruOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectCategory}
                                            />
                                        )}
                                    />
                                </div>

                                <div>
                                    <label>Sub Category</label>
                                    <Controller
                                        control={control}
                                        name="sub_category_id"
                                        render={({ field }) => (
                                            <Select
                                                placeholder="Select an option"
                                                options={subCategoruOptions}
                                                value={subCategoruOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectSubCategory}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    {...register("type")}
                                    type="hidden"
                                />
                                <div>
                                    <label>Brand</label>
                                    <Controller
                                        control={control}
                                        name="brand_id"
                                        render={({ field }) => (
                                            <Select
                                                placeholder="Select an option"
                                                options={brandOptions}
                                                value={brandOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectBrand}
                                            />
                                        )}
                                    />
                                </div>

                                <div>
                                    <label>Unit</label>
                                    <Controller
                                        control={control}
                                        name="unit_id"
                                        render={({ field }) => (
                                            <Select
                                                placeholder="Select an option"
                                                options={unitOptions}
                                                value={unitOptions.find((option) => option.value === field.value)}
                                                onChange={handleSelectUnit}
                                            />
                                        )}
                                    />
                                </div>

                                <div>
                                    <label> Product SKU </label>
                                    <input
                                        {...register("product_sku", { required: "Product SKU Is required" })}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Product Name"
                                    />
                                    {errors.product_name &&
                                        <p className="text-red-600 pt-2">{errors.product_name.message}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <label>Product Name</label>
                                    <input
                                        {...register("product_name", { required: "Product Name Is required" })}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Product Name"
                                    />
                                    {errors.product_name &&
                                        <p className="text-red-600 pt-2">{errors.product_name.message}</p>}
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Product Price and
                                Description</h5>
                        </div>

                        <div className="mb-5 space-y-5 relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label>Price</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("single_product_price", { required: "Product Name Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="99$"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label>Discount</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("single_product_discount", { required: "Product Name Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="10%"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label>Quantity</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            {...register("single_product_quantity", { required: "Product Quantoty Is required" })}
                                            type="number"
                                            className="form-input"
                                            placeholder="50"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 grid grid-cols-1 lg:grid-cols-1 gap-6">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Basic</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div>
                                    <label> Select Upload Type</label>
                                    <select
                                        className="form-select text-white-dark"
                                        {...register("upload_type")}
                                        onChange={uploadType}
                                    >
                                        <option value="1">Upload By Link</option>
                                        <option value="2">Upload By File</option>
                                    </select>
                                </div>
                                {
                                    IsUploadType ? (
                                        <div>
                                            <label>Select File </label>
                                            <input
                                                {...register("upload_link", { required: "Product Name Is required" })}
                                                type="text"
                                                className="form-input"
                                                placeholder="Enter Product Name"
                                            />
                                            {errors.product_name &&
                                                <p className="text-red-600 pt-2">{errors.product_name.message}</p>}
                                        </div>
                                    ) : (
                                        <div>
                                            <label>Link</label>
                                            <input
                                                {...register("upload_file", { required: "Product Name Is required" })}
                                                type="file"
                                                className="form-input"
                                                placeholder="Enter Product Name"
                                            />
                                            {errors.product_name &&
                                                <p className="text-red-600 pt-2">{errors.product_name.message}</p>}
                                        </div>

                                    )
                                }

                            </div>

                        </div>

                    </div>
                </div>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Product Description</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <ReactQuill
                                        value={product_description}
                                        onChange={(value) => handleQuillChange(value)}
                                        theme="snow"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Product Buy Return Policy</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <ReactQuill
                                        value={product_buy_return_policy}
                                        onChange={(value) => productBuyReturnPolicy(value)}
                                        theme="snow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Thumbnail</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <input
                                        {...register("thumbnail", { required: "Thumbnail Is required" })}
                                        className="form-input"
                                        type="file"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Seo for this product</h5>
                        </div>
                        <div className="mb-5 space-y-5 relative">

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <label>Meta Tags <span className="text-red-600 ">*</span></label>
                                <div className="flex items-center gap-2">
                                    <input
                                        {...register("meta_tags")}
                                        type="text"
                                        className="form-input"
                                        placeholder="pant,shirt,watch,glass"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <label>Meta Description <span className="text-red-600 ">*</span></label>
                                <div className="flex items-center gap-2">

                                    <textarea
                                        {...register("meta_description")}
                                        className="form-input"
                                        placeholder="Multivendor Ecommerce system"
                                    >
                                    </textarea>
                                </div>
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

        </>
    );
}

Digital.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || Add" />
);

export default Digital;
