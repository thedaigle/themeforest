(function(e){e.BigVideo=function(t){function S(){var t=e(window).width();var n=e(window).height();var r=t/n;if(r<a){if(y==="video"){i.width(n*a).height(n);e(s).css("top",0).css("left",-(n*a-t)/2).css("height",n);e(s+"_html5_api").css("width",n*a);e(s+"_flash_api").css("width",n*a).css("height",n)}else{e("#big-video-image").css({width:"auto",height:n,top:0,left:-(n*a-t)/2})}}else{if(y==="video"){i.width(t).height(t/a);e(s).css("top",-(t/a-n)/2).css("left",0).css("height",t/a);e(s+"_html5_api").css("width","100%");e(s+"_flash_api").css("width",t).css("height",t/a)}else{e("#big-video-image").css({width:t,height:"auto",top:-(t/a-n)/2,left:0})}}}function x(){var t='<div id="big-video-control-container">';t+='<div id="big-video-control">';t+='<a href="#" id="big-video-control-play"></a>';t+='<div id="big-video-control-middle">';t+='<div id="big-video-control-bar">';t+='<div id="big-video-control-bound-left"></div>';t+='<div id="big-video-control-progress"></div>';t+='<div id="big-video-control-track"></div>';t+='<div id="big-video-control-bound-right"></div>';t+="</div>";t+="</div>";t+='<div id="big-video-control-timer"></div>';t+="</div>";t+="</div>";b.container.append(t);e("#big-video-control-container").css("display","none");e("#big-video-control-track").slider({animate:true,step:.01,slide:function(t,n){h=true;e("#big-video-control-progress").css("width",n.value-.16+"%");i.currentTime(n.value/100*i.duration())},stop:function(e,t){h=false;i.currentTime(t.value/100*i.duration())}});e("#big-video-control-bar").click(function(t){i.currentTime(t.offsetX/e(this).width()*i.duration())});e("#big-video-control-play").click(function(e){e.preventDefault();T("toggle")});i.on("timeupdate",function(){if(!h&&i.currentTime()/i.duration()){var t=i.currentTime();var n=Math.floor(t/60);var r=Math.floor(t)-60*n;if(r<10)r="0"+r;var s=i.currentTime()/i.duration()*100;e("#big-video-control-track").slider("value",s);e("#big-video-control-progress").css("width",s-.16+"%");e("#big-video-control-timer").text(n+":"+r+"/"+f)}})}function T(t){var n=t||"toggle";if(n==="toggle")n=p?"pause":"play";if(n==="pause"){i.pause();e("#big-video-control-play").css("background-position","-16px");p=false}else if(n==="play"){i.play();e("#big-video-control-play").css("background-position","0");p=true}}function N(){i.play();b.container.off("click",N)}function C(){g++;if(g===m.length)g=0;k(m[g])}function k(t){e(s).css("display","block");y="video";i.src(t);p=true;if(v){e("#big-video-control-container").css("display","none");i.ready(function(){i.volume(0)});doLoop=true}else{e("#big-video-control-container").css("display","block");i.ready(function(){i.volume(l)});doLoop=false}e("#big-video-image").css("display","none");e(s).css("display","block")}function L(t){e("#big-video-image").remove();i.pause();e(s).css("display","none");e("#big-video-control-container").css("display","none");y="image";var n=e('<img id="big-video-image" src='+t+" />");o.append(n);e("#big-video-image").imagesLoaded(function(){a=e("#big-video-image").width()/e("#big-video-image").height();S()})}var n={useFlashForFirefox:true,forceAutoplay:false,controls:true,doLoop:false,container:e("body")};var r=this,i,s="#big-video-vid",o=e('<div id="big-video-wrap"></div>'),u=e(""),a=16/9,f=0,l=.8,c=false,h=false,p=false,d=false,v=false,m=[],g,y;var b=e.extend({},n,t);var w=navigator.userAgent.toLowerCase();var E=w.indexOf("firefox")!=-1;if(b.useFlashForFirefox&&E){VideoJS.options.techOrder=["flash"]}r.init=function(){if(!c){b.container.prepend(o);var t=b.forceAutoplay?"autoplay":"";i=e('<video id="'+s.substr(1)+'" class="video-js vjs-default-skin" preload="auto" data-setup="{}" '+t+" webkit-playsinline></video>");i.css("position","absolute");o.append(i);i=_V_(s.substr(1),{controls:false,autoplay:true,preload:"auto"});if(b.controls)x();S();c=true;p=false;if(b.forceAutoplay){e("body").on("click",N)}e("#big-video-vid_flash_api").attr("scale","noborder").attr("width","100%").attr("height","100%");e(window).resize(function(){S()});i.on("loadedmetadata",function(t){if(document.getElementById("big-video-vid_flash_api")){a=document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth")/document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight")}else{a=e("#big-video-vid_html5_api").prop("videoWidth")/e("#big-video-vid_html5_api").prop("videoHeight")}S();var n=Math.round(i.duration());var r=Math.floor(n/60);var s=n-r*60;if(s<10)s="0"+s;f=r+":"+s});i.on("ended",function(){if(b.doLoop){i.currentTime(0);i.play()}if(d){C()}})}};r.show=function(e,t){if(t===undefined)t={};v=t.ambient===true;if(v||t.doLoop)b.doLoop=true;if(typeof e==="string"){var n=e.substring(e.lastIndexOf(".")+1);if(n==="jpg"||n==="gif"||n==="png"){L(e)}else{if(t.altSource&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1){e=t.altSource}k(e);d=false}}else{m=e;g=0;k(m[g]);d=true}};r.getPlayer=function(){return i};r.triggerPlayer=function(e){T(e)}}})(jQuery)