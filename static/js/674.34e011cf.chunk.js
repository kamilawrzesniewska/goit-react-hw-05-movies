"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{510:function(t,e,n){n.d(e,{Z:function(){return u}});var r={},c=n(656),a=(n(791),n(731)),o=n(689),s=n(184),u=function(t){var e=t.movies,n=r.movie__item,u=r.movie__list,i=r.movie__title,l=r.movie__link,p=(0,o.TH)();return(0,s.jsx)("ul",{className:u,children:e.map((function(t){var e=t.title,r=t.id,o=t.poster_path;return(0,s.jsx)("li",{className:n,children:(0,s.jsxs)(a.rU,{className:l,to:"/movies/".concat(r),state:{from:p},children:[o?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:"Poster of ".concat(e)}):(0,s.jsx)("img",{src:c,alt:"Placeholder"}),(0,s.jsx)("p",{className:i,children:e})]})},r)}))})}},674:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r=n(885),c={},a=n(791),o=n(510),s=n(960),u=n(184),i=function(){var t=c.container,e=c.heading,n=(0,a.useState)([]),i=(0,r.Z)(n,2),l=i[0],p=i[1];return(0,a.useEffect)((function(){(0,s._)(p).catch(console.error)}),[]),(0,u.jsxs)("main",{className:t,children:[(0,u.jsx)("h1",{className:e,children:"Trending today"}),(0,u.jsx)(o.Z,{movies:l})]})}},960:function(t,e,n){n.d(e,{Hx:function(){return f},Mc:function(){return l},_:function(){return i},mv:function(){return m},uV:function(){return p}});var r=n(861),c=n(757),a=n.n(c),o=n(44),s="df53404ad79b05696f1c854db3da46e1",u="https://api.themoviedb.org/3/",i=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",e(n.data.results));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("".concat(u,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",n(r.data));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",n(r.data.cast));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",n(r.data.results));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(a().mark((function t(e,n){var r,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return r=t.sent,c=r.data.results,t.abrupt("return",n(c));case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()},656:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAN5JREFUWEftltENwyAMRC/rNOtEXaftOlXXSeeJLBXJJSTcOR/8mL9EhnsctmHC4DEN1kcCpAPpgOLADcBXKFsqngV4AlgA3EkIOp4BsJ28AcwAVgLCxB8/p14A7PtwMAA2mYWQxG1hFoCBkMVVgDOIkHgEoAXxUc68TgblCPxcnxPlfzfhWpkYBbC1vO1MdTQrIQpQi7MluoOIANQJZz1C6RN/ECrAUbazfeKSA71SC0GwDvTEy85kCAbAL8qUmhTPAJTmYzfh6cXiDtggqHgWQHgGaKEJkA6kA8Md2ACewUEhJHl/eQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=674.34e011cf.chunk.js.map