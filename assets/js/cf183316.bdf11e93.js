"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:6},a="The SernEmitter class",s={unversionedId:"guide/walkthrough/sern-emitter",id:"guide/walkthrough/sern-emitter",title:"The SernEmitter class",description:"You're shipped with the SernEmitter. This EventEmitter listens to",source:"@site/docs/guide/walkthrough/sern-emitter.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/sern-emitter",permalink:"/docs/guide/walkthrough/sern-emitter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/walkthrough/sern-emitter.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/guide/walkthrough/plugins"},next:{title:"Good to know",permalink:"/docs/guide/walkthrough/good-to-know"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-sernemitter-class"},"The SernEmitter class"),(0,o.kt)("p",null,"You're shipped with the SernEmitter. This EventEmitter listens to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"command modules executing and its status, the ",(0,o.kt)("inlineCode",{parentName:"li"},"module.activate")," event"),(0,o.kt)("li",{parentName:"ul"},"command modules registered and its status, the ",(0,o.kt)("inlineCode",{parentName:"li"},"module.register")," event"),(0,o.kt)("li",{parentName:"ul"},"any error that occurs, the ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," event"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"warn")," events, where it is possible to throw errors")),(0,o.kt)("p",null,"You can put these and other event listeners into ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/walkthrough/first-event"},"event modules"),"! "),(0,o.kt)("br",null),"View all ",(0,o.kt)("a",{href:"https://sern-handler.js.org/docs/api/modules#serneventsmapping"},"events"))}p.isMDXComponent=!0}}]);