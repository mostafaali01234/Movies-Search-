(this["webpackJsonpmovies-search"]=this["webpackJsonpmovies-search"]||[]).push([[0],{16:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(18),r=c.n(n),i=(c(24),c(4)),j=c(9),o=c(2),l=(c(16),c(1)),d=function(e){var t=e.movie,c=e.genres,s=e.onDetails,a="http://image.tmdb.org/t/p/w500/".concat(t.poster_path),n=t.genre_ids.map((function(e){var t;return c.map((function(c){return c.id===e?t=c.name:0})),t}));return t.poster_path?Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsxs)("div",{className:"images",children:[Object(l.jsx)("img",{width:"200",src:a,alt:"Title"}),Object(l.jsxs)("div",{className:"movie-overlay",children:[Object(l.jsxs)("p",{children:[t.vote_average," / 10"]}),Object(l.jsxs)("h5",{children:[n[0]," ",Object(l.jsx)("br",{})," ",n[1]]}),Object(l.jsx)(j.b,{to:"/Movies-Search-/".concat(t.title),children:Object(l.jsx)("button",{onClick:function(){return s(t,n,t.title)},children:"Details"})})]})]}),Object(l.jsx)("h4",{children:t.title}),Object(l.jsx)("p",{children:t.release_date?t.release_date.slice(0,4):t.release_date})]}):null},h=function(e){var t=e.movies,c=e.genres,s=e.onDetails;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e,t){return Object(l.jsx)(d,{movie:e,genres:c,onDetails:s},"".concat(t,"-").concat(e.Title))}))})},b=function(e){var t=e.setSelectedDetails,c=e.setSelectedPath,a=e.setSelectedGenres,n=e.setMovies,r=e.movies,j=e.setLoading,o=e.loading,d=e.errorMessage,b=e.searchLoading,u=Object(s.useState)([]),O=Object(i.a)(u,2),v=O[0],x=O[1];Object(s.useEffect)((function(){0!==b||(fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){n(e.results),j(!1)})),fetch("https://api.themoviedb.org/3/genre/movie/list?&api_key=c9a37db220f30fead3da528299127d84").then((function(e){return e.json()})).then((function(e){x(e.genres)})))}),[n,j,b]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"bg-image"}),o&&!d?Object(l.jsx)("span",{children:"loading..."}):d?Object(l.jsx)("div",{className:"errorMessage",children:d}):Object(l.jsx)(h,{movies:r,genres:v,onDetails:function(e,s,n){t(e),a(s),c(n)}})]})},u=function(e){var t=e.click,c=Object(s.useState)(""),a=Object(i.a)(c,2),n=a[0],r=a[1],o=Object(s.useContext)(m),d=o.searchFun,h=o.searchLoading,b=o.setSearchLoading;return Object(l.jsxs)("form",{className:t?"search active":"search",children:[Object(l.jsx)("input",{value:n,onChange:function(e){r(e.target.value)},type:"text"}),Object(l.jsx)(j.b,{to:"/Movies-Search-/",onClick:function(e){d(n),b(h+1),r("")},children:"Search"})]})},O=c(15),v=function(e){var t=e.text,c=Object(s.useState)(!1),a=Object(i.a)(c,2),n=a[0],r=a[1];return Object(l.jsxs)("div",{className:"App-header",children:[Object(l.jsx)("a",{href:"/Movies-Search-/",children:t}),Object(l.jsx)("div",{className:"menu",onClick:function(){return r(!n)},children:n?Object(l.jsx)(O.b,{}):Object(l.jsx)(O.a,{})}),Object(l.jsx)(u,{click:n})]})},x=function(e){var t=e.movie,c=e.genres,s="http://image.tmdb.org/t/p/w500/".concat(t.poster_path);return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col sm",children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("h2",{children:t.release_date?t.release_date.slice(0,4):t.release_date}),Object(l.jsx)("h2",{children:c.map((function(e,t){return(t?" / ":"")+e}))}),Object(l.jsxs)("h2",{children:["Rate: ",t.vote_average,"/10"]})]}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("img",{width:"250",src:s,alt:"Title"})}),Object(l.jsx)("div",{className:"col sm",children:Object(l.jsxs)("h4",{children:[" ",t.overview]})}),Object(l.jsxs)("div",{className:"col hidden-sm",children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)("h2",{children:c.map((function(e,t){return(t?" / ":"")+e}))}),Object(l.jsx)("h2",{children:t.release_date?t.release_date.slice(0,4):t.release_date}),Object(l.jsxs)("h2",{children:["Rate: ",t.vote_average,"/10"]}),Object(l.jsxs)("h4",{children:[" ",t.overview]})]})]})})},m=Object(s.createContext)(),g=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),d=Object(i.a)(r,2),h=d[0],u=d[1],O=Object(s.useState)(),g=Object(i.a)(O,2),f=g[0],p=g[1],S=Object(s.useState)([]),_=Object(i.a)(S,2),N=_[0],M=_[1],k=Object(s.useState)(!0),w=Object(i.a)(k,2),L=w[0],y=w[1],D=Object(s.useState)(0),C=Object(i.a)(D,2),T=C[0],E=C[1],F=Object(s.useState)(null),P=Object(i.a)(F,2),A=P[0],G=P[1];return Object(l.jsx)(j.a,{children:Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("div",{className:"bg-image"}),Object(l.jsx)(m.Provider,{value:{searchFun:function(e){y(!0),G(null),setTimeout((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=c9a37db220f30fead3da528299127d84&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.total_results>=1?(M(e.results),y(!1)):(G(e.Error),y(!1))}))}),50)},searchLoading:T,setSearchLoading:E},children:Object(l.jsx)(v,{text:"Movies Search"})}),Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/Movies-Search-/",exact:!0,render:function(){return Object(l.jsx)(b,{setSelectedDetails:n,setSelectedPath:u,setSelectedGenres:p,setMovies:M,movies:N,setLoading:y,loading:L,errorMessage:A,searchLoading:T})}}),Object(l.jsx)(o.b,{path:"/Movies-Search-/".concat(h,"/"),render:function(){return Object(l.jsx)(x,{movie:c,genres:f})}}),Object(l.jsx)(o.a,{from:"/",to:"/Movies-Search-/"})]})]})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.eb275a10.chunk.js.map