var O=Object.defineProperty,W=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var $=(a,s,l)=>s in a?O(a,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[s]=l,o=(a,s)=>{for(var l in s||(s={}))I.call(s,l)&&$(a,l,s[l]);if(w)for(var l of w(s))B.call(s,l)&&$(a,l,s[l]);return a},_=(a,s)=>W(a,P(s));import{o as i,c as p,b as t,m as g,a as b,r as m,F,j as y,n as r,d as v,t as h,w as k,l as x,k as T,T as S,u as j,v as L}from"./vendor.bfd18af9.js";import{C as N}from"./Card.87ff2a06.js";import{_ as f}from"./index.41f7a43d.js";const z={},M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"12",height:"12",viewBox:"0 0 256 256","xml:space":"preserve"},R=t("desc",null,"Created with Fabric.js 1.7.22",-1),A=t("defs",null,null,-1),E=t("g",{transform:"translate(128 128) scale(0.72 0.72)",style:{}},[t("g",{style:{stroke:"black","stroke-width":"2","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10",fill:"none","fill-rule":"nonzero",opacity:"1"},transform:"translate(-175.05 -175.05000000000004) scale(3.89 3.89)"},[t("path",{d:"M 90 24.25 c 0 -0.896 -0.342 -1.792 -1.025 -2.475 c -1.366 -1.367 -3.583 -1.367 -4.949 0 L 45 60.8 L 5.975 21.775 c -1.367 -1.367 -3.583 -1.367 -4.95 0 c -1.366 1.367 -1.366 3.583 0 4.95 l 41.5 41.5 c 1.366 1.367 3.583 1.367 4.949 0 l 41.5 -41.5 C 89.658 26.042 90 25.146 90 24.25 z",style:{stroke:"black","stroke-width":"2","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10",fill:"rgb(0, 0, 0)","fill-rule":"nonzero",opacity:"1"},transform:" matrix(1 0 0 1 0 0) ","stroke-linecap":"round"})])],-1),V=[R,A,E];function Z(a,s){return i(),p("svg",M,V)}var D=f(z,[["render",Z]]);const G={},q={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24"},H=t("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"5px",stroke:"url(#fireplaceGradient)",fill:"none",d:"M22.9 3.7l-15.2 16.6-6.6-7.1"},null,-1),J=[H];function K(a,s){return i(),p("svg",q,J)}var Q=f(G,[["render",K]]);const U={name:"FilterOptions",components:{Checkbox:Q},data(){return{containerClass:"filter_options"}},props:{filter:Object},computed:_(o({},g(["filters"])),{optionsClass(){return`${this.containerClass}__options`},optionClass(){return`${this.optionsClass}__option`},optionSelectedClass(){return`${this.optionClass}__selected`},checkboxWrapperClass(){return`${this.optionClass}__checkbox`},checkboxContentClass(){return`${this.checkboxWrapperClass}__content`},coverClass(){return`${this.checkboxWrapperClass}__cover`},coverSelectedClass(){return`${this.coverClass}__selected`},optionNameClass(){return`${this.optionClass}__name`}}),methods:_(o({},b(["setFilters"])),{toggleOption(a){const s=this.filter.options.map(n=>n.id===a?_(o({},n),{selected:!n.selected}):n);o({},this.filter);const l=this.filters.map(n=>n.id===this.filter.id?_(o({},n),{options:s}):n);this.setFilters(l)}})},X=["onClick"];function Y(a,s,l,n,u,e){const C=m("Checkbox");return i(),p("div",{class:r(u.containerClass)},[t("ul",{class:r(e.optionsClass)},[(i(!0),p(F,null,y(l.filter.options,d=>(i(),p("li",{onClick:c=>e.toggleOption(d.id),class:r([e.optionClass,d.selected?e.optionSelectedClass:""])},[t("div",{class:r(e.checkboxWrapperClass)},[t("div",{class:r(e.checkboxContentClass)},[v(C)],2),t("div",{class:r([e.coverClass,d.selected?e.coverSelectedClass:""])},null,2)],2),t("span",{class:r(e.optionNameClass)},h(d.name),3)],10,X))),256))],2)],2)}var ee=f(U,[["render",Y],["__scopeId","data-v-a6205f7c"]]);const se={name:"Filter",components:{FilterIcon:D,FilterOptions:ee},data(){return{containerClass:"filter",showOptions:!1}},props:{filter:Object},computed:_(o({},g(["filters"])),{collapsedFilterClass(){return`${this.containerClass}__collapsed`},expandedFilterClass(){return this.filter.expanded?`${this.containerClass}__expanded`:""},nameClass(){return`${this.collapsedFilterClass}__name`},iconClass(){return`${this.collapsedFilterClass}__icon`},iconRotatedClass(){return this.filter.expanded?`${this.iconClass}__rotated`:""}}),methods:_(o({},b(["setFilters"])),{toggleOptions(){const a=this.filters.map(s=>s.id===this.filter.id?_(o({},s),{expanded:!s.expanded}):s);this.setFilters(a)}})};function te(a,s,l,n,u,e){const C=m("FilterIcon"),d=m("FilterOptions");return i(),p("div",{class:r(u.containerClass)},[t("div",{class:r([e.collapsedFilterClass,e.expandedFilterClass]),onClick:s[0]||(s[0]=(...c)=>e.toggleOptions&&e.toggleOptions(...c))},[t("div",{class:r(e.nameClass)},h(l.filter.name),3),t("div",{class:r([e.iconClass,e.iconRotatedClass])},[v(C)],2)],2),v(S,{name:"slide"},{default:k(()=>[l.filter.expanded?(i(),x(d,{key:0,filter:l.filter},null,8,["filter"])):T("",!0)]),_:1})],2)}var re=f(se,[["render",te],["__scopeId","data-v-2d3cee1a"]]);const ae={name:"FilterPanel",components:{Filter:re},data(){return{containerClass:"filter_panel"}},computed:o({},g(["filters"]))};function le(a,s,l,n,u,e){const C=m("Filter");return i(),p("div",{class:r(u.containerClass)},[(i(!0),p(F,null,y(a.filters,(d,c)=>(i(),x(C,{key:c,filter:d},null,8,["filter"]))),128))],2)}var ie=f(ae,[["render",le],["__scopeId","data-v-34f3c39b"]]);const ne={name:"Products",components:{Card:N,FilterPanel:ie},data(){return{containerClass:"products"}},created(){const a=this.$route.params.categoryId;this.setCategory(a)},computed:_(o({},g(["products","category"])),{categoryClass(){return`${this.containerClass}__category`},categoryLineClass(){return`${this.categoryClass}__line`},categoryTitleClass(){return`${this.categoryClass}__title`},contentClass(){return`${this.containerClass}__content`},sortFilterWrapperClass(){return`${this.contentClass}__sort_filter`},sortFilterButtonClass(){return`${this.sortFilterWrapperClass}__button`},filtersClass(){return`${this.contentClass}__filters`},gridClass(){return`${this.contentClass}__grid`},imageWrapperClass(){return`${this.gridClass}__image_wrapper`},imageClass(){return`${this.gridClass}__image`},detailsClass(){return`${this.gridClass}__details`},titleClass(){return`${this.detailsClass}__title`},priceWrapperClass(){return`${this.detailsClass}__price`},priceCurrencyClass(){return`${this.priceWrapperClass}__currency`}}),methods:_(o({},j(["setCategory"])),{goToProduct(a){this.$router.push({name:"Product",params:{productId:a}})},renderFilters(){this.$refs.filters.style="display: block"},hideFilters(){this.$refs.filters.style="display: none"}})},ce=["src"];function oe(a,s,l,n,u,e){const C=m("FilterPanel"),d=m("Card");return i(),p("div",{class:r(u.containerClass)},[t("div",{class:r(e.categoryClass)},[t("div",{class:r(e.categoryTitleClass)},h(a.category.longTitle),3)],2),t("div",{class:r(e.contentClass)},[t("div",{class:r(e.sortFilterWrapperClass)},[t("div",{onClick:s[0]||(s[0]=c=>e.renderFilters()),class:r(e.sortFilterButtonClass)},"FILTREAZ\u0102",2),t("div",{class:r(e.sortFilterButtonClass)},"SORTEAZ\u0102",2)],2),t("div",{class:r(e.filtersClass),ref:"filters",onClick:s[1]||(s[1]=L(c=>e.hideFilters(),["prevent"]))},[v(C)],2),t("div",{class:r(e.gridClass)},[(i(!0),p(F,null,y(a.products,c=>(i(),x(d,{onClick:de=>e.goToProduct(c.id)},{"card-image":k(()=>[t("div",{class:r(e.imageWrapperClass)},[t("img",{class:r(e.imageClass),src:c.image},null,10,ce)],2)]),"card-details":k(()=>[t("div",{class:r(e.detailsClass)},[t("div",{class:r(e.titleClass)},h(c.title),3),t("div",{class:r(e.priceWrapperClass)},[t("span",null,h(c.price),1),t("span",{class:r(e.priceCurrencyClass)},h(c.currency),3)],2)],2)]),_:2},1032,["onClick"]))),256))],2)],2)],2)}var he=f(ne,[["render",oe],["__scopeId","data-v-ab1c9c70"]]);export{he as default};