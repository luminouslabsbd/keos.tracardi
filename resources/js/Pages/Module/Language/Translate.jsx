import React, { useState } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";
function Translate() {
    const { errors,data } = usePage().props;
    const { control, register, handleSubmit, setValue, reset } = useForm();
    const [items, setItems] = useState([data]);
    console.log(items[0])
    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max, character) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, { id: maxId + 1, key: '', value: '' }]);
    };

    const removeItem = (item = null) => {
        setItems(items.filter((d) => d.id !== item.id));
    };

    const changeKeyVAlue= (type, value, id) => {
        const list = items;
        const item = list.find((d) => d.id === id);
        if (type === 'key') {
            item.key = Number(value);
        }
        if (type === 'value') {
            item.value = Number(value);
        }
        setItems([...list]);
    };

    function onSubmit(data) {
        router.post("/admin/language/store", data);
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
                            Brand
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Add</span>
                    </li>
                </ul>
            </div>
            <div className="pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6">
                <div className="panel" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">
                            Brand Add Form
                        </h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                                    <div className="mt-8">
                                        <div className="table-responsive">
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Discount</th>
                                                    <th className="w-1"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {items.length <= 0 && (
                                                    <tr>
                                                        <td colSpan={5} className="!text-center font-semibold">
                                                            No Item Available
                                                        </td>
                                                    </tr>
                                                )}
                                                {items.map((item) => {
                                                    return (
                                                        <tr className="align-top" key={item}>

                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="form-input w-32"
                                                                    placeholder="Quantity"
                                                                    min={1}
                                                                    defaultValue={item.key}
                                                                    onChange={(e) => changeKeyVAlue('key', e.target.value, item.id)}
                                                                />
                                                            </td>

                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="form-input w-32"
                                                                    placeholder="Discount"
                                                                    min={0}
                                                                    value={item.value}
                                                                    onChange={(e) => changeKeyVAlue('value', e.target.value, item.id)}
                                                                />
                                                            </td>

                                                            <td className="mt-2">
                                                                <button type="button"
                                                                        onClick={() => removeItem(item)}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <line x1="18" y1="6" x2="6"
                                                                              y2="18"></line>
                                                                        <line x1="6" y1="6" x2="18"
                                                                              y2="18"></line>
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex justify-between sm:flex-row flex-col mt-6 px-4">
                                            <div className="sm:mb-0 mb-6">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={() => addItem()}>
                                                    Add Item
                                                </button>
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

Translate.layout = (page) => (
    <MainLayout children={page} title="E-SHOP || Add Group Of Company"/>
);

export default Translate;
