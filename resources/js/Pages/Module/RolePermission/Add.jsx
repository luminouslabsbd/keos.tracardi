import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";


function Add() {
    const { base_url, errors, permissions } = usePage().props;
    const { register, handleSubmit } = useForm();



    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const handleSelectAllCheckboxChange = () => {
        const newCheckedItems = {};

        // Check if permissions is defined
        if (permissions) {
            Object.keys(permissions)?.forEach((objectName) => {
                // Check if permissions[objectName] is defined
                if (permissions[objectName]) {
                    permissions[objectName]?.forEach((item) => {
                        newCheckedItems[item.name] = !selectAllChecked;
                    });

                    const allItemsChecked = permissions[objectName]?.every(
                        (item) => newCheckedItems[item.name]
                    );
                    newCheckedItems[objectName] = allItemsChecked;
                }
            });
        }

        setCheckedItems(newCheckedItems);
        setSelectAllChecked(!selectAllChecked);
    };

    const handleObjectCheckboxChange = (objectName) => {
        const newCheckedItems = { ...checkedItems };
        newCheckedItems[objectName] = !checkedItems[objectName];

        // Check if permissions[objectName] is defined
        if (permissions && permissions[objectName]) {
            permissions[objectName]?.forEach((item) => {
                newCheckedItems[item.name] = newCheckedItems[objectName];
            });

            const allItemsChecked = Object.keys(newCheckedItems)?.every(
                (itemName) => newCheckedItems[itemName]
            );

            setSelectAllChecked(allItemsChecked);
        }

        setCheckedItems(newCheckedItems);
    };

    const handleItemCheckboxChange = (itemName) => {
        const newCheckedItems = { ...checkedItems };
        newCheckedItems[itemName] = !checkedItems[itemName];

        const objectName = Object.keys(permissions)?.find((key) =>
            permissions[key]?.some((item) => item.name === itemName)
        );

        if (objectName && permissions[objectName]) {
            const allItemsChecked = permissions[objectName]?.every(
                (item) => newCheckedItems[item.name]
            );
            newCheckedItems[objectName] = allItemsChecked;
        }

        setCheckedItems(newCheckedItems);

        const allItemsChecked = Object.keys(newCheckedItems)?.every(
            (itemName) => newCheckedItems[itemName]
        );

        setSelectAllChecked(allItemsChecked);
    };

    const onSubmit = (data) => {
        // Access the role name
        const roleName = data.role;

        // Extract selected permissions
        const selectedPermissions = [];

        Object.keys(checkedItems).forEach((objectName) => {
            // Check if permissions[objectName] is defined
            if (!permissions[objectName]) {
                // console.error(`Permissions[${objectName}] is not defined.`);
                return;
            }

            permissions[objectName].forEach((item) => {
                if (checkedItems[item.name]) {
                    selectedPermissions.push(item);
                }
            });
        });
        const permissionIds = selectedPermissions.map(permission => permission.id);

        const requestData = {
            role: data.role,
            permissionIds: permissionIds,
        };

        router.post("/admin/role-permission/store", requestData);
    };
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                <div className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-[#ff6243] ltr:mr-3 rtl:ml-3">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                <ul className="flex items-center space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href={`${base_url}/admin/role-permission`} className="text-[19px] text-[#ff6243] font-bold  hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>Role & Permission</span>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>Add Permission</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center mb-5 ">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Role & Permission Add Form
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                <div>
                                    <label>Role Name <span className="text-[12px] text-red-700">*</span></label>
                                    <input
                                        {...register("role")}
                                        type="text"
                                        className="form-input"
                                        placeholder="Enter Role Name"
                                    />
                                    {errors.first_name && <p className="text-red-600 pt-2">{errors.first_name}</p>}
                                </div>
                            </div>
                            <hr />
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="">
                                    <div className="space-y-2 pt-3">
                                        <div>
                                            <label className="inline-flex">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-dark rounded-full"
                                                    id="selectAll"
                                                    checked={selectAllChecked}
                                                    onChange={handleSelectAllCheckboxChange}
                                                />
                                                <span>Select All Permission</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-[50px]">
                                {Object.entries(permissions).map(([objectName, items]) => (
                                    <div key={objectName} className="flex gap-[15px] p-[16px] flex-col xl:flex-col rounded-lg permission-card shadow-md">
                                        <div className="mb-5">
                                            {/* <h5 className="font-semibold text-lg dark:text-white-light">Group Name</h5> */}
                                            <div className="space-y-2 pt-3">
                                                <div>
                                                    <label className="inline-flex">
                                                        <input
                                                            type="checkbox"
                                                            className="form-checkbox text-dark rounded-full"
                                                            checked={checkedItems[objectName] || false}
                                                            onChange={() => handleObjectCheckboxChange(objectName)}
                                                        />
                                                        {/* <span>{objectName}</span> */} <strong className="text-[17px] uppercase font-semibold">{objectName}</strong>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {items.map((item, itemIndex) => (
                                                <div key={itemIndex} >
                                                    <div className="mb-5">
                                                        <div className="space-y-2 pt-3">
                                                            <div>
                                                                <label className="inline-flex">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-checkbox text-dark rounded-full"
                                                                        checked={checkedItems[item.name] || false}
                                                                        onChange={() => handleItemCheckboxChange(item.name)}
                                                                    />
                                                                    <span>{item.name}</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6 bg-[#ff6243] border-[#ff6243] text-base"
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
    <MainLayout children={page} title="Luminous E-Shop || Add Permission" />
);

export default Add;
