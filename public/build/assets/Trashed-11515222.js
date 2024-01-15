import{q as z,r as t,j as e,d as u,y as A}from"./app-545b6d98.js";import B from"./Mainlayout-2377f4ce.js";import{u as G,M as U}from"./mantine-react-table.esm-c7420a2d.js";import J from"./ParmanentDeleteModal-fd0d4408.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-6f084bda.js";import"./Header-461ea8e1.js";import"./Dropdown-79c7191d.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-52f4c63a.js";import"./FlashMessage-9a44a19f.js";import"./sweetalert2.all-208670e1.js";import"./Table-c0a962a9.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-11ff6a83.js";import"./transition-711351a7.js";function O(){const{data:o,meta:h,base_url:i}=z().props,[p,b]=t.useState(!1),[C,g]=t.useState(!o||o.length===0),[j,x]=t.useState(!1),[S,N]=t.useState(h?h.totalRowCount:0),[l,F]=t.useState([]),[c,v]=t.useState(""),[d,D]=t.useState([]),[s,P]=t.useState({pageIndex:0,pageSize:10}),[M,f]=t.useState(!1),[R,T]=t.useState(null),[m,k]=t.useState(o||[]);t.useEffect(()=>{(async()=>{m.length?x(!0):g(!0);const a=new URL("/admin/currency/trashed/data",i);a.searchParams.set("start",`${s.pageIndex*s.pageSize}`),a.searchParams.set("size",`${s.pageSize}`),a.searchParams.set("filters",JSON.stringify(l)),a.searchParams.set("globalFilter",c??""),a.searchParams.set("sorting",JSON.stringify(d??[]));try{const n=await fetch(a.href);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const w=n.headers.get("content-type");if(w&&w.includes("application/json")){const y=await n.json();k(y.data),N(y.meta.totalRowCount)}else throw new Error("Response is not JSON")}catch(n){b(!0),console.error(n)}finally{g(!1),x(!1)}})()},[l,c,s.pageIndex,s.pageSize,d]);function I(r){A.get("/admin/currency/undo-trashed/"+r)}function L(r){T(r),f(!0)}const E=t.useMemo(()=>[{accessorKey:"name",header:" Currency Name"},{header:"Actions",Cell:({row:r})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>I(r.id),className:"btn btn-sm btn-outline-primary",children:"Undo"}),e.jsx("button",{onClick:()=>L(r.id),className:"btn btn-sm btn-outline-danger",children:"Delete"})]})}],[]),$=G({columns:E,data:m,paginationDisplayMode:"pages",enableRowSelection:!0,enableDensityToggle:!1,getRowId:r=>r.id,initialState:{showColumnFilters:!1,showGlobalFilter:!0,density:"compact"},positionGlobalFilter:"left",mantineSearchTextInputProps:{placeholder:`Search ${m.length} rows`,sx:{minWidth:"300px"},variant:"filled"},manualFiltering:!0,manualPagination:!0,manualSorting:!0,rowCount:S,onColumnFiltersChange:F,onGlobalFilterChange:v,onPaginationChange:P,onSortingChange:D,state:{columnFilters:l,globalFilter:c,isLoading:C,pagination:s,showAlertBanner:p,showProgressBars:j,sorting:d},mantineToolbarAlertBannerProps:p?{color:"red",children:"Error loading data"}:void 0});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(u,{href:"#",className:"text-[#FF6243] hover:underline text-base",children:"Currency"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"List"})})]}),e.jsxs("div",{className:"ml-auto flex justify-center items-center gap-3",children:[e.jsx(u,{href:`${i}/admin/currency/restore-all`,method:"get",className:"flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Undo All"}),e.jsx(u,{href:`${i}/admin/currency/permanent-delete-all`,method:"get",className:"flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Delete All"})]})]}),e.jsx("br",{}),e.jsx(U,{table:$}),e.jsx(J,{isDeleteNoteModal:M,setIsDeleteNoteModal:f,fileToDelete:R,name:"Currency",route:"currency/permanent-delete"})]})}O.layout=o=>e.jsx(B,{children:o,title:"currency Trashed List || Luminous-Ecommerce"});export{O as default};
