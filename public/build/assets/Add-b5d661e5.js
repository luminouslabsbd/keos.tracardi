import{q as I,r as u,j as e,d as S,y as A}from"./app-c4c7461d.js";import E from"./Mainlayout-8eaeffcb.js";import O from"./FlashMessage-323123e7.js";import{u as L}from"./index.esm-770b0461.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-a7288932.js";import"./Header-b73373ac.js";import"./Dropdown-7255e5ed.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-2a89b98f.js";function M(){const{base_url:h,flash:g,errors:j,permissions:c}=I().props,{register:b,handleSubmit:k}=L(),[x,p]=u.useState(!1),[a,f]=u.useState({}),v=()=>{var l;const s={};c&&((l=Object.keys(c))==null||l.forEach(r=>{var i,t;if(c[r]){(i=c[r])==null||i.forEach(d=>{s[d.name]=!x});const n=(t=c[r])==null?void 0:t.every(d=>s[d.name]);s[r]=n}})),f(s),p(!x)},C=s=>{var r,i;const l={...a};if(l[s]=!a[s],c&&c[s]){(r=c[s])==null||r.forEach(n=>{l[n.name]=l[s]});const t=(i=Object.keys(l))==null?void 0:i.every(n=>l[n]);p(t)}f(l)},y=s=>{var t,n,d;const l={...a};l[s]=!a[s];const r=(t=Object.keys(c))==null?void 0:t.find(o=>{var m;return(m=c[o])==null?void 0:m.some(w=>w.name===s)});if(r&&c[r]){const o=(n=c[r])==null?void 0:n.every(m=>l[m.name]);l[r]=o}f(l);const i=(d=Object.keys(l))==null?void 0:d.every(o=>l[o]);p(i)},N=s=>{s.role;const l=[];Object.keys(a).forEach(t=>{c[t]&&c[t].forEach(n=>{a[n.name]&&l.push(n)})});const r=l.map(t=>t.id),i={role:s.role,permissionIds:r};A.post("/admin/role-permission/store",i)};return e.jsxs(e.Fragment,{children:[e.jsx(O,{flash:g}),e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-[#ff6243] ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex items-center space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(S,{href:`${h}/admin/role-permission`,className:"text-[19px] text-[#ff6243] font-bold  hover:underline",children:"Dashboard"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"Role & Permission"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"Permission List"})})]})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsx("div",{className:"flex items-center mb-5 ",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Role & Permission Add Form"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:k(N),method:"post",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsxs("div",{children:[e.jsxs("label",{children:["Role Name ",e.jsx("span",{className:"text-[12px] text-red-700",children:"*"})]}),e.jsx("input",{...b("role"),type:"text",className:"form-input",placeholder:"Enter Role Name"}),j.first_name&&e.jsx("p",{className:"text-red-600 pt-2",children:j.first_name})]})}),e.jsx("hr",{}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",id:"selectAll",checked:x,onChange:v}),e.jsx("span",{children:"Select All Permission"})]})})})})}),e.jsx("hr",{}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-[50px]",children:Object.entries(c).map(([s,l])=>e.jsxs("div",{className:"flex gap-[15px] p-[16px] flex-col xl:flex-col rounded-lg permission-card shadow-md",children:[e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",checked:a[s]||!1,onChange:()=>C(s)})," ",e.jsx("strong",{className:"text-[17px] uppercase font-semibold",children:s})]})})})}),e.jsx("div",{children:l.map((r,i)=>e.jsx("div",{children:e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",checked:a[r.name]||!1,onChange:()=>y(r.name)}),e.jsx("span",{children:r.name})]})})})})},i))})]},s))}),e.jsx("hr",{}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6 bg-[#ff6243] border-[#ff6243] text-base",children:"Submit"})]})})]})})]})}M.layout=h=>e.jsx(E,{children:h,title:"My Tutor || Add Tutor"});export{M as default};
