import React, { useEffect, useState, useMemo } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import DeleteModal from "../../Component/DeleteModal.jsx";
import { DataTable } from 'mantine-datatable';

function Index() {

    const { data: initialData, meta: initialMeta, base_url } = usePage().props;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(!initialData || initialData.length === 0);
    const [isRefetching, setIsRefetching] = useState(false);
    const [rowCount, setRowCount] = useState(initialMeta ? initialMeta.totalRowCount : 0);

    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    
    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState(false);
    const [fileToDelete, setFileToDelete] = useState(null);
    
    const [rowSelection, setRowSelection] = useState({});

    const [data, setData] = useState(initialData || []);
    useEffect(() => {
        const fetchData = async () => {
            if (!data.length) {
                setIsLoading(true);
            } else {
                setIsRefetching(true);
            }

            const url = new URL('/admin/tax/data', base_url);
            url.searchParams.set(
                'start',
                `${pagination.pageIndex * pagination.pageSize}`
            );
            url.searchParams.set('size', `${pagination.pageSize}`);
            url.searchParams.set('filters', JSON.stringify(columnFilters));
            url.searchParams.set('globalFilter', globalFilter ?? '');
            url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

            try {
                const response = await fetch(url.href);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');

                if (contentType && contentType.includes('application/json')) {
                    const json = await response.json();
                    setData(json.data);
                    setRowCount(json.meta.totalRowCount);
                } else {
                    throw new Error('Response is not JSON');
                }
            } catch (error) {
                setIsError(true);
                console.error(error);
            } finally {
                setIsLoading(false);
                setIsRefetching(false);
            }
        };

        fetchData();
    }, [
        columnFilters,
        globalFilter,
        pagination.pageIndex,
        pagination.pageSize,
        sorting,
    ]);

    function handleEditClick(data) {
        router.get("/admin/tax/edit/" + data);
    }

    function handleDeleteClick(data) {
        setFileToDelete(data);
        // router.post("/admin/category/delete", data);
        setIsDeleteNoteModal(true);
    }

    function handleStatusClick(data) {
        router.get("/admin/tax/status/" + data);
    }


    function handleDeleteAllClick(data) {
        const idArray = Object.keys(data).map(Number);

        router.post("/admin/tax/delete-table-row/" + idArray);
    }
    
    const columns = useMemo(
        () => [
            {
                accessorKey: 'tax_name',
                header: 'Tax Name',
            },
            {
                header: 'Tax Type',
                Cell: ({ row }) => (
                    <div className="flex items-center gap-2">
                       {row.original.tax_type === 1 ? "Amount" : "Percentage"}
                    </div>
                ),
            },


            {
                accessorKey: 'tax_amount',
                header: 'Tax Amount / Percentage',
            },
            {

                header: 'Status',
                Cell: ({ row }) => (

                    <div className="flex items-center gap-2">
                        <label className="w-12 h-6 relative"
                            onClick={() =>
                                handleStatusClick(row.id)
                            }
                        >
                            <input defaultChecked={row.original.status === 1} type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                            <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                        </label>
                    </div>
                ),
            },
            {
                header: 'Actions',
                Cell: ({ row }) => (
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleEditClick(row.id)} className="btn btn-sm btn-outline-primary">
                            Edit
                        </button>
                        <button onClick={() => handleDeleteClick(row.id)} className="btn btn-sm btn-outline-danger">
                            Delete
                        </button>
                    </div>
                ),
            },
        ],
        []
    );
    const table = useMantineReactTable({
        columns,
        data,
        paginationDisplayMode: 'pages',
        enableRowSelection: true,
        selectDisplayMode: 'switch',
        onRowSelectionChange: setRowSelection,
        enableDensityToggle: false,
        getRowId: (row) => row.id,
        initialState: {
            showColumnFilters: false,
            showGlobalFilter: true,
            density: 'compact'
        },
        positionGlobalFilter: "left",
        mantineSearchTextInputProps: {
            placeholder: `Search ${data.length} rows`,
            sx: { minWidth: '300px' },
            variant: 'filled',
        },
        manualFiltering: true,
        manualPagination: true,
        manualSorting: true,
        rowCount,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        state: {
            columnFilters,
            globalFilter,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isRefetching,
            sorting,
            rowSelection
        },
        mantineToolbarAlertBannerProps: isError
            ? { color: 'red', children: 'Error loading data' }
            : undefined,
    });

    return (
        <>
            <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 ">

                <div className="rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center">
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
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>Tax</span>
                    </li>
                </ul>

                <div className="ml-auto flex justify-center items-center gap-3">
                    <Link
                        href={`${base_url}/admin/tax/trashed`}
                        method="get"
                        className="flex items-center px-7 py-2 bg-[#4d4d4d] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2">
                            <path
                                opacity="0.5"
                                d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z"
                                fill="currentColor"
                            />
                            <path
                                d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z"
                                fill="currentColor"
                            />
                        </svg>
                        Trash
                    </Link>
                    <Link
                        href={`${base_url}/admin/tax/create`}
                        method="get"
                        className="flex items-center px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2 text-white">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>

                        Add
                    </Link>

                    {
                        Object.keys(rowSelection).length > 0 && <button onClick={() => handleDeleteAllClick(rowSelection)} className="flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105">Delete All</button>
                    }
                </div>
            </div>
            <br />
            <MantineReactTable table={table} />
            <DeleteModal isDeleteNoteModal={isDeleteNoteModal} setIsDeleteNoteModal={setIsDeleteNoteModal} fileToDelete={fileToDelete} name="Tax" route="tax"></DeleteModal>
        </>
    );
}

Index.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || All Tax" />
);

export default Index;
