webpackJsonp([10,20],{95:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{code:'this.$message.info("info", 2000)\nthis.$message.success("success", 2000)\nthis.$message.warning("warning", 2000)\nthis.$message.danger("danger", 2000)\n'}},methods:{test:function(){this.$message.info("info",2e3)},test1:function(){this.$message.success("success",2e3)},test2:function(){this.$message.warning("warning",2e3)},test3:function(){this.$message.danger("danger",2e3)}}}},375:function(t,e,n){var s,i;s=n(95);var r=n(418);i=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(i=s=s.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=s},418:function(t,e){t.exports={render:function(){var t=this;return t._h("section",[t._m(0)," ",[t._h("coding",{attrs:{code:t.code,title:"基本",content:"只需要传入2个参数，一个是文本，一个是消失时间"}},[t._h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.test(e)}}},["info"])," ",t._h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.test1(e)}}},["success"])," ",t._h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.test2(e)}}},["warning"])," ",t._h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.test3(e)}}},["danger"])])]," ",t._m(1)," ",t._m(2)])},staticRenderFns:[function(){var t=this;return t._h("h1",["message"])},function(){var t=this;return t._h("h2",["参数设置"])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["属性"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["默认值"])," ",t._h("th",["可选值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["content"])," ",t._h("td",["内容"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["time"])," ",t._h("td",["消失时间"])," ",t._h("td",[t._h("code",["Number"])])," ",t._h("td",["1500"])," ",t._h("td",["-"])])])])}]}},439:function(t,e,n){t.exports=n(375)}});
//# sourceMappingURL=10.17118d8e9ea555c5a822.js.map