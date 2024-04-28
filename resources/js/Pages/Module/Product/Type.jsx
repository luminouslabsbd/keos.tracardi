import React from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";
function Type() {
    const { base_url } = usePage().props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        router.post("/admin/color/store", data);
    }
    return (
        <>
            <div className="attributes-header grid grid-cols-12 gap-4">
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
                                <Link href={`${base_url}/admin/dashboard`} className="text-[#ff6243] hover:underline">Dashboard</Link>
                            </li>
                            <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                                <span>Product Type</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
                <div className="panel flex justify-center items-center h-full p-[40px] border">
                    <div className="font-semibold text-center">
                        <div className=" bottom-0 flex items-center justify-between p-5 -mx-5">
                            <Link href={`${base_url}/admin/product/create/physical`} type="button"
                                className="btn text-[17px] font-bold btn btn-gradient px-[50px] py-[30px] !w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] bg-indigo-500 text-white">
                                Physical Product
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="panel flex justify-center items-center h-full p-[40px] border">
                    <div className="font-semibold text-center">
                        <div className=" bottom-0 flex items-center justify-between p-5 -mx-5">
                            <Link href={`${base_url}/admin/product/create/digital`} type="button"
                                className="btn text-[17px] font-bold btn btn-gradient px-[50px] py-[30px] !w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] bg-indigo-500 text-white">
                                Digital Product
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="panel flex justify-center items-center h-full p-[40px] border">
                    <div className="font-semibold text-center">
                        <div className=" bottom-0 flex items-center justify-between p-5 -mx-5">
                            <Link href={`${base_url}/admin/product/create/license`} type="button"
                                className="btn text-[17px] font-bold btn btn-gradient px-[50px] py-[30px] !w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] bg-indigo-500 text-white">
                                License Product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Type.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || Add Product" />
);

export default Type;
