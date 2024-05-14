import{e as M,r as i}from"./app-4b792641.js";import{c as R,b as j,d as I,r as L,e as W}from"./floating-ui.dom-4ecd4945.js";var A={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=typeof Symbol=="function"&&Symbol.for,P=a?Symbol.for("react.element"):60103,h=a?Symbol.for("react.portal"):60106,y=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,d=a?Symbol.for("react.profiler"):60114,v=a?Symbol.for("react.provider"):60109,S=a?Symbol.for("react.context"):60110,_=a?Symbol.for("react.async_mode"):60111,g=a?Symbol.for("react.concurrent_mode"):60111,E=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,k=a?Symbol.for("react.suspense_list"):60120,$=a?Symbol.for("react.memo"):60115,C=a?Symbol.for("react.lazy"):60116,D=a?Symbol.for("react.block"):60121,Y=a?Symbol.for("react.fundamental"):60117,q=a?Symbol.for("react.responder"):60118,H=a?Symbol.for("react.scope"):60119;function c(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case P:switch(e=e.type,e){case _:case g:case y:case d:case p:case b:return e;default:switch(e=e&&e.$$typeof,e){case S:case E:case C:case $:case v:return e;default:return t}}case h:return t}}}function F(e){return c(e)===g}r.AsyncMode=_;r.ConcurrentMode=g;r.ContextConsumer=S;r.ContextProvider=v;r.Element=P;r.ForwardRef=E;r.Fragment=y;r.Lazy=C;r.Memo=$;r.Portal=h;r.Profiler=d;r.StrictMode=p;r.Suspense=b;r.isAsyncMode=function(e){return F(e)||c(e)===_};r.isConcurrentMode=F;r.isContextConsumer=function(e){return c(e)===S};r.isContextProvider=function(e){return c(e)===v};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===P};r.isForwardRef=function(e){return c(e)===E};r.isFragment=function(e){return c(e)===y};r.isLazy=function(e){return c(e)===C};r.isMemo=function(e){return c(e)===$};r.isPortal=function(e){return c(e)===h};r.isProfiler=function(e){return c(e)===d};r.isStrictMode=function(e){return c(e)===p};r.isSuspense=function(e){return c(e)===b};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===y||e===g||e===d||e===p||e===b||e===k||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===$||e.$$typeof===v||e.$$typeof===S||e.$$typeof===E||e.$$typeof===Y||e.$$typeof===q||e.$$typeof===H||e.$$typeof===D)};r.typeOf=c;A.exports=r;var U=A.exports,N=U,V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O={};O[N.ForwardRef]=V;O[N.Memo]=B;var G=function(t){return t()},J=M["useInsertionEffect"]?M["useInsertionEffect"]:!1,K=J||G,w={}.hasOwnProperty,z=i.createContext(typeof HTMLElement<"u"?R({key:"css"}):null);z.Provider;var Q=function(t){return i.forwardRef(function(n,o){var s=i.useContext(z);return t(n,s,o)})},X=i.createContext({}),x="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Z=function(t,n){var o={};for(var s in n)w.call(n,s)&&(o[s]=n[s]);return o[x]=t,o},ee=function(t){var n=t.cache,o=t.serialized,s=t.isStringTag;return L(n,o,s),K(function(){return W(n,o,s)}),null},re=Q(function(e,t,n){var o=e.css;typeof o=="string"&&t.registered[o]!==void 0&&(o=t.registered[o]);var s=e[x],u=[o],f="";typeof e.className=="string"?f=j(t.registered,u,e.className):e.className!=null&&(f=e.className+" ");var T=I(u,void 0,i.useContext(X));f+=t.key+"-"+T.name;var m={};for(var l in e)w.call(e,l)&&l!=="css"&&l!==x&&(m[l]=e[l]);return m.ref=n,m.className=f,i.createElement(i.Fragment,null,i.createElement(ee,{cache:t,serialized:T,isStringTag:typeof s=="string"}),i.createElement(s,m))}),te=re,se=function(t,n){var o=arguments;if(n==null||!w.call(n,"css"))return i.createElement.apply(void 0,o);var s=o.length,u=new Array(s);u[0]=te,u[1]=Z(t,n);for(var f=2;f<s;f++)u[f]=o[f];return i.createElement.apply(null,u)};function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return I(t)}var ce=function(){var t=ne.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};export{ne as c,se as j,ce as k};
