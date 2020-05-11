/*!
 * jquery.marker-animation 1.4.22 - Marker animation jQuery plugin
 * Copyright (c) 2020 [object Object] - https://github.com/technote-space/jquery.marker-animation#readme
 * License: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?exports.MarkerAnimation=e(require("jquery")):t.MarkerAnimation=e(t.jQuery)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){var r,o,i;o=[n(0)],void 0===(i="function"==typeof(r=function(t){var e,n,r,o=[],i=document,a=window,c=i.documentElement;function u(){if(o.length){var r,u,s,f=0,l=t.map(o,(function(t){var e=t.data.selector,n=t.$element;return e?n.find(e):n}));for(e=e||((s={height:a.innerHeight,width:a.innerWidth}).height||!(r=i.compatMode)&&t.support.boxModel||(s={height:(u="CSS1Compat"===r?c:i.body).clientHeight,width:u.clientWidth}),s),n=n||{top:a.pageYOffset||c.scrollTop||i.body.scrollTop,left:a.pageXOffset||c.scrollLeft||i.body.scrollLeft};f<o.length;f++)if(t.contains(c,l[f][0])){var d=t(l[f]),p={height:d[0].offsetHeight,width:d[0].offsetWidth},g=d.offset(),h=d.data("inview");if(!n||!e)return;g.top+p.height>n.top&&g.top<n.top+e.height&&g.left+p.width>n.left&&g.left<n.left+e.width?h||d.data("inview",!0).trigger("inview",[!0]):h&&d.data("inview",!1).trigger("inview",[!1])}}}t.event.special.inview={add:function(e){o.push({data:e,$element:t(this),element:this}),!r&&o.length&&(r=setInterval(u,250))},remove:function(t){for(var e=0;e<o.length;e++){var n=o[e];if(n.element===this&&n.data.guid===t.guid){o.splice(e,1);break}}o.length||(clearInterval(r),r=null)}},t(a).bind("scroll resize scrollstop",(function(){e=n=null})),!c.addEventListener&&c.attachEvent&&c.attachEvent("onfocusin",(function(){n=null}))})?r.apply(e,o):r)||(t.exports=i)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="markerAnimation",a=["background","padding-bottom","font-weight","transition"],c="destroy.".concat(i),u="refresh.".concat(i),s="inview.".concat(i),f=function(t){return t[0].resetValues&&(a.forEach((function(e){t.css(e,t[0].resetValues[e])})),delete t[0].resetValues),t.attr("data-marker_animation",!1),t},l=function(t,e){return t[0].resetValues={},a.forEach((function(e){return t[0].resetValues[e]=t.css(e)})),d(e)||t.data("inview",!1).on(s,(function(n,r){r?v(t,e):k(t,e)})),t.css(p(e)).attr("data-marker_animation",!0),t},d=function(t){return t.stripe||"0s"===t.delay&&"0s"===t.duration},p=function(t){return t.cssFilter(t.stripe?b(t):h(t))},g=function(t){return Object.assign({display:"inline","background-position":"left 0 center","padding-bottom":t.padding_bottom},t.font_weight?{"font-weight":t.font_weight}:{})},h=function(t){return Object.assign({},g(t),{"background-size":"200% ".concat(t.thickness),"background-repeat":"repeat-x","background-image":"linear-gradient(to right, rgba(255,255,255,0) 50%, ".concat(t.color," 50%)")},d(t)?{"background-position":"left -100% center"}:{})},b=function(t){return Object.assign({},g(t),{"background-size":"100% ".concat(t.thickness),"background-repeat":"no-repeat","background-image":"repeating-linear-gradient(-45deg, ".concat(t.color,", ").concat(t.color," ").concat(t.stripe_thickness,"px, transparent ").concat(t.stripe_thickness,"px, transparent ").concat(2*t.stripe_thickness,"px)")})},m=function(t){return t.off(".".concat(i)),t},y=function(t){return t.off(s),t},v=function(t,e){return t.stop(!0,!0).css({transition:"background-position ".concat(e.duration," ").concat(e.function," ").concat(e.delay),"background-position":"left -100% center"}),e.repeat||y(t),t},k=function(t,e){return e.repeat&&t.trigger(u),t},w={color:"#fe9",padding_bottom:".6em",thickness:".6em",delay:".1s",duration:"2s",function:"ease",font_weight:"bold",repeat:!1,stripe:!1,stripe_thickness:2,cssFilter:function(t){return t}};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var _=function(t){return!/^-?\d*\.?\d+m?s$/.test(t)||/^-?0?\.?0+m?s$/.test(t)?"0s":t},x=function(t){return isNaN(parseInt(t,10))?w.stripe_thickness:parseInt(t)},O=function(t){var e=j(t);return"string"===e||"number"===e||"boolean"===e},S=function(t,e){if(e.length&&"string"==typeof e[0]){if("destroy"===e[0])return M(t),t;if("refresh"===e[0])return E(t),t}!function(t){t.attr("data-marker_animation")&&(f(t),m(t))}(t);var n=function(t,e){var n=Object.assign({},e.length&&"object"===j(e[0])?e[0]:{}),r={delay:_,duration:_,stripe_thickness:x};return Object.keys(w).forEach((function(e){var o=t.data("ma_"+e);O(o)&&e in r?n[e]=r[e](o):void 0!==o&&(n[e]=o)})),Object.assign({},w,n)}(t,e);return l(t,n),q(t,n),t},M=function(t){return t.trigger(c)},E=function(t){return t.trigger(u)},q=function(t,e){t.on(c,(function(){f(t),m(t)})).on(u,(function(){!function(t,e){f(t),y(t),l(t,e)}(t,e)}))};n(1),o.a.fn.markerAnimation=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.each((function(){S(o()(this),e)}))}}])}));