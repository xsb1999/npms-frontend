(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787ab215"],{a434:function(e,t,n){"use strict";var o=n("23e7"),i=n("23cb"),a=n("a691"),l=n("50c4"),c=n("7b0b"),d=n("65f0"),r=n("8418"),s=n("1dde"),u=s("splice"),p=Math.max,b=Math.min,f=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var n,o,s,u,g,h,O=c(this),j=l(O.length),w=i(e,j),C=arguments.length;if(0===C?n=o=0:1===C?(n=0,o=j-w):(n=C-2,o=b(p(a(t),0),j-w)),j+n-o>f)throw TypeError(m);for(s=d(O,o),u=0;u<o;u++)g=w+u,g in O&&r(s,u,O[g]);if(s.length=o,n<o){for(u=w;u<j-o;u++)g=u+o,h=u+n,g in O?O[h]=O[g]:delete O[h];for(u=j;u>j-o+n;u--)delete O[u-1]}else if(n>o)for(u=j-o;u>w;u--)g=u+o-1,h=u+n-1,g in O?O[h]=O[g]:delete O[h];for(u=0;u<n;u++)O[u+w]=arguments[u+2];return O.length=j-o+n,s}})},aa08:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),i={class:"goods-list"},a=Object(o["p"])("div",{class:"clearfix"},[Object(o["p"])("span",{style:{"font-size":"20px"}},"Worklog List")],-1),l={class:"content"},c={class:"content-header"},d=Object(o["o"])("refresh"),r=Object(o["o"])("New"),s={class:"content-main"},u=Object(o["o"])("Edit"),p={class:"dialog-footer"},b=Object(o["o"])("Cancel"),f=Object(o["o"])("Complete");function m(e,t,n,m,g,h){var O=Object(o["P"])("el-button"),j=Object(o["P"])("el-row"),w=Object(o["P"])("el-table-column"),C=Object(o["P"])("el-table"),I=Object(o["P"])("el-pagination"),_=Object(o["P"])("el-card"),y=Object(o["P"])("el-input"),v=Object(o["P"])("el-form-item"),L=Object(o["P"])("el-form"),S=Object(o["P"])("el-dialog"),x=Object(o["Q"])("loading");return Object(o["G"])(),Object(o["k"])(o["b"],null,[Object(o["p"])("div",i,[Object(o["p"])(_,{shadow:"never"},{header:Object(o["eb"])((function(){return[a]})),default:Object(o["eb"])((function(){return[Object(o["p"])("div",l,[Object(o["p"])("div",c,[Object(o["p"])(j,{style:{width:"100%"}},{default:Object(o["eb"])((function(){return[Object(o["p"])(O,{type:"primary",onClick:t[1]||(t[1]=function(e){return h.init()})},{default:Object(o["eb"])((function(){return[d]})),_:1}),Object(o["p"])(O,{type:"danger",onClick:t[2]||(t[2]=function(t){g.addLog={},g.addOrUpdateState=0,e.formVisible=!0}),style:{float:"right"}},{default:Object(o["eb"])((function(){return[r]})),_:1})]})),_:1})]),Object(o["p"])("div",s,[Object(o["fb"])(Object(o["p"])(C,{data:g.tableData,border:"",stripe:"",style:{width:"100%",margin:"1em 0","margin-top":"20px"},"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},{default:Object(o["eb"])((function(){return[Object(o["p"])(w,{prop:"time",label:"Time",align:"center","show-overflow-tooltip":""}),Object(o["p"])(w,{prop:"content",label:"Content",align:"center","show-overflow-tooltip":""}),Object(o["p"])(w,{label:"Operations",align:"center",width:"210"},{default:Object(o["eb"])((function(t){return[Object(o["p"])(O,{size:"small",round:"",onClick:function(n){h.getCusEdit(t.$index),e.formVisible=!0}},{default:Object(o["eb"])((function(){return[u]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),[[x,g.loading]]),Object(o["p"])(I,{onSizeChange:h.sizeChange,onCurrentChange:h.currentChange,layout:"total, sizes, prev, pager, next, jumper","current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:g.total},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])])]})),_:1})]),Object(o["p"])(S,{modelValue:e.formVisible,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.formVisible=t})},{footer:Object(o["eb"])((function(){return[Object(o["p"])("span",p,[Object(o["p"])(O,{onClick:t[5]||(t[5]=function(t){return e.formVisible=!1})},{default:Object(o["eb"])((function(){return[b]})),_:1}),Object(o["p"])(O,{type:"primary",onClick:t[6]||(t[6]=function(t){h.finish(),e.formVisible=!1})},{default:Object(o["eb"])((function(){return[f]})),_:1})])]})),default:Object(o["eb"])((function(){return[Object(o["p"])(L,{model:g.addLog},{default:Object(o["eb"])((function(){return[Object(o["p"])(v,{label:"Time","label-width":e.formLabelWidth},{default:Object(o["eb"])((function(){return[Object(o["p"])(y,{modelValue:g.addLog.time,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.addLog.time=e})},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(o["p"])(v,{label:"Content","label-width":e.formLabelWidth},{default:Object(o["eb"])((function(){return[Object(o["p"])(y,{modelValue:g.addLog.content,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.addLog.content=e})},null,8,["modelValue"])]})),_:1},8,["label-width"])]})),_:1},8,["model"])]})),_:1},8,["modelValue"])],64)}var g=n("5530"),h=(n("d3b7"),n("ddb0"),n("a434"),n("3fd4")),O={setup:function(){var e=Object(o["K"])({currentPage:1,pageSizes:[10,20,50,100],pageSize:10,formLabelWidth:"180px",formVisible:!1});return Object(g["a"])({},Object(o["W"])(e))},data:function(){return{tableData:[],total:0,loading:!0,emp_info:{empId:"800123",empDeptId:"8021140",empPositionId:"30000030"},currentIndex:-1,addOrUpdateState:0,keyword:{cusName:null,cusId:null,cusEnterpriseProperty:null,cusSalesDeptId:null,cusCustomerManagerId:null},addLog:{}}},methods:{init:function(){var e=this;this.axios.get("http://localhost:8001/report-edit/init/"+this.emp_info.empId).then((function(t){console.log(t.data),e.tableData=t.data.body.entries,e.total=e.tableData.length,e.loading=!1}))},getCusEdit:function(e){this.addOrUpdateState=1,this.addLog=this.tableData[e]},finish:function(){var e=this;this.addCustomer.cusSalesDeptId=this.emp_info.empDeptId,this.addCustomer.cusCustomerManagerId=this.emp_info.empId,console.log(this.addCustomer),console.log(this.addContact),console.log(this.addRelated),0==this.addOrUpdateState&&this.axios.post("http://localhost:8001/report-edit/new/"+this.emp_info.empId,{wId:null,wTime:this.addLog.time,wContent:this.addLog.content,wDeptId:this.emp_info.empDeptId,wCusMgrId:this.emp_info.empId}).then((function(t){console.log(t.data),e.notification("添加成功"),e.init()})),1==this.addOrUpdateState&&this.axios.post("http://localhost:8001/report-edit/update/"+this.emp_info.empId,{wId:this.addLog.reportID,wTime:this.addLog.time,wContent:this.addLog.content,wDeptId:this.emp_info.empDeptId,wCusMgrId:this.emp_info.empId}).then((function(t){console.log(t.data),e.notification("添加成功"),e.init()}))},sizeChange:function(e){this.pageSize=e},currentChange:function(e){this.currentPage=e},deleteRow:function(e,t){h["a"].confirm("Data will be deleted. Continue?","Notification",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning",callback:function(n){"confirm"==n&&(t.splice(e,1),Object(h["b"])({title:"System Notification",message:"Delete Successfully！",duration:2e3,type:"success"}))}})},addRow:function(e,t){var n=e.length;e.splice(n,0,t)},updateRow:function(e,t,n){t.splice(e,1),t.splice(e,0,n)},notification:function(e){Object(h["b"])({title:"System Notification",message:e,duration:2e3,type:"success"})}}};O.render=m;t["default"]=O}}]);