if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const t=s=>i(s,n),u={module:{uri:n},exports:o,require:t};e[n]=Promise.all(r.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Cakes-Ck0Lbu3u.css",revision:null},{url:"assets/Cakes-r3S3ySNt.js",revision:null},{url:"assets/Cart-CEwPvw02.css",revision:null},{url:"assets/Cart-CPhEkOZm.js",revision:null},{url:"assets/CollectionRefusal-BVZFW3kR.js",revision:null},{url:"assets/CollectionRefusal-So3dzHFT.css",revision:null},{url:"assets/index-BQyDhg0f.js",revision:null},{url:"assets/index-D4mmOyF9.css",revision:null},{url:"assets/Notice-CB1qeHrh.js",revision:null},{url:"assets/Notice-CKw_thBp.css",revision:null},{url:"assets/Order-BS14MFon.js",revision:null},{url:"assets/Order-PWpV66fF.css",revision:null},{url:"assets/PrivacyPolicy-BkU0q28m.css",revision:null},{url:"assets/PrivacyPolicy-M7thtX6r.js",revision:null},{url:"assets/TermsOfService-BTcmkGsY.css",revision:null},{url:"assets/TermsOfService-DpHuKpmM.js",revision:null},{url:"index.html",revision:"8e5caa0fb36f6b0c6d3197e1423aa387"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"dc346611dd7536a3f4ef0160d1bc598b"},{url:"img/icons/favicon.png",revision:"fb888fd3c8184230dd3c60c97e553895"},{url:"manifest.webmanifest",revision:"02dd940bebad80ac8613834e42663865"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
