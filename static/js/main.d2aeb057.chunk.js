(this["webpackJsonpmovies-search"]=this["webpackJsonpmovies-search"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),r=(c(9),c(2)),o=(c(10),c(0)),l=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(d);return Object(o.jsxs)("form",{className:"search",children:[Object(o.jsx)("input",{value:c,onChange:function(e){s(e.target.value)},type:"text"}),Object(o.jsx)("input",{onClick:function(e){e.preventDefault(),a(c),s("")},type:"submit",value:"SEARCH"})]})},j=function(e){var t=e.text,c=e.click,n=e.setHome;return Object(o.jsxs)("div",{className:"App-header",children:[Object(o.jsx)("a",{href:"",onClick:function(){n(c+1)},children:t}),Object(o.jsx)(l,{})]})},u=function(e){var t=e.movie,c="http://image.tmdb.org/t/p/w500/".concat(t.poster_path);return t.poster_path?Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("img",{width:"200",src:c,alt:"Title"}),Object(o.jsxs)("div",{className:"movie-overlay",children:[Object(o.jsxs)("p",{children:[t.vote_average," / 10"]}),Object(o.jsx)("button",{children:"Details"})]})]}),Object(o.jsx)("h4",{children:t.title}),Object(o.jsx)("p",{children:t.release_date?t.release_date.slice(0,4):t.release_date})]}):null},d=Object(n.createContext)(),b=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),l=i[0],b=i[1],h=Object(n.useState)(null),O=Object(r.a)(h,2),v=O[0],p=O[1],f=Object(n.useState)(0),m=Object(r.a)(f,2),x=m[0],g=m[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=c9a37db220f30fead3da528299127d84&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){b(e.results),s(!1)}))}),[x]);return console.log(l),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"bg-image"}),Object(o.jsx)(d.Provider,{value:function(e){s(!0),p(null),fetch("https://api.themoviedb.org/3/search/movie?api_key=c9a37db220f30fead3da528299127d84&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.total_results>=1?(b(e.results),s(!1)):(p(e.Error),s(!1))}))},children:Object(o.jsx)(j,{text:"Movies Search",click:x,setHome:g})}),Object(o.jsx)("div",{className:"movies",children:c&&!v?Object(o.jsx)("span",{children:"loading..."}):v?Object(o.jsx)("div",{className:"errorMessage",children:v}):l.map((function(e,t){return Object(o.jsx)(u,{movie:e},"".concat(t,"-").concat(e.Title))}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.d2aeb057.chunk.js.map