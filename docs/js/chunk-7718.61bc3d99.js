(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7718"],{"4ff2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{"margin-top":"20px"}},[r("Card",[r("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:function(t){e.openEdit(null)}}},[e._v("新增")])],1),r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("#角色列表")]),r("div",{staticClass:"moreco-table"},[r("Table",{attrs:{border:"",stripe:"",columns:e.columns,data:e.pageData}})],1),r("Page",{attrs:{current:e.currPage,"page-size":e.pageSize,total:e.totalCount,size:"small","show-sizer":""}})],1)],1),r("Modal",{attrs:{title:"编辑角色"},model:{value:e.editShow,callback:function(t){e.editShow=t},expression:"editShow"}},[r("Form",{attrs:{model:e.roleObj,"label-width":60}},[r("FormItem",{attrs:{label:"id",hidden:""}},[r("Input",{model:{value:e.roleObj.id,callback:function(t){e.$set(e.roleObj,"id",t)},expression:"roleObj.id"}})],1),r("FormItem",{attrs:{label:"名称"}},[r("Input",{attrs:{placeholder:"请输入名称"},model:{value:e.roleObj.name,callback:function(t){e.$set(e.roleObj,"name",t)},expression:"roleObj.name"}})],1),r("FormItem",{attrs:{label:"备注"}},[r("Input",{attrs:{placeholder:"请输入备注"},model:{value:e.roleObj.remark,callback:function(t){e.$set(e.roleObj,"remark",t)},expression:"roleObj.remark"}})],1),r("div",[e._v("目录权限")]),r("Tree",{ref:"roleMenuTree",attrs:{data:e.roleMenus,"show-checkbox":""}})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:e.closeEdit}},[e._v("取消")]),r("Button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.save}},[e._v("保存")])],1)],1)],1)},o=[],a=(r("7f7f"),r("cadf"),r("551c"),r("097d"),r("c557")),i=r("7eae"),u={data:function(){var e=this;return{columns:[{title:"名称",key:"name",fixed:"left"},{title:"备注",key:"remark"},{title:"创建时间",key:"createdDate",render:function(e,t){return e("div",null,t.row.dataMap.createdDate)}},{title:"操作",key:"action",width:150,align:"center",fixed:"right",render:function(t,r){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.openEdit(r.row.id)}}},"修改"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.remove(r.row.id)}}},"删除")])}}],pageData:[],currPage:1,pageSize:10,totalCount:0,editShow:!1,editLoading:!1,roleObj:{},roleMenus:[]}},methods:{doQuery:function(){var e=this;Object(a["d"])(this.currPage).then(function(t){0===t.data.code&&(e.currPage=t.data.result.currPage,e.pageSize=t.data.result.pageSize,e.totalCount=t.data.result.totalCount,e.pageData=t.data.result.list)})},openEdit:function(e){var t=this;null!==e?Object(a["b"])(e).then(function(e){0===e.data.code&&(t.roleObj=e.data.result)}).then(this.permInit):(this.roleObj={},this.permInit()),this.editShow=!0},closeEdit:function(){this.editShow=!1,this.editLoading=!1},remove:function(e){var t=this;Object(a["a"])(e).then(function(e){0===e.data.code&&t.doQuery()})},save:function(){var e=this;this.editLoading=!0;var t=this.$refs.roleMenuTree.getCheckedNodes(),r=[];for(var n in t)r.push(t[n].id);this.roleObj.menuIdList=r,Object(a["e"])(this.roleObj).then(function(t){0===t.data.code&&(e.editShow=!1,e.doQuery())}).finally(function(){e.editLoading=!1})},permInit:function(){var e=this;Object(i["f"])().then(function(t){0===t.data.code&&(e.roleMenus=e.convert2MenuTree(t.data.result))})},convert2MenuTree:function(e){var t=[];for(var r in e){var n=e[r],o={};o.id=n.id,o.title=n.name,null!=this.roleObj.menuIdList&&(o.checked=this.roleObj.menuIdList.indexOf(n.id)>-1),o.children=this.convert2MenuTree(n.children),t.push(o)}return t}},mounted:function(){this.doQuery()}},l=u,c=(r("e7b1"),r("2877")),d=Object(c["a"])(l,n,o,!1,null,null,null);d.options.__file="role.vue";t["default"]=d.exports},"7eae":function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"e",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"d",function(){return u}),r.d(t,"a",function(){return l}),r.d(t,"f",function(){return c});var n=r("66df"),o=function(e,t){return n["a"].request({url:"rbac/menu/page/"+e+"/"+t,method:"GET"})},a=function(){return n["a"].request({url:"rbac/menu/toPage",method:"GET"})},i=function(e){return n["a"].request({url:"rbac/menu/detail/"+e,method:"GET"})},u=function(e){return n["a"].request({url:"rbac/menu/save",method:"POST",data:e})},l=function(e){return n["a"].request({url:"rbac/menu/delete/"+e,method:"DELETE"})},c=function(){return n["a"].request({url:"rbac/menu/tree",method:"GET"})}},c557:function(e,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return i}),r.d(t,"e",function(){return u}),r.d(t,"a",function(){return l});var n=r("66df"),o=function(e){return n["a"].request({url:"rbac/role/page/"+e,method:"GET"})},a=function(){return n["a"].request({url:"rbac/role/list",method:"GET"})},i=function(e){return n["a"].request({url:"rbac/role/detail/"+e,method:"GET"})},u=function(e){return n["a"].request({url:"rbac/role/save",method:"POST",data:e})},l=function(e){return n["a"].request({url:"rbac/role/delete/"+e,method:"DELETE"})}},e619:function(e,t,r){},e7b1:function(e,t,r){"use strict";var n=r("e619"),o=r.n(n);o.a}}]);