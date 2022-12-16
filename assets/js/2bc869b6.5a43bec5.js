"use strict";(self.webpackChunk_hades_ts_docs=self.webpackChunk_hades_ts_docs||[]).push([[164],{158:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(6393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(9629),o=(r(6393),r(158));r(4532);const a={},i="Overview",s={unversionedId:"pythia/overview",id:"pythia/overview",title:"Overview",description:"Pythia is a Discord bot that uses GPT3 to generate responses to messages in a Discord channel.",source:"@site/docs/bots/pythia/overview.md",sourceDirName:"pythia",slug:"/pythia/overview",permalink:"/docs/bots/pythia/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"bots",previous:{title:"Pythia (GPT3 AI)",permalink:"/docs/bots/pythia/"},next:{title:"Configuration",permalink:"/docs/bots/pythia/configuration"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Pythia is a Discord bot that uses ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/blog/gpt-3-apps/"},"GPT3")," to generate responses to messages in a Discord channel."),(0,o.kt)("p",null,"It can answer questions, tell jokes, and hold conversations. "),(0,o.kt)("p",null,"Some major features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GPT3 AI")," - Pythia uses GPT3 to generate responses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Per-guild Prompts")," - Allows you to specify a custom prompt for each guild."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token Quota")," - Uses a token quota to limit the amount of tokens used per day."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Quota Exemptions")," - Allows certain users and roles to bypass the token quota."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transcripts")," - Stores transcripts of conversations in a JSON file.")))}u.isMDXComponent=!0},4532:(e,t,r)=>{r(6393)}}]);