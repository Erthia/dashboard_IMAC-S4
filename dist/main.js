!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){},function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}t.r(n);var o=t(0),u=e=>{let n=["fas fa-globe-europe","","fas fa-paw"].map(e=>e.concat(" menuElt"));return n[e]=n[e].concat(" selected"),r("header",{},[r("i",{class:n[0]},[]),r("p",{class:n[1]},"#"),r("i",{class:n[2]},[])])};!function(e,n,t,r){var o,u=[].map,l=r&&r.children[0]||null,i=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:u.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],c=!0,f=h(e),s=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var u=o(e);return"function"==typeof u&&(u=u(g(n,f),r)),u&&u!==(t=g(n,f))&&!u.then&&v(f=y(n,h(t,u),f)),u}}(o,r[o]):e(n.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],f,h(n));return v(),s;function d(e){return"function"==typeof e?d(e(f,s)):null!=e?e:""}function p(){o=!o;var e=d(t);for(r&&!o&&(l=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=d(n.children[u]),t));for(var l in o)N(r,l,o[l],null,t)}return r}(o,u);n.insertBefore(l,t),null!=r&&j(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in h(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&N(e,o,t[o],n[o],r);var u=c?t.oncreate:t.onupdate;u&&a.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var i={},f={},s=[],p=r.children,v=o.children,y=0;y<p.length;y++){s[y]=t.childNodes[y];var g=m(p[y]);null!=g&&(i[g]=[s[y],p[y]])}for(var y=0,b=0;b<v.length;){var g=m(p[y]),P=m(v[b]=d(v[b]));if(f[g])y++;else if(null==P||P!==m(p[y+1]))if(null==P||c)null==g&&(e(t,s[y],p[y],v[b],u),b++),y++;else{var w=i[P]||[];g===P?(e(t,w[0],w[1],v[b],u),y++):w[0]?e(t,t.insertBefore(w[0],s[y]),w[1],v[b],u):e(t,s[y],null,v[b],u),f[P]=v[b],b++}else null==g&&j(t,s[y],p[y]),y++}for(;y<p.length;)null==m(p[y])&&j(t,s[y],p[y]),y++;for(var y in i)f[y]||j(t,i[y][0],i[y][1])}return t}(r,l,i,i=e)),c=!1;a.length;)a.pop()()}function v(){o||(o=!0,setTimeout(p))}function h(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function y(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?y(e.slice(1),n,t[e[0]]):n,h(t,r)):n}function g(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function m(e){return e?e.key:null}function b(e){return e.currentTarget.events[e.type](e)}function N(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var u in"string"==typeof r&&(r=e.style.cssText=""),h(r,t)){var l=null==t||null==t[u]?"":t[u];"-"===u[0]?e.style.setProperty(u,l):e.style[u]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,b):e.removeEventListener(n,b)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function j(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}({currentPage:2},t.n(o).a,e=>r("div",{},[u(e.currentPage),r("h1",{},["Proportion of twits including pet emojis, by country","Hashtags associated with each pet emoji","Comparative usage of choosen pet emojis"][e.currentPage])]),document.body)}]);