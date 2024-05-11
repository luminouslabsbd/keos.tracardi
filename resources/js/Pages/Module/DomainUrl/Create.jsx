import { Link, router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { useForm } from "react-hook-form";

function Create() {
    const {
        register: addRegister,
        handleSubmit: handleAddSubmit,
        formState: addFormState,
        reset: addReset,
    } = useForm();

    const { base_url, domain_id } = usePage().props;
    const onSubmit = (data) => {
        router.post("/admin/domain/domain-url/store", data);
        addReset();
    };

    return (
        <>
            <div className="domains-header grid grid-cols-12 gap-4">
                <div className="col-span-12 pt-4">
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
                                <Link
                                    href={`${base_url}/admin/dashboard`}
                                    className="text-[#ff6243] hover:underline"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                                <span>Manual URL Create</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="col-span-12 pt-4">
                    <div className="panel">
                        <div className="mb-2">
                            <h5 className="mb-2 font-bold">Add New Domain Url</h5>
                            <hr />
                        </div>
                        <form
                            onSubmit={handleAddSubmit(onSubmit)}
                            method="post"
                        >
                            <div className=" grid grid-cols-2 gap-x-3 gap-y-2">
                                <input type="hidden" {...addRegister("domain_id", { value: domain_id })}/>
                                <div>
                                    <label className="font-normal">URL</label>
                                    <input
                                        type="text"
                                        {...addRegister("url", {
                                            required: "URL is required",
                                        })}
                                        className="form-input"
                                        placeholder="Enter your url"
                                    />
                                    {addFormState.errors.url && (
                                        <p
                                            className="text-red-500"
                                            role="alert"
                                        >
                                            {addFormState.errors.url.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="font-normal pt-2">
                                        Event name
                                    </label>
                                    <input
                                        type="text"
                                        {...addRegister("event_name", {
                                            required: "Event name is required",
                                        })}
                                        className="form-input"
                                        placeholder="Enter your event name"
                                    />
                                    {addFormState.errors.event_name && (
                                        <p
                                            className="text-red-500"
                                            role="alert"
                                        >
                                            {
                                                addFormState.errors.event_name
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="font-normal pt-2">
                                        Event type
                                    </label>
                                    <select
                                        className="form-select text-white-dark"
                                        name=""
                                        id=""
                                        {...addRegister("event_type", {
                                            required: "Event type is required",
                                        })}
                                    >
                                        <option disabled>
                                            Select event type
                                        </option>
                                        <option value="click">Click</option>
                                        <option value="view">View</option>
                                    </select>
                                    {addFormState.errors.event_type && (
                                        <p
                                            className="text-red-500"
                                            role="alert"
                                        >
                                            {
                                                addFormState.errors.event_type
                                                    .message
                                            }
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="font-normal pt-2">
                                        Action
                                    </label>
                                    <select
                                        className="form-select text-white-dark"
                                        name=""
                                        id=""
                                        {...addRegister("action", {
                                            required: "Action is required",
                                        })}
                                    >
                                        <option disabled>Select Action</option>
                                        <option value="client">Client</option>
                                        <option value="lead">Lead</option>
                                    </select>
                                    {addFormState.errors.action && (
                                        <p
                                            className="text-red-500"
                                            role="alert"
                                        >
                                            {addFormState.errors.action.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="font-normal pt-2">
                                        Role
                                    </label>
                                    <select
                                        className="form-select text-white-dark"
                                        name=""
                                        id=""
                                        {...addRegister("role", {
                                            required: "Role is required",
                                        })}
                                    >
                                        <option value="" selected>
                                            Select role
                                        </option>
                                        <option value="organizer">
                                            Organizer
                                        </option>
                                        <option value="assistant">
                                            Assistant
                                        </option>
                                        <option value="scanner">Scanner</option>
                                    </select>
                                    {addFormState.errors.role && (
                                        <p
                                            className="text-red-500"
                                            role="alert"
                                        >
                                            {addFormState.errors.role.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success mt-6"
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
Create.layout = (page) => (
    <MainLayout children={page} title="Trackid || Trackid create" />
);
export default Create;
