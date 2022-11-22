"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[600],{510:function(e,t,n){n.d(t,{Z:function(){return o}});var r={},a=n(731),c=n(689),u=n(184),o=function(e){var t=e.movies,n=(0,c.TH)();if(t)return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{className:r.item,children:(0,u.jsx)(a.rU,{to:"".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},600:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a={},c=n(791),u=n(731),o=n(689),s=n(960),i=n(510),l={},p=n(984),f=n(184),m=function(e){var t=e.onSubmit,n=l.form,r=l.input,a=l.button,c=l.label;return(0,f.jsx)("form",{className:n,onSubmit:function(e){return t(e)},children:(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{className:r,type:"text",name:"query"},(0,p.x0)()),(0,f.jsx)("button",{type:"submit",className:a,children:(0,f.jsx)("span",{className:c,children:"Search"})})]})})},v=function(){var e,t=a.container,n=(0,o.UO)(),l=(0,c.useState)([]),p=(0,r.Z)(l,2),v=p[0],d=p[1],h=(0,c.useState)(""),g=(0,r.Z)(h,2),x=g[0],y=g[1],b=(0,u.lr)(),j=(0,r.Z)(b,2),k=j[0],w=j[1],Z=null!==(e=k.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){Z&&(0,s.mv)(Z,d).catch(console.error)}),[Z]),(0,f.jsx)("main",{className:t,children:n.movieId?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o.j3,{})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=t.elements.query.value;if(""===n)return y("The search field cannot be empty");w({query:n}),y(""),t.reset()}}),x?(0,f.jsx)("div",{className:"error",children:x}):(0,f.jsx)(i.Z,{movies:v})]})})}},960:function(e,t,n){n.d(t,{Hx:function(){return f},Mc:function(){return l},_:function(){return i},mv:function(){return m},uV:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44),o="df53404ad79b05696f1c854db3da46e1",s="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.ZP.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,a=r.data.results,e.abrupt("return",n(a));case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=600.7f23846c.chunk.js.map