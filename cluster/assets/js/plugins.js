/* Stag Cookie Reader*/
var stagCookies={getItem:function(a){if(!a||!this.hasItem(a)){return null}return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))},setItem:function(d,g,c,b,a,e){if(!d||/^(?:expires|max\-age|path|domain|secure)$/i.test(d)){return}var f="";if(c){switch(c.constructor){case Number:f=c===Infinity?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+c;break;case String:f="; expires="+c;break;case Date:f="; expires="+c.toGMTString();break}}document.cookie=escape(d)+"="+escape(g)+f+(a?"; domain="+a:"")+(b?"; path="+b:"")+(e?"; secure":"")},removeItem:function(b,a){if(!b||!this.hasItem(b)){return}document.cookie=escape(b)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(a?"; path="+a:"")},hasItem:function(a){return(new RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)},keys:function(){var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);for(var b=0;b<a.length;b++){a[b]=unescape(a[b])}return a}};

/* Retina.js */
(function(){var i=(typeof exports=="undefined"?window:exports);var e={check_mime_type:true};i.Retina=f;function f(){}f.configure=function(l){if(l==null){l={}}for(var m in l){e[m]=l[m]}};f.init=function(l){if(l==null){l=i}var m=l.onload||new Function;l.onload=function(){var n=document.getElementsByTagName("img"),o=[],p,q;for(p=0;p<n.length;p++){q=n[p];o.push(new j(q))}m()}};f.isRetina=function(){var l="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(i.devicePixelRatio>1){return true}if(i.matchMedia&&i.matchMedia(l).matches){return true}return false};i.RetinaImagePath=d;function d(l){this.path=l;this.at_2x_path=l.replace(/\.\w+$/,function(m){return"@2x"+m})}var b,c,a;if(localStorage){if(localStorage.retinajs_confirmed_paths){try{d.confirmed_paths=JSON.parse(localStorage.retinajs_confirmed_paths)}catch(g){d.confirmed_paths={}}}else{d.confirmed_paths={}}if(localStorage.retinajs_skip_paths){try{d.skip_paths=JSON.parse(localStorage.retinajs_skip_paths)}catch(g){d.skip_paths={}}}else{d.skip_paths={}}b=false;c=function h(){if(!b){b=true;setTimeout(a,10)}};a=function k(){if(localStorage){try{localStorage.retinajs_confirmed_paths=JSON.stringify(d.confirmed_paths);localStorage.retinajs_skip_paths=JSON.stringify(d.skip_paths)}catch(l){c=a=function(){}}}b=false}}else{d.confirmed_paths={};d.skip_paths={};c=a=function(){}}d.prototype.is_external=function(){return !!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};d.prototype.check_2x_variant=function(n){var l,m=this;if(this.is_external()){return n(false)}else{if(d.skip_paths[this.at_2x_path]){return n(false)}else{if(d.confirmed_paths[this.at_2x_path]){return n(true)}else{l=new XMLHttpRequest;l.open("HEAD",this.at_2x_path);l.onreadystatechange=function(){if(l.readyState!=4){return n(false)}if(l.status>=200&&l.status<=399){if(e.check_mime_type){var o=l.getResponseHeader("Content-Type");if(o==null||!o.match(/^image/i)){d.skip_paths[m.at_2x_path]=1;c();return n(false)}}d.confirmed_paths[m.at_2x_path]=1;c();return n(true)}else{d.skip_paths[m.at_2x_path]=1;c();return n(false)}};l.send()}}}};function j(l){this.el=l;this.path=new d(this.el.getAttribute("src"));var m=this;this.path.check_2x_variant(function(n){if(n){m.swap()}})}i.RetinaImage=j;j.prototype.swap=function(n){if(typeof n=="undefined"){n=this.path.at_2x_path}var l=this;function m(){if(!l.el.complete){setTimeout(m,5)}else{l.el.setAttribute("width",l.el.offsetWidth);l.el.setAttribute("height",l.el.offsetHeight);l.el.setAttribute("src",n)}}m()};if(f.isRetina()){f.init(i)}})();

/* Twitter Feeds --------------------------------------------------------- */
function stag_format_twitter(c){var a=[];for(var d=0;d<c.length;d++){var e=c[d].user.screen_name;var b=c[d].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(f){return'<a href="'+f+'">'+f+"</a>"}).replace(/\B@([_a-z0-9]+)/ig,function(f){return f.charAt(0)+'<a href="http://twitter.com/'+f.substring(1)+'">'+f.substring(1)+"</a>"});a.push("<li><span>"+b+'</span><div class="time"><a href="http://twitter.com/'+e+"/statuses/"+c[d].id_str+'">'+relative_time(c[d].created_at)+"</a></div></li>")}return a.join("")}function relative_time(c){var b=c.split(" ");c=b[1]+" "+b[2]+", "+b[5]+" "+b[3];var a=Date.parse(c);var d=(arguments.length>1)?arguments[1]:new Date();var e=parseInt((d.getTime()-a)/1000);e=e+(d.getTimezoneOffset()*60);if(e<60){return"less than a minute ago"}else{if(e<120){return"1 min ago"}else{if(e<(60*60)){return(parseInt(e/60)).toString()+" minutes ago"}else{if(e<(120*60)){return"60 mins ago"}else{if(e<(24*60*60)){return(parseInt(e/3600)).toString()+" hours ago"}else{if(e<(48*60*60)){return"1 day ago"}else{return(parseInt(e/86400)).toString()+" days ago"}}}}}}};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data));l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r){return n.stringify(t.tokenize(e,r))},tokenize:function(e,n){var r=t.Token,i=[e],s=n.rest;if(s){for(var o in s)n[o]=s[o];delete n.rest}e:for(var o in n){if(!n.hasOwnProperty(o)||!n[o])continue;var u=n[o],a=u.inside,f=!!u.lookbehind||0;u=u.pattern||u;for(var l=0;l<i.length;l++){var c=i[l];if(i.length>e.length)break e;if(c instanceof r)continue;u.lastIndex=0;var h=u.exec(c);if(h){f&&(f=h[1].length);var p=h.index-1+f,h=h[0].slice(f),d=h.length,v=p+d,m=c.slice(0,p+1),g=c.slice(v+1),y=[l,1];m&&y.push(m);var b=new r(o,a?t.tokenize(h,a):h);y.push(b);g&&y.push(g);Array.prototype.splice.apply(i,y)}}}return i},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(n.stringify).join("");var r={type:e.type,content:n.stringify(e.content),tag:"span",classes:["token",e.type],attributes:{}};r.type=="comment"&&(r.attributes.spellcheck="true");t.hooks.run("wrap",r);var i="";for(var s in r.attributes)i+=s+'="'+(r.attributes[s]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+i+">"+r.content+"</"+r.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});;
(function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function n(e,t,n){var r=t.replace(/\s+/g,"").split(","),i=+e.getAttribute("data-line-offset")||0,s=parseFloat(getComputedStyle(e).lineHeight);for(var o=0,u;u=r[o++];){u=u.split("-");var a=+u[0],f=+u[1]||a,l=document.createElement("div");l.textContent=Array(f-a+2).join(" \r\n");l.className=(n||"")+" line-highlight";l.setAttribute("data-start",a);f>a&&l.setAttribute("data-end",f);l.style.top=(a-i-1)*s+"px";(e.querySelector("code")||e).appendChild(l)}}function r(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var r=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(!r||document.getElementById(t))return;var i=t.slice(0,t.lastIndexOf(".")),s=document.getElementById(i);if(!s)return;s.hasAttribute("data-line")||s.setAttribute("data-line","");n(s,r,"temporary ");document.querySelector(".temporary.line-highlight").scrollIntoView()}if(!window.Prism)return;var t=crlf=/\r?\n|\r/g,i=0;Prism.hooks.add("after-highlight",function(t){var s=t.element.parentNode,o=s&&s.getAttribute("data-line");if(!s||!o||!/pre/i.test(s.nodeName))return;clearTimeout(i);e(".line-highlight",s).forEach(function(e){e.parentNode.removeChild(e)});n(s,o);i=setTimeout(r,1)});addEventListener("hashchange",r)})();;
(function(){if(!self.Prism)return;var e=/\b([a-z]{3,7}:\/\/|tel:)[\w-+%~/.]+/,t=/\b\S+@[\w.]+[a-z]{2}/,n=/\[([^\]]+)]\(([^)]+)\)/,r=["comment","url","attr-value","string"];for(var i in Prism.languages){var s=Prism.languages[i];Prism.languages.DFS(s,function(i,s){if(r.indexOf(i)>-1){s.pattern||(s=this[i]={pattern:s});s.inside=s.inside||{};i=="comment"&&(s.inside["md-link"]=n);s.inside["url-link"]=e;s.inside["email-link"]=t}});s["url-link"]=e;s["email-link"]=t}Prism.hooks.add("wrap",function(e){if(/-link$/.test(e.type)){e.tag="a";var t=e.content;if(e.type=="email-link")t="mailto:"+t;else if(e.type=="md-link"){var r=e.content.match(n);t=r[2];e.content=r[1]}e.attributes.href=t}})})();;