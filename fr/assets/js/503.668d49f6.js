(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[503],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),r=n(7294),a=n(6010),l=n(6412),c=n(5281),s=n(7016);const i="codeBlockContainer_Ckt0";function u(e){let{as:t,...n}=e;const u=(0,l.p)(),m=(0,s.QC)(u);return r.createElement(t,(0,o.Z)({},n,{style:m,className:(0,a.Z)(n.className,i,c.k.common.codeBlock)}))}},1170:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(7294),r=n(6010),a=n(6505),l=n(2944);function c(e){let{children:t,className:n}=e;return o.createElement(a.Z,{as:"pre",tabIndex:0,className:(0,r.Z)(l.Z.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:l.Z.codeBlockLines},t))}},5864:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var o=n(7462),r=n(7294),a=n(6010),l=n(6668),c=n(6412),s=n(7016),i=n(902);const u={attributes:!0,characterData:!0,childList:!0,subtree:!0};function m(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=u);const o=(0,i.zX)(t),a=(0,i.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const d={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var p={Prism:n(7410).Z,theme:d};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h.apply(this,arguments)}var g=/\r\n|\r|\n/,v=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=h({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=h({},n,{backgroundColor:null}),r};function E(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const k=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=h({},E(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?h({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),f(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),f(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=h({},E(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?h({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),f(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,c=[],s=[c];l>-1;){for(;(a=o[l]++)<r[l];){var i=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],i=m):(u=y(u,m.type),m.alias&&(u=y(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(g),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)v(c),s.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(i),o.push(0),r.push(i.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return v(c),s}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),N="codeLine_lJS_",C="codeLineNumber_Tfdd",L="codeLineContent_feaV";function Z(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,a.Z)(n,l&&N)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))));return r.createElement("span",i,l?r.createElement(r.Fragment,null,r.createElement("span",{className:C}),r.createElement("span",{className:L},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var w=n(5999);const B={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function x(e){let{code:t,className:n}=e;const[o,l]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus()}(t),l(!0),c.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,w.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,w.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,w.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",n,B.copyButton,o&&B.copyButtonCopied),onClick:s},r.createElement("span",{className:B.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:B.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:B.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const T="wordWrapButtonIcon_Bwma",O="wordWrapButtonEnabled_EoeP";function j(e){let{className:t,onClick:n,isEnabled:o}=e;const l=(0,w.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,a.Z)("clean-btn",t,o&&O),"aria-label":l,title:l},r.createElement("svg",{className:T,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}var _=n(6505),H=n(2944);function S(e){var t;let{children:n,className:i="",metastring:u,title:d,showLineNumbers:f,language:h}=e;const{prism:{defaultLanguage:g,magicComments:v}}=(0,l.L)(),y=null!=(t=null!=h?h:(0,s.Vo)(i))?t:g,b=(0,c.p)(),E=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return m(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),N=(0,s.bc)(u)||d,{lineClassNames:C,code:L}=(0,s.nZ)(n,{metastring:u,language:y,magicComments:v}),w=null!=f?f:(0,s.nt)(u);return r.createElement(_.Z,{as:"div",className:(0,a.Z)(i,y&&!i.includes("language-"+y)&&"language-"+y)},N&&r.createElement("div",{className:H.Z.codeBlockTitle},N),r.createElement("div",{className:H.Z.codeBlockContent},r.createElement(k,(0,o.Z)({},p,{theme:b,code:L,language:null!=y?y:"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:l}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,a.Z)(t,H.Z.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,a.Z)(H.Z.codeBlockLines,w&&H.Z.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(Z,{key:t,line:e,getLineProps:o,getTokenProps:l,classNames:C[t],showLineNumbers:w})))))})),r.createElement("div",{className:H.Z.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(j,{className:H.Z.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(x,{className:H.Z.codeButton,code:L}))))}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),r=n(7294),a=n(6010),l=n(5999),c=n(6668);const s="anchorWithStickyNavbar_LWe7",i="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?r.createElement(t,(0,o.Z)({},u,{className:(0,a.Z)("anchor",m?i:s),id:n}),u.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,o.Z)({},u,{id:void 0}))}},5203:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var o=n(7294),r=n(3905),a=n(7462),l=n(5742);var c=n(8573);var s=n(9960);var i=n(6010),u=n(2389),m=n(6043);const d="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function g(e,t){return!!e&&(e===t||g(e.parentElement,t))}function v(e){let{summary:t,children:n,...r}=e;const l=(0,u.Z)(),c=(0,o.useRef)(null),{collapsed:s,setCollapsed:v}=(0,m.u)({initialState:!r.open}),[y,b]=(0,o.useState)(r.open);return o.createElement("details",(0,a.Z)({},r,{ref:c,open:y,"data-collapsed":s,className:(0,i.Z)(d,l&&p,r.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&g(t,c.current)&&(e.preventDefault(),s?(v(!1),b(!0)):v(!0))}}),null!=t?t:o.createElement("summary",null,"Details"),o.createElement(m.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{v(e),b(!e)}},o.createElement("div",{className:f},n)))}const y="details_b_Ee";function b(e){let{...t}=e;return o.createElement(v,(0,a.Z)({},t,{className:(0,i.Z)("alert alert--info",y,t.className)}))}var E=n(2503);function k(e){return o.createElement(E.Z,e)}const N="containsTaskList_mC6p";const C="img_ev3q";var L=n(5281),Z=n(5999);const w="admonition_LlT9",B="admonitionHeading_tbUL",x="admonitionIcon_kALy",T="admonitionContent_S0QG";const O={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(Z.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(Z.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(Z.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(Z.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(Z.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},j={secondary:"note",important:"info",success:"tip",warning:"danger"};function _(e){var t;const{mdxAdmonitionTitle:n,rest:r}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:r}}const H={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?o.createElement("code",e):o.createElement(c.Z,e)},a:function(e){return o.createElement(s.Z,e)},pre:function(e){var t;return o.createElement(c.Z,(0,o.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return o.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(b,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,i.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&N))}));var t},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,C))}));var t},h1:e=>o.createElement(k,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(k,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(k,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(k,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(k,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(k,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:a}=_(e),l=function(e){var t;const n=null!=(t=j[e])?t:e;return O[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),O.info)}(n),c=null!=r?r:l.label,{iconComponent:s}=l,u=null!=a?a:o.createElement(s,null);return o.createElement("div",{className:(0,i.Z)(L.k.common.admonition,L.k.common.admonitionType(e.type),"alert","alert--"+l.infimaClassName,w)},o.createElement("div",{className:B},o.createElement("span",{className:x},u),c),o.createElement("div",{className:T},t))}};function S(e){let{children:t}=e;return o.createElement(r.Zo,{components:H},t)}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(7462),r=n(7294),a=n(6010),l=n(3743);const c="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar",t)},r.createElement(l.Z,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(7462),r=n(7294),a=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:o}=t;const r=e.find((e=>s(e).top>=o));if(r){var a;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null}return null!=(n=e[e.length-1])?n:null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push("h"+r+".anchor");return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),s=i(c,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const p=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const h=(0,a.L)(),g=null!=u?u:h.tableOfContents.minHeadingLevel,v=null!=d?d:h.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return m((0,r.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:g,maxHeadingLevel:v}}),[s,i,g,v])),r.createElement(p,(0,o.Z)({toc:y,className:n,linkClassName:s},f))}},6412:(e,t,n)=>{"use strict";n.d(t,{p:()=>a});var o=n(2949),r=n(6668);function a(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},7016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>m,bc:()=>i,nZ:()=>d,nt:()=>u});var o=n(7594),r=n.n(o);const a=/title=(?<quote>["'])(?<title>.*?)\1/,l=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function s(e,t){const n=e.map((e=>{const{start:n,end:o}=c[e];return"(?:"+n+"\\s*("+t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function i(e){var t,n;return null!=(t=null==e||null==(n=e.match(a))?void 0:n.groups.title)?t:""}function u(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}function m(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}function d(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:i}=t;if(i&&l.test(i)){const e=i.match(l).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");const t=a[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return s(["js","jsBlock"],t);case"jsx":case"tsx":return s(["js","jsBlock","jsx"],t);case"html":return s(["js","jsBlock","html"],t);case"python":case"py":case"bash":return s(["bash"],t);case"markdown":case"md":return s(["html","jsx","bash"],t);default:return s(Object.keys(c),t)}}(o,a),m=n.split("\n"),d=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<m.length;){const e=m[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?d[p[t]].range+=r+",":f[t]?d[f[t]].start=r:h[t]&&(d[h[t]].range+=d[h[t]].start+"-"+(r-1)+","),m.splice(r,1)}n=m.join("\n");const g={};return Object.entries(d).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{null!=g[e]||(g[e]=[]),g[e].push(t)}))})),{lineClassNames:g,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}},2944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);