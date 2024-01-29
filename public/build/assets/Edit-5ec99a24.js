import{q as P,r as g,j as e,d as S,y as A}from"./app-2ccf5dfd.js";import L from"./Mainlayout-68076afb.js";import{u as R}from"./index.esm-930eaf30.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-a8f1220f.js";import"./Header-2c8b8669.js";import"./Dropdown-99bd2a8b.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-58e9c728.js";import"./FlashMessage-382c8cf1.js";import"./sweetalert2.all-f1722da6.js";function V(){const{base_url:u,errors:k,permissionsData:i,result:x,role:m}=P().props,{register:b,handleSubmit:C}=R(),[j,p]=g.useState(!1),[d,f]=g.useState({}),v=Object.values(i).reduce((s,t)=>s+t.length,0),y=Object.values(x).reduce((s,t)=>s+t.length,0);g.useEffect(()=>{if(x){const s={};let t=!0;Object.keys(x).forEach(l=>{const r=i[l]||[],n=x[l]||[];let c=!0;r.forEach(a=>{const o=n.find(h=>h.name===a.name);o||(c=!1),s[a.name]=!!o}),s[l]=c}),f(s),v===y&&p(t)}},[x]);const N=()=>{var t;const s={};i&&((t=Object.keys(i))==null||t.forEach(l=>{var r,n;if(i[l]){(r=i[l])==null||r.forEach(a=>{s[a.name]=!j});const c=(n=i[l])==null?void 0:n.every(a=>s[a.name]);s[l]=c}})),f(s),p(!j)},w=s=>{var l,r;const t={...d};if(t[s]=!d[s],i&&i[s]){(l=i[s])==null||l.forEach(c=>{t[c.name]=t[s]});const n=(r=Object.keys(t))==null?void 0:r.every(c=>t[c]);p(n)}f(t)},I=s=>{var n,c,a;const t={...d};t[s]=!d[s];const l=(n=Object.keys(i))==null?void 0:n.find(o=>{var h;return(h=i[o])==null?void 0:h.some(O=>O.name===s)});if(l&&i[l]){const o=(c=i[l])==null?void 0:c.every(h=>t[h.name]);t[l]=o}f(t);const r=(a=Object.keys(t))==null?void 0:a.every(o=>t[o]);p(r)},E=s=>{s.role;const t=[];Object.keys(d).forEach(n=>{i[n]&&i[n].forEach(c=>{d[c.name]&&t.push(c)})});const l=t.map(n=>n.id),r={id:s.id,role:s.role,permissionIds:l};console.log(r),A.post("/admin/role-permission/update",r)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-[#ff6243] p-1.5 text-white ring-2 ring-[#ff6243] ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex items-center space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(S,{href:`${u}/admin/role-permission`,className:"text-[19px] text-[#ff6243] font-bold  hover:underline",children:"Role & Permission"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-base",children:e.jsx("span",{children:"Edit Permission"})})]})]}),e.jsx("div",{className:"pt-5 grid lg:grid-cols-1 grid-cols-1 gap-6",children:e.jsxs("div",{className:"panel",id:"forms_grid",children:[e.jsx("div",{className:"flex items-center mb-5 ",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Role & Permission Add Form"})}),e.jsx("div",{className:"mb-5",children:e.jsxs("form",{className:"space-y-5",onSubmit:C(E),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("input",{...b("id"),type:"hidden",defaultValue:m==null?void 0:m.id}),e.jsxs("div",{children:[e.jsxs("label",{children:["Role Name"," ",e.jsx("span",{className:"text-[12px] text-red-700",children:"*"})]}),e.jsx("input",{...b("role"),type:"text",defaultValue:m==null?void 0:m.name,className:"form-input",placeholder:"Enter Role Name"}),k.first_name&&e.jsx("p",{className:"text-red-600 pt-2",children:k.first_name})]})]}),e.jsx("hr",{}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:e.jsx("div",{className:"",children:e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",id:"selectAll",checked:j,onChange:N}),e.jsx("span",{children:"Select All Permission"})]})})})})}),e.jsx("hr",{}),Object.entries(i).map(([s,t])=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Group Name"}),e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",checked:d[s]||!1,onChange:()=>w(s)}),e.jsx("span",{children:s})]})})})]}),t.map((l,r)=>e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"space-y-2 pt-3",children:e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{type:"checkbox",className:"form-checkbox text-dark rounded-full",checked:d[l.name]||!1,onChange:()=>I(l.name)}),e.jsx("span",{children:l.name})]})})})},r))]},s)),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6 bg-[#ff6243] border-[#ff6243] text-base",children:"Submit"})]})})]})})]})}V.layout=u=>e.jsx(L,{children:u,title:"Luminous E-shop || Edit Permission"});export{V as default};
