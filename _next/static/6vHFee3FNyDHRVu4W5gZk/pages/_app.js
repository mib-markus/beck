(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var i=n("1OyB"),r=n("vuIU"),o=n("JX7q"),a=n("md7G"),u=n("foSv"),l=n("Ji7U"),c=n("q1tI"),s=n.n(c),f=n("8Bbg"),p=n.n(f),h=n("YFqc"),m=n.n(h),d=s.a.createElement,b=function(t){return d("header",{id:"header",style:t.timeout?{display:"none"}:{}},d(m.a,{href:"https://github.com/mib-markus"},d("img",{className:"logo",src:"/beck/images/LogoMakr_9xm1vx.png",alt:""})),d("div",{className:"content"},d("div",{className:"inner"},d("h1",null,"Markus Beck"),d("br",null),d("br",null),d("h4",null,"My Passions are Event Storming & ",d("br",null),d("br",null),"Designing Event Streaming Systems.",d("br",null),d("br",null),d("br",null),d("br",null),"I \u2764 coding as a Cloud Solution Architect."))),d("nav",null,d("ul",null,d("li",null,d("a",{href:"#intro",onClick:function(){t.onOpenArticle("intro")}},"Intro")),d("li",null,d("a",{href:"#work",onClick:function(){t.onOpenArticle("work")}},"Work")),d("li",null,d("a",{href:"#about",onClick:function(){t.onOpenArticle("about")}},"About")),d("li",null,d("a",{href:"#contact",onClick:function(){t.onOpenArticle("contact")}},"Contact")))))},v=n("RNiq"),g=s.a.createElement,y=function(t){return g("footer",{id:"footer",style:t.timeout?{display:"none"}:{}},g("p",{className:"copyright"},"\xa9 mib-markus - ",(new Date).getFullYear(),". Built with:"," ",g("a",{href:"https://github.com/zeit/next.js"},"Next.js"),g("br",null),"Designed by: ",g("a",{href:"https://html5up.net"},"HTML5 UP")," and released for free under the ",g("a",{href:"https://html5up.net/license"},"Creative Commons")," ","license."))},A=n("WMMs"),k=n.n(A),C=n("7O5W"),T=(n("VAPu"),s.a.createElement);function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}C.a.autoAddCss=!1;var P=function(t){Object(l.a)(c,t);var e,n=(e=c,function(){var t,n=Object(u.a)(e);if(O()){var i=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(a.a)(this,t)});function c(t){var e;return Object(i.a)(this,c),(e=n.call(this,t)).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},e.handleOpenArticle=e.handleOpenArticle.bind(Object(o.a)(e)),e.handleCloseArticle=e.handleCloseArticle.bind(Object(o.a)(e)),e}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e),this.timeoutId=setTimeout((function(){t.setState({loading:""})}),100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"handleOpenArticle",value:function(t){var e=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:t}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({articleTimeout:!e.state.articleTimeout})}),350)}},{key:"handleCloseArticle",value:function(){var t=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({isArticleVisible:!t.state.isArticleVisible,article:""})}),350)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return T(s.a.Fragment,null,T("title",null,"mib-markus"),T("style",{dangerouslySetInnerHTML:{__html:k.a}}),T(e,n),T("div",{className:"body ".concat(this.state.loading," ").concat(this.state.isArticleVisible?"is-article-visible":"")},T("div",{id:"wrapper"},T(b,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),T(v.default,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle}),T(y,{timeout:this.state.timeout})),T("div",{id:"bg"})))}}]),c}((p.a,s.a.Component))},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var i=n("/GRZ"),r=n("i2R6"),o=n("tCBg"),a=n("T0f4"),u=n("48fX"),l=n("vJKn");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=d,e.default=void 0;var f=s(n("q1tI")),p=n("g/15");function h(t){var e,n,i;return l.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.Component,n=t.ctx,r.next=3,l.awrap((0,p.loadGetInitialProps)(e,n));case 3:return i=r.sent,r.abrupt("return",{pageProps:i});case 5:case"end":return r.stop()}}),null,null,null,Promise)}e.AppInitialProps=p.AppInitialProps;var m=function(t){u(l,t);var e,n=(e=l,function(){var t,n=a(e);if(c()){var i=a(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)});function l(){return i(this,l),n.apply(this,arguments)}return r(l,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,i=t.pageProps,r=t.__N_SSG,o=t.__N_SSP;return f.default.createElement(n,Object.assign({},i,r||o?{}:{url:d(e)}))}}]),l}(f.default.Component);function d(t){var e=t.pathname,n=t.asPath,i=t.query;return{get query(){return i},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var i=n?e:"",r=n||e;return t.push(i,r)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var i=n?e:"",r=n||e;return t.replace(i,r)}}}e.default=m,m.origGetInitialProps=h,m.getInitialProps=h},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},VAPu:function(t,e,n){},WMMs:function(t,e,n){}},[[0,1,2,3,0,4]]]);