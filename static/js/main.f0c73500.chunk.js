(this["webpackJsonplove-calculator"]=this["webpackJsonplove-calculator"]||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/m.m.3efcfd64.jpg"},153:function(e,t,a){e.exports=a(185)},155:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(155),a(14)),c=a.n(l),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,250)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))},i=a(12),s=a(19),u=a(21),m=a(63),p=a(241),d=a(231),f=a(137),b=a(57),y=a(190),g=a(134),v=a(232),E=a(123),j=a.n(E),O=a(120),h=a.n(O),w=a(121),N=a.n(w),S=a(122),x=a.n(S),C=a(84),k=a.n(C),D=a(110),_=a(111),I=a.n(_),U=function(){var e=Object(D.a)(k.a.mark((function e(t,a){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.request({method:"GET",url:"https://love-calculator.p.rapidapi.com/getPercentage",params:{fname:t,sname:a},headers:{"x-rapidapi-key":"dcedb73688mshcfac6f6124da828p19d4ddjsn5532507128b0","x-rapidapi-host":"love-calculator.p.rapidapi.com"}});case 3:return n=e.sent,e.abrupt("return",n);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=11;break}return e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),R=a(52),F=a(112),W=a(119),T=a.n(W),z=a(15),B="setStatus",V=Object(m.a)((function(e){return{root:{direction:"ltr"}}}));var A=function(e){var t=V(),a=Object(z.b)(),l=Object(z.c)((function(e){return e.allData})),c=Object(z.c)((function(e){return e.userData})),o=Object(z.c)((function(e){return e.tableRow})),i=[{field:"id",headerName:"ID",width:70,disableClickEventBubbling:!0},{field:"girlName",headerName:"Girl name",width:120,disableClickEventBubbling:!0},{field:"boyName",headerName:"Boy name",width:120,disableClickEventBubbling:!0},{field:"interest",headerName:"Interest",description:"percentage",disableClickEventBubbling:!0},{field:"description",headerName:"Description",flex:1,sortable:!1,disableClickEventBubbling:!0},{field:"remove",headerName:"Remove",width:110,sortable:!1,renderCell:function(){return r.a.createElement(R.a,{size:"small"},r.a.createElement(T.a,null))}}],s=function(){l.find((function(e){if(e.username===c){var t=[];e.results.map((function(e,a){t.push({id:a+1,girlName:e.fname,boyName:e.sname,interest:e.percentage,description:e.result,remove:"del"})})),a({type:"setTableRow",payload:t})}}))};return Object(n.useEffect)((function(){s()}),[]),r.a.createElement(F.a,{loading:!o,className:t.root,rows:o||[],columns:i,pageSize:5,disableMultipleSelection:!0,onRowSelected:function(e){return function(e){var t=l;t.find((function(a){a.username===c&&(a.results.splice(e-1,1),localStorage.setItem("love-calculator",JSON.stringify(t)),s())}))}(e.data.id)}})},L=Object(m.a)((function(e){return{btn:{color:"red"},input:{display:"flex",justifyContent:"center","& input[type=text]":{textAlign:"center"}},div:Object(u.a)({},e.breakpoints.down("xs"),{margin:"100px 0"})}}));var P=function(e){var t,a=L(),n=Object(z.b)(),l=Object(z.c)((function(e){return e.allData})),c=Object(z.c)((function(e){return e.userData})),o=Object(z.c)((function(e){return e.name})),u=Object(z.c)((function(e){return e.validateForm})),m=Object(z.c)((function(e){return e.resultCalculator})),E=Object(z.c)((function(e){return e.loading})),O=Object(z.c)((function(e){return e.status})),w=function(e){if("login"==O){var t=l;t.find((function(a){if(a.username===c){a.results=a.results?Object(s.a)(a.results):[],a.results.push(e),localStorage.setItem("love-calculator",JSON.stringify(t));var r=[];a.results.map((function(e,t){r.push({id:t+1,girlName:e.fname,boyName:e.sname,interest:e.percentage,description:e.result,remove:"del"})})),n({type:"setTableRow",payload:r})}}))}};return r.a.createElement(p.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",className:a.div},r.a.createElement(d.a,{component:"form",autoComplete:"off",container:!0,justify:"center",noValidate:!0,onSubmit:function(e){e.preventDefault(),n({type:"setValidateForm",payload:!0}),Object.values(o).every((function(e){return e.trim()}))&&(n({type:"setResultCalculator",payload:{}}),n({type:"setLoading",payload:!0}),U(o.fName,o.sName).then((function(e){200===e.status&&(n({type:"setSnackbar",payload:o.fName+" & "+o.sName+" "+e.result}),n({type:"setResultCalculator",payload:e.data}),n({type:"setLoading",payload:!1}),w(e.data))})).catch((function(e){return console.error(e)})))},spacing:2},r.a.createElement(d.a,{item:!0,xs:12,sm:5,className:a.input},r.a.createElement(f.a,{fullWidth:!0,autoFocus:!0,label:"\u0646\u0627\u0645 \u067e\u0633\u0631",error:!o.sName.trim()&&u&&!0,variant:"outlined",onChange:function(e){return n({type:"setName",payload:Object(i.a)(Object(i.a)({},o),{},{sName:e.target.value})})}})),r.a.createElement(d.a,{item:!0,xs:12,sm:5,className:a.input},r.a.createElement(f.a,{fullWidth:!0,label:"\u0646\u0627\u0645 \u062f\u062e\u062a\u0631",error:!o.fName.trim()&&u&&!0,variant:"outlined",onChange:function(e){return n({type:"setName",payload:Object(i.a)(Object(i.a)({},o),{},{fName:e.target.value})})}})),r.a.createElement(d.a,{item:!0,xs:12,sm:2,className:a.input},r.a.createElement(b.a,{fullWidth:!0,size:"large",variant:"outlined",type:"submit",position:"relative",display:"inline-flex"},E||m.percentage?r.a.createElement(p.a,{display:"flex",alignItems:"center"},r.a.createElement(p.a,{display:"flex",alignItems:"center",justifyContent:"center",ml:2},r.a.createElement(y.a,{variant:m.percentage&&"determinate",value:m.percentage&&m.percentage}),r.a.createElement(p.a,{position:"absolute"},r.a.createElement(g.a,{variant:"caption",component:"div",color:"textSecondary"},m.percentage?"".concat(m.percentage,"%"):r.a.createElement(v.a,{variant:"text",width:20})))),(t=m.percentage)<50?r.a.createElement(h.a,null):50==t?r.a.createElement(N.a,null):r.a.createElement(x.a,null)):r.a.createElement(j.a,{className:a.btn})))),"login"==O?r.a.createElement(p.a,{width:"100%",height:400,mt:5},r.a.createElement(A,null)):r.a.createElement(p.a,{mt:5,boxShadow:2,border:1,borderColor:"primary.main",borderRadius:"borderRadius"},r.a.createElement(p.a,{m:1.5},r.a.createElement(g.a,{align:"center",variant:"subtitle1"},"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u0644\u06cc\u0633\u062a \u0646\u062a\u0627\u06cc\u062c \u0628\u0627 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f")),r.a.createElement(b.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",onClick:function(){return n({type:B,payload:"username"})}},"\u0648\u0631\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc")))},X=a(236),J=a(230),M=a(246),G=a(247),q=a(126),H=a.n(q),K=a(124),Q=a.n(K);var Y=function(e){return r.a.createElement(R.a,{color:"inherit",onClick:function(){localStorage.setItem("love-calculator_login","logout"),localStorage.setItem("love-calculator_user",null),window.location.reload()}},r.a.createElement(Q.a,null))},Z=a(23),$=a(244),ee=a(233),te=a(234),ae=a(235),ne=a(73),re=a.n(ne),le=Object(m.a)((function(e){return{input:{display:"flex",justifyContent:"center"},dialog_form:Object(u.a)({overflowX:"hidden"},e.breakpoints.down("xs"),{display:"flex",alignItems:"center",justifyContent:"center"})}}));var ce=function(e){var t=le(),a=Object(Z.a)(),n=Object(z.b)(),l=Object(z.c)((function(e){return e.allData})),c=Object(z.c)((function(e){return e.userAccount})),o=Object(z.c)((function(e){return e.status}));return r.a.createElement($.a,{fullWidth:!0,fullScreen:Object(ee.a)(a.breakpoints.down("xs")),open:!0,onClose:function(){return n({type:B,payload:""})}},r.a.createElement(te.a,null,r.a.createElement(R.a,{onClick:function(){return n({type:B,payload:""})}},r.a.createElement(re.a,null))),r.a.createElement(ae.a,{className:t.dialog_form},r.a.createElement(p.a,{mb:3},r.a.createElement(d.a,{component:"form",autoComplete:"off",container:!0,justify:"center",noValidate:!0,onSubmit:"password"==o?function(e){e.preventDefault(),c.password===e.target[0].value?(localStorage.setItem("love-calculator_login","login"),localStorage.setItem("love-calculator_user",c.username),window.location.reload()):n({type:"setSnackbar",payload:"\u0631\u0645\u0632 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0646\u0627\u062f\u0631\u0633\u062a \u0627\u0633\u062a"})}:function(e){if(e.preventDefault(),l){var t=l.find((function(t){return t.username===e.target[0].value}));t?(n({type:"setUserAccount",payload:t}),n({type:B,payload:"password"})):n({type:B,payload:"signUp"})}else n({type:B,payload:"signUp"})},spacing:1},"password"==o?r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(f.a,{type:"password",fullWidth:!0,autoFocus:!0,label:"\u067e\u0633\u0648\u0631\u062f",variant:"filled"})):r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(f.a,{fullWidth:!0,label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",variant:"filled"})),r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(b.a,{fullWidth:!0,size:"large",variant:"outlined",type:"submit"},"password"==o?"\u0648\u0631\u0648\u062f":"\u062b\u0628\u062a \u0646\u0627\u0645 / \u0648\u0631\u0648\u062f"))))))},oe=Object(m.a)((function(e){return{input:{display:"flex",justifyContent:"center"},dialog_form:Object(u.a)({overflowX:"hidden"},e.breakpoints.down("xs"),{display:"flex",alignItems:"center",justifyContent:"center"})}}));var ie=function(e){var t=oe(),a=Object(Z.a)(),n=Object(z.b)(),l=Object(z.c)((function(e){return e.allData})),c=Object(z.c)((function(e){return e.signUp})),o=Object(z.c)((function(e){return e.validatesignUp}));return r.a.createElement($.a,{fullWidth:!0,fullScreen:Object(ee.a)(a.breakpoints.down("xs")),open:!0,onClose:function(){return n({type:B,payload:""})}},r.a.createElement(te.a,null,r.a.createElement(R.a,{onClick:function(){return n({type:B,payload:""})}},r.a.createElement(re.a,null))),r.a.createElement(ae.a,{className:t.dialog_form},r.a.createElement(p.a,{mb:3},r.a.createElement(d.a,{component:"form",container:!0,justify:"center",autoComplete:"off",noValidate:!0,onSubmit:function(e){if(e.preventDefault(),n({type:"setValidatesignUp",payload:!0}),Object.values(c).every((function(e){return e.trim()})))if(l&&l.find((function(e){return e.username===c.username})))n({type:"setSnackbar",payload:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0642\u0628\u0644\u0627 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a"});else if(c.password===c.rePassword){var t=l||[];t.push({username:c.username,password:c.password}),localStorage.setItem("love-calculator",JSON.stringify(t)),localStorage.setItem("love-calculator_user",c.username),localStorage.setItem("love-calculator_login","login"),window.location.reload()}else n({type:"setSnackbar",payload:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u06cc\u06a9\u0633\u0627\u0646 \u0646\u06cc\u0633\u062a"})},spacing:1},r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(f.a,{fullWidth:!0,autoFocus:!0,label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",error:!c.username.trim()&&o&&!0,variant:"filled",onChange:function(e){return n({type:"setSignUp",payload:Object(i.a)(Object(i.a)({},c),{},{username:e.target.value})})}})),r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(f.a,{type:"password",fullWidth:!0,label:"\u067e\u0633\u0648\u0631\u062f",error:!c.password.trim()&&o&&!0,variant:"filled",onChange:function(e){return n({type:"setSignUp",payload:Object(i.a)(Object(i.a)({},c),{},{password:e.target.value})})}})),r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(f.a,{type:"password",fullWidth:!0,label:"\u062a\u06a9\u0631\u0627\u0631 \u067e\u0633\u0648\u0631\u062f",error:!c.rePassword.trim()&&o&&!0,variant:"filled",onChange:function(e){return n({type:"setSignUp",payload:Object(i.a)(Object(i.a)({},c),{},{rePassword:e.target.value})})}})),r.a.createElement(d.a,{item:!0,xs:12,className:t.input},r.a.createElement(b.a,{fullWidth:!0,size:"large",variant:"outlined",type:"submit"},"\u062b\u0628\u062a \u0646\u0627\u0645"))))))},se=a(125),ue=a.n(se),me=Object(m.a)((function(e){return{navbar:{top:0},chip:{direction:"ltr",marginRight:"auto"}}}));var pe=function(e){var t=me(),a=Object(z.b)(),l=Object(z.c)((function(e){return e.status})),c=Object(z.c)((function(e){return e.userData}));return Object(n.useEffect)((function(){a({type:"setAllData",payload:JSON.parse(localStorage.getItem("love-calculator"))}),a({type:B,payload:localStorage.getItem("love-calculator_login")}),a({type:"setUserData",payload:localStorage.getItem("love-calculator_user")})}),[]),r.a.createElement(X.a,{position:"fixed",className:t.navbar},r.a.createElement(J.a,null,"login"==l?r.a.createElement(g.a,null,r.a.createElement(Y,null),c):r.a.createElement(R.a,{color:"inherit",onClick:function(){return a({type:B,payload:"username"})}},r.a.createElement(H.a,null)),r.a.createElement(M.a,{className:t.chip,component:"a",avatar:r.a.createElement(G.a,{src:ue.a}),label:"M.M",href:"https://github.com/mohammadreza4mn",clickable:!0,target:"_blank"})),("username"==l||"password"==l)&&r.a.createElement(ce,null),"signUp"==l&&r.a.createElement(ie,null))},de=a(237),fe=a(248),be=a(242),ye=Object(m.a)((function(e){return{snackbarResult:Object(u.a)({direction:"ltr"},e.breakpoints.down("xs"),{top:"60px"})}}));var ge=function(e){var t=ye(),a=Object(z.b)(),n=Object(z.c)((function(e){return e.snackbar}));return r.a.createElement(fe.a,{className:t.snackbarResult,open:n,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:6e4,TransitionComponent:function(e){return r.a.createElement(de.a,Object.assign({},e,{direction:"down"}))},onClose:function(){return a({type:"setSnackbar",payload:null})}},r.a.createElement(be.a,{variant:"filled",severity:"info",onClose:function(){return a({type:"setSnackbar",payload:null})}},n))},ve=a(127),Ee=a(238),je=a(239),Oe=a(240),he=a(72),we={name:{sName:"",fName:""},signUp:{username:"",password:"",rePassword:""},resultCalculator:{},validateForm:!1,snackbar:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAllData":return Object(i.a)(Object(i.a)({},e),{},{allData:t.payload});case"setUserAccount":return Object(i.a)(Object(i.a)({},e),{},{userAccount:t.payload});case"setSignUp":return Object(i.a)(Object(i.a)({},e),{},{signUp:t.payload});case B:return Object(i.a)(Object(i.a)({},e),{},{status:t.payload});case"setName":return Object(i.a)(Object(i.a)({},e),{},{name:t.payload});case"setValidateForm":return Object(i.a)(Object(i.a)({},e),{},{validateForm:t.payload});case"setValidatesignUp":return Object(i.a)(Object(i.a)({},e),{},{validatesignUp:t.payload});case"setResultCalculator":return Object(i.a)(Object(i.a)({},e),{},{resultCalculator:t.payload});case"setSnackbar":return Object(i.a)(Object(i.a)({},e),{},{snackbar:t.payload});case"setLoading":return Object(i.a)(Object(i.a)({},e),{},{loading:t.payload});case"setUserData":return Object(i.a)(Object(i.a)({},e),{},{userData:t.payload});case"setTableRow":return Object(i.a)(Object(i.a)({},e),{},{tableRow:t.payload});default:return e}},Se=Object(ve.a)({typography:{fontFamily:["vazir"]},overrides:{MuiCssBaseline:{"@global":{body:{direction:"rtl",overflowX:"hidden"}}}}}),xe=Object(he.b)(Ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee.a,{theme:Se},r.a.createElement(je.a,null),r.a.createElement(Oe.a,{fixed:!0},r.a.createElement(z.a,{store:xe},r.a.createElement(ge,null),r.a.createElement(pe,null),r.a.createElement(P,null))))),document.getElementById("root")),o()}},[[153,1,2]]]);
//# sourceMappingURL=main.f0c73500.chunk.js.map