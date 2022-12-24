"use strict";(self.webpackChunk_hades_ts_docs=self.webpackChunk_hades_ts_docs||[]).push([[3444],{158:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(6393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=i(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:a,c[1]=m;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>i});var r=n(5442),a=(n(6393),n(158));n(4532);const o={},c="Commands",m={unversionedId:"text-commands/commands",id:"text-commands/commands",title:"Commands",description:"Writing commands is easy. Just subclass TextCommand and slap the @command decorator on top:",source:"@site/docs/libs/text-commands/commands.md",sourceDirName:"text-commands",slug:"/text-commands/commands",permalink:"/docs/libs/text-commands/commands",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"libs",previous:{title:"Configuration",permalink:"/docs/libs/text-commands/configuration"},next:{title:"Arguments",permalink:"/docs/libs/text-commands/arguments"}},s={},i=[{value:"@command Decorator",id:"command-decorator",level:2}],l={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commands"},"Commands"),(0,a.kt)("p",null,"Writing commands is easy. Just subclass ",(0,a.kt)("inlineCode",{parentName:"p"},"TextCommand")," and slap the ",(0,a.kt)("inlineCode",{parentName:"p"},"@command")," decorator on top:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@command('hi')\nexport class HiCommand extends TextCommand {\n    async execute() {\n        await this.reply('Hello!')\n    }\n}\n")),(0,a.kt)("p",null,"When the command is executed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method is called. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"reply")," method to send a message to the channel the command was executed in."),(0,a.kt)("h2",{id:"command-decorator"},"@command Decorator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@command")," marks a class as a command."),(0,a.kt)("p",null,"It takes a single argument, which is the name of the command. This is what users will type to execute the command."))}d.isMDXComponent=!0},4532:(e,t,n)=>{n(6393)}}]);