(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"55Gs":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),e=function(){return function(){}}(),u=o("pMnS"),i=o("oBZk"),r=o("ZZ/e"),a=o("gIcY"),b=o("Ip0R"),c=o("om8q"),s=o("WTWz"),p=o("Ado8"),d=function(){function n(n){this.newsService=n,this.categories=["business","entertainment","general","health","science","sports","technology"],this.news=[]}return n.prototype.ngOnInit=function(){this.segment.value=this.categories[0],this.loadNews(this.categories[0])},n.prototype.changeCategory=function(n){this.news=[],this.loadNews(n.detail.value)},n.prototype.loadNews=function(n,l){var o=this;this.newsService.getTopHeadlinesCategory(n).subscribe((function(n){var t;(t=o.news).push.apply(t,n.articles),l&&l.target.complete()}))},n.prototype.loadData=function(n){this.loadNews(this.segment.value,n)},n}(),g=t.yb({encapsulation:0,styles:[["ion-segment-button[_ngcontent-%COMP%]{background-color:var(--ion-color-dark)!important;color:#fff!important}.segment-button-checked[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}"]],data:{}});function m(n){return t.Qb(0,[(n()(),t.Ab(0,0,null,null,5,"ion-segment-button",[["mode","md"]],null,null,null,i.R,i.s)),t.zb(1,49152,null,0,r.lb,[t.j,t.p,t.F],{mode:[0,"mode"],value:[1,"value"]},null),(n()(),t.Ab(2,0,null,0,3,"ion-label",[["text-capitalize",""]],null,null,null,i.P,i.p)),t.zb(3,49152,null,0,r.M,[t.j,t.p,t.F],null,null),t.zb(4,16384,null,0,r.d,[t.p],null,null),(n()(),t.Pb(5,0,["",""]))],(function(n,l){n(l,1,0,"md",l.context.$implicit)}),(function(n,l){n(l,5,0,l.context.$implicit)}))}function h(n){return t.Qb(0,[t.Nb(402653184,1,{segment:0}),(n()(),t.Ab(1,0,null,null,12,"ion-header",[["no-border",""]],null,null,null,i.K,i.k)),t.zb(2,49152,null,0,r.A,[t.j,t.p,t.F],null,null),(n()(),t.Ab(3,0,null,0,4,"ion-toolbar",[["color","dark"]],null,null,null,i.Z,i.z)),t.zb(4,49152,null,0,r.Bb,[t.j,t.p,t.F],{color:[0,"color"]},null),(n()(),t.Ab(5,0,null,0,2,"ion-title",[],null,null,null,i.Y,i.y)),t.zb(6,49152,null,0,r.zb,[t.j,t.p,t.F],null,null),(n()(),t.Pb(-1,0,[" Headers "])),(n()(),t.Ab(8,0,null,0,5,"ion-segment",[["color","primary"],["mode","md"],["scrollable",""]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,l,o){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==t.Lb(n,11)._handleBlurEvent(o.target)&&e),"ionChange"===l&&(e=!1!==t.Lb(n,11)._handleChangeEvent(o.target)&&e),"ionChange"===l&&(e=!1!==u.changeCategory(o)&&e),e}),i.S,i.r)),t.Mb(5120,null,a.b,(function(n){return[n]}),[r.Jb]),t.zb(10,49152,[[1,4]],0,r.kb,[t.j,t.p,t.F],{color:[0,"color"],mode:[1,"mode"],scrollable:[2,"scrollable"]},null),t.zb(11,16384,null,0,r.Jb,[t.p],null,null),(n()(),t.pb(16777216,null,0,1,null,m)),t.zb(13,278528,null,0,b.h,[t.V,t.R,t.x],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Ab(14,0,null,null,7,"ion-content",[["color","dark"]],null,null,null,i.I,i.i)),t.zb(15,49152,null,0,r.t,[t.j,t.p,t.F],{color:[0,"color"]},null),(n()(),t.Ab(16,0,null,0,1,"app-news",[],null,null,null,c.b,c.a)),t.zb(17,114688,null,0,s.a,[],{news:[0,"news"]},null),(n()(),t.Ab(18,0,null,0,3,"ion-infinite-scroll",[["threshold","150px"]],null,[[null,"ionInfinite"]],(function(n,l,o){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(o)&&t),t}),i.O,i.n)),t.zb(19,49152,null,0,r.D,[t.j,t.p,t.F],{threshold:[0,"threshold"]},null),(n()(),t.Ab(20,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","crescent"],["loadingText","Loading data..."]],null,null,null,i.N,i.o)),t.zb(21,49152,null,0,r.E,[t.j,t.p,t.F],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(n,l){var o=l.component;n(l,4,0,"dark"),n(l,10,0,"primary","md",""),n(l,13,0,o.categories),n(l,15,0,"dark"),n(l,17,0,o.news),n(l,19,0,"150px"),n(l,21,0,"crescent","Loading data...")}),null)}function f(n){return t.Qb(0,[(n()(),t.Ab(0,0,null,null,1,"app-tab2",[],null,null,null,h,g)),t.zb(1,114688,null,0,d,[p.a],null,null)],(function(n,l){n(l,1,0)}),null)}var w=t.wb("app-tab2",d,f,{},{},[]),v=o("j1ZV"),z=o("ZYCi");o.d(l,"Tab2PageModuleNgFactory",(function(){return J}));var J=t.xb(e,[],(function(n){return t.Ib([t.Jb(512,t.m,t.ib,[[8,[u.a,w]],[3,t.m],t.D]),t.Jb(4608,b.k,b.j,[t.z,[2,b.r]]),t.Jb(4608,r.b,r.b,[t.F,t.g]),t.Jb(4608,r.Fb,r.Fb,[r.b,t.m,t.w]),t.Jb(4608,r.Ib,r.Ib,[r.b,t.m,t.w]),t.Jb(4608,a.d,a.d,[]),t.Jb(1073742336,b.b,b.b,[]),t.Jb(1073742336,r.Db,r.Db,[]),t.Jb(1073742336,a.c,a.c,[]),t.Jb(1073742336,a.a,a.a,[]),t.Jb(1073742336,v.a,v.a,[]),t.Jb(1073742336,z.o,z.o,[[2,z.t],[2,z.m]]),t.Jb(1073742336,e,e,[]),t.Jb(1024,z.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);