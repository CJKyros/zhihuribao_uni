require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{24:function(e,t,n){"use strict";var o=s(n(0)),i=s(n(25));function s(e){return e&&e.__esModule?e:{default:e}}new o.default(i.default).$mount()},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(27),i=n.n(o),s=n(28),u=!1;var a=function(e){u||n(26)},r=n(1)(i.a,s.a,a,null,null);r.options.__file="E:\\moveApp\\ZhiHu_IView\\pages\\info\\new_file.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] new_file.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},26:function(e,t){},27:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{msg:"",title:""}},onLoad:function(t){var n=this;e.showLoading({title:"加载中。。。。。"}),e.request({url:"https://news-at.zhihu.com/api/3/news/"+t.id,method:"GET",data:{},success:function(t){n.title=t.data.title,n.msg=t.data.body,e.hideLoading()},fail:function(){},complete:function(){}})}}}).call(t,n(12).default)},28:function(e,t,n){"use strict";var o=function(){var e=this.$createElement;return(this._self._c||e)("view",[this._v("\n\t"+this._s(this.title)+"\n\t|||||||||||||||||||||\n\t"+this._s(this.msg)+"\n")])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i}},[24]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/info/new_file.js.map