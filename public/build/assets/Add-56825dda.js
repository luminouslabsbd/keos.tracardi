import{q as i,r as h,j as e,d as x,y as u}from"./app-944f06d7.js";import j from"./Mainlayout-530935e5.js";import g from"./FlashMessage-319a291c.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-7b39564e.js";import"./Header-18d6c8e3.js";import"./Dropdown-a74d5901.js";import"./nonIterableRest-c1aee06f.js";import"./Sidebar-5060a96a.js";function f({group_company_list:t}){const{flash:n}=i().props,{errors:r}=i().props,[l,a]=h.useState({name:""});function o(s){const m=s.target.id,c=s.target.value;a(p=>({...p,[m]:c}))}function d(s){s.preventDefault(),u.post("/admin/modules/store",l),a({name:""})}return e.jsxs(e.Fragment,{children:[e.jsx(g,{flash:n}),e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(x,{href:"#",className:"text-primary hover:underline",children:"Modules"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Add"})})]})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Modules"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:d,method:"post",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsxs("div",{children:[e.jsx("label",{children:"Modules Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter Title",className:"form-input",value:l.name,onChange:o}),r.name&&e.jsx("div",{className:"text-red-600 text-[14px]",children:r.name})]})}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6 ml-auto",children:"Submit"})})]})})]})})]})}f.layout=t=>e.jsx(j,{children:t,title:"HR || Add Modules"});export{f as default};
