!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,d,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function d(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=t[c]||0,s="".concat(c," ").concat(l);t[c]=l+1;var u=d(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:b(p,e),references:1}),r.push(s)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function m(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function b(n,e){var t,r,o;if(e.singleton){var a=h++;t=f||(f=l(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=l(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=d(t[r]);i[o].references--}for(var a=c(n,e),l=0;l<t.length;l++){var s=d(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=a}}}},function(n,e,t){var r=t(1),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\na,\nabbr,\nacronym,\naddress,\napplet,\narticle,\naside,\naudio,\nb,\nbig,\nblockquote,\nbody,\ncanvas,\ncaption,\ncenter,\ncite,\ncode,\ndd,\ndel,\ndetails,\ndfn,\ndiv,\ndl,\ndt,\nem,\nembed,\nfieldset,\nfigcaption,\nfigure,\nfooter,\nform,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nheader,\nhgroup,\nhtml,\ni,\niframe,\nimg,\nins,\nkbd,\nlabel,\nlegend,\nli,\nmark,\nmenu,\nnav,\nobject,\nol,\noutput,\np,\npre,\nq,\nruby,\ns,\nsamp,\nsection,\nsmall,\nspan,\nstrike,\nstrong,\nsub,\nsummary,\nsup,\ntable,\ntbody,\ntd,\ntfoot,\nth,\nthead,\ntime,\ntr,\ntt,\nu,\nul,\nvar,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  color: #00f;\n  font-family: 'Roboto', serif;\n  font-size: 16px;\n  line-height: 1;\n  margin: 0 auto;\n  width: 80%;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nq::after,\nq::before,\nblockquote::after,\nblockquote::before {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]),e.default=o},function(n,e,t){var r=t(1),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,".title {\n  font-size: 4rem;\n  font-weight: 900;\n  letter-spacing: 1rem;\n  padding: 0 0 2rem;\n  text-align: center;\n  text-decoration: underline #ed553b;\n}\n\n.names {\n  font-size: 1.5rem;\n  font-weight: 900;\n  padding: 1rem 2rem;\n  margin: 0 2rem;\n}\n\n.current_player {\n  background-color: #00f;\n  color: #fff;\n}\n\n.align {\n  vertical-align: middle;\n}\n\n.center {\n  margin: 0 auto;\n}\n\n.square {\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  height: 10rem;\n  width: 10rem;\n}\n\n.empty:hover {\n  background-color: #ed553b;\n}\n\n.bottom {\n  border-bottom: 0.2rem solid black;\n}\n\n.right {\n  border-right: 0.2rem solid black;\n}\n\n#winner {\n  color: #a9a9a9;\n  display: none;\n  font-family: 'VT323', monospace;\n  font-size: 10rem;\n  font-weight: 900;\n  left: 20rem;\n  letter-spacing: 1rem;\n  position: absolute;\n  text-align: center;\n  top: 10rem;\n}\n\n#reset {\n  font-size: 1.3rem;\n  font-weight: 900;\n  padding: 0.8rem 1.5rem;\n  margin: 0 4rem;\n  background-color: #00f;\n  color: #fff;\n  box-shadow: 0.2rem 0.2rem gray;\n}\n\n#reset:hover {\n  background-color: #21729f;\n}\n\n#reset:active {\n  background-color: #00f;\n  box-shadow: 0 0 0.2rem 0.2rem gray;\n}\n",""]),e.default=o},function(n,e,t){"use strict";t.r(e);t(2),t(4);(()=>{const{body:n}=document,e=document.createElement("h1");e.innerText="Tic Tac Toe JS",e.classList.add("title"),n.appendChild(e);const t=document.createElement("table");t.classList.add("center");const r=document.createElement("tr"),o=document.createElement("td");o.classList.add("align");const a=document.createElement("div");a.classList.add("names","current_player"),a.innerText="Player 1",a.id="player1",o.appendChild(a),r.appendChild(o);const i=document.createElement("td"),d=document.createElement("div");d.classList.add("square","bottom","right","empty"),d.id="1",i.appendChild(d),r.appendChild(i);const c=document.createElement("td"),l=document.createElement("div");l.classList.add("square","bottom","right","empty"),l.id="2",c.appendChild(l),r.appendChild(c);const s=document.createElement("td"),u=document.createElement("div");u.classList.add("square","bottom","empty"),u.id="3",s.appendChild(u),r.appendChild(s);const p=document.createElement("td");p.classList.add("align");const m=document.createElement("div");m.classList.add("names"),m.innerText="Player 2",m.id="player2",p.appendChild(m),r.appendChild(p),t.appendChild(r);const f=document.createElement("tr"),h=document.createElement("td");f.appendChild(h);const b=document.createElement("td"),g=document.createElement("div");g.classList.add("square","bottom","right","empty"),g.id="4",b.appendChild(g),f.appendChild(b);const v=document.createElement("td"),y=document.createElement("div");y.classList.add("square","bottom","right","empty"),y.id="5",v.appendChild(y),f.appendChild(v);const C=document.createElement("td"),E=document.createElement("div");E.classList.add("square","bottom","empty"),E.id="6",C.appendChild(E),f.appendChild(C);const L=document.createElement("td");f.appendChild(L),t.appendChild(f);const w=document.createElement("tr"),x=document.createElement("td");w.appendChild(x);const q=document.createElement("td"),k=document.createElement("div");k.classList.add("square","right","empty"),k.id="7",q.appendChild(k),w.appendChild(q);const T=document.createElement("td"),j=document.createElement("div");j.classList.add("square","right","empty"),j.id="8",T.appendChild(j),w.appendChild(T);const M=document.createElement("td"),S=document.createElement("div");S.classList.add("square","empty"),S.id="9",M.appendChild(S),w.appendChild(M);const _=document.createElement("td");_.classList.add("align");const O=document.createElement("button");O.innerText="Reset",O.id="reset",_.appendChild(O),w.appendChild(_),t.appendChild(w),n.appendChild(t);const P=document.createElement("div");P.innerHTML="Winner<br />Player 1",P.id="winner",n.appendChild(P)})()}]);