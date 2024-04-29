import{r as a,q as y,j as e,d as S,y as d}from"./app-5d40b231.js";import A from"./Mainlayout-0e8808c6.js";import{u as c}from"./index.esm-cbc41a76.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-5194634c.js";import"./Header-bf732f80.js";import"./Dropdown-05761b60.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-f4b3b5de.js";import"./FlashMessage-ef5a0886.js";import"./sweetalert2.all-55b83f72.js";function C({attribute:s}){console.log(s);const[o,i]=a.useState(""),[r,m]=a.useState(null),[u,l]=a.useState(!1),{base_url:x}=y().props,{register:h,handleSubmit:p,formState:n,reset:k}=c(),{register:b,handleSubmit:j,formState:N,reset:E}=c(),f=t=>{d.post("/admin/product/attribute/store",t),i("")},g=()=>{m(null),l(!1)},v=async t=>{try{d.post(`/admin/product/attribute/update/${r.id}`,t),l(!1)}catch(w){console.error("Error updating attribute:",w)}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"attributes-header grid grid-cols-12 gap-4",children:[e.jsx("div",{className:"col-span-1 pt-4"}),e.jsx("div",{className:"col-span-10 pt-4",children:e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(S,{href:`${x}/admin/dashboard`,className:"text-[#ff6243] hover:underline",children:"Dashboard"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Attribute Details"})})]})]})}),e.jsx("div",{className:"col-span-1 pt-4"})]}),e.jsxs("div",{className:"attributes-info grid grid-cols-12 gap-4",children:[e.jsx("div",{className:"col-span-1 pt-4"}),e.jsx("div",{className:"col-span-7 pt-4",children:e.jsxs("div",{className:"panel",children:[e.jsx("strong",{children:"Attributes list"}),e.jsx("hr",{}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"SL"}),e.jsx("th",{children:"Values"}),e.jsx("th",{className:"!text-center",children:"Action"})]})}),e.jsx("tbody",{})]})]})}),e.jsx("div",{className:"col-span-3 pt-4",children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{className:"mb-2",children:"Add New Attribute Value"}),e.jsx("hr",{})]}),e.jsxs("form",{onSubmit:p(f),method:"post",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"",children:"Attribute Name"}),e.jsx("input",{className:"form-input",value:s.name,disabled:!0})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{children:"Attribute Value"}),e.jsx("input",{type:"text",...h("value",{required:"Attribute is required"}),className:"form-input",placeholder:"Enter attributes value",value:o,onChange:t=>i(t.target.value)}),n.errors.attribute&&e.jsx("p",{className:"text-red-500",role:"alert",children:n.errors.attribute.message})]}),e.jsx("button",{type:"submit",className:"btn btn-success mt-6",children:"Submit"})]})]})}),e.jsx("div",{className:"col-span-1 pt-4"})]}),u&&r&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-md w-96",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2 bg-gray-200",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Edit Attribute"}),e.jsx("button",{className:"text-gray-600 hover:text-red-600",onClick:g,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-6",children:e.jsxs("form",{onSubmit:j(v),children:[e.jsx("input",{type:"text",...b("attribute",{required:!0}),defaultValue:r.name,className:"form-input",placeholder:"Enter attribute name"}),N.errors.name&&e.jsx("p",{className:"text-red-500",children:"Attribute name is required"}),e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-lg mt-4",children:"Update"})]})})]})})]})}C.layout=s=>e.jsx(A,{children:s,title:"Luminous-Ecommerce || Attribute Details"});export{C as default};
