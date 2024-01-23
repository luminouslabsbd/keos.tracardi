import{q as h,r as c,j as e,y as u}from"./app-e7519093.js";import j from"./Mainlayout-e977b366.js";import{a as g}from"./Sidebar-bd7cbd5e.js";import{u as f}from"./index.esm-09e6bd3c.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-7d3c9cfd.js";import"./Header-689cbb00.js";import"./Dropdown-3e315eb3.js";import"./nonIterableRest-5e64c36b.js";import"./FlashMessage-f58a1d1b.js";import"./sweetalert2.all-c617e332.js";function N(){const{result:l}=h().props,[i,d]=c.useState("inbox"),[o]=c.useState(l),s=a=>{var n;return(n=o.find(p=>p.slug===a))==null?void 0:n.value},{register:r,handleSubmit:m,setValue:y,reset:C,formState:{errors:t}}=f({defaultValues:{app_title:s("app_title"),copy_right_text:s("copy_right_text")}});function x(a){u.post("/admin/general-settings/general-settings",a)}return e.jsx("div",{children:e.jsxs("div",{className:"flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full",children:[e.jsx("div",{className:"panel xl:block p-4 dark:gray-50 w-[250px] max-w-full flex-none space-y-3 xl:relative absolute z-10 xl:h-auto h-full hidden ltr:xl:rounded-r-md ltr:rounded-r-none rtl:xl:rounded-l-md rtl:rounded-l-none overflow-hidden",children:e.jsx("div",{className:"flex flex-col h-full pb-16",children:e.jsx(g,{className:"relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${i==="inbox"?"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]":""}`,onClick:()=>{d("inbox")},children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:[e.jsx("path",{opacity:"0.5",d:"M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Inbox"})]})}),e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${i==="sent_mail"?"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]":""}`,onClick:()=>{d("sent_mail")},children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:[e.jsx("path",{d:"M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 18L21 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Sent"})]})})]})})})}),e.jsx("div",{className:"panel p-0 flex-1 overflow-x-hidden h-full",children:e.jsx("div",{className:"flex flex-col h-full",children:e.jsx("div",{children:e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"General Settings Form"})}),e.jsxs("form",{className:"space-y-5",onSubmit:m(x),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" App Title ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("app_title",{required:"App Title Is required"}),type:"text",className:"form-input",placeholder:"Enter Color Name"}),t.app_title&&e.jsx("p",{className:"text-red-600 pt-2",children:t.app_title.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Copy Right Text ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("copy_right_text",{required:"Copy Right Text required"}),type:"text",className:"form-input",placeholder:"Enter Color Name"}),t.copy_right_text&&e.jsx("p",{className:"text-red-600 pt-2",children:t.copy_right_text.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Contact Number ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("call_us",{required:"Contact Number Is required"}),type:"text",defaultValue:s("call_us")||"",className:"form-input",placeholder:"Enter Color Name"}),t.call_us&&e.jsx("p",{className:"text-red-600 pt-2",children:t.call_us.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Email ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("email",{required:"Email is required"}),type:"text",defaultValue:s("email")||"",className:"form-input",placeholder:"Enter Color Name"}),t.email&&e.jsx("p",{className:"text-red-600 pt-2",children:t.email.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Address ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("address",{required:"Address Is required"}),type:"text",defaultValue:s("address")||"",className:"form-input",placeholder:"Enter Color Name"}),t.address&&e.jsx("p",{className:"text-red-600 pt-2",children:t.address.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" State ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("state",{required:"State Is required"}),type:"text",defaultValue:s("state")||"",className:"form-input",placeholder:"Enter Color Name"}),t.state&&e.jsx("p",{className:"text-red-600 pt-2",children:t.state.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Country ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("country",{required:"Country Is required"}),type:"text",defaultValue:s("country")||"",className:"form-input",placeholder:"Enter Color Name"}),t.country&&e.jsx("p",{className:"text-red-600 pt-2",children:t.country.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" News Letter ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...r("news_latter",{required:"News Letter Is required"}),type:"text",defaultValue:s("news_latter")||"",className:"form-input",placeholder:"Enter Color Name"}),t.news_latter&&e.jsx("p",{className:"text-red-600 pt-2",children:t.news_latter.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]})})})})]})})}N.layout=l=>e.jsx(j,{children:l,title:"Unit List || Luminous-Ecommerce"});export{N as default};
