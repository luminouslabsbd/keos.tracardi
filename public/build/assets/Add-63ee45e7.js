import{q as j,r as f,j as e,d as v,y as C}from"./app-545b6d98.js";import b from"./Mainlayout-2377f4ce.js";import{T as w}from"./tippy-react.esm-6bd951d5.js";import{S as y}from"./react-select.esm-486bd066.js";import{u as N,C as k}from"./index.esm-8b94d6b9.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-6f084bda.js";import"./Header-461ea8e1.js";import"./Dropdown-79c7191d.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-52f4c63a.js";import"./FlashMessage-9a44a19f.js";import"./sweetalert2.all-208670e1.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-11ff6a83.js";function S(){const{categories:t}=j().props,{control:c,register:a,handleSubmit:d,setValue:m,reset:h,formState:{errors:l}}=N(),i=t.map(r=>({value:r==null?void 0:r.id,label:r!=null&&r.name?`${r.name}`:""})),p=r=>{m("parent_id",r==null?void 0:r.value)},[n,o]=f.useState(null),x=r=>{const s=r.target.files[0];s&&o(URL.createObjectURL(s))};function g(){o(null),h({thumbnail:""})}function u(r){C.post("/admin/category/store",r)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(v,{href:"#",className:"text-primary hover:underline",children:"Category"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Add"})})]})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Category Add Form"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:d(u),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" Name ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...a("name",{required:"Category Name Is required"}),type:"text",className:"form-input",placeholder:"Enter Category Name"}),l.name&&e.jsx("p",{className:"text-red-600 pt-2",children:l.name.message})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("label",{children:"Slug"}),e.jsx("span",{children:e.jsx(w,{content:"Leave the name field blank, and the slug will auto-generate.",className:"bg-black text-white p-5 rounded-lg dark:bg-[#2e3249] dark:text-white",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"16",r:"1",fill:"currentColor"})]})})})]}),e.jsx("input",{...a("slug"),type:"text",className:"form-input",placeholder:"Enter Category Slug"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-5",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Parent Category"}),e.jsx(k,{control:c,name:"parent_id",render:({field:r})=>e.jsx(y,{placeholder:"Select an option",options:i,value:i.find(s=>s.value===r.value),onChange:p})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Thumbnail"}),e.jsx("input",{type:"file",className:"form-input",...a("thumbnail"),onChange:x})]}),e.jsx(e.Fragment,{children:n&&e.jsxs("div",{style:{position:"relative"},children:[e.jsx("img",{className:"rounded-lg max-w-[100px]",src:n,alt:"Selected Avatar"}),e.jsx("span",{onClick:g,className:"absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",children:[e.jsx("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})})]})})]})}S.layout=t=>e.jsx(b,{children:t,title:"E-SHOP || Add Group Of Company"});export{S as default};
