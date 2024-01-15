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
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
    <MainLayout children={page} title="E-SHOP || Add Group Of Company" />
);

export default Type;
