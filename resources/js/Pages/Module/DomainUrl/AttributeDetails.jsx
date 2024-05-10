import React, { useState, useEffect } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form"

function AttributeDetails() {
    const { attributeItems, attribute } = usePage().props;
    const [inputValue, setInputValue] = useState("");
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { base_url } = usePage().props;
    const { register: addRegister, handleSubmit: handleAddSubmit, formState: addFormState, reset: addReset } = useForm();
    const { register: editRegister, handleSubmit: handleEditFormSubmit, formState: editFormState, reset: editReset } = useForm();

    const onSubmit = (data) => {
        router.post("/admin/product/attribute-item/store", data);
        setInputValue("");
    };

    const handleEdit = (item) => {
        setSelectedAttribute(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedAttribute(null);
        setIsModalOpen(false);
    };

    const handleEditSubmit = async (data) => {
        try {
            router.post(`/admin/product/attribute-item/update/${selectedAttribute.id}`, data);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error updating attribute item:", error);
        }
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this attribute item?')) {
            router.delete(`/admin/product/attribute-item/delete/${id}`);
        }
    };


    return (
        <>
            <div className="attributes-header grid grid-cols-12">
                <div className="col-span-12 pt-4">
                    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">
                        <div className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5">
                                <path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <ul className="flex space-x-2 rtl:space-x-reverse">
                            <li>
                                <Link href={`${base_url}/admin/product/attribute`} className="text-[#ff6243] hover:underline">Attribute</Link>
                            </li>
                            <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                                <span>Attribute Details</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="attributes-info grid grid-cols-12 gap-4">
                <div className="col-span-9 pt-4">
                    <div className="panel">
                        <div className="mb-2">
                            <h5 className="font-bold">{attribute.name}</h5>
                        </div>
                        <hr/>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Values</th>
                                    <th className="!text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attributeItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.item_name}</td>
                                        <td className="text-right">
                                            <div className="flex justify-end">
                                                <a href="#" className="inline-block px-2 py-1 leading-none border border-blue-500 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 mr-2" title="Edit" onClick={() => handleEdit(item)}>
                                                    <i className="las la-edit"></i>Edit
                                                </a>
                                                <a href="#" className="inline-block px-2 py-1 leading-none border border-red-500 text-red-500 rounded-md hover:text-white hover:bg-red-500 mr-2" title="Delete" onClick={() => handleDelete(item.id)}>
                                                    <i className="las la-delete"></i>Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-span-3 pt-4">
                    <div className="panel">
                        <div className="mb-2">
                            <h5 className="mb-2 font-bold">Add New Attribute Value</h5>
                            <hr/>
                        </div>
                        <form onSubmit={handleAddSubmit(onSubmit)} method="post">
                            <div className="mb-2">
                                <label className="font-normal">Attribute Name</label>
                                <input className="form-input" value={attribute.name} disabled={true}/>
                                <input hidden {...addRegister("attribute_id")} value={attribute.id}/>
                            </div>
                            <div className="">
                                <label className="font-normal">Attribute Value</label>
                                <input type="text" {...addRegister("item_name", { required: "Attribute is required" })} className="form-input" placeholder="Enter attributes value" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                                {addFormState.errors.attribute && <p className="text-red-500" role="alert">{addFormState.errors.attribute.message}</p>}
                            </div>
                            <button type="submit" className="btn btn-success mt-6">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            {isModalOpen && selectedAttribute && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-md w-96">
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
                            <h2 className="text-xl font-bold">Edit Attribute Item</h2>
                            <button className="text-gray-600 hover:text-red-600" onClick={handleCloseModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleEditFormSubmit(handleEditSubmit)}>
                                <input hidden {...editRegister("attribute_id")} value={attribute.id}/>
                                <input type="text" {...editRegister("item_name", { required: true })} defaultValue={selectedAttribute.item_name} className="form-input" placeholder="Enter attribute name" />
                                {editFormState.errors.item_name && <p className="text-red-500 pt-2 pl-1">Attribute item name is required</p>}
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

AttributeDetails.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || Attribute Details" />
);

export default AttributeDetails;
