(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{52:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(22),a=n.n(r),s=n(13),i=n(24),o=n(1),l=n.n(o),u=n(4),j=n(6),d=n(10),h=n.n(d),b=n(23);n.n(b).a.config();var p="https://todo-list-mike.herokuapp.com",f=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(p,"/tasks"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(p,"/tasks/postNewTask"),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("".concat(p,"/tasks/deleteTask/").concat(t));case 3:return n=e.sent,e.abrupt("return",200===n.status);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=n(0),m=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h4",{className:"text-center p-4",children:"TODO-List"}),Object(k.jsxs)("p",{className:"text-center",children:[e.allTasks.filter((function(e){return!e.done})).length," tasks to do"]})]})},v=function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.task.name}),Object(k.jsx)("td",{children:Object(k.jsx)("input",{type:"checkbox",checked:e.task.done,onChange:function(){return e.toggleTask(e.task)}})}),Object(k.jsx)("td",{children:Object(k.jsx)("div",{className:"pl-1",onClick:function(){return e.deleteTask(e.task.name)},children:g})})]},e.task.name)},g=Object(k.jsx)("svg",{enableBackground:"new 0 0 512 512",height:"20px",id:"Layer_1",version:"1.1",viewBox:"0 0 512 512",width:"20px",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsxs)("g",{children:[Object(k.jsx)("path",{d:"M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z",fill:"#37404D"}),Object(k.jsx)("rect",{fill:"#37404D",height:"317.885",width:"19.868",x:"246.173",y:"126.511"}),Object(k.jsx)("polygon",{fill:"#37404D",points:"206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  "}),Object(k.jsx)("polygon",{fill:"#37404D",points:"345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017  "})]})}),w=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],a=n[1],s=function(){e.callback(r),a(" ")};return Object(k.jsxs)("div",{className:"my-1",children:[Object(k.jsx)("input",{type:"text",className:"form-control",value:r,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){13===e.charCode&&s()}}),Object(k.jsx)("button",{className:"btn btn-primary mt-1",onClick:s,children:"+"})]})},y=function(e){return Object(k.jsx)("div",{className:"form-check",children:Object(k.jsxs)("label",{children:[Object(k.jsx)("input",{type:"checkbox",className:"form-check-input",checked:e.isChecked,onChange:function(t){return e.callback(t.target.checked)}}),"Show ",e.description]})})},N=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(j.a)(a,2),d=o[0],h=o[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,console.log("fetchedTasks",t),r(t||[{name:"illo",done:!1}]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){localStorage.setItem("showCompletedLS",JSON.stringify(d))}),[d]);var b=function(e){return n.filter((function(t){return t.done===e})).map((function(e){return Object(k.jsx)(v,{task:e,toggleTask:g,deleteTask:function(){return N(e._id)}},e.name)}))},p=function(){var e=Object(u.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.find((function(e){return e.name===t}))){e.next=5;break}return e.next=3,x({name:t,done:!1});case 3:c=e.sent,r([].concat(Object(i.a)(n),[c]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return r(n.map((function(t){return t.name===e.name?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t})))},N=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:e.sent&&r(n.filter((function(e){return e._id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(m,{allTasks:n}),Object(k.jsxs)("div",{className:"container-fluid",children:[Object(k.jsx)(w,{callback:p}),Object(k.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Done"}),Object(k.jsx)("th",{children:"Delete"})]})}),Object(k.jsx)("tbody",{children:b(!1)})]}),Object(k.jsx)("div",{className:"p-4",children:Object(k.jsx)(y,{description:"Completed Tasks",isChecked:d,callback:function(e){return h(e)}})}),d&&Object(k.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Description of completed tasks"}),Object(k.jsx)("th",{children:"Done"}),Object(k.jsx)("th",{children:"Delete"})]})}),Object(k.jsx)("tbody",{children:b(!0)})]})]})]})};n(51);a.a.render(Object(k.jsx)(N,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8011e938.chunk.js.map