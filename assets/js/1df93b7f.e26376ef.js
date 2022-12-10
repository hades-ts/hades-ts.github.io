"use strict";(self.webpackChunk_hades_ts_docs=self.webpackChunk_hades_ts_docs||[]).push([[3237],{7213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(6393),a=n(167),s=n(3646),l=n(526),c=n(5881);const i="heroBanner_jHI5",o="hero__title_xSnH",m="hero__subtitle_mgRb",u="container_mm4O",g="snippet_kHNh";var d=n(9629);const h="features_ZM_0",p="featureSvg_M69F",E="feature_TTEU",_=[{title:"Easy to Use",url:"img/boon_codex.png",description:r.createElement(r.Fragment,null,"Designed from the ground up to streamline bot design.")},{title:"Scales with your Project",url:"img/boon_heart.png",description:r.createElement(r.Fragment,null,"As your project grows, you don't need to change your approach.")},{title:"Promotes Clean Architecture",url:"img/boon_gemstone.png",description:r.createElement(r.Fragment,null,"Automatic dependency management lets you focus on your bot's business logic.")}];function f(e){let{title:t,url:n,description:a}=e;return r.createElement("div",{className:E},r.createElement("div",{className:"text--center"},r.createElement("img",{className:p,src:n})),r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h3",null,t),r.createElement("p",null,a)))}function y(){return r.createElement("section",{className:h},_.map(((e,t)=>r.createElement(f,(0,d.Z)({key:t},e)))))}function v(){const{siteConfig:e}=(0,s.Z)();return r.createElement("div",{className:(0,c.Z)(i)},r.createElement("img",{src:"/img/hades.png"}),r.createElement("div",{className:u},r.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.createElement("h1",{className:`hero__title ${o}`},e.title),r.createElement("p",{className:`hero__subtitle ${m}`},e.tagline),r.createElement("div",{className:g},r.createElement(a.Z,{language:"jsx"},"@singleton()\nexport class BotService extends HadesBotService {\n\n    @inject(ILogger) log: ILogger;\n\n    async onReady() {\n        this.log.info(\n          `Logged in as ${this.client.user.username}.`\n        );\n    }\n\n    async onMessage({ content, reply }: Message) {\n        if (this.isHighlight(content))) {\n            await reply('Hello!');\n        }\n    }\n}")),r.createElement(y,null))))}function b(){const{siteConfig:e}=(0,s.Z)();return r.createElement(l.Z,{title:"@hades-ts/hades",description:"Build SOLID Discord bots."},r.createElement(v,null))}},167:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(6393),a=n(7227);function s(e){return r.createElement(r.Fragment,null,r.createElement(a.Z,e))}}}]);