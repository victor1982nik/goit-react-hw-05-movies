"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[669],{575:function(t,e,n){n.d(e,{Ch:function(){return s},Mc:function(){return c},eH:function(){return i},oJ:function(){return u},wr:function(){return a}});var r=n(44);r.ZP.defaults.baseURL="https://api.themoviedb.org/3",r.ZP.defaults.params={api_key:"368aa8eefea213f2e59844c75600bcb3"};var a=function(){return r.ZP.get("/trending/all/day")},c=function(t){return r.ZP.get("/movie/".concat(t))},i=function(t){return r.ZP.get("/movie/".concat(t,"/credits"))},u=function(t){return r.ZP.get("/movie/".concat(t,"/reviews?"))},s=function(t){return r.ZP.get("/search/movie?query=".concat(t))}},854:function(t,e,n){n.d(e,{a:function(){return c}});var r=n(243),a=n(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto"},children:(0,a.jsx)(r.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})})}},669:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(861),a=n(885),c=n(757),i=n.n(c),u=n(689),s=n(791),o=n(682),f=n(575),l=n(854),d=n(184),h=function(t){return t.cast.map((function(t){var e=t.id,n=t.character,r=t.name,a=t.profile_path;return(0,d.jsxs)(o.x,{children:[(0,d.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500"+a:"https://dummyimage.com/100x150/ddd/000000&text=no+image+available",width:"150",alt:""}),(0,d.jsx)("p",{children:r}),(0,d.jsxs)("p",{children:["Character: ",n]})]},e)}))},p=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],p=(0,s.useState)(!1),g=(0,a.Z)(p,2),v=g[0],m=g[1],x=(0,u.UO)().id;return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,f.eH)(e);case 4:n=t.sent,c(n.data.cast),console.log(n.data.cast),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}();t(x)}),[x]),(0,d.jsxs)(o.x,{children:[v&&(0,d.jsx)(l.a,{}),n.length>0&&(0,d.jsx)(h,{cast:n})]})}}}]);
//# sourceMappingURL=669.4b3f49ed.chunk.js.map