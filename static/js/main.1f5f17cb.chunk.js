(this["webpackJsonpmovies-search"]=this["webpackJsonpmovies-search"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(16),i=c.n(a),r=(c(22),c(7)),j=(c(23),c(1)),o=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(O);return Object(j.jsxs)("form",{className:"search",children:[Object(j.jsx)("input",{value:c,onChange:function(e){s(e.target.value)},type:"text"}),Object(j.jsx)("input",{onClick:function(e){e.preventDefault(),a(c),s("")},type:"submit",value:"SEARCH"})]})},l=function(e){var t=e.text,c=e.click,n=e.setHome;return Object(j.jsxs)("div",{className:"App-header",children:[Object(j.jsx)("a",{href:"/",onClick:function(){n(c+1)},children:t}),Object(j.jsx)(o,{})]})},u=c(9),b=function(e){var t=e.movie,c=e.genres,n=e.onDetails,s="http://image.tmdb.org/t/p/w500/".concat(t.poster_path),a=t.genre_ids.map((function(e){var t;return c.map((function(c){if(c.id==e)return t=c.name})),t}));return t.poster_path?Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsxs)("div",{className:"images",children:[Object(j.jsx)("img",{width:"200",src:s,alt:"Title"}),Object(j.jsxs)("div",{className:"movie-overlay",children:[Object(j.jsxs)("p",{children:[t.vote_average," / 10"]}),Object(j.jsxs)("h5",{children:[a[0]," ",Object(j.jsx)("br",{})," ",a[1]]}),Object(j.jsx)(u.b,{to:"/"+t.title,children:Object(j.jsx)("button",{onClick:function(){return n(t,a,t.title)},children:"Details"})})]})]}),Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:t.release_date?t.release_date.slice(0,4):t.release_date})]}):null},d=function(e){var t=e.movie,c=e.genres,n="http://image.tmdb.org/t/p/w500/".concat(t.poster_path);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("img",{width:"250",src:n,alt:"Title"})}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("h2",{children:c.map((function(e,t){return(t?" / ":"")+e}))}),Object(j.jsx)("h2",{children:t.release_date?t.release_date.slice(0,4):t.release_date}),Object(j.jsxs)("h2",{children:["Rate: ",t.vote_average,"/10"]}),Object(j.jsxs)("h4",{children:[" ",t.overview]})]})]})},h=c(2),O=Object(n.createContext)(),v=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),o=i[0],v=i[1],x=Object(n.useState)([]),f=Object(r.a)(x,2),m=f[0],p=f[1],g=Object(n.useState)(null),_=Object(r.a)(g,2),S=_[0],N=_[1],k=Object(n.useState)(0),C=Object(r.a)(k,2),y=C[0],w=C[1],D=Object(n.useState)(),T=Object(r.a)(D,2),E=T[0],F=T[1],A=Object(n.useState)(),H=Object(r.a)(A,2),M=H[0],P=H[1],B=Object(n.useState)(),I=Object(r.a)(B,2),J=I[0],L=I[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){v(e.results),s(!1)})),fetch("https://api.themoviedb.org/3/genre/movie/list?&api_key=c9a37db220f30fead3da528299127d84").then((function(e){return e.json()})).then((function(e){p(e.genres)}))}),[y]);var R=function(e,t,c){F(e),L(t),P(c)};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"bg-image"}),Object(j.jsx)(O.Provider,{value:function(e){s(!0),N(null),fetch("https://api.themoviedb.org/3/search/movie?api_key=c9a37db220f30fead3da528299127d84&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.total_results>=1?(v(e.results),s(!1)):(N(e.Error),s(!1))}))},children:Object(j.jsx)(l,{text:"Movies Search",click:y,setHome:w})}),Object(j.jsxs)(u.a,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)("div",{className:"movies",children:c&&!S?Object(j.jsx)("span",{children:"loading..."}):S?Object(j.jsx)("div",{className:"errorMessage",children:S}):o.map((function(e,t){return Object(j.jsx)(b,{movie:e,genres:m,onDetails:R},"".concat(t,"-").concat(e.Title))}))})}}),Object(j.jsx)(h.a,{path:"/"+M,render:function(){return Object(j.jsx)(d,{movie:E,genres:J})}})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.1f5f17cb.chunk.js.map