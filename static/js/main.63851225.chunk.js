(this["webpackJsonpreact-redux-material-recruitment"]=this["webpackJsonpreact-redux-material-recruitment"]||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var a=n(73),c=n(140),i=n(0),r=n.n(i),s=n(10),o=n.n(s),j=n(16),l=n(32),b=n(12),u=n(30),h=n(128),d=n(133),g=n(134),O=n(135),m=n(136),p=n(97),x=n(137),f=n(141),y=n(132),v=n(142),I=n(131),w=function(e){return{type:"SET_IMAGES",payload:{imagesArray:e}}},S=function(e){return{type:"SET_PAGE_NUMBER",payload:{pageNumber:e}}},P=n(2);var k=Object(y.a)((function(e){return Object(v.a)({topBar:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2),marginBottom:e.spacing(2)},appName:{cursor:"pointer"}})})),C=function(){var e=k(),t=Object(b.f)(),n=Object(j.b)(),a=Object(j.c)((function(e){return e.images.showImages}));return Object(P.jsx)(h.a,{item:!0,container:!0,justify:"center",className:e.topBar,children:Object(P.jsxs)(h.a,{item:!0,container:!0,xs:10,children:[Object(P.jsx)(h.a,{item:!0,xs:4,children:Object(P.jsx)(p.a,{className:e.appName,variant:"h6",onClick:function(){return t.replace("/")},children:"Appname"})}),Object(P.jsx)(h.a,{container:!0,item:!0,xs:8,justify:"flex-end",children:Object(P.jsx)(h.a,{item:!0,children:Object(P.jsxs)(I.a,{color:a?"secondary":"primary",variant:"contained",onClick:function(){var e;n({type:"SHOW_IMAGES",payload:{show:e}})},children:[a?"Disable":"Enable"," images"]})})})]})})},E=Object(y.a)((function(e){return Object(v.a)({mainContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},cardImage:{height:"260px"}})})),N=function(){var e=E(),t=Object(b.f)(),n=Object(j.b)(),a=Object(j.c)((function(e){return e.images.imagesArray})),c=Object(j.c)((function(e){return e.images.showImages})),r=Object(j.c)((function(e){return e.images.pageNumber})),s=Object(j.c)((function(e){return e.images.imagesPerPage})),o=Object(i.useState)(!0),l=Object(u.a)(o,2),y=l[0],v=l[1],I=Object(i.useState)(null),k=Object(u.a)(I,2),N=k[0],A=k[1];Object(i.useEffect)((function(){fetch("https://picsum.photos/v2/list?page=".concat(r+1,"&limit=").concat(s)).then((function(e){return e.json()})).then((function(e){n(w(e)),A(null),v(!1)})).catch((function(){n(w(null)),A("There was an error loading data."),v(!1)}))}),[r,s,n]);return Object(P.jsxs)(h.a,{container:!0,className:e.mainContainer,children:[Object(P.jsx)(C,{}),Object(P.jsx)(h.a,{item:!0,container:!0,justify:"center",children:Object(P.jsx)(h.a,{container:!0,item:!0,xs:10,children:Object(P.jsx)(h.a,{container:!0,justify:"center",children:Object(P.jsx)(h.a,{item:!0,children:Object(P.jsxs)(h.a,{container:!0,justify:"center",spacing:6,children:[(null===a||void 0===a?void 0:a.length)&&!y?Object(P.jsx)(P.Fragment,{children:a.map((function(n){return Object(P.jsx)(h.a,{item:!0,xs:12,md:6,lg:4,children:Object(P.jsx)(d.a,{children:Object(P.jsxs)(g.a,{onClick:function(){return t.push("/image/".concat(n.id))},children:[Object(P.jsx)(O.a,{className:e.cardImage,component:"img",src:c?"https://picsum.photos/id/".concat(n.id,"/1000/300"):"https://globalhygiene.pl/wp-content/uploads/2018/07/blank-product-600x600.jpg",title:"Contemplative Reptile"},r),Object(P.jsxs)(m.a,{children:[Object(P.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.author}),Object(P.jsxs)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:["Original width: ",n.width," px ",Object(P.jsx)("br",{}),"Original height: ",n.height," px"]})]})]})})},n.id)}))}):Object(P.jsx)(h.a,{container:!0,justify:"center",spacing:10,children:Object(P.jsx)(h.a,{item:!0,children:N?Object(P.jsx)(p.a,{variant:"h6",color:"error",children:N}):Object(P.jsx)(x.a,{})})}),N?null:Object(P.jsx)(f.a,{component:"div",count:-1,page:r,onChangePage:function(e,t){n(S(t))},rowsPerPage:s,onChangeRowsPerPage:function(e){n(function(e){return{type:"SET_IMAGES_PER_PAGE",payload:{imagesPerPage:e}}}(parseInt(e.target.value,10))),n(S(0))},rowsPerPageOptions:[6,12,21,42],labelRowsPerPage:"Per page"})]})})})})})]})},A=n(26),B=n(139),T=n(138),_=n(70),G=n.n(_),M=n(71),R=n.n(M),F=n(72),J=n.n(F),H=Object(y.a)((function(e){var t;return Object(v.a)({mainContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},image:(t={width:"100%",height:"700px"},Object(A.a)(t,e.breakpoints.down("lg"),{height:"550px"}),Object(A.a)(t,e.breakpoints.down("md"),{height:"400px"}),Object(A.a)(t,e.breakpoints.down("xs"),{height:"200px"}),Object(A.a)(t,"marginBottom",e.spacing(2)),Object(A.a)(t,"boxShadow","5px 5px 15px -8px #000000"),t),navigationIconsMobileContainer:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},goBackIconContainer:{marginTop:e.spacing(3)},goBackIcon:{marginRight:e.spacing(1)}})})),L=function(){var e=H(),t=Object(b.f)(),n=Object(b.g)(),a=Object(i.useState)(null),c=Object(u.a)(a,2),r=c[0],s=c[1],o=Object(i.useState)(!0),l=Object(u.a)(o,2),d=l[0],g=l[1],O=Object(i.useState)(null),m=Object(u.a)(O,2),f=m[0],y=m[1],v=Object(T.a)("(max-width:600px)"),w=Object(j.c)((function(e){return e.images.imagesArray})),S=Object(j.c)((function(e){return e.images.showImages})),k=n.id;Object(i.useEffect)((function(){var e=w.find((function(e){return e.id===k}));g(!0),e?(s(e),y(null),g(!1)):E()}),[k,w]);var E=function(){fetch("https://picsum.photos/id/".concat(k,"/info")).then((function(e){return e.json()})).then((function(e){s(e),y(null),g(!1)})).catch((function(){y("There was problem fetching data or there is no image with that id. Try again."),s(null),g(!1)}))};return Object(P.jsxs)(h.a,{container:!0,className:e.mainContainer,children:[Object(P.jsx)(C,{}),Object(P.jsx)(h.a,{container:!0,justify:"center",children:Object(P.jsx)(h.a,{container:!0,item:!0,sm:10,children:r&&!d?Object(P.jsx)(h.a,{container:!0,children:Object(P.jsxs)(h.a,{item:!0,container:!0,justify:"center",alignItems:"center",children:[v?null:Object(P.jsx)(h.a,{container:!0,item:!0,xs:1,justify:"center",children:Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{onClick:function(){return t.push("/image/".concat(parseInt(k)-1))},children:Object(P.jsx)(G.a,{})})})}),Object(P.jsxs)(h.a,{item:!0,xs:10,children:[Object(P.jsx)("img",{src:S?"https://picsum.photos/id/".concat(k,"/1400/800"):"https://globalhygiene.pl/wp-content/uploads/2018/07/blank-product-600x600.jpg",alt:k,className:e.image}),v?Object(P.jsxs)(h.a,{container:!0,item:!0,className:e.navigationIconsMobileContainer,children:[Object(P.jsx)(h.a,{item:!0,xs:6,children:Object(P.jsx)(I.a,{variant:"contained",onClick:function(){return t.push("/image/".concat(parseInt(k)-1))},children:"Prev"})}),Object(P.jsx)(h.a,{container:!0,item:!0,xs:6,justify:"flex-end",children:Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{variant:"contained",onClick:function(){return t.push("/image/".concat(parseInt(k)+1))},children:"Next"})})})]}):null,Object(P.jsx)(h.a,{container:!0,alignItems:"center",children:Object(P.jsxs)(h.a,{item:!0,xs:10,children:[Object(P.jsxs)(p.a,{variant:"h5",children:["Author: ",r.author]}),Object(P.jsxs)(p.a,{variant:"body1",children:["Original width: ",r.width," px"]}),Object(P.jsxs)(p.a,{variant:"body1",children:["Original height: ",r.height," px"]}),Object(P.jsxs)(p.a,{variant:"body2",children:["Link:"," ",Object(P.jsx)(B.a,{target:"blank",href:r.url,children:r.url})]})]})})]}),v?null:Object(P.jsx)(h.a,{container:!0,item:!0,xs:1,justify:"center",children:Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{onClick:function(){return t.push("/image/".concat(parseInt(k)+1))},children:Object(P.jsx)(R.a,{})})})}),Object(P.jsx)(h.a,{container:!0,item:!0,xs:10,justify:"flex-end",className:e.goBackIconContainer,children:Object(P.jsxs)(I.a,{color:"primary",variant:"contained",onClick:function(){return t.replace("/")},children:[Object(P.jsx)(J.a,{className:e.goBackIcon}),"Go back"]})})]})}):Object(P.jsx)(h.a,{container:!0,direction:"column",spacing:2,children:f?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(h.a,{container:!0,item:!0,justify:"center",children:Object(P.jsx)(p.a,{variant:"h6",color:"error",children:f})}),Object(P.jsxs)(h.a,{container:!0,item:!0,justify:"center",spacing:2,children:[Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{variant:"contained",onClick:function(){return t.replace("/")},children:"Homepage"})}),Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{color:"primary",variant:"contained",onClick:function(){return t.push("/image/".concat(k<0?0:parseInt(k)+1))},children:"Next image"})})]})]}):Object(P.jsx)(x.a,{})})})})]})};function D(){var e=U(),t=Object(b.f)();return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(h.a,{container:!0,justify:"center",alignItems:"center",className:e.container,direction:"column",spacing:2,children:[Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(p.a,{variant:"h4",children:"404 | This page could not be found."})}),Object(P.jsx)(h.a,{item:!0,children:Object(P.jsx)(I.a,{color:"primary",variant:"contained",onClick:function(){return t.replace("/")},children:"Go back to main page"})})]})})}var U=Object(y.a)((function(e){return Object(v.a)({container:{height:"100vh",padding:e.spacing(2)}})})),W=function(){return Object(P.jsx)(l.a,{children:Object(P.jsxs)(b.c,{children:[Object(P.jsx)(b.a,{exact:!0,path:"/",children:Object(P.jsx)(N,{})}),Object(P.jsx)(b.a,{exact:!0,path:"/image/:id",children:Object(P.jsx)(L,{})}),Object(P.jsx)(b.a,{children:Object(P.jsx)(D,{})})]})})},q=n(53),z=n(74),K=n(21),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{imagesArray:[],showImages:!0,pageNumber:0,imagesPerPage:6},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGES":return t.payload.imagesArray?Object(K.a)(Object(K.a)({},e),{},{imagesArray:Object(z.a)(t.payload.imagesArray)}):Object(K.a)(Object(K.a)({},e),{},{imagesArray:[]});case"SHOW_IMAGES":return Object(K.a)(Object(K.a)({},e),{},{showImages:!e.showImages});case"SET_PAGE_NUMBER":return Object(K.a)(Object(K.a)({},e),{},{pageNumber:t.payload.pageNumber});case"SET_IMAGES_PER_PAGE":return Object(K.a)(Object(K.a)({},e),{},{imagesPerPage:t.payload.imagesPerPage});default:return e}},V=Object(q.a)({images:Q}),X=Object(q.b)(V,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}());X.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(X.getState())}));var Y=X,Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},$=Object(a.a)({});o.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(j.a,{store:Y,children:Object(P.jsx)(c.a,{theme:$,children:Object(P.jsx)(W,{})})})}),document.getElementById("root")),Z()}},[[94,1,2]]]);
//# sourceMappingURL=main.63851225.chunk.js.map