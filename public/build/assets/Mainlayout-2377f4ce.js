import{q as x,r as t,j as e,a as g}from"./app-545b6d98.js";import{t as s}from"./ThemeConfig-49c8c6b2.js";import j from"./Footer-6f084bda.js";import{H as b}from"./Header-461ea8e1.js";import{S as v}from"./Sidebar-52f4c63a.js";import w from"./FlashMessage-9a44a19f.js";import"./Dropdown-79c7191d.js";import"./nonIterableRest-5e64c36b.js";import"./sweetalert2.all-208670e1.js";function L({children:l,title:m}){const{flash:c}=x().props,[o,d]=t.useState(!1);t.useState(!1);const[f,u]=t.useState(!0),[p,r]=t.useState(!1),n=()=>{d(!o)},i=()=>{document.body.scrollTop>50||document.documentElement.scrollTop>50?r(!0):r(!1)},h=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};return t.useEffect(()=>{window.addEventListener("scroll",i);const a=document.getElementsByClassName("screen_loader");return a!=null&&a.length&&(a[0].classList.add("animate__fadeOut"),setTimeout(()=>{u(!1)},200)),()=>{window.removeEventListener("onscroll",i)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(w,{flash:c}),e.jsx(g,{title:m}),e.jsx("div",{className:`${o?"toggle-sidebar":""} ${s.menu} ${s.layout} ${s.rtlClass} main-section antialiased relative font-nunito text-sm font-normal`,children:e.jsxs("div",{className:"relative",children:[f&&e.jsx("div",{className:"screen_loader fixed inset-0 bg-[#fafafa] dark:bg-[#060818] z-[60] grid place-content-center animate__animated",children:e.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:"#4361ee",children:[e.jsx("path",{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("path",{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"})})]})}),e.jsx("div",{className:"fixed bottom-6 ltr:right-6 rtl:left-6 z-50",children:p&&e.jsx("button",{type:"button",className:"btn btn-outline-primary rounded-full p-2 animate-pulse bg-[#fafafa] dark:bg-[#060818] dark:hover:bg-primary",onClick:h,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7l4-4m0 0l4 4m-4-4v18"})})})}),e.jsxs("div",{className:`${s.navbar} main-container text-black dark:text-white-dark min-h-screen`,children:[e.jsx(v,{handleToggleSidebar:n}),e.jsxs("div",{className:"main-content flex flex-col min-h-screen",children:[e.jsx(b,{handleToggleSidebar:n}),e.jsx("div",{className:`${s.animation} p-6 animate__animated`,children:l}),e.jsx(j,{})]})]})]})})]})}export{L as default};
