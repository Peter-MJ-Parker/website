"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={id:"PayloadType",title:"Enumeration: PayloadType",sidebar_label:"PayloadType",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/enums/PayloadType",id:"api/enums/PayloadType",title:"Enumeration: PayloadType",description:"Enumeration Members",source:"@site/docs/api/enums/PayloadType.md",sourceDirName:"api/enums",slug:"/api/enums/PayloadType",permalink:"/fr/docs/api/enums/PayloadType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PayloadType",title:"Enumeration: PayloadType",sidebar_label:"PayloadType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"EventType",permalink:"/fr/docs/api/enums/EventType"},next:{title:"PluginType",permalink:"/fr/docs/api/enums/PluginType"}},s={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Failure",id:"failure",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Success",id:"success",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Warning",id:"warning",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"failure"},"Failure"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Failure")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"failure"')),(0,a.kt)("p",null,"The PayloadType for a SernEmitter failure event"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L114"},"src/handler/structures/enums.ts:114")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"success"},"Success"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Success")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"success"')),(0,a.kt)("p",null,"The PayloadType for a SernEmitter success event"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L110"},"src/handler/structures/enums.ts:110")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"warning"},"Warning"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Warning")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"warning"')),(0,a.kt)("p",null,"The PayloadType for a SernEmitter warning event"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L118"},"src/handler/structures/enums.ts:118")))}c.isMDXComponent=!0}}]);