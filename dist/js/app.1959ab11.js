(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0a50":function(e,t,n){"use strict";var r=n("7510"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to the SPG Site"}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Press the button to test the API")]),n("button",{on:{click:function(t){return e.ping()}}},[e._v("Ping")]),n("p",[e._v("Response: "+e._s(e.pingResponse))])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    To view the API documentation for seriousandprogamers.com visit\n    "),n("a",{attrs:{href:"https://api.seriousandprogamers.com",target:"_blank",rel:"noopener"}},[e._v("https://api.seriousandprogamers.com")]),e._v(".\n  ")])}],u=n("bc3a"),c=n.n(u),p={name:"HelloWorld",props:{msg:String},data:function(){return{pingResponse:"",environment:"https://api.seriousandprogamers.com/v1"}},methods:{ping:function(){var e=this;c.a.get(this.environment+"/ping").then((function(t){return e.pingResponse=t.data}))}}},l=p,f=(n("0a50"),n("2877")),d=Object(f["a"])(l,a,s,!1,null,"3e6fd2ef",null),v=d.exports,g={name:"app",components:{HelloWorld:v}},h=g,m=(n("034f"),Object(f["a"])(h,o,i,!1,null,null,null)),b=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,n){},7510:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1959ab11.js.map