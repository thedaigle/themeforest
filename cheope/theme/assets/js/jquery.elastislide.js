(function(l,c,f){c.fn.touchwipe=function(a){var b={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:!0};a&&c.extend(b,a);this.each(function(){function a(){this.removeEventListener("touchmove",c);e=null;f=!1}function c(d){b.preventDefaultEvents&&d.preventDefault();if(f){var h=e-d.touches[0].pageX;d=g-d.touches[0].pageY;Math.abs(h)>=b.min_move_x?(a(),0<h?b.wipeLeft():b.wipeRight()):Math.abs(d)>=b.min_move_y&&(a(),
    0<d?b.wipeDown():b.wipeUp())}}function d(a){1==a.touches.length&&(e=a.touches[0].pageX,g=a.touches[0].pageY,f=!0,this.addEventListener("touchmove",c,!1))}var e,g,f=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",d,!1)});return this};c.elastislide=function(a,b){this.$el=c(b);this._init(a)};c.elastislide.defaults={speed:450,easing:"",imageW:190,margin:3,border:2,minItems:1,current:0,infinite:!0,slideshowSpeed:2500,onClick:function(){return!1}};c.elastislide.prototype=
{_init:function(a){this.options=c.extend(!0,{},c.elastislide.defaults,a);this.$slider=c("ul:first",this.$el);this.$items=this.$slider.children("li");this.itemsCount=this.$items.length;this.$esCarousel=this.$slider.parent();this._validateOptions();this._configure();this._addControls();this._initEvents();this.$slider.show();this._slideToCurrent(!1)},_validateOptions:function(){0>this.options.speed&&(this.options.speed=450);0>this.options.margin&&(this.options.margin=4);0>this.options.border&&(this.options.border=
    1);if(1>this.options.minItems||this.options.minItems>this.itemsCount)this.options.minItems=1;this.options.current>this.itemsCount-1&&(this.options.current=0)},_configure:function(){this.current=this.options.current;this.visibleWidth=this.$esCarousel.width();this.visibleWidth<this.options.minItems*(this.options.imageW+2*this.options.border)+(this.options.minItems-1)*this.options.margin?(this._setDim((this.visibleWidth-(this.options.minItems-1)*this.options.margin)/this.options.minItems),this._setCurrentValues(),
    this.fitCount=this.options.minItems):(this._setDim(),this._setCurrentValues());this.$slider.css({width:this.sliderW})},_setDim:function(a){this.$items.css({marginRight:this.options.margin,width:a?a:this.options.imageW+2*this.options.border}).children("a").css({borderWidth:this.options.border})},_setCurrentValues:function(){this.itemW=this.$items.outerWidth(!0);this.sliderW=this.itemW*this.itemsCount;this.visibleWidth=this.$esCarousel.width();this.fitCount=this.options.minItems},_addControls:function(){this.$navNext=
    c('<span class="es-nav-next">Next</span>');this.$navPrev=c('<span class="es-nav-prev">Previous</span>');c('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)},_toggleControls:function(a,b){a&&b?1===b?"right"===a?this.$navNext.removeClass("disabled"):this.$navPrev.removeClass("disabled"):"right"===a?this.$navNext.addClass("disabled"):this.$navPrev.addClass("disabled"):(this.current===this.itemsCount-1||this.fitCount>=this.itemsCount)&&this.$navNext.addClass("disabled")},
    _initEvents:function(){var a=this,b=0;c(l).bind("resize.elastislide",function(c){a.options.infinite&&(clearInterval(b),b=setInterval(function(){a._slideInfinite("right")},a.options.slideshowSpeed));a._setCurrentValues();a.visibleWidth<a.options.minItems*(a.options.imageW+2*a.options.border)+(a.options.minItems-1)*a.options.margin?(a._setDim((a.visibleWidth-(a.options.minItems-1)*a.options.margin)/a.options.minItems),a._setCurrentValues(),a.fitCount=a.options.minItems):(a._setDim(),a._setCurrentValues());
        a.$slider.css({width:a.sliderW+10});clearTimeout(a.resetTimeout);a.resetTimeout=setTimeout(function(){a._slideToCurrent()},200)});this.$navNext.bind("click.elastislide",function(b){a.options.infinite?a._slideInfinite("right"):a._slide("right")});this.$navPrev.bind("click.elastislide",function(b){a.options.infinite?a._slideInfinite("left"):a._slide("left")});this.$items.bind("click.elastislide",function(b){a.options.onClick(c(this))});a.options.infinite&&(b=setInterval(function(){a._slideInfinite("right")},
        a.options.slideshowSpeed))},_slideInfinite:function(a,b,k,h){if(this.$slider.is(":animated"))return!1;var d=parseFloat(this.$slider.css("margin-left"));if(b===f){var e=this.fitCount*this.itemW;if(0>e)return!1;if("right"===a&&this.sliderW-(Math.abs(d)+e)<this.visibleWidth)for(d=0;d<this.fitCount;d++)this.$slider.css("margin-left","+="+this.itemW),this.$slider.append(this.$slider.children("li:first").clone(!0)),this.$slider.children("li:first").remove();else if("left"===a&&0>Math.abs(d)-e)for(d=0;d<
    this.fitCount;d++)this.$slider.css("margin-left","-="+this.itemW),this.$slider.prepend(this.$slider.children("li:last").clone(!0)),this.$slider.children("li:last").remove();"right"===a?b="-="+e:b="+="+e}else a=Math.abs(b),Math.max(this.sliderW,this.visibleWidth)-a<this.visibleWidth&&(b=-(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth),0!==b&&(b+=this.options.margin),this._toggleControls("right",-1),a=Math.abs(b)),this.fitCount<this.itemsCount?this._toggleControls("left",1):this._toggleControls("left",
    -1),Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth>a+this.options.margin?this._toggleControls("right",1):this._toggleControls("right",-1);c.fn.applyStyle=k===f?c.fn.animate:c.fn.css;this.$slider.applyStyle({marginLeft:b},c.extend(!0,[],{duration:this.options.speed,easing:this.options.easing,complete:function(){h&&h.call()}}))},_slide:function(a,b,k,h){if(this.$slider.is(":animated"))return!1;var d=parseFloat(this.$slider.css("margin-left"));if(b===f){var e=this.fitCount*this.itemW;if(0>
    e)return!1;if("right"===a&&this.sliderW-(Math.abs(d)+e)<this.visibleWidth)e=this.sliderW-(Math.abs(d)+this.visibleWidth)-this.options.margin,this._toggleControls("right",-1),this._toggleControls("left",1);else if("left"===a&&0>Math.abs(d)-e)e=Math.abs(d),this._toggleControls("left",-1),this._toggleControls("right",1);else{var g;"right"===a?g=Math.abs(d)+this.options.margin+Math.abs(e):g=Math.abs(d)-this.options.margin-Math.abs(e);0<g?this._toggleControls("left",1):this._toggleControls("left",-1);
    g<this.sliderW-this.visibleWidth?this._toggleControls("right",1):this._toggleControls("right",-1)}"right"===a?b="-="+e:b="+="+e}else g=Math.abs(b),Math.max(this.sliderW,this.visibleWidth)-g<this.visibleWidth&&(b=-(Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth),0!==b&&(b+=this.options.margin),this._toggleControls("right",-1),g=Math.abs(b)),0<g?this._toggleControls("left",1):this._toggleControls("left",-1),Math.max(this.sliderW,this.visibleWidth)-this.visibleWidth>g+this.options.margin?
    this._toggleControls("right",1):this._toggleControls("right",-1);c.fn.applyStyle=k===f?c.fn.animate:c.fn.css;this.$slider.applyStyle({marginLeft:b},c.extend(!0,[],{duration:this.options.speed,easing:this.options.easing,complete:function(){h&&h.call()}}))},_slideToCurrent:function(a){var b=this.current*this.itemW;this.options.infinite?this._slideInfinite("",-b,a):this._slide("",-b,a)},add:function(a,b){this.$items=this.$items.add(a);this.itemsCount=this.$items.length;this._setDim();this._setCurrentValues();
    this.$slider.css({width:this.sliderW});this._slideToCurrent();b&&b.call(a)},destroy:function(a){this._destroy(a)},_destroy:function(a){this.$el.unbind(".elastislide").removeData("elastislide");c(l).unbind(".elastislide");a&&a.call()}};var m=function(a){this.console&&console.error(a)};c.fn.elastislide=function(a){if("string"===typeof a){var b=Array.prototype.slice.call(arguments,1);this.each(function(){var f=c.data(this,"elastislide");f?c.isFunction(f[a])&&"_"!==a.charAt(0)?f[a].apply(f,b):m("no such method '"+
    a+"' for elastislide instance"):m("cannot call methods on elastislide prior to initialization; attempted to call method '"+a+"'")})}else this.each(function(){c.data(this,"elastislide")||c.data(this,"elastislide",new c.elastislide(a,this))});return this}})(window,jQuery);