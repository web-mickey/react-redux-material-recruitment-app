(this["webpackJsonpreact-redux-material-recruitment"]=this["webpackJsonpreact-redux-material-recruitment"]||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var a=n(73),c=n(140),i=n(0),r=n.n(i),s=n(10),o=n.n(s),j=n(16),l=n(24),b=n(12),u=n(128),g=n(98),m=n(137),O=n(141),h=n(135),d=n(142),p=n(131),x=n(132),f=n(133),y=n(134),v=n(2),I=Object(h.a)((function(){return Object(d.a)({cardImage:{height:"260px"}})})),w=function(e){var t=e.image,n=e.page,a=e.showImagesState,c=I(),i=Object(b.f)();return Object(v.jsx)(u.a,{item:!0,xs:12,md:6,lg:4,children:Object(v.jsx)(p.a,{children:Object(v.jsxs)(x.a,{onClick:function(){return i.push("/image/".concat(t.id))},children:[Object(v.jsx)(f.a,{className:c.cardImage,component:"img",src:a?"https://picsum.photos/id/".concat(t.id,"/1000/300"):"https://globalhygiene.pl/wp-content/uploads/2018/07/blank-product-600x600.jpg",title:"Contemplative Reptile"},n),Object(v.jsxs)(y.a,{children:[Object(v.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.author}),Object(v.jsxs)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:["Original width: ",t.width," px ",Object(v.jsx)("br",{}),"Original height: ",t.height," px"]})]})]})})},t.id)},P=n(136),S=function(e){return{type:"SET_IMAGES",payload:{imagesArray:e}}},E=function(e){return{type:"SET_PAGE_NUMBER",payload:{pageNumber:e}}},k=Object(h.a)((function(e){return Object(d.a)({topBar:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)},appName:{cursor:"pointer"}})})),C=function(){var e=k(),t=Object(b.f)(),n=Object(j.b)(),a=Object(j.c)((function(e){return e.images.showImages}));return Object(v.jsx)(u.a,{item:!0,container:!0,justify:"center",className:e.topBar,children:Object(v.jsxs)(u.a,{item:!0,container:!0,xs:10,children:[Object(v.jsx)(u.a,{item:!0,xs:4,children:Object(v.jsx)(g.a,{className:e.appName,variant:"h6",onClick:function(){return t.replace("/")},children:"Appname"})}),Object(v.jsx)(u.a,{container:!0,item:!0,xs:8,justify:"flex-end",children:Object(v.jsx)(u.a,{item:!0,children:Object(v.jsxs)(P.a,{color:a?"secondary":"primary",variant:"contained",onClick:function(){var e;n({type:"SHOW_IMAGES",payload:{show:e}})},children:[a?"Disable":"Enable"," images"]})})})]})})},N=n(33),A=function(e){var t=e.imagesPerPage,n=e.page,a=Object(i.useState)(!0),c=Object(N.a)(a,2),r=c[0],s=c[1],o=Object(i.useState)(null),l=Object(N.a)(o,2),b=l[0],u=l[1],g=Object(j.b)();return Object(i.useEffect)((function(){fetch("https://picsum.photos/v2/list?page=".concat(n+1,"&limit=").concat(t)).then((function(e){return e.json()})).then((function(e){g(S(e)),u(null)})).catch((function(){g(S(null)),u("There was an error loading data.")})).finally((function(){s(!1)}))}),[n,t,g]),{isLoading:r,loadingError:b}},B=Object(h.a)((function(e){return Object(d.a)({mainContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4)}})})),T=function(){var e=B(),t=Object(j.b)(),n=Object(j.c)((function(e){return e.images.imagesArray})),a=Object(j.c)((function(e){return e.images.showImages})),c=Object(j.c)((function(e){return e.images.pageNumber})),i=Object(j.c)((function(e){return e.images.imagesPerPage})),r=A({imagesPerPage:i,page:c}),s=r.isLoading,o=r.loadingError;return Object(v.jsxs)(u.a,{container:!0,className:e.mainContainer,children:[Object(v.jsx)(C,{}),Object(v.jsx)(u.a,{item:!0,container:!0,justify:"center",children:Object(v.jsx)(u.a,{container:!0,item:!0,xs:10,children:Object(v.jsx)(u.a,{container:!0,justify:"center",children:Object(v.jsx)(u.a,{item:!0,children:Object(v.jsxs)(u.a,{container:!0,justify:"center",spacing:6,children:[(null===n||void 0===n?void 0:n.length)&&!s?Object(v.jsx)(v.Fragment,{children:n.map((function(e){return Object(v.jsx)(w,{image:e,page:c,showImagesState:a})}))}):Object(v.jsx)(u.a,{container:!0,justify:"center",spacing:10,children:Object(v.jsx)(u.a,{item:!0,children:o?Object(v.jsx)(g.a,{variant:"h6",color:"error",children:o}):Object(v.jsx)(m.a,{})})}),o?null:Object(v.jsx)(O.a,{component:"div",count:-1,page:c,onChangePage:function(e,n){t(E(n))},rowsPerPage:i,onChangeRowsPerPage:function(e){t(function(e){return{type:"SET_IMAGES_PER_PAGE",payload:{imagesPerPage:e}}}(parseInt(e.target.value,10))),t(E(0))},rowsPerPageOptions:[6,12,21,42],labelRowsPerPage:"Per page"})]})})})})})]})},_=n(28),G=n(139),M=n(70),R=n.n(M),F=Object(h.a)((function(e){return Object(d.a)({goBackIconContainer:{marginTop:e.spacing(3)},goBackIcon:{marginRight:e.spacing(1)}})})),L=function(){var e=F(),t=Object(b.f)();return Object(v.jsx)(u.a,{container:!0,item:!0,xs:10,justify:"flex-end",className:e.goBackIconContainer,children:Object(v.jsxs)(P.a,{color:"primary",variant:"contained",onClick:function(){return t.replace("/")},children:[Object(v.jsx)(R.a,{className:e.goBackIcon}),"Home"]})})},D=n(138),H=function(e){var t=e.imageData;return Object(v.jsx)(u.a,{container:!0,alignItems:"center",children:Object(v.jsxs)(u.a,{item:!0,xs:10,children:[Object(v.jsxs)(g.a,{variant:"h5",children:["Author: ",t.author]}),Object(v.jsxs)(g.a,{variant:"body1",children:["Original width: ",t.width," px"]}),Object(v.jsxs)(g.a,{variant:"body1",children:["Original height: ",t.height," px"]}),Object(v.jsxs)(g.a,{variant:"body2",children:["Link:"," ",Object(v.jsx)(D.a,{target:"blank",href:t.url,children:t.url})]})]})})},J=function(e){var t=e.loadingError,n=e.imageId,a=Object(b.f)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{container:!0,item:!0,justify:"center",children:Object(v.jsx)(g.a,{variant:"h6",color:"error",children:t})}),Object(v.jsxs)(u.a,{container:!0,item:!0,justify:"center",spacing:2,children:[Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(P.a,{variant:"contained",onClick:function(){return a.replace("/")},children:"Homepage"})}),Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(P.a,{color:"primary",variant:"contained",onClick:function(){return a.push("/image/".concat(n<0?0:parseInt(n)+1))},children:"Next image"})})]})]})},U=n(71),W=n.n(U),q=n(72),z=n.n(q),K=function(e){var t=e.type,n=e.url,a=Object(b.f)();return Object(v.jsx)(P.a,{onClick:function(){return a.push(n)},children:"prev"===t?Object(v.jsx)(W.a,{}):Object(v.jsx)(z.a,{})})},Q=Object(h.a)((function(e){return Object(d.a)({navigationIconsMobileContainer:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}})})),V=function(e){var t=e.imageId,n=Q();return Object(v.jsxs)(u.a,{container:!0,item:!0,className:n.navigationIconsMobileContainer,children:[Object(v.jsx)(u.a,{item:!0,xs:6,children:Object(v.jsx)(K,{type:"prev",url:"/image/".concat(parseInt(t)-1)})}),Object(v.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"flex-end",children:Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(K,{type:"next",url:"/image/".concat(parseInt(t)+1)})})})]})},X=function(e){var t=e.imageId,n=Object(i.useState)(null),a=Object(N.a)(n,2),c=a[0],r=a[1],s=Object(i.useState)(!0),o=Object(N.a)(s,2),l=o[0],b=o[1],u=Object(i.useState)(null),g=Object(N.a)(u,2),m=g[0],O=g[1],h=Object(j.c)((function(e){return e.images.imagesArray}));Object(i.useEffect)((function(){var e=h.find((function(e){return e.id===t}));b(!0),e?(r(e),O(null),b(!1)):d()}),[t,h]);var d=function(){fetch("https://picsum.photos/id/".concat(t,"/info")).then((function(e){return e.json()})).then((function(e){O(null),r(e)})).catch((function(){O("There was problem fetching data or there is no image with that id. Try again."),r(null)})).finally((function(){b(!1)}))};return{imageData:c,isLoading:l,loadingError:m}},Y=Object(h.a)((function(e){var t;return Object(d.a)({mainContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},image:(t={width:"100%",height:"700px"},Object(_.a)(t,e.breakpoints.down("lg"),{height:"550px"}),Object(_.a)(t,e.breakpoints.down("md"),{height:"400px"}),Object(_.a)(t,e.breakpoints.down("xs"),{height:"200px"}),Object(_.a)(t,"marginBottom",e.spacing(2)),Object(_.a)(t,"boxShadow","5px 5px 15px -8px #000000"),t)})})),Z=function(){var e=Y(),t=Object(b.g)(),n=Object(G.a)("(max-width:600px)"),a=t.id,c=X({imageId:a}),i=c.imageData,r=c.isLoading,s=c.loadingError,o=Object(j.c)((function(e){return e.images.showImages}));return Object(v.jsxs)(u.a,{container:!0,className:e.mainContainer,children:[Object(v.jsx)(C,{}),Object(v.jsx)(u.a,{container:!0,justify:"center",children:Object(v.jsx)(u.a,{container:!0,item:!0,sm:10,children:i&&!r?Object(v.jsx)(u.a,{container:!0,children:Object(v.jsxs)(u.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[n?null:Object(v.jsx)(u.a,{container:!0,item:!0,xs:1,justify:"center",children:Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(K,{type:"prev",url:"/image/".concat(parseInt(a)-1)})})}),Object(v.jsxs)(u.a,{item:!0,xs:10,children:[Object(v.jsx)("img",{src:o?"https://picsum.photos/id/".concat(a,"/1400/800"):"https://globalhygiene.pl/wp-content/uploads/2018/07/blank-product-600x600.jpg",alt:a,className:e.image}),n?Object(v.jsx)(V,{imageId:a}):null,Object(v.jsx)(H,{imageData:i})]}),n?null:Object(v.jsx)(u.a,{container:!0,item:!0,xs:1,justify:"center",children:Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(K,{type:"next",url:"/image/".concat(parseInt(a)+1)})})}),Object(v.jsx)(L,{})]})}):Object(v.jsx)(u.a,{container:!0,direction:"column",spacing:2,children:s?Object(v.jsx)(J,{loadingError:s,imageId:a}):Object(v.jsx)(m.a,{})})})})]})};function $(){var e=ee(),t=Object(b.f)();return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(u.a,{container:!0,justify:"center",alignItems:"center",className:e.container,direction:"column",spacing:2,children:[Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(g.a,{variant:"h4",children:"404 | This page could not be found."})}),Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(P.a,{color:"primary",variant:"contained",onClick:function(){return t.replace("/")},children:"Go back to main page"})})]})})}var ee=Object(h.a)((function(e){return Object(d.a)({container:{height:"100vh",padding:e.spacing(2)}})})),te=function(){return Object(v.jsx)(l.a,{children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",children:Object(v.jsx)(T,{})}),Object(v.jsx)(b.a,{exact:!0,path:"/image/:id",children:Object(v.jsx)(Z,{})}),Object(v.jsx)(b.a,{children:Object(v.jsx)($,{})})]})})},ne=n(54),ae=n(74),ce=n(21),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{imagesArray:[],showImages:!0,pageNumber:0,imagesPerPage:6},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGES":return t.payload.imagesArray?Object(ce.a)(Object(ce.a)({},e),{},{imagesArray:Object(ae.a)(t.payload.imagesArray)}):Object(ce.a)(Object(ce.a)({},e),{},{imagesArray:[]});case"SHOW_IMAGES":return Object(ce.a)(Object(ce.a)({},e),{},{showImages:!e.showImages});case"SET_PAGE_NUMBER":return Object(ce.a)(Object(ce.a)({},e),{},{pageNumber:t.payload.pageNumber});case"SET_IMAGES_PER_PAGE":return Object(ce.a)(Object(ce.a)({},e),{},{imagesPerPage:t.payload.imagesPerPage});default:return e}},re=Object(ne.a)({images:ie}),se=Object(ne.b)(re,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());se.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(se.getState())}));var oe=se,je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},le=Object(a.a)({});o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(j.a,{store:oe,children:Object(v.jsx)(c.a,{theme:le,children:Object(v.jsx)(te,{})})})}),document.getElementById("root")),je()}},[[94,1,2]]]);
//# sourceMappingURL=main.664964f6.chunk.js.map