import React, {useState,Fragment} from "react";
import MainLayout from "../../Layout/Mainlayout";
import {Link, router, usePage} from "@inertiajs/react";
import { Dialog, Transition } from '@headlessui/react';
import {useForm} from "react-hook-form";
import axios from "axios";
function Translate() {
    const { base_url,resultArray,langId } = usePage().props;
    const { control, register, handleSubmit, setValue, reset,formState: { errors } } = useForm();


    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [response, setResponse] = useState(null);
    const openModal =  async () => {
        setAddModal(true)
    };

    function handleDeleteClick(data) {
        const defaultData = {
            key: data
        };
        router.get("/admin/language/delete/key/"+langId, defaultData);
    }

    const handleEditClick =  async (data) => {
        try {
            const url = base_url+'/admin/language/edit/key/'+langId+'/'+data;
            const responseData = await axios.get(url);
            if(responseData.data){
                setResponse(responseData.data);
                setEditModal(true)
            }
        } catch (error) {
            console.error(error);
        }
    };
    function onEditSubmit(data) {
        router.post("/admin/language/update/key/"+langId, data);
    }
    function onAddSubmit(data) {
        router.post("/admin/language/store/key/"+langId, data);
    }
    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">

                <div
                    className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
                    <svg
                        width="27"
                        height="27"
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

                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="#" className="text-[#FF6243] hover:underline text-base">
                            Language
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>List</span>
                    </li>
                </ul>

                <div className="ml-auto flex justify-center items-center gap-3">
                    <button
                        className="flex items-center px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                        onClick={openModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                             strokeLinejoin="round" className="h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2 text-white">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add
                    </button>
                </div>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="pt-5">
                    <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className="panel h-full w-full">
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Recent Orders</h5>
                            </div>
                            {resultArray && resultArray.length > 0 && (
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Key</th>
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Value</th>
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {resultArray.map((data, index) => (
                                            <tr key={index}
                                                className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                                                <td className="min-w-[150px] text-black dark:text-white">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={data.key}
                                                            className="form-input"
                                                            placeholder="Enter Code"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="min-w-[150px] text-black dark:text-white">
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={data.value}
                                                            className="form-input"
                                                            placeholder="Enter Code"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="flex items-center gap-2">
                                                    <button onClick={() => handleEditClick(data.key)}
                                                            className="btn btn-sm btn-outline-primary">
                                                        Edit
                                                    </button>
                                                    <button onClick={() => handleDeleteClick(data.key)}
                                                            className="btn btn-sm btn-outline-danger">
                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {
                addModal === true && (
                    <div className="mb-5">
                        <Transition appear show={addModal} as={Fragment}>
                            <Dialog as="div" open={addModal} onClose={() => setAddModal(false)}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0"/>
                                </Transition.Child>
                                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                                    <div className="flex items-start justify-center min-h-screen px-4">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel as="div"
                                                          className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark">
                                                <div className="p-5">
                                                    <div>
                                                        <div className="mb-5">
                                                            <form className="space-y-5" onSubmit={handleSubmit(onAddSubmit)}
                                                                  method="post">
                                                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                                                    <div>
                                                                        <label> Key <span className="text-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            {...register("key", {required: "Key Is required"})}
                                                                            type="text"
                                                                            className="form-input"
                                                                            placeholder="Enter Key"
                                                                        />
                                                                        {errors.key &&
                                                                            <p className="text-red-600 pt-2">{errors.key.message}</p>}
                                                                    </div>
                                                                    <div>
                                                                        <label> Value <span className="text-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            {...register("value", {required: "Value Is required"})}
                                                                            type="text"
                                                                            className="form-input"
                                                                            placeholder="Enter value"
                                                                        />
                                                                        {errors.value &&
                                                                            <p className="text-red-600 pt-2">{errors.value.message}</p>}
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
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                )
            }
            {
                editModal === true && response && (
                    <div className="mb-5">
                        <Transition appear show={editModal} as={Fragment}>
                            <Dialog as="div" open={editModal} onClose={() => setEditModal(false)}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0"/>
                                </Transition.Child>
                                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                                    <div className="flex items-start justify-center min-h-screen px-4">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel as="div"
                                                          className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark">
                                                <div className="p-5">
                                                    <div>
                                                        <div className="mb-5">
                                                            <form className="space-y-5"
                                                                  onSubmit={handleSubmit(onEditSubmit)}
                                                                  method="post">
                                                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                                                    <div>
                                                                        <label> Key <span className="text-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            value={response?.key}
                                                                            {...register("key")}
                                                                            type="text"
                                                                            readOnly
                                                                            className="form-input bg-dark text-white"
                                                                            placeholder="Enter Key"
                                                                        />
                                                                        {errors.key &&
                                                                            <p className="text-red-600 pt-2">{errors.key.message}</p>}
                                                                    </div>
                                                                    <div>
                                                                        <label> Value <span className="text-danger">*</span>
                                                                        </label>
                                                                        <input
                                                                            {...register("value", {required: "Value Is required"})}
                                                                            type="text"
                                                                            defaultValue={response?.value || ""}
                                                                            className="form-input"
                                                                            placeholder="Enter value"
                                                                        />
                                                                        {errors.value &&
                                                                            <p className="text-red-600 pt-2">{errors.value.message}</p>}
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
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                )
            }

        </>
    );
}

Translate.layout = (page) => (
    <MainLayout children={page} title="E-SHOP || Add Group Of Company"/>
);

export default Translate;
