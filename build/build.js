!function e(n,t,a){function r(o,s){if(!t[o]){if(!n[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[o]={exports:{}};n[o][0].call(u.exports,function(e){var t=n[o][1][e];return r(t||e)},u,u.exports,e,n,t,a)}return t[o].exports}for(var i="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,n,t){n.exports=function(e){return function(n){var t,a,r=n.slides.map(function(n){return[].slice.call(n.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),i=function(e,n){t=e,a=n,r.forEach(function(t,a){t.forEach(function(t,r){t.classList.add("bespoke-bullet"),a<e||a===e&&r<=n?(t.classList.add("bespoke-bullet-active"),t.classList.remove("bespoke-bullet-inactive")):(t.classList.add("bespoke-bullet-inactive"),t.classList.remove("bespoke-bullet-active")),a===e&&r===n?t.classList.add("bespoke-bullet-current"):t.classList.remove("bespoke-bullet-current")})})},o=function(e){return void 0!==r[t][a+e]};n.on("next",function(){var e=t+1;if(o(1))return i(t,a+1),!1;r[e]&&i(e,0)}),n.on("prev",function(){var e=t-1;if(o(-1))return i(t,a-1),!1;r[e]&&i(e,r[e].length-1)}),n.on("slide",function(e){i(e.index,0)}),i(0,0)}}},{}],2:[function(e,n,t){n.exports=function(){return function(e){var n=function(e,n){e.classList.add("bespoke-"+n)},t=function(e,n){e.className=e.className.replace(new RegExp("bespoke-"+n+"(\\s|$)","g")," ").trim()},a=function(a,r){var i=e.slides[e.slide()],o=r-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(t.bind(null,a)),a!==i&&["inactive",s,s+"-"+Math.abs(o)].map(n.bind(null,a))};n(e.parent,"parent"),e.slides.map(function(e){n(e,"slide")}),e.on("activate",function(r){e.slides.map(a),n(r.slide,"active"),t(r.slide,"inactive")})}}},{}],3:[function(e,n,t){n.exports=function(e){return function(n){var t=(e=e&&(e.object||e.name||e.scope)?e:{object:e}).object,a=e.name||"bespoke",r=e.scope||window;t?r[a]=t:t=r[a]?r[a]:r[a]={},(Array.isArray(t.decks)?t.decks:t.decks=[]).push(t.deck=n),n.on("destroy",function(){var e=t.decks.indexOf(n);e>=0&&t.decks.splice(e,1),delete t.deck})}}},{}],4:[function(e,n,t){n.exports=function(){return function(e){var n=function(n){var t=-1<n&&n<e.slides.length?n:0;t!==e.slide()&&e.slide(t)},t=function(){var t=window.location.hash.slice(1),a=parseInt(t,10);t&&(a?n(a-1):e.slides.forEach(function(e,a){e.getAttribute("data-bespoke-hash")!==t&&e.id!==t||n(a)}))};setTimeout(function(){t(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=n||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,n,t){n.exports=function(){return function(e){var n=/\/\/player\.vimeo\.com\//,t=/\/\/www\.youtube\.com\/embed\//,a="command",r="file:"===location.protocol,i=function(e,n,t,a){for(var r=-1,i=n.querySelectorAll(e+(a||"")),o=i.length;++r<o;t(i[r]));},o=function(e,n){e.contentWindow.postMessage(JSON.stringify(n),"*")},s=function(e){var i=e.hasAttribute("data-rewind"),s=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)i&&e.readyState&&(e.currentTime=0),s>=0&&(e.volume=s/10),e.play();else if(t.test(e.src))i&&o(e,{event:a,func:"seekTo",args:[0]}),s>=0&&o(e,{event:a,func:"setVolume",args:[10*s]}),o(e,{event:a,func:"playVideo"});else if(n.test(e.src)){if(r)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");i&&o(e,{method:"seekTo",value:0}),s>=0&&o(e,{method:"setVolume",value:s/10}),o(e,{method:"play"})}},l=function(e){e.pause?e.pause():t.test(e.src)?o(e,{event:a,func:"pauseVideo"}):!r&&n.test(e.src)&&o(e,{method:"pause"})},c=function(e,n){e[n||"src"]=e.getAttribute(n||"src")},u=function(e){try{return e.contentDocument.rootElement}catch(e){}},d=function(e,n){(u(e)||e).classList[n||"add"]("active")},p=function(n){n.hasAttribute("data-reload")?c(n,"data"):u(n)?d(n):n.onload=function(){e.slides[e.slide()].contains(n)&&d(n)}},f=function(e){d(e,"remove")},g=i.bind(null,"audio,video,iframe"),m=i.bind(null,'object[type="image/svg+xml"]'),h=function(e){g(e,s)},v=function(e){g(e,l)},b=function(e){m(e,p)},y=function(e){m(e,f,":not([data-reload])")};e.on("activate",function(e){if(e.preview)return v(e.slide);h(e.slide),b(e.slide),i('img[data-reload][src$=".gif"]',e.slide,c)}),e.on("deactivate",function(e){v(e.slide),y(e.slide)})}}},{}],6:[function(e,n,t){n.exports=function(){return function(e){var n="keydown",t=function(e,n){return e.ctrlKey||e.shiftKey&&(36===n||35===n)||e.altKey||e.metaKey},a=function(n){if(!t(n,n.which))switch(n.which){case 32:return(n.shiftKey?e.prev:e.next)();case 39:case 34:case 76:return e.next();case 37:case 33:case 72:return e.prev();case 36:return e.slide(0);case 35:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(n,a)}),document.addEventListener(n,a)}}},{}],7:[function(e,n,t){n.exports=function(e){return function(n){var t=e||{},a="touchstart",r="touchmove",i="addEventListener",o="removeEventListener",s=n.parent,l=null,c=null,u="page"+("y"===t.axis?"Y":"X"),d="number"==typeof t.threshold?t.threshold:50/window.devicePixelRatio,p=function(e){l=1===e.touches.length?e.touches[0][u]:null},f=function(e){if(null!==l)return void 0===l?e.preventDefault():void(Math.abs(c=e.touches[0][u]-l)>d&&((c>0?n.prev:n.next)(),l=e.preventDefault()))};n.on("destroy",function(){s[o](a,p),s[o](r,f)}),s[i](a,p),s[i](r,f)}}},{}],8:[function(e,n,t){n.exports=function(n){n=n||{};var t=e("bespoke-nav-kbd")(n.kbd),a=e("bespoke-nav-touch")(n.touch);return function(e){t(e),a(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],9:[function(e,n,t){(function(a){!function(e){if("object"==typeof t&&void 0!==n)n.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;(r=(r=(r="undefined"!=typeof window?window:void 0!==a?a:"undefined"!=typeof self?self:this).bespoke||(r.bespoke={})).plugins||(r.plugins={})).prism=e()}}(function(){return function n(t,a,r){function i(s,l){if(!a[s]){if(!t[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=a[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return i(n||e)},d,d.exports,n,t,a,r)}return a[s].exports}for(var o="function"==typeof e&&e,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,n,t){var a=e("insert-css"),r=e("prism-themes/themes/prism-ghcolors.css");n.exports=function(){var n=e("prismjs");return e("prismjs/plugins/unescaped-markup/prism-unescaped-markup"),e("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"),a(r,{prepend:!0}),function(){n.highlightAll()}}},{"insert-css":2,"prism-themes/themes/prism-ghcolors.css":3,prismjs:6,"prismjs/plugins/normalize-whitespace/prism-normalize-whitespace":4,"prismjs/plugins/unescaped-markup/prism-unescaped-markup":5}],2:[function(e,n,t){var a={};n.exports=function(e,n){if(!a[e]){a[e]=!0;var t=document.createElement("style");t.setAttribute("type","text/css"),"textContent"in t?t.textContent=e:t.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];n&&n.prepend?r.insertBefore(t,r.childNodes[0]):r.appendChild(t)}}},{}],3:[function(e,n,t){n.exports='/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n    color: #393A34;\n    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}'},{}],4:[function(e,n,t){!function(){function e(e){this.defaults=a({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}if("undefined"!=typeof self&&self.Prism&&self.document){var a=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=a(this.defaults,e)},normalize:function(e,t){t=a(this.defaults,t);for(var r in t){var i=n(r);"normalize"!==r&&"setDefaults"!==i&&t[r]&&this[i]&&(e=this[i].call(this,e,t[r]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var a=e.split("\n"),r=0;r<a.length;++r)if(!(t(a[r])<=n)){for(var i=a[r].split(/(\s+)/g),o=0,s=0;s<i.length;++s){var l=t(i[s]);(o+=l)>n&&(i[s]="\n"+i[s],o=l)}a[r]=i.join("")}return a.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-highlight",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&!1===e.settings["whitespace-normalization"]||t.test(n.className)||t.test(e.element.className))){for(var a=n.childNodes,r="",i="",o=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<a.length;++l){var c=a[l];c==e.element?o=!0:"#text"===c.nodeName&&(o?i+=c.nodeValue:r+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=r+e.element.innerHTML+i;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=r+e.code+i,e.code=s.normalize(e.code,e.settings)}})}}()},{}],5:[function(e,n,t){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){if("markup"==e.language){if(e.element.matches("script[type='text/plain']")){var n=document.createElement("code");return(t=document.createElement("pre")).className=n.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),n.textContent=e.code,t.appendChild(n),e.element.parentNode.replaceChild(t,e.element),void(e.element=n)}var t=e.element.parentNode;!e.code&&t&&"pre"==t.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)}}))},{}],6:[function(e,n,t){(function(e){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,n=0,a=t.Prism={util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e){switch(a.util.type(e)){case"Object":var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]=a.util.clone(e[t]));return n;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e];if(2==arguments.length){t=arguments[1];for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);return i}var s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var o in t)t.hasOwnProperty(o)&&(s[o]=t[o]);s[l]=i[l]}return a.languages.DFS(a.languages,function(n,t){t===r[e]&&n!=e&&(this[n]=s)}),r[e]=s},DFS:function(e,n,t,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],n,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],n,null,r)))}},plugins:{},highlightAll:function(e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",t);for(var r,i=t.elements||document.querySelectorAll(t.selector),o=0;r=i[o++];)a.highlightElement(r,!0===e,t.callback)},highlightElement:function(n,r,i){for(var o,s,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1].toLowerCase(),s=a.languages[o]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};if(a.hooks.run("before-sanity-check",c),c.code&&c.grammar)if(a.hooks.run("before-highlight",c),r&&t.Worker){var u=new Worker(a.filename);u.onmessage=function(e){c.highlightedCode=e.data,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),a.hooks.run("after-highlight",c),a.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=a.highlight(c.code,c.grammar,c.language),a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(n),a.hooks.run("after-highlight",c),a.hooks.run("complete",c);else a.hooks.run("complete",c)},highlight:function(e,n,t){var i=a.tokenize(e,n);return r.stringify(a.util.encode(i),t)},tokenize:function(e,n,t){var r=a.Token,i=[e],o=n.rest;if(o){for(var s in o)n[s]=o[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===a.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],d=u.inside,p=!!u.lookbehind,f=!!u.greedy,g=0,m=u.alias;u=u.pattern||u;for(var h=0;h<i.length;h++){var v=i[h];if(i.length>e.length)break e;if(!(v instanceof r)){u.lastIndex=0;var b=u.exec(v),y=1;if(!b&&f&&h!=i.length-1){var k=i[h+1].matchedStr||i[h+1],w=v+k;if(h<i.length-2&&(w+=i[h+2].matchedStr||i[h+2]),u.lastIndex=0,!(b=u.exec(w)))continue;if((A=b.index+(p?b[1].length:0))>=v.length)continue;var x=b.index+b[0].length,N=v.length+k.length;if(y=3,x<=N){if(i[h+1].greedy)continue;y=2,w=w.slice(0,N)}v=w}if(b){p&&(g=b[1].length);var A=b.index+g,x=A+(b=b[0].slice(g)).length,C=v.slice(0,A),E=v.slice(x),j=[h,y];C&&j.push(C);var z=new r(s,d?a.tokenize(b,d):b,m,b,f);j.push(z),E&&j.push(E),Array.prototype.splice.apply(i,j)}}}}}return i},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}}},r=a.Token=function(e,n,t,a,r){this.type=e,this.content=n,this.alias=t,this.matchedStr=a||null,this.greedy=!!r};if(r.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(t){return r.stringify(t,n,e)}).join("");var i={type:e.type,content:r.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var o="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,o)}a.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=(s?" ":"")+l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(t.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code,o=n.immediateClose;t.postMessage(a.highlight(i,a.languages[r],r)),o&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(a.highlightAll,0):document.addEventListener("DOMContentLoaded",a.highlightAll))),t.Prism}();void 0!==n&&n.exports&&(n.exports=a),void 0!==e&&(e.Prism=a),a.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css"}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript"}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,r=n.getAttribute("data-src"),i=n,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!o.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(o)||[,""])[1]),!t){var s=(r.match(/\.(\w+)$/)||[,""])[1];t=e[s]||s}var l=document.createElement("code");l.className="language-"+t,n.textContent="",l.textContent="Loading…",n.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,void 0!==a?a:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,n,t){n.exports=function(e){return function(n){var t=n.parent,a=n.slides[0],r=a.offsetHeight,i=a.offsetWidth,o="zoom"===e||"zoom"in t.style&&"transform"!==e,s=o?n.slides:n.slides.map(function(e){var n=document.createElement("div");return n.className="bespoke-scale-parent",e.parentNode.insertBefore(n,e),n.appendChild(e),n}),l="Moz Webkit O ms".split(" ").reduce(function(e,n){return n+"Transform"in t.style?n+"Transform":e},"Transform".toLowerCase()),c=o?function(e,n){n.style.zoom=e}:function(e,n){n.style[l]="scale("+e+")"},u=function(){var e=t.offsetWidth/i,n=t.offsetHeight/r;s.forEach(c.bind(null,Math.min(e,n)))};window.addEventListener("resize",u),u()}}},{}],11:[function(e,n,t){n.exports={from:function(e,n){var t=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),a=[].filter.call("string"==typeof e.slides?t.querySelectorAll(e.slides):e.slides||t.children,function(e){return"SCRIPT"!==e.nodeName}),r=a[0],i={},o=function(e,n){a[e]&&(c("deactivate",u(r,n)),r=a[e],c("activate",u(r,n)))},s=function(e,n){var t=a.indexOf(r)+e;c(e>0?"next":"prev",u(r,n))&&o(t,n)},l=function(e,n){i[e]=(i[e]||[]).filter(function(e){return e!==n})},c=function(e,n){return(i[e]||[]).reduce(function(e,t){return e&&!1!==t(n)},!0)},u=function(e,n){return n=n||{},n.index=a.indexOf(e),n.slide=e,n},d={on:function(e,n){return(i[e]||(i[e]=[])).push(n),l.bind(null,e,n)},off:l,fire:c,slide:function(e,n){if(!arguments.length)return a.indexOf(r);c("slide",u(a[e],n))&&o(e,n)},next:s.bind(null,1),prev:s.bind(null,-1),parent:t,slides:a};return(n||[]).forEach(function(e){e(d)}),o(0),d}}},{}],12:[function(e,n,t){var a=e("bespoke"),r=e("bespoke-classes"),i=e("bespoke-nav"),o=e("bespoke-scale"),s=e("bespoke-bullets"),l=e("bespoke-hash"),c=e("bespoke-prism"),u=e("bespoke-multimedia"),d=e("bespoke-extern");a.from({parent:"article.deck",slides:"section"},[r(),i(),o(),s(".build, .build-items > *:not(.build-items)"),l(),c(),u(),d(a)])},{bespoke:11,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-hash":4,"bespoke-multimedia":5,"bespoke-nav":8,"bespoke-prism":9,"bespoke-scale":10}]},{},[12]);