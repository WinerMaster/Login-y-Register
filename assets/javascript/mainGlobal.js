/**
 * Todos los derechos reservados © Daniel Muñoz. 2023
 * github: https://github.com/WinerMaster
 */
!function(t){var e=t.document,n={}.toString,r=function(t){return"[object Array]"===n.call(t)},i=function(t){return[].slice.call(t)},o=function(t){return new o.fn.that(t)};o.fn=o.prototype={constructor:o,length:0};var s,l=function(t,e){return!!e.test(t)},a=o.fn.that=function(t,e){var r,o;return t?(e=e||s,l(n.call(t),/html/i)?((r=t)&&(this[0]=r,this.length=1),this):l(t,/^./)?((r=document.querySelectorAll(t))&&(this[0]=i(r),this.length=1),this):l(t,/^#/)?((r=document.getElementById(t))&&(this[0]=r,this.length=1),this):(o=t,void("[object object]"===n.call(o)&&(r=new Array(t))&&(this[0]=r,this.length=1)))):this};a.prototype=o.fn,s=o,o.extend=function(t,e,n){var r=[],i=0,o=n?t:t.prototype;for(var s in e)e.hasOwnProperty(s)&&r.push(s);for(;i<r.length;){var l=e[r[i]];o[r[i]]=l,i++}},o.extend(a,{sty:function(t){for(var e=r(this[0])?this[0]:this,n=0;n<e.length;n++)if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&(e[n].style[i]=t[i]);return this},child:function(t){return(r(this[0])?this[0][0]:this[0]).appendChild(t),this},removeChild:function(t){return(r(this[0])?this[0][0]:this[0]).removeChild(t),this},each:function(t){for(var e=0,n=r(this[0])?this[0]:this;e<n.length;e++){var i=n[e];if(t.call(i,i,e,n),e==n.length-1)break}},add:function(t){for(var e=r(this[0])?this[0]:this,n=0,i=e.length;n<i;n++){if(e[n].classList.add(t),n<i-1)break}return this},remove:function(t){for(var e=r(this[0])?this[0]:this,n=0,i=e.length;n<i;n++){if(e[n].classList.remove(t),n<i-1)break}return this},toggle:function(t){for(var e=r(this[0])?this[0]:this,n=0,i=e.length;n<i;){var o=e[n];o.className.includes(t)?o.classList.remove(t):o.classList.add(t),n++}},event:function(t,e,n){r(this[0])&&this[0];this.each((function(){!function(t,n,r){t.addEventListener(n,(function(t){e.call(this,t)}),r)}(this,t,n)}))},on:function(t,e){var n=r(this[0])?this[0]:this;t="on"+t;for(var i=function(t){e.call(this,t)},o=0;o<n.length&&(n[o][t]=i,o!==n.length-1);o++);},getAttr:function(t){for(var e=r(this[0])?this[0]:this,n=[],i=0;i<e.length;i++){var o=e[i].getAttribute(t);o&&n.push(o)}return n.length>1?n:n[0]}}),o.extend(o,{each:function(t,e){var o=0,s=t.length;if("[object NodeList]"==n.call(t)&&(t=i(t)),!r(t))throw Error("Isn't Array");for(;o<s;){var l=t[o];e.call(l,l,o,t),o++}},scroll:function(e){t.addEventListener("scroll",(function(){var t=this.scrollY,n=this.scrollX;e.call({x:n,y:t},t,n)}))},form:function(t){var n=e.getElementById(t);if(!n)return new Error("ID don't exist");for(var r={},o=i(n.querySelectorAll("input[name]")),s=0;s<o.length;s++)r[o[s].getAttribute("name")]=o[s].value;return JSON.stringify(r)},query:function(t){if("string"==typeof t)return e.querySelector(t)},ajax:function(t,e){var{method:n,ready:r,send:i}=e,o=new XMLHttpRequest({"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"});o.open(n,t),o.onload=function(t){o.readyState===XMLHttpRequest.DONE&&200===o.status&&r.call(this,this,t)};o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(i)},href:function(t,n){var r=e.createElement("a");r.href=t,n?(r.target="_blank",r.click()):r.click()},cokie:function(t){(t=t.split("="))[1]=t[1].split("").join("$%$"),e.cookie=t.join("=")},getCokies:function(){for(var t=e.cookie.split("; "),n={},r=[],i=0;i<t.length;i++){var o=t[i];if(o.includes("=")){var s=o.split("=");n[s[0]]=s[1]}else r.push(o),n.values=r}return n},scronim:function(){function t(){}var e=t.prototype;return e.show=function(t,e){if(!("IntersectionObserver"in window))return"Error";for(var n=function(t,e){if("string"!=typeof e)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);else t.style=e},r=this.getElements(t),i=this.getStyles(e),o=e.delay,s=0;s<r.length;s++){var l=r[s];n(l,i)}null==o&&(o=0);var a=new IntersectionObserver((function(t){for(var e=0;e<t.length;e++){var r=t[e],i=null!=o[e]?o[e]:o;if(r.isIntersecting&&n(r.target,{visibility:"visible",opacity:1,transform:"translate(0,0)",transition:i+"s"}),e===t.length-1)break}}),{root:null,rootMargin:"0px",threshold:.5});setTimeout((function(){for(var t=0;t<r.length;t++)a.observe(r[t])}),1e3)},e.getStyles=function(t){var e=this.getDirection(t);return"visibility: visible; opacity: 0;".concat(e)},e.getElements=function(t){if(Array.isArray(t)||"string"!=typeof t)return t;return t.split(",").map((function(t){return e=t,document.querySelector(e);var e}))},e.getDirection=function(t){var e=t.origin,n=t.move,r=function(t){return"transform: translate("+(null!=t[0]?t[0]:0)+"px,"+(null!=t[1]?t[1]:0)+"px);"};return"right"==e?e=r([n]):"left"==e?e=r(["-"+n]):"top"==e?e=r([,"-"+n]):"bottom"==e&&(e=r([,n])),e},t.prototype}()},1),o.elem=function(t,n){var r=null!=n.childs&&n.childs,i=function(t,n){return function(t,e){for(var n in e)if(e.hasOwnProperty(n)&&!/childs/i.test(n)){var r=e[n];if(n in t)t[n]||(t[n]=r)}return t}(e.createElement(t),n)},o=i(t,n);if(r)for(var s=r.length;0<s;){var l=r[0],a=i(l.name,l.params);if(o.appendChild(a),0==s-1)break}return o},null==window.da&&(window.da=o)}("undefined"!=typeof window?window:this);