(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2248a3"],{e123:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"goods-add"},r=Object(n["p"])("div",{class:"clearfix"},[Object(n["p"])("span",{style:{"font-size":"20px"}},"Customer Handover")],-1),l={class:"content"},c={class:"content-header"},u=Object(n["o"])("Search"),d=Object(n["o"])("Reset"),i={class:"content-main"};function p(e,t,a,p,s,b){var O=Object(n["P"])("el-option"),m=Object(n["P"])("el-select"),j=Object(n["P"])("el-col"),g=Object(n["P"])("el-date-picker"),f=Object(n["P"])("el-button"),h=Object(n["P"])("el-form"),w=Object(n["P"])("el-row"),y=Object(n["P"])("el-table-column"),k=Object(n["P"])("el-table"),v=Object(n["P"])("el-pagination"),D=Object(n["P"])("el-card"),_=Object(n["Q"])("loading");return Object(n["G"])(),Object(n["k"])("div",o,[Object(n["p"])(D,{shadow:"never"},{header:Object(n["eb"])((function(){return[r]})),default:Object(n["eb"])((function(){return[Object(n["p"])("div",l,[Object(n["p"])("div",c,[Object(n["p"])(w,{style:{width:"100%"},gutter:"50"},{default:Object(n["eb"])((function(){return[Object(n["p"])(h,{model:s.keyword},{default:Object(n["eb"])((function(){return[Object(n["p"])(j,{span:4},{default:Object(n["eb"])((function(){return[Object(n["p"])(m,{modelValue:s.keyword.cusSalesDeptId,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.keyword.cusSalesDeptId=e}),placeholder:"Department",clearable:"true",onClear:t[2]||(t[2]=function(e){return s.keyword.cusSalesDeptId=null})},{default:Object(n["eb"])((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["N"])(s.deptOptions,(function(e){return Object(n["G"])(),Object(n["k"])(O,{key:e.id,label:e.deptName,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["p"])(j,{span:4},{default:Object(n["eb"])((function(){return[Object(n["p"])(m,{modelValue:s.keyword.cusCustomerManagerId,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.keyword.cusCustomerManagerId=e}),placeholder:"Manager",clearable:"true",onClear:t[4]||(t[4]=function(t){return e.clearCustomerManagerId()})},{default:Object(n["eb"])((function(){return[(Object(n["G"])(!0),Object(n["k"])(n["b"],null,Object(n["N"])(s.empOptions,(function(e){return Object(n["G"])(),Object(n["k"])(O,{key:e.empId,label:e.empName,value:e.empId},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["p"])(j,{span:6},{default:Object(n["eb"])((function(){return[Object(n["p"])(g,{modelValue:s.keyword.startTime,"onUpdate:modelValue":t[5]||(t[5]=function(e){return s.keyword.startTime=e}),type:"date",placeholder:"pick date","disabled-date":s.disabledDate,shortcuts:s.shortcuts},null,8,["modelValue","disabled-date","shortcuts"])]})),_:1}),Object(n["p"])(j,{span:6},{default:Object(n["eb"])((function(){return[Object(n["p"])(g,{modelValue:s.keyword.endTime,"onUpdate:modelValue":t[6]||(t[6]=function(e){return s.keyword.endTime=e}),type:"date",placeholder:"pick date","disabled-date":s.disabledDate,shortcuts:s.shortcuts},null,8,["modelValue","disabled-date","shortcuts"])]})),_:1}),Object(n["p"])(j,{span:4},{default:Object(n["eb"])((function(){return[Object(n["p"])(f,{type:"primary",onClick:t[7]||(t[7]=function(e){return b.query()})},{default:Object(n["eb"])((function(){return[u]})),_:1})]})),_:1}),Object(n["p"])(j,{span:4},{default:Object(n["eb"])((function(){return[Object(n["p"])(f,{type:"primary",onClick:t[8]||(t[8]=function(e){return b.getSalesLogPage()})},{default:Object(n["eb"])((function(){return[d]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1})]),Object(n["p"])("div",i,[Object(n["fb"])(Object(n["p"])(k,{data:s.tableData,border:"",stripe:"",style:{width:"100%",margin:"1em 0","margin-top":"20px"},"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},{default:Object(n["eb"])((function(){return[Object(n["p"])(y,{prop:"dept_name",label:"Sales Department",align:"center","show-overflow-tooltip":""}),Object(n["p"])(y,{prop:"cus_mgr_id",label:"Customer Manager Id",align:"center","show-overflow-tooltip":""}),Object(n["p"])(y,{prop:"cus_mgr_name",label:"Customer Manager Name",align:"center","show-overflow-tooltip":""}),Object(n["p"])(y,{prop:"time",label:"Time",align:"center","show-overflow-tooltip":""}),Object(n["p"])(y,{prop:"content",label:"Work Content",align:"center","show-overflow-tooltip":""})]})),_:1},8,["data"]),[[_,s.loading]]),Object(n["p"])(v,{onSizeChange:e.sizeChange,onCurrentChange:e.currentChange,layout:"total, sizes, prev, pager, next, jumper","current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:s.total},null,8,["onSizeChange","onCurrentChange","current-page","page-sizes","page-size","total"])])])]})),_:1})])}var s=a("5530"),b=(a("d3b7"),a("ddb0"),{setup:function(){var e=Object(n["K"])({currentPage:1,pageSizes:[10,20,50,100],pageSize:10,formLabelWidth:"180px"});return Object(s["a"])({},Object(n["W"])(e))},data:function(){return{emp_info:{empId:"800123",empDeptId:"8021140",empPositionId:"30000030"},loading:!0,deptOptions:[],empOptions:[],total:0,keyword:{},tableData:[],disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"Today",value:new Date},{text:"Yesterday",value:function(){var e=new Date;return e.setTime(e.getTime()-864e5),e}()},{text:"A week ago",value:function(){var e=new Date;return e.setTime(e.getTime()-6048e5),e}()}]}},methods:{getSalesLogPage:function(){var e=this;this.axios.get("http://localhost:8001/report-view/init/"+this.emp_info.empId).then((function(t){console.log(t.data),e.deptOptions=t.data.body.depts,e.empOptions=t.data.body.depts[0].cusMgrs,console.log(e.empOptions),e.tableData=[],e.total=e.tableData.length,e.loading=!1}))},query:function(){var e=this;this.axios.get("http://localhost:8001/report-view/query",{params:{deptID:this.keyword.cusSalesDeptId,cusMgrID:this.keyword.cusCustomerManagerId,timeFrom:this.keyword.startTime,timeTo:this.keyword.endTime}}).then((function(t){console.log(t.data),e.tableData=t.data.body.entries,e.total=e.tableData.length,e.loading=!1}))}}});b.render=p;t["default"]=b}}]);