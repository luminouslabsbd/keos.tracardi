import{q as F,r as m,j as e,y as T,h as M}from"./app-2ccf5dfd.js";import V from"./Mainlayout-68076afb.js";import{a as W}from"./Sidebar-58e9c728.js";import{u as R}from"./index.esm-930eaf30.js";import"./ThemeConfig-49c8c6b2.js";import"./Footer-a8f1220f.js";import"./Header-2c8b8669.js";import"./Dropdown-99bd2a8b.js";import"./nonIterableRest-5e64c36b.js";import"./FlashMessage-382c8cf1.js";import"./sweetalert2.all-f1722da6.js";function A(){const{result:r}=F().props,[o,x]=m.useState("inbox"),[D,C]=m.useState(),[_]=m.useState(r),a=n=>{var d;return(d=_.find(c=>c.slug===n))==null?void 0:d.value},{register:t,handleSubmit:p,setValue:i,reset:w,formState:{errors:s}}=R({defaultValues:{app_title:a("app_title"),copy_right_text:a("copy_right_text")}});function L(){x("social_link"),(async()=>{var d,c,j,k,g,b,f,N,y,v;try{const l=await M.get("/admin/social-link/get-social-link-data");C(l.data),i("facebook_link",((d=l.data)==null?void 0:d.facebook_link)||""),i("linkedin_link",((c=l.data)==null?void 0:c.linkedin_link)||""),i("twitter_link",((j=l.data)==null?void 0:j.twitter_link)||""),i("instagram_link",((k=l.data)==null?void 0:k.instagram_link)||""),i("pinterest_link",((g=l.data)==null?void 0:g.pinterest_link)||""),i("youtube_link",((b=l.data)==null?void 0:b.youtube_link)||""),i("tiktok_link",((f=l.data)==null?void 0:f.tiktok_link)||""),i("tumblr_link",((N=l.data)==null?void 0:N.tumblr_link)||""),i("quora_link",((y=l.data)==null?void 0:y.quora_link)||""),i("reddit_link",((v=l.data)==null?void 0:v.reddit_link)||"")}catch(l){console.error(l)}})()}function S(n){console.log(n)}function E(n){T.post("/admin/social-link/update-social-link",n)}const[h,u]=m.useState(r!=null&&r.thumbnail?`/storage/brand/${r==null?void 0:r.thumbnail}`:"/assets/images/user-profile.jpeg"),q=n=>{const d=n.target.files[0];d&&u(URL.createObjectURL(d))};function I(){u(null),w({thumbnail:""})}return e.jsx("div",{children:e.jsxs("div",{className:"flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full",children:[e.jsx("div",{className:"panel xl:block p-4 dark:gray-50 w-[250px] max-w-full flex-none space-y-3 xl:relative absolute z-10 xl:h-auto h-full hidden ltr:xl:rounded-r-md ltr:rounded-r-none rtl:xl:rounded-l-md rtl:rounded-l-none overflow-hidden",children:e.jsx("div",{className:"flex flex-col h-full pb-16",children:e.jsx(W,{className:"relative ltr:pr-3.5 rtl:pl-3.5 ltr:-mr-3.5 rtl:-ml-3.5 h-full grow",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${o==="inbox"?"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]":""}`,onClick:()=>{x("inbox")},children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:[e.jsx("path",{opacity:"0.5",d:"M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Inbox"})]})}),e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${o==="social_link"?"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]":""}`,onClick:L,children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:[e.jsx("path",{d:"M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 18L21 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Social Link"})]})}),e.jsx("button",{type:"button",className:`w-full flex justify-between items-center p-2 hover:bg-white-dark/10 rounded-md dark:hover:text-primary hover:text-primary dark:hover:bg-[#181F32] font-medium h-10 ${o==="logo"?"bg-gray-100 dark:text-primary text-primary dark:bg-[#181F32]":""}`,onClick:()=>{x("logo")},children:e.jsxs("div",{className:"flex items-center",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0",children:[e.jsx("path",{d:"M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 18L21 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("div",{className:"ltr:ml-3 rtl:mr-3",children:"Logo"})]})})]})})})}),e.jsx("div",{className:"panel p-0 flex-1 overflow-x-hidden h-full",children:e.jsx("div",{className:"flex flex-col h-full",children:e.jsx("div",{children:e.jsxs("div",{className:"p-4",children:[o=="inbox"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"General Settings Form"})}),e.jsxs("form",{className:"space-y-5",onSubmit:p(S),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("label",{children:[" App Title ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("app_title",{required:"App Title Is required"}),type:"text",className:"form-input",placeholder:"Enter Color Name"}),s.app_title&&e.jsx("p",{className:"text-red-600 pt-2",children:s.app_title.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Copy Right Text ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("copy_right_text",{required:"Copy Right Text required"}),type:"text",className:"form-input",placeholder:"Enter Color Name"}),s.copy_right_text&&e.jsx("p",{className:"text-red-600 pt-2",children:s.copy_right_text.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Contact Number ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("call_us",{required:"Contact Number Is required"}),type:"text",defaultValue:a("call_us")||"",className:"form-input",placeholder:"Enter Color Name"}),s.call_us&&e.jsx("p",{className:"text-red-600 pt-2",children:s.call_us.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Email ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("email",{required:"Email is required"}),type:"text",defaultValue:a("email")||"",className:"form-input",placeholder:"Enter Color Name"}),s.email&&e.jsx("p",{className:"text-red-600 pt-2",children:s.email.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Address ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("address",{required:"Address Is required"}),type:"text",defaultValue:a("address")||"",className:"form-input",placeholder:"Enter Color Name"}),s.address&&e.jsx("p",{className:"text-red-600 pt-2",children:s.address.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" State ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("state",{required:"State Is required"}),type:"text",defaultValue:a("state")||"",className:"form-input",placeholder:"Enter Color Name"}),s.state&&e.jsx("p",{className:"text-red-600 pt-2",children:s.state.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" Country ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("country",{required:"Country Is required"}),type:"text",defaultValue:a("country")||"",className:"form-input",placeholder:"Enter Color Name"}),s.country&&e.jsx("p",{className:"text-red-600 pt-2",children:s.country.message})]}),e.jsxs("div",{children:[e.jsxs("label",{children:[" News Letter ",e.jsx("span",{className:"text-danger",children:"*"})," "]}),e.jsx("input",{...t("news_latter",{required:"News Letter Is required"}),type:"text",defaultValue:a("news_latter")||"",className:"form-input",placeholder:"Enter Color Name"}),s.news_latter&&e.jsx("p",{className:"text-red-600 pt-2",children:s.news_latter.message})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]}),o=="social_link"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Social Link Form"})}),e.jsxs("form",{className:"space-y-5",onSubmit:p(E),method:"post",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Facebook Link"}),e.jsx("input",{...t("facebook_link"),type:"text",className:"form-input",placeholder:"Enter Facebook Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"LinkedIn Link"}),e.jsx("input",{...t("linkedin_link"),type:"text",className:"form-input",placeholder:"Enter LinkedIn Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Twitter Link"}),e.jsx("input",{...t("twitter_link"),type:"text",className:"form-input",placeholder:"Enter Twitter Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Instagram Link"}),e.jsx("input",{...t("instagram_link"),type:"text",className:"form-input",placeholder:"Enter Instagram Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Pinterest Link"}),e.jsx("input",{...t("pinterest_link"),type:"text",className:"form-input",placeholder:"Enter Pinterest Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"YouTube Link"}),e.jsx("input",{...t("youtube_link"),type:"text",className:"form-input",placeholder:"Enter YouTube Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Tiktok Link"}),e.jsx("input",{...t("tiktok_link"),type:"text",className:"form-input",placeholder:"Enter Tiktok Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Tumblr Link"}),e.jsx("input",{...t("tumblr_link"),type:"text",className:"form-input",placeholder:"Enter Tumblr Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Quora Link"}),e.jsx("input",{...t("quora_link"),type:"text",className:"form-input",placeholder:"Enter Quora Link"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Reddit Link"}),e.jsx("input",{...t("reddit_link"),type:"text",className:"form-input",placeholder:"Enter Reddit Link"})]})]}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]}),o=="logo"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center justify-between mb-5",children:e.jsx("h5",{className:"font-bold text-2xl dark:text-white-light",children:"Website Logo"})}),e.jsxs("form",{className:"space-y-5",onSubmit:p(""),method:"post",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:e.jsx("div",{className:"panel",id:"forms_grid",children:e.jsxs("div",{children:[e.jsx("label",{className:"text-xl",children:"Header Logo"}),e.jsx(e.Fragment,{children:h&&e.jsxs("div",{style:{position:"relative"},children:[e.jsx("img",{className:"rounded-lg max-w-[100px]",src:h,alt:"Selected Avatar"}),(r==null?void 0:r.thumbnail)&&isSvgShow&&e.jsx("span",{onClick:I,className:"absolute top-[-15px] left-[23%] bg-white text-red-700 rounded-full p-1 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]",children:e.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",children:[e.jsx("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})}),e.jsx("input",{type:"file",className:"form-input",...t("headerLogo"),onChange:q})]})})}),e.jsx("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})]})]})})})})]})})}A.layout=r=>e.jsx(V,{children:r,title:"Settings || Luminous-Ecommerce"});export{A as default};
