"use strict";(self.webpackChunk_hades_ts_docs=self.webpackChunk_hades_ts_docs||[]).push([[1889],{158:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(6393);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=l,g=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(9629),l=(a(6393),a(158));a(4532);const r={},s="Client Events",i={unversionedId:"events",id:"events",title:"Client Events",description:"HadesBotService has a number of methods you can override to handle the",source:"@site/docs/hades/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/hades/events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hades",previous:{title:"HadesBotService",permalink:"/docs/hades/bot-service"},next:{title:"Discord Service",permalink:"/docs/hades/discord-service"}},o={},c=[{value:"logging",id:"logging",level:2},{value:"channels",id:"channels",level:2},{value:"connection",id:"connection",level:2},{value:"emoji",id:"emoji",level:2},{value:"bans",id:"bans",level:2},{value:"bot guilds",id:"bot-guilds",level:2},{value:"guild members",id:"guild-members",level:2},{value:"messages",id:"messages",level:2},{value:"prescence",id:"prescence",level:2},{value:"roles",id:"roles",level:2},{value:"users",id:"users",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client-events"},"Client Events"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HadesBotService")," has a number of methods you can override to handle the\nvarious ",(0,l.kt)("a",{parentName:"p",href:"https://discord.js.org/#/docs/main/main/class/Client"},"Discord.js client events"),":"),(0,l.kt)("h2",{id:"logging"},"logging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onDebug"),"(...args: any[]) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-debug"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onError"),"(...args: any[]) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-error"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onWarn"),"(...args: any[]) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-warn"},"?"))),(0,l.kt)("h2",{id:"channels"},"channels"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onChannelCreate"),"(channel: Channel) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelCreate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onChannelDelete"),"(channel: Channel) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelDelete"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onChannelPinsUpdate"),"(channel: Channel, time: Date) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelPinsUpdate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onChannelUpdate"),"(oldChannel: Channel, newChannel: Channel) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelUpdate"},"?"))),(0,l.kt)("h2",{id:"connection"},"connection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onReady"),"() ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-ready"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onReconnecting"),"() ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-reconnecting"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onDisconnect"),"(event: CloseEvent) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-disconnect"},"?"))),(0,l.kt)("h2",{id:"emoji"},"emoji"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onEmojiCreate"),"(emoji: Emoji) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiCreate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onEmojiDelete"),"(emoji: Emoji) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiDelete"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onEmojiUpdate"),"(emoji: Emoji) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiUpdate"},"?"))),(0,l.kt)("h2",{id:"bans"},"bans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildBanAdd"),"(guild: Guild, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildBanAdd"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildBanRemove"),"(guild: Guild, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildBanRemove"},"?"))),(0,l.kt)("h2",{id:"bot-guilds"},"bot guilds"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildCreate"),"(guild: Guild) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildCreate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildDelete"),"(guild: Guild) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildDelete"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildUnavailable"),"(guild: Guild) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildUnavailable"},"?"))),(0,l.kt)("h2",{id:"guild-members"},"guild members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMemberAdd"),"(member: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberAdd"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMemberAvailable"),"(member: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberAvailable"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMemberRemove"),"(member: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberRemove"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMemberSpeaking"),"(member: GuildMember, isSpeaking: boolean) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberSpeaking"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMemberUpdate"),"(oldMember: GuildMember, newMember: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberUpdate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildMembersChunk"),"(members: GuildMember[], guild: Guild) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMembersChunk"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onGuildUpdate"),"(oldGuild: Guild, newGuild: Guild) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildUpdate"},"?"))),(0,l.kt)("h2",{id:"messages"},"messages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessage"),"(message: Message) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-message"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageDelete"),"(message: Message) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageDelete"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageDeleteBulk"),"(messages: Collection<Snowflake, Message>) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageDeleteBulk"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageReactionAdd"),"(reaction: MessageReaction, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionAdd"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageReactionRemove"),"(reaction: MessageReaction, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionRemove"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageReactionRemoveAll"),"(message: Message) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionRemoveAll"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onMessageUpdate"),"(oldMessage: Message, newMessage: Message) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageUpdate"},"?"))),(0,l.kt)("h2",{id:"prescence"},"prescence"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onPresenceUpdate"),"(oldMember: GuildMember, newMember: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-presenceUpdate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onTypingStart"),"(channel: Channel, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-typingStart"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onTypingStop"),"(channel: Channel, user: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-typingStop"},"?"))),(0,l.kt)("h2",{id:"roles"},"roles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onRoleCreate"),"(role: Role) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleCreate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onRoleDelete"),"(role: Role) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleDelete"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onRoleUpdate"),"(oldRole: Role, newRole: Role) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleUpdate"},"?"))),(0,l.kt)("h2",{id:"users"},"users"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onUserNoteUpdate"),"(user: User, oldNote: string, newNote: string) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-userNoteUpdate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onUserUpdate"),"(oldUser: User, newUser: User) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-userUpdate"},"?")),(0,l.kt)("li",{parentName:"ul"},"async ",(0,l.kt)("strong",{parentName:"li"},"onVoiceStateUpdate"),"(oldMember: GuildMember, newMember: GuildMember) ",(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-voiceStateUpdate"},"?"))))}d.isMDXComponent=!0},4532:(e,t,a)=>{a(6393)}}]);