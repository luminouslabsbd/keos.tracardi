import{q as C,r as t,j as e,d as F,y as u,h as E}from"./app-86e4babd.js";import S from"./Mainlayout-393cb082.js";import{u as T}from"./index.esm-0a09c251.js";import{t as i,_ as c}from"./transition-f5400aca.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-bcbbba33.js";import"./Header-d1a5b823.js";import"./Dropdown-b32064f6.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-2acb9103.js";import"./FlashMessage-aaab834f.js";import"./sweetalert2.all-a5d74eec.js";function V(){const{base_url:o,resultArray:m,langId:n}=C().props,{control:L,register:d,handleSubmit:p,setValue:M,reset:q,formState:{errors:a}}=T(),[x,j]=t.useState(!1),[h,y]=t.useState(!1),[r,g]=t.useState(null),f=async()=>{j(!0)};function N(s){const l={key:s};u.get("/admin/language/delete/key/"+n,l)}const b=async s=>{try{const l=o+"/admin/language/edit/key/"+n+"/"+s,v=await E.get(l);v.data&&(g(v.data),y(!0))}catch(l){console.error(l)}};function k(s){u.post("/admin/language/update/key/"+n,s)}function w(s){u.post("/admin/language/store/key/"+n,s)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3 h-[35px] w-[35px] flex items-center justify-center",children:e.jsxs("svg",{width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(F,{href:"#",className:"text-[#FF6243] hover:underline text-base",children:"Language"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"List"})})]}),e.jsx("div",{className:"ml-auto flex justify-center items-center gap-3",children:e.jsxs("button",{className:"flex items-center px-7 py-2 bg-[#ff6243] text-white rounded-md text-[15px] shadow-lg transition-transform transform-gpu hover:scale-105",onClick:f,children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 shrink-0 ltr:mr-2 rtl:ml-2 text-white",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),"Add"]})})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsx("div",{className:"pt-5",children:e.jsx("div",{className:"grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel h-full w-full",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Recent Orders"})}),m&&m.length>0&&e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"Key"}),e.jsx("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"Value"}),e.jsx("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"Action"})]})}),e.jsx("tbody",{children:m.map((s,l)=>e.jsxs("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e.jsx("td",{className:"min-w-[150px] text-black dark:text-white",children:e.jsx("div",{className:"flex items-center",children:e.jsx("input",{type:"text",readOnly:!0,value:s.key,className:"form-input",placeholder:"Enter Code"})})}),e.jsx("td",{className:"min-w-[150px] text-black dark:text-white",children:e.jsx("div",{className:"flex items-center",children:e.jsx("input",{type:"text",readOnly:!0,value:s.value,className:"form-input",placeholder:"Enter Code"})})}),e.jsxs("td",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>b(s.key),className:"btn btn-sm btn-outline-primary",children:"Edit"}),e.jsx("button",{onClick:()=>N(s.key),className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]},l))})]})})]})})})}),x===!0&&e.jsx("div",{className:"mb-5",children:e.jsx(i,{appear:!0,show:x,as:t.Fragment,children:e.jsxs(c,{as:"div",open:x,onClose:()=>j(!1),children:[e.jsx(i.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto",children:e.jsx("div",{className:"flex items-start justify-center min-h-screen px-4",children:e.jsx(i.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx(c.Panel,{as:"div",className:"panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark",children:e.jsx("div",{className:"p-5",children:e.jsx("div",{children:e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:p(w),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" Key ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...d("key",{required:"Key Is required"}),type:"text",className:"form-input",placeholder:"Enter Key"}),a.key&&e.jsx("p",{className:"text-red-600 pt-2",children:a.key.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Value ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...d("value",{required:"Value Is required"}),type:"text",className:"form-input",placeholder:"Enter value"}),a.value&&e.jsx("p",{className:"text-red-600 pt-2",children:a.value.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})})})})})})})})]})})}),h===!0&&r&&e.jsx("div",{className:"mb-5",children:e.jsx(i,{appear:!0,show:h,as:t.Fragment,children:e.jsxs(c,{as:"div",open:h,onClose:()=>y(!1),children:[e.jsx(i.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0"})}),e.jsx("div",{className:"fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto",children:e.jsx("div",{className:"flex items-start justify-center min-h-screen px-4",children:e.jsx(i.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx(c.Panel,{as:"div",className:"panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark",children:e.jsx("div",{className:"p-5",children:e.jsx("div",{children:e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:p(k),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" Key ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{value:r==null?void 0:r.key,...d("key"),type:"text",readOnly:!0,className:"form-input bg-dark text-white",placeholder:"Enter Key"}),a.key&&e.jsx("p",{className:"text-red-600 pt-2",children:a.key.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Value ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...d("value",{required:"Value Is required"}),type:"text",defaultValue:(r==null?void 0:r.value)||"",className:"form-input",placeholder:"Enter value"}),a.value&&e.jsx("p",{className:"text-red-600 pt-2",children:a.value.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})})})})})})})})]})})})]})}V.layout=o=>e.jsx(S,{children:o,title:"E-SHOP || Add Group Of Company"});export{V as default};
