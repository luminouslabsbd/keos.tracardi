import{q as $,r as t,j as e,d as g,y as z}from"./app-545b6d98.js";import A from"./Mainlayout-2377f4ce.js";import{u as G,M as U}from"./mantine-react-table.esm-c7420a2d.js";import J from"./ParmanentDeleteModal-fd0d4408.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-6f084bda.js";import"./Header-461ea8e1.js";import"./Dropdown-79c7191d.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-52f4c63a.js";import"./FlashMessage-9a44a19f.js";import"./sweetalert2.all-208670e1.js";import"./Table-c0a962a9.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-11ff6a83.js";import"./transition-711351a7.js";function O(){const{data:n,meta:h,base_url:l}=$().props,[p,y]=t.useState(!1),[C,u]=t.useState(!n||n.length===0),[j,x]=t.useState(!1),[S,N]=t.useState(h?h.totalRowCount:0),[i,F]=t.useState([]),[c,v]=t.useState(""),[m,D]=t.useState([]),[s,P]=t.useState({pageIndex:0,pageSize:10}),[M,f]=t.useState(!1),[R,k]=t.useState(null),[d,I]=t.useState(n||[]);t.useEffect(()=>{(async()=>{d.length?x(!0):u(!0);const r=new URL("/admin/blog-category/trashed/data",l);r.searchParams.set("start",`${s.pageIndex*s.pageSize}`),r.searchParams.set("size",`${s.pageSize}`),r.searchParams.set("filters",JSON.stringify(i)),r.searchParams.set("globalFilter",c??""),r.searchParams.set("sorting",JSON.stringify(m??[]));try{const o=await fetch(r.href);if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);const b=o.headers.get("content-type");if(b&&b.includes("application/json")){const w=await o.json();I(w.data),N(w.meta.totalRowCount)}else throw new Error("Response is not JSON")}catch(o){y(!0),console.error(o)}finally{u(!1),x(!1)}})()},[i,c,s.pageIndex,s.pageSize,m]);function L(a){z.get("/admin/blog-category/undo-trashed/"+a)}function T(a){k(a),f(!0)}const E=t.useMemo(()=>[{accessorKey:"name",header:" Category Name"},{header:"Actions",Cell:({row:a})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>L(a.id),className:"btn btn-sm btn-outline-primary",children:"Undo"}),e.jsx("button",{onClick:()=>T(a.id),className:"btn btn-sm btn-outline-danger",children:"Delete"})]})}],[]),B=G({columns:E,data:d,paginationDisplayMode:"pages",enableRowSelection:!0,enableDensityToggle:!1,getRowId:a=>a.id,initialState:{showColumnFilters:!1,showGlobalFilter:!0,density:"compact"},positionGlobalFilter:"left",mantineSearchTextInputProps:{placeholder:`Search ${d.length} rows`,sx:{minWidth:"300px"},variant:"filled"},manualFiltering:!0,manualPagination:!0,manualSorting:!0,rowCount:S,onColumnFiltersChange:F,onGlobalFilterChange:v,onPaginationChange:P,onSortingChange:D,state:{columnFilters:i,globalFilter:c,isLoading:C,pagination:s,showAlertBanner:p,showProgressBars:j,sorting:m},mantineToolbarAlertBannerProps:p?{color:"red",children:"Error loading data"}:void 0});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(g,{href:"#",className:"text-[#FF6243] hover:underline text-base",children:"Blog Category"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"List"})})]}),e.jsxs("div",{className:"ml-auto flex justify-center items-center gap-3",children:[e.jsx(g,{href:`${l}/admin/blog-category/restore-all`,method:"get",className:"flex items-center px-7 py-2 bg-indigo-700 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Undo All"}),e.jsx(g,{href:`${l}/admin/blog-category/permanent-delete-all`,method:"get",className:"flex items-center px-7 py-2 bg-red-600 text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",children:"Delete All"})]})]}),e.jsx("br",{}),e.jsx(U,{table:B}),e.jsx(J,{isDeleteNoteModal:M,setIsDeleteNoteModal:f,fileToDelete:R,name:"Blog Category",route:"blog-category/permanent-delete"})]})}O.layout=n=>e.jsx(A,{children:n,title:"Blog Category List || Luminous-Ecommerce"});export{O as default};
