(this["webpackJsonpinforce-test-tusk"]=this["webpackJsonpinforce-test-tusk"]||[]).push([[2],{10:function(e,t,n){e.exports={modal:"ProductView_modal__3z_9t",modalLabel:"ProductView_modalLabel__34C70",modalInput:"ProductView_modalInput__2T7L8",descriptionInput:"ProductView_descriptionInput__1YHcZ",modalButtonContainer:"ProductView_modalButtonContainer__1yNv9",modalButton:"ProductView_modalButton__uz9fg"}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u}));var c=n(8),a=Object(c.a)("ADD_PRODUCT"),r=Object(c.a)("DELETE_PRODUCT"),o=Object(c.a)("EDIT_PRODUCT"),i=Object(c.a)("SORT_BY_PRICE"),u=Object(c.a)("SORT_BY_NAME")},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(21),a=n.n(c),r=n(28),o=n(8),i=Object(o.b)("FETCH_REQUEST_PRODUCT",Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((function(e){return e.json()}));case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))))},22:function(e,t,n){e.exports={container:"Container_container__1EAF_",title:"Container_title__36W1v"}},23:function(e,t,n){e.exports={link:"Navigation_link__30PKG",active:"Navigation_active__TBLAf Navigation_link__30PKG"}},24:function(e,t,n){e.exports={Overlay:"Modal_Overlay__ubnOk",Modal:"Modal_Modal__1LhU3"}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),a=n(24),r=n.n(a),o=n(1),i=document.querySelector("#modal-root");function u(e){var t=e.children;return Object(c.createPortal)(Object(o.jsx)("div",{className:r.a.Overlay,children:Object(o.jsx)("div",{className:r.a.Modal,children:t})}),i)}},30:function(e,t,n){e.exports={header:"Appbar_header__Id_q9"}},37:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c,a,r,o=n(0),i=n.n(o),u=n(11),l=n.n(u),s=n(14),d=(n(37),n(38),n(39),n(2)),j=n(32),b=n(16),O=n(4),p=n(27),m=n(9),f=n(31),h=n(12),_=n(8),x=n(13),v=[],g=Object(_.c)(v,(c={},Object(m.a)(c,x.a.fulfilled,(function(e,t){return t.payload})),Object(m.a)(c,h.a,(function(e,t){return[].concat(Object(f.a)(e),[t.payload])})),Object(m.a)(c,h.b,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Object(m.a)(c,h.c,(function(e,t){return e.map((function(e){return e.id===t.payload.id?t.payload:e}))})),Object(m.a)(c,h.d,(function(e,t){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})),Object(m.a)(c,h.e,(function(e,t){return e.sort((function(e,t){return e.price-t.price}))})),c)),y=Object(_.c)(!1,(a={},Object(m.a)(a,x.a.pending,(function(){return!0})),Object(m.a)(a,x.a.fulfilled,(function(){return!1})),Object(m.a)(a,x.a.rejected,(function(){return!1})),a)),N=Object(_.c)(!1,(r={},Object(m.a)(r,x.a.rejected,(function(e,t){return t.payload})),Object(m.a)(r,x.a.pending,(function(){return null})),r)),C=Object(O.combineReducers)({productsReducer:g,isLoading:y,error:N}),P=Object(O.combineReducers)({products:C}),k=n(18),I=Object(O.createStore)(P,Object(p.composeWithDevTools)(Object(O.applyMiddleware)(k.a))),S=n(29),D=n.n(S),E=n(22),R=n.n(E),T=n(1);function w(e){var t=e.title,n=e.children;return Object(T.jsxs)("div",{className:R.a.container,children:[t&&Object(T.jsx)("h1",{className:R.a.title,children:t}),n]})}var L=n(23),B=n.n(L);function F(){return Object(T.jsx)("nav",{children:Object(T.jsx)(s.c,{to:"/home",className:function(e){return e.isActive?B.a.active:B.a.link},children:"Home"})})}var M=n(30),U=n.n(M);function q(){return Object(T.jsx)("header",{className:U.a.header,children:Object(T.jsx)(F,{})})}var A=n.p+"static/media/error.8b3e8601.jpg",V=(n(65),n(7)),z=n(25),H=n(10),W=n.n(H);function Y(){var e=Object(b.b)(),t=Object(d.g)().productId,n=Object(b.c)((function(e){return e.products})).productsReducer.find((function(e){return e.id.toString()===t})),c=n.name,a=n.image_link,r=n.price,i=n.description,u=Object(o.useState)(c),l=Object(V.a)(u,2),s=l[0],j=l[1],O=Object(o.useState)(a),p=Object(V.a)(O,2),m=p[0],f=p[1],_=Object(o.useState)(r),x=Object(V.a)(_,2),v=x[0],g=x[1],y=Object(o.useState)(i),N=Object(V.a)(y,2),C=N[0],P=N[1],k=Object(o.useState)(!1),I=Object(V.a)(k,2),S=I[0],D=I[1],E=function(){D(!S)};return Object(T.jsxs)(T.Fragment,{children:[n&&Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:c}),Object(T.jsx)("img",{src:a,alt:c}),Object(T.jsxs)("p",{children:["Price: ",r]}),Object(T.jsxs)("p",{children:["Description:",i]}),Object(T.jsx)("button",{type:"button",onClick:E,children:"Edit"})]}),S&&Object(T.jsx)(z.a,{children:Object(T.jsxs)("form",{className:W.a.modal,onSubmit:function(n){n.preventDefault();var c={id:Number(t),name:s,image_link:m,price:v,description:C};E(),e(Object(h.c)(c))},children:[Object(T.jsxs)("label",{className:W.a.modalLabel,children:["Name",Object(T.jsx)("input",{className:W.a.modalInput,type:"text",autoFocus:!0,placeholder:"Name",value:s,required:!0,onChange:function(e){return j(e.target.value)}})]}),Object(T.jsxs)("label",{className:W.a.modalLabel,children:["Image URL",Object(T.jsx)("input",{className:W.a.modalInput,type:"url",autoFocus:!0,placeholder:"Enter image url",value:m,required:!0,onChange:function(e){return f(e.target.value)}})]}),Object(T.jsxs)("label",{className:W.a.modalLabel,children:["Price",Object(T.jsx)("input",{className:W.a.modalInput,type:"number",autoomplete:"off",autoFocus:!0,placeholder:"Price",value:v,required:!0,onChange:function(e){return g(e.target.value)}})]}),Object(T.jsxs)("label",{className:W.a.modalLabel,children:[" ","Description",Object(T.jsx)("input",{className:W.a.descriptionInput,type:"text",autoomplete:"off",autoFocus:!0,placeholder:"Description",value:C,required:!0,onChange:function(e){return P(e.target.value)}})]}),Object(T.jsx)("button",{type:"submit",className:W.a.modalButton,children:"Confirm"}),Object(T.jsx)("button",{type:"button",onClick:E,children:"Cancel"})]})})]})}var G=Object(o.lazy)((function(){return n.e(0).then(n.bind(null,71))})),J=Object(o.lazy)((function(){return n.e(1).then(n.bind(null,70))}));function K(){return Object(T.jsx)(b.a,{store:I,children:Object(T.jsxs)(w,{title:"Welcome",children:[Object(T.jsx)(q,{}),Object(T.jsx)(o.Suspense,{fallback:Object(T.jsx)(D.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),children:Object(T.jsxs)(d.c,{children:[Object(T.jsx)(d.a,{path:"/home",element:Object(T.jsx)(G,{})}),Object(T.jsx)(d.a,{path:"/product/:productId/*",element:Object(T.jsx)(Y,{})}),Object(T.jsx)(d.a,{path:"*",element:Object(T.jsx)(J,{errorImage:A,messadge:"\u041e\u0448\u0438\u0431\u043a\u0430 404: \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})})]})}),Object(T.jsx)(j.a,{})]})})}l.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(s.a,{children:Object(T.jsx)(K,{})})}),document.getElementById("root"))}},[[66,3,4]]]);
//# sourceMappingURL=main.6365da3b.chunk.js.map