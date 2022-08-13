"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l="SernHandler",o={unversionedId:"api/index",id:"api/index",title:"@sern/handler",description:"License: MIT",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/docs/api/modules"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"<code> index.js (CommonJS)</code>",id:"-indexjs-commonjs",level:4},{value:"<code> ping.js (CommonJS)</code>",id:"-pingjs-commonjs",level:4},{value:"CLI",id:"cli",level:2},{value:"Links",id:"links",level:2},{value:"Contribute",id:"contribute",level:2},{value:"Roadmap",id:"roadmap",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sernhandler"},"SernHandler"),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/v/@sern/handler?maxAge=3600",alt:"NPM version"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/dt/@sern/handler?maxAge=3600",alt:"NPM downloads"})),"[![License: MIT](https://img.shields.io/badge/License-MIT-blavk.svg)](https://opensource.org/licenses/MIT)",(0,a.kt)("p",null,"A customizable, batteries-included, powerful discord.js framework to automate and streamline your bot development."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @sern/handler\n")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h4",{id:"-indexjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," index.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Client, GatewayIntentBits } = require('discord.js');\nconst { Sern } = require('@sern/handler');\nconst { defaultPrefix, token } = require('./config.json');\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildMembers,\n    GatewayIntentBits.GuildMessages\n  ]\n});\n\nSern.init({\n    client,   \n    defaultPrefix,   \n    commands : 'src/commands',\n});\n\nclient.login(token);\n")),(0,a.kt)("h4",{id:"-pingjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," ping.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Sern, CommandType } = require('@sern/handler');\n\nexports.default = {\n    description: 'A ping pong command',\n    type: CommandType.Slash,\n    execute(ctx) {\n        ctx.reply('pong!');\n    }\n  };\n")),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/templates"},"templates")," for TypeScript examples and more"),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"highly encouraged")," to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"command line interface")," for your project. Don't forget to view it."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern-handler.js.org"},"Official Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.com/invite/mmyCTnYtbF"},"Support Server"))),(0,a.kt)("h2",{id:"contribute"},"Contribute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read our contribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler"},"guidelines")," carefully"),(0,a.kt)("li",{parentName:"ul"},"Pull up on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/issues"},"issues")," and report bugs"),(0,a.kt)("li",{parentName:"ul"},"All kinds of contributions are welcomed.")),(0,a.kt)("h2",{id:"roadmap"},"Roadmap"),(0,a.kt)("p",null,"You can check our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/roadmap"},"roadmap")," to see what's going to be added or patched in the future."))}d.isMDXComponent=!0}}]);