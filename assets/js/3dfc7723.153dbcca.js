"use strict";(self.webpackChunk_hades_ts_docs=self.webpackChunk_hades_ts_docs||[]).push([[8966],{158:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(6393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,y=s["".concat(p,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(9629),o=(n(6393),n(158));n(4532);const a={},i="Configuration",c={unversionedId:"pythia/configuration",id:"pythia/configuration",title:"Configuration",description:"Copy config/default.template.json to config/default.json",source:"@site/docs/bots/pythia/configuration.md",sourceDirName:"pythia",slug:"/pythia/configuration",permalink:"/docs/bots/pythia/configuration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"bots",previous:{title:"Pythia (GPT3 AI)",permalink:"/docs/bots/pythia/"}},p={},u=[{value:"Running the Bot",id:"running-the-bot",level:2}],l={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.template.json")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "discordToken": "your bot token here",\n  "botOwner": "your discord id here",\n  "gpt3Token": "you openAI token here",\n  "transcriptsPath": "data/transcripts",\n  "quota": {\n    "quotaFile": "data/quota.json",\n    "globalDailyTokenLimit": 10000,\n    "userDailyTokenLimit": 1000\n  },\n  "guilds": {\n    "<guild id>": {\n      "prompt": "your GPT prompt here",\n      "roleExemptions": {\n        "users": ["<user id>"],\n        "roles": ["<role id>"]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"running-the-bot"},"Running the Bot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm run start\n")))}s.isMDXComponent=!0},4532:(e,t,n)=>{n(6393)}}]);