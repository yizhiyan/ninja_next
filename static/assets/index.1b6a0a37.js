var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(o,t,a)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,c=(e,o)=>{for(var t in o||(o={}))s.call(o,t)&&r(e,t,o[t]);if(a)for(var t of a(o))n.call(o,t)&&r(e,t,o[t]);return e},i=(e,a)=>o(e,t(a));import{c as l,o as d,p as m,a as u,r as p,b as f,d as g,w as y,e as k,F as v,k as h,u as b,f as w,g as P,h as C,t as j,i as _,j as A,_ as x,l as L,m as I,n as q,q as O,s as S,v as N,x as U}from"./vendor.e4dc3d7c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const D={},Q={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};D.render=function(e,o){return d(),l("img",Q)};const R={components:{Logo:D}};m("data-v-06c65298");const V={class:"header"},E={class:"header-wrapper"},z=f("div",{class:"flex items-center"},[f("p",{class:"pl-3 select-none"},"安理JD代挂")],-1),K=k("联系客服");u(),R.render=function(e,o,t,a,s,n){const r=p("el-link");return d(),l("div",V,[f("div",E,[z,g(r,{href:"http://wpa.qq.com/msgrd?v=3&uin=1838021731&site=qq&menu=yes"},{default:y((()=>[K])),_:1})])])},R.__scopeId="data-v-06c65298";const $={components:{Header:R}},H={class:"main"};$.render=function(e,o,t,a,s,n){const r=p("Header"),c=p("router-view");return d(),l(v,null,[g(r),f("div",H,[g(c)])],64)};const J=h.create({prefixUrl:"/api",retry:{limit:0}});const T={setup(){const e=b();w();let o=P({nickName:void 0,timestamp:void 0});const t=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void a();const t=await function(e){const o=new URLSearchParams;return o.set("eid",e),J.get("userinfo",{searchParams:o}).json()}(e);if(!t)return x.error("获取用户信息失败，请重重新登录"),void a();o.nickName=t.data.nickName,o.timestamp=new Date(t.data.timestamp).toLocaleString()}catch(e){console.error(e)}};C(t);const a=()=>{localStorage.removeItem("eid"),e.push("/login")};return i(c({},j(o)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"}],getInfo:t,logout:a,delAccount:async()=>{try{const e=localStorage.getItem("eid"),o=await function(e){return J.post("delaccount",{json:e}).json()}({eid:e});200!==o.code?x.error(o.message):(x.success(o.message),setTimeout((()=>{a()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const o=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${o}`,console.log(window.location.href)}})}},Z={class:"content"},B={class:"card"},W=f("div",{class:"card-header"},[f("p",{class:"card-title"},"个人中心")],-1),F={class:"card-body"},M={class:"card-footer"},X=k("退出登录"),G=k("删除账号"),Y={class:"card"},ee=f("div",{class:"card-header"},[f("p",{class:"card-title"},"常见活动位置"),f("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),oe={class:"card-body"},te={class:"pr-2"},ae=["onClick"];T.render=function(e,o,t,a,s,n){const r=p("el-button");return d(),l("div",Z,[f("div",B,[W,f("div",F,[f("p",null,"昵称："+_(e.nickName),1),f("p",null,"更新时间："+_(e.timestamp),1)]),f("div",M,[g(r,{size:"small",auto:"",onClick:a.logout},{default:y((()=>[X])),_:1},8,["onClick"]),g(r,{type:"danger",size:"small",auto:"",onClick:a.delAccount},{default:y((()=>[G])),_:1},8,["onClick"])])]),f("div",Y,[ee,f("div",oe,[f("ul",null,[(d(!0),l(v,null,A(a.activity,((e,o)=>(d(),l("li",{key:o,class:"leading-normal"},[f("span",null,_(e.name)+"：",1),f("span",te,_(e.address),1),e.href?(d(),l("a",{key:0,class:"text-blue-400",href:"#",onClick:o=>a.openUrlWithJD(e.href)},"直达链接",8,ae)):L("",!0)])))),128))])])])])};const se={setup(){const e=b();w();let o=P({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1});const t=async()=>{try{const e=(await J.get("info").json()).data;o.marginCount=e.marginCount,o.allowAdd=e.allowAdd}catch(e){console.error(e)}},a=async()=>{try{const e=await J.get("qrcode").json();o.token=e.data.token,o.okl_token=e.data.okl_token,o.cookies=e.data.cookies,o.QRCode=e.data.QRCode,o.QRCode&&(o.waitLogin=!0,clearInterval(o.timer),o.timer=setInterval(s,3e3))}catch(e){console.error(e),x.error("生成二维码失败！请重试或放弃")}},s=async()=>{try{const t=await function(e){return J.post("check",{json:e}).json()}({token:o.token,okl_token:o.okl_token,cookies:o.cookies});switch(null==t?void 0:t.data.errcode){case 0:localStorage.setItem("eid",t.data.eid),x.success(t.message),clearInterval(o.timer),e.push("/");break;case 176:break;default:x.error(t.message),o.waitLogin=!1,clearInterval(o.timer)}}catch(t){clearInterval(o.timer),o.waitLogin=!1}};return C((()=>{t(),a()})),i(c({},j(o)),{getInfo:t,getQrcode:a,showQrcode:async()=>{o.qrCodeVisibility=!0},ckeckLogin:s,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${o.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:async()=>{try{const e=o.cookie.match(/pt_key=(.*?);/)&&o.cookie.match(/pt_key=(.*?);/)[1],t=o.cookie.match(/pt_pin=(.*?);/)&&o.cookie.match(/pt_pin=(.*?);/)[1];if(e&&t){const o=await function(e){return J.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:t});200===o.code&&o.data.eid?(localStorage.setItem("eid",o.data.eid),x.success(o.message)):x.error(o.message||"cookie 解析失败，请检查后重试！")}else x.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}}})}};m("data-v-7cb0bd16");const ne={class:"content"},re={class:"card"},ce={class:"card-header"},ie={class:"flex items-center justify-between"},le=f("p",{class:"card-title"},"扫码登录",-1),de={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},me=f("span",{class:"card-subtitle"}," 请点击下方按钮登录，点击按钮后回到本网站查看是否登录成功，京东的升级提示不用管。 ",-1),ue={class:"card-body text-center"},pe={key:0,class:"flex flex-col w-48 m-auto mt-4"},fe=k("扫描二维码登录"),ge=k("跳转到京东 App 登录"),ye=["src"],ke=f("div",{class:"card-footer"},null,-1),ve={class:"card hidden"},he={class:"card-header"},be={class:"flex items-center justify-between"},we=f("p",{class:"card-title"},"CK 登录",-1),Pe={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Ce=f("span",{class:"card-subtitle"}," 请在下方输入您的 cookie 登录。 ",-1),je={class:"card-body text-center"},_e=k("登录"),Ae=f("div",{class:"card-footet"},null,-1);u(),se.render=function(e,o,t,a,s,n){const r=p("el-button"),c=p("el-input");return d(),l("div",ne,[f("div",re,[f("div",ce,[f("div",ie,[le,f("span",de,"余量："+_(e.marginCount),1)]),me]),f("div",ue,[e.qrCodeVisibility?(d(),l("img",{key:1,src:e.QRCode,width:256,class:"m-auto"},null,8,ye)):(d(),l("div",pe,[g(r,{type:"primary",round:"",onClick:a.showQrcode},{default:y((()=>[fe])),_:1},8,["onClick"]),g(r,{class:"mt-4 ml-0",type:"primary",round:"",onClick:a.jumpLogin},{default:y((()=>[ge])),_:1},8,["onClick"])]))]),ke]),f("div",ve,[f("div",he,[f("div",be,[we,f("span",Pe,"余量："+_(e.marginCount),1)]),Ce]),f("div",je,[g(c,{modelValue:e.cookie,"onUpdate:modelValue":o[0]||(o[0]=o=>e.cookie=o),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(r,{type:"primary",size:"small",round:"",onClick:a.CKLogin},{default:y((()=>[_e])),_:1},8,["onClick"])]),Ae])])},se.__scopeId="data-v-7cb0bd16";const xe=[{path:"/",component:T},{path:"/login",component:se}],Le=I({history:q(),routes:xe}),Ie=[S,N,x,U],qe=[x],Oe=O($);Ie.forEach((e=>{Oe.component(e.name,e)})),qe.forEach((e=>{Oe.use(e)})),Oe.use(Le),Oe.mount("#app");
