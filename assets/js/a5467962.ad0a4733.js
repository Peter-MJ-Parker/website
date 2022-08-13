"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[322],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),c=a,h=p["".concat(o,".").concat(c)]||p[c]||m[c]||l;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const l={id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"api/enums/CommandType",id:"api/enums/CommandType",title:"Enumeration: CommandType",description:"Example",source:"@site/docs/api/enums/CommandType.md",sourceDirName:"api/enums",slug:"/api/enums/CommandType",permalink:"/docs/api/enums/CommandType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Sern",permalink:"/docs/api/namespaces/Sern"},next:{title:"EventType",permalink:"/docs/api/enums/EventType"}},o={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Both",id:"both",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Button",id:"button",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"MenuMsg",id:"menumsg",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"MenuSelect",id:"menuselect",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"MenuUser",id:"menuuser",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Modal",id:"modal",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Slash",id:"slash",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Text",id:"text",level:3},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default commandModule({\n    // highlight-next-line\n    type : CommandType.Text,\n    name : 'a text command'\n    execute(message) {\n        console.log(message.content)\n    }\n})\n")),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"both"},"Both"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Both")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("p",null,"The CommandType for hybrid commands, text and slash"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L27"},"src/handler/structures/enums.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"button"},"Button"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Button")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"16")),(0,a.kt)("p",null,"The CommandType for ButtonInteraction commands"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L39"},"src/handler/structures/enums.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"menumsg"},"MenuMsg"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MenuMsg")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"8")),(0,a.kt)("p",null,"The CommandType for MessageContextMenuInteraction commands"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L35"},"src/handler/structures/enums.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"menuselect"},"MenuSelect"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MenuSelect")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"32")),(0,a.kt)("p",null,"The CommandType for SelectMenuInteraction commands"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L43"},"src/handler/structures/enums.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"menuuser"},"MenuUser"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"MenuUser")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"4")),(0,a.kt)("p",null,"The CommandType for UserContextMenuInteraction commands"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L31"},"src/handler/structures/enums.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"modal"},"Modal"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Modal")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"64")),(0,a.kt)("p",null,"The CommandType for ModalSubmitInteraction commands"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L47"},"src/handler/structures/enums.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"slash"},"Slash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Slash")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"2")),(0,a.kt)("p",null,"The CommandType for slash commands"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L23"},"src/handler/structures/enums.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"Text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Text")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,"The CommandType for text commands"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L19"},"src/handler/structures/enums.ts:19")))}m.isMDXComponent=!0}}]);