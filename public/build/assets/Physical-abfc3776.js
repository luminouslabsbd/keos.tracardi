import{q as ue,r as c,j as e,d as he,y as xe}from"./app-86e4babd.js";import me from"./Mainlayout-393cb082.js";import{u as pe,C as o}from"./index.esm-0a09c251.js";import{S as u}from"./react-select.esm-54254529.js";import{R as V}from"./quill.snow-8f201bd5.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-bcbbba33.js";import"./Header-d1a5b823.js";import"./Dropdown-b32064f6.js";import"./nonIterableRest-5e64c36b.js";import"./Sidebar-2acb9103.js";import"./FlashMessage-aaab834f.js";import"./sweetalert2.all-a5d74eec.js";import"./floating-ui.dom-0b485352.js";import"./emotion-react.browser.esm-f296b22c.js";function je(){const{categories:m,sub_categories:I,brands:$,type:L,colors:D,sizes:E,units:M}=ue().props,[g,B]=c.useState([]),[v,Q]=c.useState([]),[b,W]=c.useState([]),[N,U]=c.useState([]),[f,y]=c.useState(!1);c.useEffect(()=>{(()=>{const l=[],r=[];v.forEach(h=>{g.forEach(x=>{const j=`${h.label}/${x.label}`,oe=`${h.value}/${x.value}`;l.push(j),r.push(oe)})}),W(l),U(r)})()},[g,v]);const{control:n,register:a,handleSubmit:z,setValue:d,reset:ge,formState:{errors:i},watch:w}=pe({defaultValues:{type:L}}),F=w("product_description",""),R=s=>{d("product_description",s)},K=w("product_buy_return_policy",""),H=s=>{d("product_buy_return_policy",s)},_=m.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),P=M.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),S=I.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),C=$.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),k=D.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),q=E.map(s=>({value:s==null?void 0:s.id,label:s!=null&&s.name?`${s.name}`:""})),T=s=>{d("category_id",s==null?void 0:s.value)},G=s=>{d("sub_category_id",s==null?void 0:s.value)},Z=s=>{d("brand_id",s==null?void 0:s.value)},J=s=>{d("unit_id",s==null?void 0:s.value)},X=s=>{const l=s.target.value;l==="1"&&y(!1),l==="2"&&y(!0)},[Y,O]=c.useState(!1),ee=s=>{O(s.target.checked)},[se,le]=c.useState(!1),ae=s=>{le(s.target.checked)},[re,te]=c.useState(!1),ie=s=>{te(s.target.checked)},[t,p]=c.useState([]),ce=()=>{let s=0;s=t!=null&&t.length?t.reduce((l,r)=>r.id>l?r.id:l,t[0].id):0,p([...t,{id:s+1,quantity:"1",discount:0}])},ne=(s=null)=>{p(t.filter(l=>l.id!==s.id))},A=(s,l,r)=>{const h=t,x=h.find(j=>j.id===r);s==="quantity"&&(x.quantity=Number(l)),s==="discount"&&(x.discount=Number(l)),p([...h])};function de(s){const r={...s,items:t};xe.post("/admin/product/physical/store",r)}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 ",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(he,{href:"#",className:"text-primary hover:underline",children:"Color"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Add"})})]})]}),e.jsxs("form",{onSubmit:z(de),method:"post",children:[e.jsxs("div",{className:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"})}),e.jsxs("div",{className:"mb-5 space-y-5 relative",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Category"}),e.jsx(o,{control:n,name:"category_id",render:({field:s})=>e.jsx(u,{placeholder:"Select an option",options:_,value:_.find(l=>l.value===s.value),onChange:T})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Sub Category"}),e.jsx(o,{control:n,name:"sub_category_id",render:({field:s})=>e.jsx(u,{placeholder:"Select an option",options:S,value:S.find(l=>l.value===s.value),onChange:G})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx("input",{...a("type"),type:"hidden"}),e.jsxs("div",{children:[e.jsx("label",{children:"Brand"}),e.jsx(o,{control:n,name:"brand_id",render:({field:s})=>e.jsx(u,{placeholder:"Select an option",options:C,value:C.find(l=>l.value===s.value),onChange:Z})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Unit"}),e.jsx(o,{control:n,name:"unit_id",render:({field:s})=>e.jsx(u,{placeholder:"Select an option",options:P,value:P.find(l=>l.value===s.value),onChange:J})})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Select Product Variation"}),e.jsxs("select",{className:"form-select text-white-dark",...a("product_variation"),onChange:X,children:[e.jsx("option",{value:"1",children:"Single Product"}),e.jsx("option",{value:"2",children:"Variation Product"})]}),(i==null?void 0:i.product_variation)&&e.jsx("p",{className:"text-red-600 pt-2",children:i==null?void 0:i.product_variation})]}),e.jsxs("div",{children:[e.jsx("label",{children:" Product SKU "}),e.jsx("input",{...a("product_sku",{required:"Product SKU Is required"}),type:"text",className:"form-input",placeholder:"Enter Product Name"}),i.product_sku&&e.jsx("p",{className:"text-red-600 pt-2",children:i.product_sku.message})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsxs("div",{children:[e.jsx("label",{children:"Product Name "}),e.jsx("input",{...a("product_name",{required:"Product Name Is required"}),type:"text",className:"form-input",placeholder:"Enter Product Name"}),i.product_name&&e.jsx("p",{className:"text-red-600 pt-2",children:i.product_name.message})]})})]})]}),e.jsx("div",{className:"panel",children:f===!0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Atrribute"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsxs("label",{children:["Color",e.jsx("span",{className:"text-red-600 ",children:"*"})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(o,{control:n,...a("color_id"),render:({field:s})=>e.jsx(u,{className:"w-full",placeholder:"Select an option",options:k,isMulti:!0,isSearchable:!0,value:Array.isArray(s.value)?k.filter(l=>s.value.includes(l.value)):[],onChange:l=>{s.onChange(l.map(r=>r.value)),B(l)}})})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsxs("label",{children:["Size",e.jsx("span",{className:"text-red-600 ",children:"*"})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(o,{control:n,...a("size_id"),render:({field:s})=>e.jsx(u,{className:"w-full",placeholder:"Select an option",options:q,isMulti:!0,isSearchable:!0,value:Array.isArray(s.value)?q.filter(l=>s.value.includes(l.value)):[],onChange:l=>{console.log(l),s.onChange(l.map(r=>r.value)),Q(l)}})})})]})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Price and Description"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Price"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...a("single_product_price",{required:"Product Name Is required"}),type:"number",className:"form-input",placeholder:"99$"})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Discount"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...a("single_product_discount",{required:"Product Name Is required"}),type:"number",className:"form-input",placeholder:"10%"})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{children:"Quantity"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...a("single_product_quantity",{required:"Product Quantoty Is required"}),type:"number",className:"form-input",placeholder:"50"})})]})]})})]})})]}),e.jsx("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6",children:f===!0&&e.jsxs(e.Fragment,{children:[N.length>0&&N.map((s,l)=>e.jsx("input",{...a(`product_attribute_${l}`,{required:"Product SKU Is required"}),type:"hidden",value:s},l)),b.length>0&&e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Attribute Variation"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:b.map((s,l)=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" ","Product attribute"," ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{type:"text",className:"form-input",value:s})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" ","Product Price"," ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...a(`product_price_${l}`,{required:"Product Price Is required"}),type:"number",className:"form-input",placeholder:"10$"})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" ","Product quantity"," ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...a(`product_quantity_${l}`,{required:"Product quantity Is required"}),type:"number",className:"form-input",placeholder:"5"})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" ","Product discount"," ",e.jsx("span",{className:"text-danger",children:"*"})]}),e.jsx("input",{...a(`product_discount_${l}`,{required:"Product discount Is required"}),type:"number",className:"form-input",placeholder:"8%"})]})]},l))})]})]})}),e.jsxs("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Description"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(V,{value:F,onChange:s=>R(s),theme:"snow"})})})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Buy Return Policy"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(V,{value:K,onChange:s=>H(s),theme:"snow"})})})})]})]}),e.jsxs("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Product Description"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{...a("allow_product_condition"),type:"checkbox",className:"form-checkbox text-dark rounded-full",onChange:ee}),e.jsx("span",{children:" Allow Product Condition"})]})}),Y&&e.jsx("div",{children:e.jsxs("select",{className:"form-select text-white-dark",...a("product_condition"),children:[e.jsx("option",{value:"1",children:"New"}),e.jsx("option",{value:"2",children:"Used"})]})}),e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{...a("allow_product_preorder"),type:"checkbox",className:"form-checkbox text-dark rounded-full",onChange:ae}),e.jsx("span",{children:" Allow Product Preorder"})]})}),se&&e.jsx("div",{children:e.jsxs("select",{className:"form-select text-white-dark",...a("product_preorder"),children:[e.jsx("option",{value:"1",children:"Sale"}),e.jsx("option",{value:"2",children:"Preorder"})]})}),e.jsx("div",{children:e.jsxs("label",{className:"inline-flex",children:[e.jsx("input",{...a("allow_whole_sale"),type:"checkbox",className:"form-checkbox text-dark rounded-full",onChange:ie}),e.jsx("span",{children:" Allow Whole Sale"})]})}),re&&e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsxs("div",{className:"mt-8",children:[e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Discount"}),e.jsx("th",{className:"w-1"})]})}),e.jsxs("tbody",{children:[t.length<=0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"!text-center font-semibold",children:"No Item Available"})}),t.map(s=>e.jsxs("tr",{className:"align-top",children:[e.jsx("td",{children:e.jsx("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",min:1,defaultValue:s.quantity,onChange:l=>A("quantity",l.target.value,s.id)})}),e.jsx("td",{children:e.jsx("input",{type:"number",className:"form-input w-32",placeholder:"Discount",min:0,value:s.discount,onChange:l=>A("discount",l.target.value,s.id)})}),e.jsx("td",{className:"mt-2",children:e.jsx("button",{type:"button",onClick:()=>ne(s),children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},s.id))]})]})}),e.jsx("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e.jsx("div",{className:"sm:mb-0 mb-6",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>ce(),children:"Add Item"})})})]})})]})})]}),e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Seo for this product"})}),e.jsxs("div",{className:"mb-5 space-y-5 relative",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("label",{children:"Meta Tags"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("input",{...a("meta_keywords"),type:"text",className:"form-input",placeholder:"pant,shirt,watch,glass"})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:[e.jsx("label",{children:"Meta Description"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("textarea",{...a("meta_description"),className:"form-input",placeholder:"Multivendor Ecommerce system"})})]})]})]})]}),e.jsx("div",{className:"pt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6",children:e.jsxs("div",{className:"panel",children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Thumbnail"})}),e.jsx("div",{className:"mb-5 space-y-5 relative",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx("input",{type:"file",className:"form-input",...a("thumbnail")})})})})]})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]})}je.layout=m=>e.jsx(me,{children:m,title:"E-SHOP || Add Group Of Company"});export{je as default};
