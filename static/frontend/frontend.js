function I(){let t=document.querySelector(".js-header"),e=document.querySelectorAll(".js-headerMenuButton");e.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),t==null||t.classList.toggle("is-active"),o.setAttribute("aria-expanded",String(t==null?void 0:t.classList.contains("is-active")))})});let n=document.querySelector(".js-scrim");n==null||n.addEventListener("click",o=>{o.preventDefault(),t==null||t.classList.remove("is-active"),e.forEach(i=>{i.setAttribute("aria-expanded",String(t==null?void 0:t.classList.contains("is-active")))})})}function R(){let t=document.querySelector(".js-searchForm"),e=document.querySelector(".js-expandSearch"),n=t==null?void 0:t.querySelector("input"),o=document.querySelector(".js-headerLogo"),i=document.querySelector(".js-headerMenuButton");e==null||e.addEventListener("click",()=>{t==null||t.classList.add("go-SearchForm--expanded"),o==null||o.classList.add("go-Header-logo--hidden"),i==null||i.classList.add("go-Header-navOpen--hidden"),n==null||n.focus()}),document==null||document.addEventListener("click",l=>{(t==null?void 0:t.contains(l.target))||(t==null||t.classList.remove("go-SearchForm--expanded"),o==null||o.classList.remove("go-Header-logo--hidden"),i==null||i.classList.remove("go-Header-navOpen--hidden"))})}var y=class{constructor(e){this.el=e;this.setActive=e=>{this.activeIndex=(e+this.slides.length)%this.slides.length,this.el.setAttribute("data-slide-index",String(this.activeIndex));for(let n of this.dots)n.classList.remove("go-Carousel-dot--active");this.dots[this.activeIndex].classList.add("go-Carousel-dot--active");for(let n of this.slides)n.setAttribute("aria-hidden","true");this.slides[this.activeIndex].removeAttribute("aria-hidden"),this.liveRegion.textContent="Slide "+(this.activeIndex+1)+" of "+this.slides.length};var n;this.slides=Array.from(e.querySelectorAll(".go-Carousel-slide")),this.dots=[],this.liveRegion=document.createElement("div"),this.activeIndex=Number((n=e.getAttribute("data-slide-index"))!=null?n:0),this.initSlides(),this.initArrows(),this.initDots(),this.initLiveRegion()}initSlides(){for(let[e,n]of this.slides.entries())e!==this.activeIndex&&n.setAttribute("aria-hidden","true")}initArrows(){var n,o;let e=document.createElement("ul");e.classList.add("go-Carousel-arrows"),e.innerHTML=`
      <li>
        <button class="go-Carousel-prevSlide" aria-label="Go to previous slide">
          <img class="go-Icon" height="24" width="24" src="/static/shared/icon/arrow_left_gm_grey_24dp.svg" alt="">
        </button>
      </li>
      <li>
        <button class="go-Carousel-nextSlide" aria-label="Go to next slide">
          <img class="go-Icon" height="24" width="24" src="/static/shared/icon/arrow_right_gm_grey_24dp.svg" alt="">
        </button>
      </li>
    `,(n=e.querySelector(".go-Carousel-prevSlide"))==null||n.addEventListener("click",()=>this.setActive(this.activeIndex-1)),(o=e.querySelector(".go-Carousel-nextSlide"))==null||o.addEventListener("click",()=>this.setActive(this.activeIndex+1)),this.el.append(e)}initDots(){let e=document.createElement("ul");e.classList.add("go-Carousel-dots");for(let n=0;n<this.slides.length;n++){let o=document.createElement("li"),i=document.createElement("button");i.classList.add("go-Carousel-dot"),n===this.activeIndex&&i.classList.add("go-Carousel-dot--active"),i.innerHTML=`<span class="go-Carousel-obscured">Slide ${n+1}</span>`,i.addEventListener("click",()=>this.setActive(n)),o.append(i),e.append(o),this.dots.push(i)}this.el.append(e)}initLiveRegion(){this.liveRegion.setAttribute("aria-live","polite"),this.liveRegion.setAttribute("aria-atomic","true"),this.liveRegion.setAttribute("class","go-Carousel-obscured"),this.liveRegion.textContent=`Slide ${this.activeIndex+1} of ${this.slides.length}`,this.el.appendChild(this.liveRegion)}};var S=class{constructor(e){this.el=e;var n,o,i,l,h;this.data=(n=e.dataset.toCopy)!=null?n:e.innerText,!this.data&&((o=e.parentElement)==null?void 0:o.classList.contains("go-InputGroup"))&&(this.data=(h=this.data||((l=(i=e.parentElement)==null?void 0:i.querySelector("input"))==null?void 0:l.value))!=null?h:""),e.addEventListener("click",w=>this.handleCopyClick(w))}handleCopyClick(e){e.preventDefault();let n=1e3;if(!navigator.clipboard){this.showTooltipText("Unable to copy",n);return}navigator.clipboard.writeText(this.data).then(()=>{this.showTooltipText("Copied!",n)}).catch(()=>{this.showTooltipText("Unable to copy",n)})}showTooltipText(e,n){this.el.setAttribute("data-tooltip",e),setTimeout(()=>this.el.setAttribute("data-tooltip",""),n)}};var M=class{constructor(e){this.el=e;document.addEventListener("click",n=>{this.el.contains(n.target)||this.el.removeAttribute("open")})}};var H=class{constructor(e){this.el=e;this.el.addEventListener("change",n=>{let o=n.target,i=o.value;o.value.startsWith("/")||(i="/"+i),window.location.href=i})}};var k=class{constructor(e){this.el=e;window.dialogPolyfill&&window.dialogPolyfill.registerDialog(e),this.init()}init(){let e=document.querySelector(`[aria-controls="${this.el.id}"]`);e&&e.addEventListener("click",()=>{var n;this.el.showModal?this.el.showModal():this.el.setAttribute("opened","true"),(n=this.el.querySelector("input"))==null||n.focus()});for(let n of this.el.querySelectorAll("[data-modal-close]"))n.addEventListener("click",()=>{this.el.close?this.el.close():this.el.removeAttribute("opened")})}};function L(t,e,n,o){var i;(i=window.dataLayer)!=null||(window.dataLayer=[]),typeof t=="string"?window.dataLayer.push({event:t,event_category:e,event_action:n,event_label:o}):window.dataLayer.push(t)}function _(t){var e;(e=window.dataLayer)!=null||(window.dataLayer=[]),window.dataLayer.push(t)}var O=class{constructor(){this.handlers={},document.addEventListener("keydown",e=>this.handleKeyPress(e))}on(e,n,o,i){var l,h;return(h=(l=this.handlers)[e])!=null||(l[e]=new Set),this.handlers[e].add({description:n,callback:o,...i}),this}handleKeyPress(e){var n;for(let o of(n=this.handlers[e.key.toLowerCase()])!=null?n:new Set){if(o.target&&o.target!==e.target)return;let i=e.target;if(!o.target&&((i==null?void 0:i.tagName)==="INPUT"||(i==null?void 0:i.tagName)==="SELECT"||(i==null?void 0:i.tagName)==="TEXTAREA")||(i==null?void 0:i.isContentEditable)||o.withMeta&&!(e.ctrlKey||e.metaKey)||!o.withMeta&&(e.ctrlKey||e.metaKey))return;L("keypress","hotkeys",`${e.key} pressed`,o.description),o.callback(e)}}},g=new O;function J(){var q;let t=document.querySelector(".JumpDialog"),e=t==null?void 0:t.querySelector(".JumpDialog-body"),n=t==null?void 0:t.querySelector(".JumpDialog-list"),o=t==null?void 0:t.querySelector(".JumpDialog-input"),i=document.querySelector(".js-documentation"),l;function h(){let s=[];if(!!i){for(let r of i.querySelectorAll("[data-kind]"))s.push(w(r));for(let r of s)r.link.addEventListener("click",function(){t==null||t.close()});return s.sort(function(r,c){return r.lower.localeCompare(c.lower)}),s}}function w(s){var v;let r=document.createElement("a"),c=s.getAttribute("id");r.setAttribute("href","#"+c),r.setAttribute("tabindex","-1"),r.setAttribute("data-gtmc","jump to link");let u=s.getAttribute("data-kind");return{link:r,name:c!=null?c:"",kind:u!=null?u:"",lower:(v=c==null?void 0:c.toLowerCase())!=null?v:""}}let A,m=-1;function T(s){for(A=s,l||(l=h()),E(-1);n==null?void 0:n.firstChild;)n.firstChild.remove();if(s){let r=s.toLowerCase(),c=[],u=[],v=[],b=(d,p,f)=>d.name.substring(0,p)+"<b>"+d.name.substring(p,f)+"</b>"+d.name.substring(f);for(let d of l!=null?l:[]){let p=d.name.toLowerCase();if(p===r)d.link.innerHTML=b(d,0,d.name.length),c.push(d);else if(p.startsWith(r))d.link.innerHTML=b(d,0,s.length),u.push(d);else{let f=p.indexOf(r);f>-1&&(d.link.innerHTML=b(d,f,f+s.length),v.push(d))}}for(let d of c.concat(u).concat(v))n==null||n.appendChild(d.link)}else{if(!l||l.length===0){let r=document.createElement("i");r.innerHTML="There are no symbols on this page.",n==null||n.appendChild(r)}for(let r of l!=null?l:[])r.link.innerHTML=r.name+" <i>"+r.kind+"</i>",n==null||n.appendChild(r.link)}e&&(e.scrollTop=0),(l==null?void 0:l.length)&&n&&n.children.length>0&&E(0)}function E(s){let r=n==null?void 0:n.children;if(!(!r||!e)){if(m>=0&&r[m].classList.remove("JumpDialog-active"),s>=r.length&&(s=r.length-1),s>=0){r[s].classList.add("JumpDialog-active");let c=r[s].offsetTop-r[0].offsetTop,u=c+r[s].clientHeight;c<e.scrollTop?e.scrollTop=c:u>e.scrollTop+e.clientHeight&&(e.scrollTop=u-e.clientHeight)}m=s}}function C(s){if(m<0)return;let r=m+s;r<0&&(r=0),E(r)}o==null||o.addEventListener("keyup",function(){o.value.toUpperCase()!=A.toUpperCase()&&T(o.value)}),o==null||o.addEventListener("keydown",function(s){let r=38,c=40,u=13;switch(s.which){case r:C(-1),s.preventDefault();break;case c:C(1),s.preventDefault();break;case u:m>=0&&n&&(n.children[m].click(),s.preventDefault());break}});let a=document.querySelector(".ShortcutsDialog");g.on("f","open jump to modal",s=>{var r;(t==null?void 0:t.open)||(a==null?void 0:a.open)||(s.preventDefault(),o&&(o.value=""),(r=t==null?void 0:t.showModal)==null||r.call(t),o==null||o.focus(),T(""))}).on("?","open shortcuts modal",()=>{var s;(t==null?void 0:t.open)||(a==null?void 0:a.open)||(s=a==null?void 0:a.showModal)==null||s.call(a)});let x=document.querySelector(".js-jumpToInput");x&&x.addEventListener("click",()=>{var s;o&&(o.value=""),T(""),!((t==null?void 0:t.open)||(a==null?void 0:a.open))&&((s=t==null?void 0:t.showModal)==null||s.call(t),o==null||o.focus())}),(q=document.querySelector(".js-openShortcuts"))==null||q.addEventListener("click",()=>{var s;(s=a==null?void 0:a.showModal)==null||s.call(a)})}window.addEventListener("load",()=>{var t;for(let e of document.querySelectorAll(".js-clipboard"))new S(e);for(let e of document.querySelectorAll(".js-modal"))new k(e);for(let e of document.querySelectorAll(".js-tooltip"))new M(e);for(let e of document.querySelectorAll(".js-selectNav"))new H(e);for(let e of document.querySelectorAll(".js-carousel"))new y(e);for(let e of document.querySelectorAll(".js-toggleTheme"))e.addEventListener("click",()=>{K()});((t=document.querySelector(".js-gtmID"))==null?void 0:t.dataset.gtmid)&&window.dataLayer?_(function(){N()}):N(),I(),R(),J()});g.on("/","focus search",t=>{let e=Array.from(document.querySelectorAll(".js-searchFocus")).pop();e&&!window.navigator.userAgent.includes("Firefox")&&(t.preventDefault(),e.focus())});g.on("y","set canonical url",()=>{var e;let t=(e=document.querySelector(".js-canonicalURLPath"))==null?void 0:e.dataset.canonicalUrlPath;if(t&&t!==""){let n=window.location.hash;n&&(t+=n),window.history.replaceState(null,"",t)}});(function(){L({"gtm.start":new Date().getTime(),event:"gtm.js"})})();function N(){let t=new URLSearchParams(window.location.search),e=t.get("utm_source");if(e!=="gopls"&&e!=="godoc"&&e!=="pkggodev")return;let n=new URL(window.location.href);t.delete("utm_source"),n.search=t.toString(),window.history.replaceState(null,"",n.toString())}function K(){let t="dark",e=document.documentElement.getAttribute("data-theme");e==="dark"?t="light":e==="light"&&(t="auto");let n="";location.hostname.endsWith("go.dev")&&(n="domain=.go.dev;"),document.documentElement.setAttribute("data-theme",t),document.cookie=`prefers-color-scheme=${t};${n}path=/;max-age=31536000;`}
/*!
 * @license
 * Copyright 2019-2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2021 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
//# sourceMappingURL=frontend.js.map
