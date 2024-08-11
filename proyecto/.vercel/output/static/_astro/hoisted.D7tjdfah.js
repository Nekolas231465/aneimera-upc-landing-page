function L(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var g={exports:{}};/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/(function(c,u){(function(d){c.exports=d()})(function(){var d=typeof window<"u"?window:this,h=d.Glider=function(e,o){var t=this;if(e._glider)return e._glider;if(t.ele=e,t.ele.classList.add("glider"),t.ele._glider=t,t.opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,passiveListeners:!1,easing:function(i,r,n,s,a){return s*(r/=a)*r+n}},o),t.animate_id=t.page=t.slide=0,t.arrows={},t._opt=t.opt,t.opt.skipTrack)t.track=t.ele.children[0];else for(t.track=document.createElement("div"),t.ele.appendChild(t.track);t.ele.children.length!==1;)t.track.appendChild(t.ele.children[0]);t.track.classList.add("glider-track"),t.init(),t.resize=t.init.bind(t,!0),t.event(t.ele,"add",{scroll:t.updateControls.bind(t)},{passive:t.opt.passiveListeners}),t.event(d,"add",{resize:t.resize})},l=h.prototype;return l.init=function(e,o){var t=this,i=0,r=0;t.slides=t.track.children,[].forEach.call(t.slides,function(a,f){a.classList.add("glider-slide"),a.setAttribute("data-gslide",f)}),t.containerWidth=t.ele.clientWidth;var n=t.settingsBreakpoint();if(o||(o=n),t.opt.slidesToShow==="auto"||typeof t.opt._autoSlide<"u"){var s=t.containerWidth/t.opt.itemWidth;t.opt._autoSlide=t.opt.slidesToShow=t.opt.exactWidth?s:Math.max(1,Math.floor(s))}t.opt.slidesToScroll==="auto"&&(t.opt.slidesToScroll=Math.floor(t.opt.slidesToShow)),t.itemWidth=t.opt.exactWidth?t.opt.itemWidth:t.containerWidth/t.opt.slidesToShow,[].forEach.call(t.slides,function(a){a.style.height="auto",a.style.width=t.itemWidth+"px",i+=t.itemWidth,r=Math.max(a.offsetHeight,r)}),t.track.style.width=i+"px",t.trackWidth=i,t.isDrag=!1,t.preventClick=!1,t.move=!1,t.opt.resizeLock&&t.scrollTo(t.slide*t.itemWidth,0),(n||o)&&(t.bindArrows(),t.buildDots(),t.bindDrag()),t.updateControls(),t.emit(e?"refresh":"loaded")},l.bindDrag=function(){var e=this;e.mouse=e.mouse||e.handleMouse.bind(e);var o=function(){e.mouseDown=void 0,e.ele.classList.remove("drag"),e.isDrag&&(e.preventClick=!0),e.isDrag=!1};const t=function(){e.move=!0};var i={mouseup:o,mouseleave:o,mousedown:function(r){r.preventDefault(),r.stopPropagation(),e.mouseDown=r.clientX,e.ele.classList.add("drag"),e.move=!1,setTimeout(t,300)},touchstart:function(r){e.ele.classList.add("drag"),e.move=!1,setTimeout(t,300)},mousemove:e.mouse,click:function(r){e.preventClick&&e.move&&(r.preventDefault(),r.stopPropagation()),e.preventClick=!1,e.move=!1}};e.ele.classList.toggle("draggable",e.opt.draggable===!0),e.event(e.ele,"remove",i),e.opt.draggable&&e.event(e.ele,"add",i,{passive:e.opt.passiveListeners})},l.buildDots=function(){var e=this;if(!e.opt.dots){e.dots&&(e.dots.innerHTML="");return}if(typeof e.opt.dots=="string"?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,!!e.dots){e.dots.innerHTML="",e.dots.setAttribute("role","tablist"),e.dots.classList.add("glider-dots");for(var o=0;o<Math.ceil(e.slides.length/e.opt.slidesToShow);++o){var t=document.createElement("button");t.dataset.index=o,t.setAttribute("aria-label","Page "+(o+1)),t.setAttribute("role","tab"),t.className="glider-dot "+(o?"":"active"),e.event(t,"add",{click:e.scrollItem.bind(e,o,!0)}),e.dots.appendChild(t)}}},l.bindArrows=function(){var e=this;if(!e.opt.arrows){Object.keys(e.arrows).forEach(function(o){var t=e.arrows[o];e.event(t,"remove",{click:t._func})});return}["prev","next"].forEach(function(o){var t=e.opt.arrows[o];t&&(typeof t=="string"&&(t=document.querySelector(t)),t&&(t._func=t._func||e.scrollItem.bind(e,o),e.event(t,"remove",{click:t._func}),e.event(t,"add",{click:t._func}),e.arrows[o]=t))})},l.updateControls=function(e){var o=this;e&&!o.opt.scrollPropagate&&e.stopPropagation();var t=o.containerWidth>=o.trackWidth;o.opt.rewind||(o.arrows.prev&&(o.arrows.prev.classList.toggle("disabled",o.ele.scrollLeft<=0||t),o.arrows.prev.setAttribute("aria-disabled",o.arrows.prev.classList.contains("disabled"))),o.arrows.next&&(o.arrows.next.classList.toggle("disabled",Math.ceil(o.ele.scrollLeft+o.containerWidth)>=Math.floor(o.trackWidth)||t),o.arrows.next.setAttribute("aria-disabled",o.arrows.next.classList.contains("disabled")))),o.slide=Math.round(o.ele.scrollLeft/o.itemWidth),o.page=Math.round(o.ele.scrollLeft/o.containerWidth);var i=o.slide+Math.floor(Math.floor(o.opt.slidesToShow)/2),r=Math.floor(o.opt.slidesToShow)%2?0:i+1;Math.floor(o.opt.slidesToShow)===1&&(r=0),o.ele.scrollLeft+o.containerWidth>=Math.floor(o.trackWidth)&&(o.page=o.dots?o.dots.children.length-1:0),[].forEach.call(o.slides,function(n,s){var a=n.classList,f=a.contains("visible"),b=o.ele.scrollLeft,w=o.ele.scrollLeft+o.containerWidth,v=o.itemWidth*s,k=v+o.itemWidth;[].forEach.call(a,function(m){/^left|right/.test(m)&&a.remove(m)}),a.toggle("active",o.slide===s),i===s||r&&r===s?a.add("center"):(a.remove("center"),a.add([s<i?"left":"right",Math.abs(s-(s<i?i:r||i))].join("-")));var p=Math.ceil(v)>=Math.floor(b)&&Math.floor(k)<=Math.ceil(w);a.toggle("visible",p),p!==f&&o.emit("slide-"+(p?"visible":"hidden"),{slide:s})}),o.dots&&[].forEach.call(o.dots.children,function(n,s){n.classList.toggle("active",o.page===s)}),e&&o.opt.scrollLock&&(clearTimeout(o.scrollLock),o.scrollLock=setTimeout(function(){clearTimeout(o.scrollLock),Math.abs(o.ele.scrollLeft/o.itemWidth-o.slide)>.02&&(o.mouseDown||o.trackWidth>o.containerWidth+o.ele.scrollLeft&&o.scrollItem(o.getCurrentSlide()))},o.opt.scrollLockDelay||250))},l.getCurrentSlide=function(){var e=this;return e.round(e.ele.scrollLeft/e.itemWidth)},l.scrollItem=function(e,o,t){t&&t.preventDefault();var i=this,r=e;++i.animate_id;var n=i.slide,s;if(o===!0)e=Math.round(e*i.containerWidth/i.itemWidth),s=e*i.itemWidth;else{if(typeof e=="string"){var a=e==="prev";if(i.opt.slidesToScroll%1||i.opt.slidesToShow%1?e=i.getCurrentSlide():e=i.slide,a?e-=i.opt.slidesToScroll:e+=i.opt.slidesToScroll,i.opt.rewind){var f=i.ele.scrollLeft;e=a&&!f?i.slides.length:!a&&f+i.containerWidth>=Math.floor(i.trackWidth)?0:e}}e=Math.max(Math.min(e,i.slides.length),0),i.slide=e,s=i.itemWidth*e}return i.emit("scroll-item",{prevSlide:n,slide:e}),i.scrollTo(s,i.opt.duration*Math.abs(i.ele.scrollLeft-s),function(){i.updateControls(),i.emit("animated",{value:r,type:typeof r=="string"?"arrow":o?"dot":"slide"})}),!1},l.settingsBreakpoint=function(){var e=this,o=e._opt.responsive;if(o){o.sort(function(n,s){return s.breakpoint-n.breakpoint});for(var t=0;t<o.length;++t){var i=o[t];if(d.innerWidth>=i.breakpoint)return e.breakpoint!==i.breakpoint?(e.opt=Object.assign({},e._opt,i.settings),e.breakpoint=i.breakpoint,!0):!1}}var r=e.breakpoint!==0;return e.opt=Object.assign({},e._opt),e.breakpoint=0,r},l.scrollTo=function(e,o,t){var i=this,r=new Date().getTime(),n=i.animate_id,s=function(){var a=new Date().getTime()-r;i.ele.scrollLeft=i.ele.scrollLeft+(e-i.ele.scrollLeft)*i.opt.easing(0,a,0,1,o),a<o&&n===i.animate_id?d.requestAnimationFrame(s):(i.ele.scrollLeft=e,t&&t.call(i))};d.requestAnimationFrame(s)},l.removeItem=function(e){var o=this;o.slides.length&&(o.track.removeChild(o.slides[e]),o.refresh(!0),o.emit("remove"))},l.addItem=function(e){var o=this;o.track.appendChild(e),o.refresh(!0),o.emit("add")},l.handleMouse=function(e){var o=this;o.mouseDown&&(o.isDrag=!0,o.ele.scrollLeft+=(o.mouseDown-e.clientX)*(o.opt.dragVelocity||3.3),o.mouseDown=e.clientX)},l.round=function(e){var o=this,t=o.opt.slidesToScroll%1||1,i=1/t;return Math.round(e*i)/i},l.refresh=function(e){var o=this;o.init(!0,e)},l.setOption=function(e,o){var t=this;t.breakpoint&&!o?t._opt.responsive.forEach(function(i){i.breakpoint===t.breakpoint&&(i.settings=Object.assign({},i.settings,e))}):t._opt=Object.assign({},t._opt,e),t.breakpoint=0,t.settingsBreakpoint()},l.destroy=function(){var e=this,o=e.ele.cloneNode(!0),t=function(i){i.removeAttribute("style"),[].forEach.call(i.classList,function(r){/^glider/.test(r)&&i.classList.remove(r)})};e.opt.skipTrack||(o.children[0].outerHTML=o.children[0].innerHTML),t(o),[].forEach.call(o.getElementsByTagName("*"),t),e.ele.parentNode.replaceChild(o,e.ele),e.event(d,"remove",{resize:e.resize}),e.emit("destroy")},l.emit=function(e,o){var t=this,i=new d.CustomEvent("glider-"+e,{bubbles:!t.opt.eventPropagate,detail:o});t.ele.dispatchEvent(i)},l.event=function(e,o,t){var i=e[o+"EventListener"].bind(e);Object.keys(t).forEach(function(r){i(r,t[r])})},h})})(g);var _=g.exports;const T=L(_);document.addEventListener("astro:page-load",()=>{const c=document.querySelector(".carousel__lista"),u=document.querySelector(".carousel__anterior"),d=document.querySelector(".carousel__siguiente");c&&u&&d&&new T(c,{slidesToShow:1,slidesToScroll:1,dots:".carousel__indicadores",arrows:{prev:u,next:d},responsive:[{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}}]})});
