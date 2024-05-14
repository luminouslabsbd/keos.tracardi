import{q as b,j as e,d as p,y as s}from"./app-4b792641.js";import j from"./Mainlayout-49980fb4.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-a0c6c199.js";import"./Header-e2d691d1.js";import"./Dropdown-bdfe6698.js";import"./nonIterableRest-b3ebea8d.js";import"./iterableToArray-95db6415.js";import"./Sidebar-fe1ee6e8.js";import"./slicedToArray-27e0c1bc.js";import"./FlashMessage-12c02f9d.js";import"./sweetalert2.all-5c9e751d.js";function u(){const{domains:a,base_url:d}=b().props,i=()=>{s.get("/admin/domain/create")},n=r=>{s.get(`/admin/domain/edit/${r}`)},o=r=>{confirm("Are you sure you want to delete this domain?")&&s.delete(`/admin/domain/delete/${r}`)},c=r=>{s.get(`/admin/domain/domain-url/create/${r}`)},h=r=>{s.get(`/admin/domain/csv/${r}`)},m=r=>{s.get(`/admin/domain/details/${r}`)},x=async(r,l)=>{try{const t=l?1:0;s.post("/admin/domain/status",{id:r,status:t})}catch(t){console.error("Error updating domain:",t)}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"domains-header grid grid-cols-12 gap-4",children:e.jsx("div",{className:"col-span-12 pt-4",children:e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(p,{href:`${d}/admin/dashboard`,className:"text-[#ff6243] hover:underline",children:"Dashboard"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Domain List"})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx("a",{href:"#",className:"btn btn-info btn-sm",onClick:()=>i(),children:"+ Add"})})]})})}),e.jsx("div",{className:"pt-5",children:e.jsx("div",{className:"col-span-12 pt-4",children:e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"mb-2",children:e.jsx("h5",{className:"font-bold",children:"Domain list"})}),e.jsx("hr",{}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SL"}),e.jsx("th",{children:"Domain name"}),e.jsx("th",{children:"Username"}),e.jsx("th",{children:"User Password"}),e.jsx("th",{children:"Backend API url"}),e.jsx("th",{children:"Status"}),e.jsx("th",{className:"!text-right",children:"Action"})]})}),e.jsx("tbody",{children:a.map((r,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:l+1}),e.jsx("td",{children:r.domain}),e.jsx("td",{children:r.user_name}),e.jsx("td",{children:r.user_pass}),e.jsx("td",{children:r.backend_api_url}),e.jsx("td",{children:e.jsxs("label",{className:"w-12 h-6 relative",children:[e.jsx("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:`custom_switch_checkbox${l}`,checked:r.status===1,onChange:t=>x(r.id,t.target.checked)}),e.jsx("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})}),e.jsx("td",{className:"!tex-right",children:e.jsxs("div",{className:"flex justify-end",children:[e.jsxs("a",{href:"#",className:"inline-block px-2 py-1 leading-none border border-blue-500 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 mr-2",title:"Edit",onClick:()=>n(r.id),children:[e.jsx("i",{className:"las la-edit"}),"Edit"]}),e.jsxs("a",{href:"#",className:"inline-block px-2 py-1 leading-none border border-red-500 text-red-500 rounded-md hover:text-white hover:bg-red-500 mr-2",title:"Delete",onClick:()=>o(r.id),children:[e.jsx("i",{className:"las la-delete"}),"Delete"]}),e.jsxs("a",{href:"#",className:"inline-block px-2 py-1 leading-none border border-green-500 text-green-500 rounded-md hover:text-white hover:bg-green-500 mr-2",title:"Add url",onClick:()=>c(r.id),children:[e.jsx("i",{className:"las la-delete"}),"Add URL"]}),e.jsxs("a",{href:"#",className:"inline-block px-2 py-1 leading-none border border-green-500 text-green-500 rounded-md hover:text-white hover:bg-green-500 mr-2",title:"Csv",onClick:()=>h(r.id),children:[e.jsx("i",{className:"las la-delete"}),"CSV Upload"]}),e.jsxs("a",{href:"#",className:"inline-block px-2 py-1 leading-none border border-blue-500 text-blue-500 rounded-md hover:text-white hover:bg-blue-500 mr-2",title:"Details",onClick:()=>m(r.id),children:[e.jsx("i",{className:"las la-delete"}),"Details"]})]})})]},r.id))})]})]})})})]})}u.layout=a=>e.jsx(j,{children:a,title:"Trackid || Trackid list"});export{u as default};
