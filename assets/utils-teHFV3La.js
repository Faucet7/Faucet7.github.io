const a="/assets/Anton-DYpxEaOX.ttf",l="/assets/bilibili-DpON-QDW.png",g="/assets/github-hR-AYn4M.png",r="/assets/tiktok-DV1VSoc6.png",_="/assets/wechat-Bdzdd1-s.png",h="/assets/logo-DZzXkf6S.png",f="/assets/wechatcode-BwjV7woW.png",p=s=>new URL(Object.assign({"../assets/font/Anton.ttf":a,"../assets/icon/bilibili.png":l,"../assets/icon/github.png":g,"../assets/icon/tiktok.png":r,"../assets/icon/wechat.png":_,"../assets/img/logo.png":h,"../assets/img/wechatcode.png":f})[`../assets/${s}`],import.meta.url).href;function b(s){const e=s.match(/^#\s+(.*)$/m)[1],t=s.match(/\n\n(.*)\n\n##/)[1];return console.log(e,t),{title:e,summary:t}}async function m(s,e){console.log("fetching "+s+" article "+e);const t=await fetch(`/article/${s}/${e}.md`);if(!t.ok)throw new Error("Network response was not ok");return await t.text()}async function w(s){let e=[],t=1;for(;;)try{console.log("fetching "+s+" article "+t);const n=await m(s,t),{title:o,summary:c}=b(n),i={title:o,id:t,abstract:c};e[t-1]=i,t++}catch(n){console.error("fetching failed "+t,n),console.log("fetching failed "+t);break}return console.log(e),e}export{w as a,m as f,p as g};
