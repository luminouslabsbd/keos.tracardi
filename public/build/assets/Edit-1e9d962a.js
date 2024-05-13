import{q as m,r as p,j as e,d as x,y as h}from"./app-4b792641.js";import u from"./Mainlayout-49980fb4.js";import{u as j}from"./index.esm-19891dba.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-a0c6c199.js";import"./Header-e2d691d1.js";import"./Dropdown-bdfe6698.js";import"./nonIterableRest-b3ebea8d.js";import"./iterableToArray-95db6415.js";import"./Sidebar-fe1ee6e8.js";import"./slicedToArray-27e0c1bc.js";import"./FlashMessage-12c02f9d.js";import"./sweetalert2.all-5c9e751d.js";function v(){const{domain_url_data:s,domain_id:l,base_url:a}=m().props,{register:t,handleSubmit:n,formState:r,reset:d,setValue:i}=j();p.useEffect(()=>{i("id",s.id),i("domain_id",l),i("url",s.url),i("event_name",s.event_name),i("event_type",s.event_type),i("role",s.role),i("action",s.action)});const o=c=>{h.post("/admin/domain/domain-url/update",c),d()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"domains-header grid grid-cols-12 gap-4",children:e.jsx("div",{className:"col-span-12 pt-4",children:e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(x,{href:`${a}/admin/domain/details/${l}`,className:"text-[#ff6243] hover:underline",children:"Domain URL"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Domain Edit"})})]})]})})}),e.jsx("div",{className:"pt-5",children:e.jsx("div",{className:"col-span-12 pt-4",children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("h5",{className:"mb-2 font-bold",children:"Edit domain"}),e.jsx("hr",{})]}),e.jsxs("form",{onSubmit:n(o),method:"post",children:[e.jsxs("div",{className:" grid grid-cols-2 gap-x-3 gap-y-2",children:[e.jsx("input",{...t("id"),type:"hidden",name:""}),e.jsx("input",{...t("domain_id"),type:"hidden",name:""}),e.jsxs("div",{children:[e.jsx("label",{className:"font-normal",children:"URL"}),e.jsx("input",{type:"text",...t("url",{required:"URL is required"}),className:"form-input",placeholder:"Enter your url"}),r.errors.url&&e.jsx("p",{className:"text-red-500",role:"alert",children:r.errors.url.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-normal pt-2",children:"Event name"}),e.jsx("input",{type:"text",...t("event_name",{required:"Event name is required"}),className:"form-input",placeholder:"Enter your event name"}),r.errors.event_name&&e.jsx("p",{className:"text-red-500",role:"alert",children:r.errors.event_name.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-normal pt-2",children:"Event type"}),e.jsxs("select",{className:"form-select text-white-dark",name:"",id:"",...t("event_type",{required:"Event type is required"}),children:[e.jsx("option",{disabled:!0,children:"Select event type"}),e.jsx("option",{value:"click",children:"Click"}),e.jsx("option",{value:"view",children:"View"})]}),r.errors.event_type&&e.jsx("p",{className:"text-red-500",role:"alert",children:r.errors.event_type.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-normal pt-2",children:"Action"}),e.jsxs("select",{className:"form-select text-white-dark",name:"",id:"",...t("action",{required:"Action is required"}),children:[e.jsx("option",{disabled:!0,children:"Select Action"}),e.jsx("option",{value:"client",children:"Client"}),e.jsx("option",{value:"lead",children:"Lead"})]}),r.errors.action&&e.jsx("p",{className:"text-red-500",role:"alert",children:r.errors.action.message})]}),e.jsxs("div",{children:[e.jsx("label",{className:"font-normal pt-2",children:"Role"}),e.jsxs("select",{className:"form-select text-white-dark",name:"",id:"",...t("role",{required:"Role is required"}),children:[e.jsx("option",{value:"",selected:!0,children:"Select role"}),e.jsx("option",{value:"organizer",children:"Organizer"}),e.jsx("option",{value:"assistant",children:"Assistant"}),e.jsx("option",{value:"scanner",children:"Scanner"})]}),r.errors.role&&e.jsx("p",{className:"text-red-500",role:"alert",children:r.errors.role.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-success mt-6",children:"Submit"})]})]})})})]})}v.layout=s=>e.jsx(u,{children:s,title:"Trackid || Trackid edit"});export{v as default};
