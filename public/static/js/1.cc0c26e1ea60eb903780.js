webpackJsonp([1],{"5EGz":function(e,n){},AC7V:function(e,n){},"T+/8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Dd8w"),s=t.n(o),r=t("NYxO"),i={name:"Login",data:function(){return{showModal:!1,loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length?t():t(new Error("아이디를 입력해주세요"))}}],password:[{required:!0,trigger:"blur",validator:function(e,n,t){n.length?t():t(new Error("비밀번호를 입력해주세요"))}}]},pwdType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},computed:s()({},Object(r.d)({userId:function(e){return e.user.id},loading:function(e){return e.user.loading}}),{changeId:function(){if(console.log("=== changeId ==="),this.userId)return console.log("=== is userId ==="),this.$router.push("/"),"당신의 아이디는 "+this.userId}}),methods:s()({},Object(r.b)(["Login"]),Object(r.c)(["SET_LOADING"]),{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var e=this;console.log("=== 로그인 버튼 ==="),this.$refs.loginForm.validate(function(n){n&&(console.log("=== 벨류데이션 체크 ==="),console.log("this.loginForm = ",e.loginForm),e.SET_LOADING(!0),e.Login(e.loginForm))})}}),mounted:function(){console.log("mounted",this.loading,this.userId)}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[t("h3",{staticClass:"title"},[e._v("관리자 로그인")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"아이디를 입력해주세요"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"비밀번호를 입력해주세요"},nativeOn:{keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13,n.key,"Enter")?e.handleLogin(n):null}},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[e._v("\n        문자열바뀜\n        "),t("svg-icon",{attrs:{"icon-class":"password"}})],1)],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),e.handleLogin(n)}}},[e._v("\n        로그인\n      ")])],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},on:{click:function(n){e.$router.push("/")}}},[e._v("\n        비회원\n      ")])],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},on:{click:function(n){e.$router.push("/registraion")}}},[e._v("\n        회원가입\n      ")])],1),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),e._v(" "),t("span",[e._v(" password: admin")])])],1),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.userId,expression:"userId"}]},[e._v(e._s(e.changeId))])],1)},staticRenderFns:[]};var l=t("VU/8")(i,a,!1,function(e){t("5EGz"),t("AC7V")},"data-v-4724541c",null);n.default=l.exports}});
//# sourceMappingURL=1.cc0c26e1ea60eb903780.js.map