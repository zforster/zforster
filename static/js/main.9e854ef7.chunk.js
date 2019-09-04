(window.webpackJsonpzforster=window.webpackJsonpzforster||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile_image.d9d4d6b6.png"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=a(1),o=a(2),u=a(4),l=a(3),m=a(5),h=a(9),f=a.n(h),d=(a(15),a(6)),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).chars=";,\"'()!<>-+/[]{}=*%#_",e.phrases=["Data Engineer","Computer Science Undergraduate","Avid Programmer"],e.textContainer=r.a.createElement("div",{className:"scrambleText"},"Data Engineer"),e.update=e.update.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.scrambleElement=document.querySelector(".scrambleText");var t=0;!function a(){e.setText(e.phrases[t]).then(function(){setTimeout(a,800)}),t=(t+1)%e.phrases.length}()}},{key:"render",value:function(){return this.textContainer}},{key:"setText",value:function(e){var t=this,a=this.scrambleElement.innerText,n=Math.max(a.length,e.length),r=new Promise(function(e){return t.resolve=e});this.queue=[];for(var c=0;c<n;c++){var i=a[c]||"",s=e[c]||"",o=Math.floor(40*Math.random()),u=o+Math.floor(40*Math.random());this.queue.push({from:i,to:s,start:o,end:u})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r}},{key:"update",value:function(){for(var e="",t=0,a=0,n=this.queue.length;a<n;a++){var r=this.queue[a],c=r.from,i=r.to,s=r.start,o=r.end,u=r.char;this.frame>=o?(t++,e+=i):this.frame>=s?((!u||Math.random()<.28)&&(u=this.randomChar(),this.queue[a].char=u),e+='<span class="dud">'.concat(u,"</span>")):e+=c}this.scrambleElement.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nameContainer"},r.a.createElement("img",{className:"profileImage",src:f.a}),r.a.createElement("h1",null,this.props.welcomeText),r.a.createElement(p,null))}}]),t}(n.Component),j=(a(16),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"navBar"},r.a.createElement("li",{id:"home"},"Home"),r.a.createElement("li",{id:"skills"},"Skills"),r.a.createElement("li",{id:"projects"},"Projects"))}}]),t}(n.Component)),v=(a(17),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"gitHubContainer"},r.a.createElement("a",{className:"gitHubLogoAnchor",href:"https://github.com/zforster",target:"_blank"},r.a.createElement("svg",{className:"gitHubLogo",viewBox:"0 0 496 512"},r.a.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))))}}]),t}(n.Component)),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(b,{welcomeText:"Zak Forster",secondaryText:"Data Engineer"}),r.a.createElement(v,null))}}]),t}(n.Component);i.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.9e854ef7.chunk.js.map