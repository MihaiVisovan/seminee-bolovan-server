var E=Object.defineProperty,z=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var R=(e,s,a)=>s in e?E(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,v=(e,s)=>{for(var a in s||(s={}))B.call(s,a)&&R(e,a,s[a]);if(x)for(var a of x(s))G.call(s,a)&&R(e,a,s[a]);return e},C=(e,s)=>z(e,F(s));import{m as k,a as H,o as c,c as d,b as l,n,r as p,d as h,p as w,e as L,f as V,F as y,g as b,h as S,t as f,i as N,j as I,w as M,k as j,l as W,q,s as U}from"./vendor.78f0539e.js";const K=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}};K();var m=(e,s)=>{const a=e.__vccOpts||e;for(const[i,r]of s)a[i]=r;return a};const Z={name:"Dropdown",data(){return{containerClass:"dropdown"}},watch:{showMenu(e,s){this.triggerIconAnimation(e)}},computed:C(v({},k(["showMenu"])),{menuAnimationClass(){return`${this.containerClass}__animation`},firstLineClass(){return`${this.containerClass}__first_line`},firstLineRotateClass(){return`${this.firstLineClass}__rotate`},firstLineRotateReversedClass(){return`${this.firstLineRotateClass}__reversed`},secondLineClass(){return`${this.containerClass}__second_line`},secondLineRotateClass(){return`${this.secondLineClass}__rotate`},secondLineRotateReversedClass(){return`${this.secondLineRotateClass}__reversed`}}),methods:C(v({},H(["setShowMenu"])),{triggerIconAnimation(e){const s=document.getElementById("menu-first-line"),a=document.getElementById("menu-second-line");e?(s.classList.add(this.firstLineRotateClass),a.classList.add(this.secondLineRotateClass),s.classList.remove(this.firstLineRotateReversedClass),a.classList.remove(this.secondLineRotateReversedClass)):(s.classList.add(this.firstLineRotateReversedClass),a.classList.add(this.secondLineRotateReversedClass),s.classList.remove(this.firstLineRotateClass),a.classList.remove(this.secondLineRotateClass))},toggleMenu(){this.triggerIconAnimation(),this.setShowMenu(!this.showMenu)}})};function J(e,s,a,i,r,t){return c(),d("div",{onClick:s[0]||(s[0]=(...o)=>t.toggleMenu&&t.toggleMenu(...o)),class:n(r.containerClass)},[l("div",{class:n(t.firstLineClass),id:"menu-first-line"},null,2),l("div",{class:n(t.secondLineClass),id:"menu-second-line"},null,2)],2)}var Q=m(Z,[["render",J],["__scopeId","data-v-7cd998cd"]]);const X={},Y={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30.239 30.239",style:{"enable-background":"new 0 0 30.239 30.239"},"xml:space":"preserve"},ee=l("path",{d:`M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735\r
		c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0\r
		c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z\r
		 M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0\r
		C21.517,9.026,21.517,14.63,18.073,18.074z`},null,-1),te=[ee];function se(e,s){return c(),d("svg",Y,te)}var D=m(X,[["render",se]]);const re={name:"SearchboxDesktop",components:{MagnifyingGlassIcon:D},data(){return{containerClass:"searchbox_desktop"}},computed:{searchIconClass(){return`${this.containerClass}__icon`}}},ae=e=>(w("data-v-b0c74e94"),e=e(),L(),e),ne=ae(()=>l("input",{type:"text",placeholder:"Ce cau\u021Bi ast\u0103zi?"},null,-1));function oe(e,s,a,i,r,t){const o=p("MagnifyingGlassIcon");return c(),d("div",{class:n(r.containerClass)},[ne,h(o,{class:n(t.searchIconClass)},null,8,["class"])],2)}var ie=m(re,[["render",oe],["__scopeId","data-v-b0c74e94"]]);const ce={},le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"40",height:"40",viewBox:"0 0 256 256","xml:space":"preserve"},de=V('<desc>Created with Fabric.js 1.7.22</desc><defs></defs><g transform="translate(128 128) scale(0.72 0.72)" style=""><g style="stroke:none;stroke-width:0;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:none;fill-rule:nonzero;opacity:1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><path d="M 89.26 25.686 c -0.707 -0.946 -1.789 -1.488 -2.97 -1.488 H 74.974 H 30.6 l -0.686 -2.642 c -0.595 -2.291 -2.664 -3.892 -5.031 -3.892 h -7.565 c -0.552 0 -1 0.448 -1 1 c 0 0.552 0.448 1 1 1 h 7.565 c 1.457 0 2.729 0.984 3.096 2.394 l 9.095 35.022 c 0.114 0.441 0.512 0.749 0.968 0.749 h 42.52 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 38.814 l -1.857 -7.149 h 43.176 c 2.284 0 4.332 -1.53 4.979 -3.72 l 4.732 -16.006 C 90.18 27.823 89.966 26.631 89.26 25.686 z M 87.927 28.388 l -4.732 16.006 c -0.398 1.347 -1.657 2.287 -3.061 2.287 H 36.438 l -5.319 -20.483 h 43.855 H 86.29 c 0.544 0 1.042 0.25 1.367 0.685 C 87.983 27.318 88.081 27.867 87.927 28.388 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 45.396 72.335 c -3.167 0 -5.743 -2.576 -5.743 -5.743 c 0 -3.166 2.576 -5.742 5.743 -5.742 c 3.166 0 5.743 2.576 5.743 5.742 C 51.139 69.759 48.563 72.335 45.396 72.335 z M 45.396 62.85 c -2.064 0 -3.743 1.679 -3.743 3.742 c 0 2.064 1.679 3.743 3.743 3.743 s 3.743 -1.679 3.743 -3.743 C 49.139 64.529 47.46 62.85 45.396 62.85 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 72.113 72.335 c -3.166 0 -5.742 -2.576 -5.742 -5.743 c 0 -3.166 2.576 -5.742 5.742 -5.742 c 3.167 0 5.743 2.576 5.743 5.742 C 77.856 69.759 75.28 72.335 72.113 72.335 z M 72.113 62.85 c -2.063 0 -3.742 1.679 -3.742 3.742 c 0 2.064 1.679 3.743 3.742 3.743 c 2.064 0 3.743 -1.679 3.743 -3.743 C 75.856 64.529 74.177 62.85 72.113 62.85 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 20.936 32.205 H 1 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 S 21.488 32.205 20.936 32.205 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 21.972 40.443 H 2.037 c -0.552 0 -1 -0.448 -1 -1 c 0 -0.552 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.448 1 1 C 22.972 39.995 22.524 40.443 21.972 40.443 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path><path d="M 23.228 48.681 H 3.292 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 19.936 c 0.552 0 1 0.447 1 1 S 23.78 48.681 23.228 48.681 z" style="stroke:black;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;fill:rgb(0, 0, 0);fill-rule:nonzero;opacity:1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"></path></g></g>',3),_e=[de];function ue(e,s){return c(),d("svg",le,_e)}var pe=m(ce,[["render",ue]]);const me={name:"Header",components:{DropdownIcon:Q,SearchboxDesktop:ie,CartIcon:pe},data(){return{containerClass:"header"}},computed:{brandNameClass(){return`${this.containerClass}__name`},searchboxClass(){return`${this.containerClass}__searchbox`},cartClass(){return`${this.containerClass}__cart`},cartAnimationClass(){return`${this.cartClass}__animation`},cartAnimationReversedClass(){return`${this.cartAnimationClass}__reversed`}},methods:{addCartAnimation(){const e=document.getElementById("cart");e.classList.add(this.cartAnimationClass),setTimeout(()=>{e.classList.add(this.cartAnimationReversedClass),this.$router.push({name:"Cart"})},500),setTimeout(()=>{e.classList.remove(this.cartAnimationClass),e.classList.remove(this.cartAnimationReversedClass)},1e3)},goHome(){this.$router.push({name:"Categories"})}}};function he(e,s,a,i,r,t){const o=p("DropdownIcon"),_=p("SearchboxDesktop"),u=p("CartIcon");return c(),d("div",{class:n(r.containerClass)},[h(o),l("div",{onClick:s[0]||(s[0]=(...g)=>t.goHome&&t.goHome(...g)),class:n(t.brandNameClass)},"\u0218EMINEE BOLOVAN",2),l("div",{class:n(t.searchboxClass)},[h(_)],2),l("div",{onClick:s[1]||(s[1]=(...g)=>t.addCartAnimation&&t.addCartAnimation(...g)),class:n(t.cartClass),id:"cart"},[h(u)],2)],2)}var ge=m(me,[["render",he],["__scopeId","data-v-6f149e8b"]]);const ve={name:"Menu",data(){return{containerClass:"menu",showMenu:!0}},computed:C(v({},k(["categories","showMenu"])),{categoriesClass(){return`${this.containerClass}__categories`},categoryClass(){return`${this.categoriesClass}__category`}}),methods:C(v({},H(["setShowMenu"])),{goToProductsPage(e){const s=e.shortTitle.toLowerCase().replaceAll(" ","-");this.$router.push({name:"Products",params:{categoryId:s}}),this.setShowMenu(!1)}})},Ce=["onClick"];function fe(e,s,a,i,r,t){return r.showMenu?(c(),d("div",{key:0,class:n(r.containerClass)},[l("div",{class:n(t.categoriesClass)},[(c(!0),d(y,null,b(e.categories,(o,_)=>(c(),d("div",{onClick:u=>t.goToProductsPage(o),key:_,class:n(t.categoryClass)},f(o.longTitle),11,Ce))),128))],2)],2)):S("",!0)}var ye=m(ve,[["render",fe],["__scopeId","data-v-83ef2688"]]);const be={name:"SearchboxMobile",data(){return{containerClass:"searchbox_mobile"}},components:{MagnifyingGlassIcon:D},computed:{searchIconClass(){return`${this.containerClass}__icon`}}},ke=e=>(w("data-v-75c6923c"),e=e(),L(),e),we=ke(()=>l("input",{type:"text",placeholder:"Ce cau\u021Bi ast\u0103zi?"},null,-1));function Le(e,s,a,i,r,t){const o=p("MagnifyingGlassIcon");return c(),d("div",{class:n(r.containerClass)},[we,h(o,{class:n(t.searchIconClass)},null,8,["class"])],2)}var $e=m(be,[["render",Le],["__scopeId","data-v-75c6923c"]]);const Ae={name:"Navbar",data(){return{containerClass:"navbar"}},components:{SearchboxMobile:$e},computed:C(v({},k(["categories"])),{categoriesClass(){return`${this.containerClass}__categories`},categoryClass(){return`${this.categoriesClass}__category`},categoryNameClass(){return`${this.categoryClass}__name`}}),methods:{goToProductsPage(e){const s=e.shortTitle.toLowerCase().replaceAll(" ","-");this.$router.push({name:"Products",params:{categoryId:s}})}}},xe=["onClick"];function Re(e,s,a,i,r,t){const o=p("SearchboxMobile");return c(),d("div",{class:n(r.containerClass)},[h(o),l("div",{class:n(t.categoriesClass)},[(c(!0),d(y,null,b(e.categories,(_,u)=>(c(),d("div",{onClick:g=>t.goToProductsPage(_),key:u},[l("div",{class:n(t.categoryClass)},[l("div",{class:n(t.categoryNameClass)},f(_.shortTitle),3)],2)],8,xe))),128))],2)],2)}var Ie=m(Ae,[["render",Re],["__scopeId","data-v-6672af2c"]]),Me="/assets/fireplace.b45495a3.mp4";const Te={name:"Fireplace",data(){return{containerClass:"fireplace"}}},He=e=>(w("data-v-02873410"),e=e(),L(),e),Se=He(()=>l("video",{autoplay:"",muted:"",loop:""},[l("source",{src:Me,type:"video/mp4"})],-1)),Ne=[Se];function De(e,s,a,i,r,t){return c(),d("div",{class:n(r.containerClass)},Ne,2)}var Oe=m(Te,[["render",De],["__scopeId","data-v-02873410"]]);const Pe={name:"Footer",data(){return{containerClass:"footer",infoList:[{title:"CONTACT",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]},{title:"SUPORT CLIEN\u021AI",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]},{title:"COMENZI \u0218I LIVRARE",details:[{key:"Adresa: ",value:"Alba Iulia, B-dul Tudor Vladimirescu, nr. 66"},{key:"Tel: ",value:"0744.792.373, 0747.297.127"},{key:"Fax: ",value:"0358.110.556"},{key:"Email: ",value:"semineebolovan@gmail.com"}]}]}},computed:{infoClass(){return`${this.containerClass}__info`},titleClass(){return`${this.infoClass}__title`},detailsClass(){return`${this.infoClass}__details`},detailsTitleClass(){return`${this.detailsClass}__title`}}};function Ee(e,s,a,i,r,t){return c(),d("div",{class:n(r.containerClass)},[(c(!0),d(y,null,b(r.infoList,(o,_)=>(c(),d("div",{class:n(t.infoClass),key:_},[l("div",{class:n(t.titleClass)},f(o.title),3),(c(!0),d(y,null,b(o.details,(u,g)=>(c(),d("div",{class:n(t.detailsClass),key:g},[l("span",{class:n(t.detailsTitleClass)},f(u.key),3),l("span",null,f(u.value),1)],2))),128))],2))),128))],2)}var ze=m(Pe,[["render",Ee],["__scopeId","data-v-3e2d4faa"]]);const Fe={name:"App",components:{Header:ge,Navbar:Ie,Footer:ze,Fireplace:Oe,DropdownMenu:ye},data(){return{containerClass:"app"}},computed:C(v({},k(["showMenu"])),{contentClass(){return`${this.containerClass}__content`}})};function Be(e,s,a,i,r,t){const o=p("Header"),_=p("DropdownMenu"),u=p("Navbar"),g=p("Fireplace"),O=p("router-view"),P=p("Footer");return c(),d("div",{class:n(r.containerClass)},[h(o),e.showMenu?(c(),N(_,{key:0})):S("",!0),h(u),h(g),h(O,{class:n(t.contentClass)},null,8,["class"]),h(P)],2)}var Ge=m(Fe,[["render",Be]]);const Ve="modulepreload",T={},je="/",$=function(s,a){return!a||a.length===0?s():Promise.all(a.map(i=>{if(i=`${je}${i}`,i in T)return;T[i]=!0;const r=i.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${t}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Ve,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((_,u)=>{o.addEventListener("load",_),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>s())};const We={name:"Card",data(){return{containerClass:"card"}},computed:{imageClass(){return`${this.containerClass}__image`},detailsClass(){return`${this.containerClass}__details`}}};function qe(e,s,a,i,r,t){return c(),d("div",{class:n(r.containerClass)},[l("div",{class:n(t.imageClass)},[I(e.$slots,"card-image",{},void 0,!0)],2),l("div",{class:n(t.detailsClass)},[I(e.$slots,"card-details",{},void 0,!0)],2)],2)}var Ue=m(We,[["render",qe],["__scopeId","data-v-74d607b6"]]);const Ke={name:"Categories",components:{Card:Ue},data(){return{containerClass:"categories"}},computed:C(v({},k(["categories"])),{gridClass(){return`${this.containerClass}__grid`},imageWrapperClass(){return`${this.gridClass}__image_wrapper`},imageClass(){return`${this.gridClass}__image`},detailsClass(){return`${this.gridClass}__details`}}),methods:{goToProductsPage(e){const s=e.shortTitle.toLowerCase().replaceAll(" ","-");this.$router.push({name:"Products",params:{categoryId:s}})}}},Ze=["src"];function Je(e,s,a,i,r,t){const o=p("Card");return c(),d("div",{class:n(r.containerClass)},[l("div",{class:n(t.gridClass)},[(c(!0),d(y,null,b(e.categories,(_,u)=>(c(),N(o,{onClick:g=>t.goToProductsPage(_),key:u},{"card-image":M(()=>[l("div",{class:n(t.imageWrapperClass)},[l("img",{src:_.image,class:n(t.imageClass)},null,10,Ze)],2)]),"card-details":M(()=>[l("div",{class:n(t.detailsClass)},f(_.longTitle),3)]),_:2},1032,["onClick"]))),128))],2)],2)}var Qe=m(Ke,[["render",Je],["__scopeId","data-v-15b0362c"]]);const Xe=()=>$(()=>import("./Products.4ebfa8fc.js"),["assets/Products.4ebfa8fc.js","assets/Products.66891c12.css","assets/vendor.78f0539e.js"]),Ye=()=>$(()=>import("./Product.f18c1306.js"),["assets/Product.f18c1306.js","assets/vendor.78f0539e.js"]),et=()=>$(()=>import("./Cart.19e1949d.js"),["assets/Cart.19e1949d.js","assets/vendor.78f0539e.js"]),tt=[{path:"/",component:Qe,name:"Categories"},{path:"/:categoryId",component:Xe,name:"Products"},{path:"/:categoryId/:productId",component:Ye,name:"Product"},{path:"/cart",component:et,name:"Cart"}],st=j({history:W(),routes:tt});var rt=[{shortTitle:"Focare",longTitle:"Focare \u0219emineu",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_H_anim_0.png",id:"category0"},{shortTitle:"Termocamine",longTitle:"Termocamine",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",id:"category1"},{shortTitle:"Burlane",longTitle:"Burlane din o\u021Bel",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",id:"category2"},{shortTitle:"Bio\u0219eminee",longTitle:"Bio\u0219eminee",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/grill_gall01_alpha.png",id:"category3"},{shortTitle:"Elemente distribu\u021Bie",longTitle:"Elemente distribu\u021Bie aer",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",id:"category4"},{shortTitle:"Grile",longTitle:"Grile aer",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/SL_56x56x9_perspective_.png",id:"category5"},{shortTitle:"Sobe",longTitle:"Sobe pe lemne",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/lupo_m_7-copy.png",id:"category6"},{shortTitle:"Acumulatoare",longTitle:"Acumulatoare de c\u0103ldur\u0103",image:"https://semineebolovan.ro/wp-content/uploads/2018/01/WCPW02_1.png",id:"category7"}],at=[{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"},id:"product0"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"},id:"product1"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"},id:"product2"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"},id:"product3"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",details:{title:"Albero AL12 R.H-D",price:10532,currency:"RON"},id:"product4"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",details:{title:"Albero AL15 R.H-D",price:10532,currency:"RON"},id:"product5"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 L.H-D",price:7300,currency:"RON"},id:"product6"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",details:{title:"Albero AL13 R.H-D",price:7300,currency:"RON"},id:"product7"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-D",price:7300,currency:"RON"},id:"product8"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png",details:{title:"Albero AL19 R.H-D",price:10532,currency:"RON"},id:"product9"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png",details:{title:"Albero AL25 R.G-D",price:1032,currency:"RON"},id:"product10"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png",details:{title:"Marino AL19 R.H-D",price:10532,currency:"RON"},id:"product11"},{image:"https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg",details:{title:"Toro AL19 R.H-D",price:10532,currency:"RON"},id:"product12"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png",details:{title:"Tero AL19 R.H-",price:10.532,currency:"RON"},id:"product13"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png",details:{title:"Albero AL19 R.H-",price:11500,currency:"RON"},id:"product14"},{image:"http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png",details:{title:"Albero AL125 R.H-D",price:12532,currency:"RON"},id:"product15"}],nt=q({state:{showMenu:!1,categories:rt,products:at},mutations:{setShowMenu(e,s){e.showMenu=s}}});const A=U(Ge);A.use(nt);A.use(st);A.mount("#app");export{Ue as C,m as _};
