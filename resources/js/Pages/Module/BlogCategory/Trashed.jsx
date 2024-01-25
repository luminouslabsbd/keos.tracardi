import React, { useEffect, useState, useMemo } from "react";
import MainLayout from "../../Layout/Mainlayout";
import { Link, router, usePage } from "@inertiajs/react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import DeleteModal from "../../Component/DeleteModal.jsx";
import ParmanentDeleteModal from "../../Component/ParmanentDeleteModal.jsx";

function Index() {
    const { data: initialData, meta: initialMeta, base_url } = usePage().props;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(
        !initialData || initialData.length === 0
    );
    const [isRefetching, setIsRefetching] = useState(false);
    const [rowCount, setRowCount] = useState(
        initialMeta ? initialMeta.totalRowCount : 0
    );

    const [columnFilters, setColumnFilters] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const [isDeleteNoteModal, setIsDeleteNoteModal] = useState(false);
    const [fileToDelete, setFileToDelete] = useState(null);

    const [data, setData] = useState(initialData || []);
    useEffect(() => {
        const fetchData = async () => {
            if (!data.length) {
                setIsLoading(true);
            } else {
                setIsRefetching(true);
            }
            const url = new URL("/admin/blog-category/trashed/data", base_url);
            url.searchParams.set(
                "start",
                `${pagination.pageIndex * pagination.pageSize}`
            );
            url.searchParams.set("size", `${pagination.pageSize}`);
            url.searchParams.set("filters", JSON.stringify(columnFilters));
            url.searchParams.set("globalFilter", globalFilter ?? "");
            url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

            try {
                const response = await fetch(url.href);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const contentType = response.headers.get("content-type");

                if (contentType && contentType.includes("application/json")) {
                    const json = await response.json();
                    setData(json.data);
                    setRowCount(json.meta.totalRowCount);
                } else {
                    throw new Error("Response is not JSON");
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

    function handleUndoClick(data) {
        router.get("/admin/blog-category/undo-trashed/" + data);
    }
    function handleDeleteClick(data) {
        setFileToDelete(data);
        setIsDeleteNoteModal(true);
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: " Category Name",
            },

            {
                header: "Actions",
                Cell: ({ row }) => (
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleUndoClick(row.id)}
                            className="btn btn-sm btn-outline-primary"
                        >
                            Undo
                        </button>
                        <button
                            onClick={() => handleDeleteClick(row.id)}
                            className="btn btn-sm btn-outline-danger"
                        >
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
        paginationDisplayMode: "pages",
        enableRowSelection: true,
        enableDensityToggle: false,
        getRowId: (row) => row.id,
        initialState: {
            showColumnFilters: false,
            showGlobalFilter: true,
            density: "compact",
        },
        positionGlobalFilter: "left",
        mantineSearchTextInputProps: {
            placeholder: `Search ${data.length} rows`,
            sx: { minWidth: "300px" },
            variant: "filled",
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
        },
        mantineToolbarAlertBannerProps: isError
            ? { color: "red", children: "Error loading data" }
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
                        <Link
                            href="#"
                            className="text-[#FF6243] hover:underline text-base"
                        >
                            Blog Category
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base">
                        <span>Trashed</span>
                    </li>
                </ul>

                <div className="ml-auto flex justify-center items-center gap-3">
                    <Link
                        href={`${base_url}/admin/blog-category/restore-all`}
                        method="get"
                        className="flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                    >
                        Undo All
                    </Link>
                    <Link
                        href={`${base_url}/admin/blog-category/permanent-delete-all`}
                        method="get"
                        className="flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105"
                    >
                        Delete All
                    </Link>
                </div>
            </div>
            <br />
            <MantineReactTable table={table} />
            <ParmanentDeleteModal
                isDeleteNoteModal={isDeleteNoteModal}
                setIsDeleteNoteModal={setIsDeleteNoteModal}
                fileToDelete={fileToDelete}
                name="Blog Category"
                route="blog-category/permanent-delete"
            ></ParmanentDeleteModal>
        </>
    );
}

Index.layout = (page) => (
    <MainLayout children={page} title="Luminous-Ecommerce || Trashed" />
);

export default Index;
