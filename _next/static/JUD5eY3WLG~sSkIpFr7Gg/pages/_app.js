(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{110:function(n,e,t){n.exports=t(208)},207:function(n,e,t){__NEXT_REGISTER_PAGE("/_app",function(){return n.exports=t(239),{page:n.exports.default}})},208:function(n,e,t){"use strict";var a=t(21),i=t(5);Object.defineProperty(e,"__esModule",{value:!0}),e.createUrl=E,e.Container=e.default=void 0;var r=i(t(44)),o=i(t(45)),l=i(t(209)),f=i(t(8)),s=i(t(9)),c=i(t(18)),u=i(t(19)),m=i(t(20)),p=i(t(15)),h=a(t(0)),d=i(t(13)),g=t(27),v=t(48),y=function(n){function e(){return(0,f.default)(this,e),(0,c.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,m.default)(e,n),(0,s.default)(e,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(n){throw n}},{key:"render",value:function(){var n=this.props,e=n.router,t=n.Component,a=n.pageProps,i=E(e);return h.default.createElement(b,null,h.default.createElement(t,(0,l.default)({},a,{url:i})))}}],[{key:"getInitialProps",value:function(){var n=(0,o.default)(r.default.mark(function n(e){var t,a,i;return r.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.Component,e.router,a=e.ctx,n.next=3,(0,g.loadGetInitialProps)(t,a);case 3:return i=n.sent,n.abrupt("return",{pageProps:i});case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}]),e}(h.Component);e.default=y,(0,p.default)(y,"childContextTypes",{headManager:d.default.object,router:d.default.object});var b=function(n){function e(){return(0,f.default)(this,e),(0,c.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,m.default)(e,n),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var n=window.location.hash;if(n=!!n&&n.substring(1)){var e=document.getElementById(n);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(h.Component);e.Container=b;var w=(0,g.execOnce)(function(){0});function E(n){var e=n.pathname,t=n.asPath,a=n.query;return{get query(){return w(),a},get pathname(){return w(),e},get asPath(){return w(),t},back:function(){w(),n.back()},push:function(e,t){return w(),n.push(e,t)},pushTo:function(e,t){w();var a=t?e:null,i=t||e;return n.push(a,i)},replace:function(e,t){return w(),n.replace(e,t)},replaceTo:function(e,t){w();var a=t?e:null,i=t||e;return n.replace(a,i)}}}},209:function(n,e,t){var a=t(79);function i(){return n.exports=i=a||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},i.apply(this,arguments)}n.exports=i},218:function(n,e){n.exports='svg:not(:root).svg-inline--fa {\n  overflow: visible; }\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em; }\n\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em; }\n\n.svg-inline--fa.fa-w-1 {\n    width: 0.0625em; }\n\n.svg-inline--fa.fa-w-2 {\n    width: 0.125em; }\n\n.svg-inline--fa.fa-w-3 {\n    width: 0.1875em; }\n\n.svg-inline--fa.fa-w-4 {\n    width: 0.25em; }\n\n.svg-inline--fa.fa-w-5 {\n    width: 0.3125em; }\n\n.svg-inline--fa.fa-w-6 {\n    width: 0.375em; }\n\n.svg-inline--fa.fa-w-7 {\n    width: 0.4375em; }\n\n.svg-inline--fa.fa-w-8 {\n    width: 0.5em; }\n\n.svg-inline--fa.fa-w-9 {\n    width: 0.5625em; }\n\n.svg-inline--fa.fa-w-10 {\n    width: 0.625em; }\n\n.svg-inline--fa.fa-w-11 {\n    width: 0.6875em; }\n\n.svg-inline--fa.fa-w-12 {\n    width: 0.75em; }\n\n.svg-inline--fa.fa-w-13 {\n    width: 0.8125em; }\n\n.svg-inline--fa.fa-w-14 {\n    width: 0.875em; }\n\n.svg-inline--fa.fa-w-15 {\n    width: 0.9375em; }\n\n.svg-inline--fa.fa-w-16 {\n    width: 1em; }\n\n.svg-inline--fa.fa-w-17 {\n    width: 1.0625em; }\n\n.svg-inline--fa.fa-w-18 {\n    width: 1.125em; }\n\n.svg-inline--fa.fa-w-19 {\n    width: 1.1875em; }\n\n.svg-inline--fa.fa-w-20 {\n    width: 1.25em; }\n\n.svg-inline--fa.fa-pull-left {\n    margin-right: .3em;\n    width: auto; }\n\n.svg-inline--fa.fa-pull-right {\n    margin-left: .3em;\n    width: auto; }\n\n.svg-inline--fa.fa-border {\n    height: 1.5em; }\n\n.svg-inline--fa.fa-li {\n    width: 2em; }\n\n.svg-inline--fa.fa-fw {\n    width: 1.25em; }\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -.125em;\n  width: 1em; }\n\n.fa-layers svg.svg-inline--fa {\n    transform-origin: center center; }\n\n.fa-layers-text, .fa-layers-counter {\n  display: inline-block;\n  position: absolute;\n  text-align: center; }\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center; }\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: .25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom right; }\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  transform: scale(0.25);\n  transform-origin: bottom left; }\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top right; }\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  transform: scale(0.25);\n  transform-origin: top left; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n\n.fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em; }\n\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em; }\n\n.fa-inverse {\n  color: #fff; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4); }\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1); }\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black; }\n\n.fad.fa-inverse {\n  color: #fff; }\n'},239:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(110),o=t.n(r),l=(t(13),t(53)),f=t.n(l),s=function(n){return i.a.createElement("header",{id:"header",style:n.timeout?{display:"none"}:{}},i.a.createElement(f.a,{href:"https://github.com/mib-markus"},i.a.createElement("img",{className:"logo",src:"/static/images/LogoMakr_9xm1vx.png",alt:""})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("h1",null,"Markus Beck"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h4",null,"Consulting for Event Storming & ",i.a.createElement("br",null),i.a.createElement("br",null),"Designing Event Streaming Systems.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),"I ❤ coding as a Cloud Solution Architect."))),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#intro",onClick:function(){n.onOpenArticle("intro")}},"Intro")),i.a.createElement("li",null,i.a.createElement("a",{href:"#work",onClick:function(){n.onOpenArticle("work")}},"Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#about",onClick:function(){n.onOpenArticle("about")}},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact",onClick:function(){n.onOpenArticle("contact")}},"Contact")))))},c=t(54),u=function(n){return i.a.createElement("footer",{id:"footer",style:n.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"© mib-markus - ",(new Date).getFullYear(),". Built with:"," ",i.a.createElement("a",{href:"https://github.com/zeit/next.js"},"Next.js"),i.a.createElement("br",null),"Designed by: ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")," and released for free under the ",i.a.createElement("a",{href:"https://html5up.net/license"},"Creative Commons")," ","license."))},m=t(38);t(218);function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function h(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function d(n){return function(){var e,t=v(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}()){var a=v(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return function(n,e){if(e&&("object"===p(e)||"function"==typeof e))return e;return g(n)}(this,e)}}function g(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function v(n){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function y(n,e){return(y=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}t.d(e,"default",function(){return b}),m.a.autoAddCss=!1;var b=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&y(n,e)}(l,(o.a,i.a.Component));var e,t,a,r=d(l);function l(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=r.call(this,n)).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},e.handleOpenArticle=e.handleOpenArticle.bind(g(e)),e.handleCloseArticle=e.handleCloseArticle.bind(g(e)),e}return e=l,(t=[{key:"componentDidMount",value:function(){var n=this,e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e),this.timeoutId=setTimeout(function(){n.setState({loading:""})},100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"handleOpenArticle",value:function(n){var e=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:n}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({articleTimeout:!e.state.articleTimeout})},350)}},{key:"handleCloseArticle",value:function(){var n=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){n.setState({timeout:!n.state.timeout})},325),setTimeout(function(){n.setState({isArticleVisible:!n.state.isArticleVisible,article:""})},350)}},{key:"render",value:function(){var n=this.props,e=n.Component,t=n.pageProps;return i.a.createElement(i.a.Fragment,null,i.a.createElement("title",null,"mib-markus"),i.a.createElement(e,t),i.a.createElement("div",{className:"body ".concat(this.state.loading," ").concat(this.state.isArticleVisible?"is-article-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(s,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.a.createElement(c.a,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle}),i.a.createElement(u,{timeout:this.state.timeout})),i.a.createElement("div",{id:"bg"})))}}])&&h(e.prototype,t),a&&h(e,a),l}()}},[[207,1,0]]]);