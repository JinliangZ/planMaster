(this.webpackJsonpplanmaster=this.webpackJsonpplanmaster||[]).push([[0],{259:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var c=n(25),r=n(0),a=n.n(r),s=n(8),i=n.n(s),l=(n(259),n(45)),o=n(13),j=n(42),d=n(43),u=n(44),h=n(47),b=n(46),O=n(15),p=n(3),m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signIn(e.state)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(p.jsx)(o.a,{to:"/"}):Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(p.jsx)("h5",{className:"grey-text text-darken-3",children:"Log In"}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Log In"}),Object(p.jsx)("div",{className:"red-text center",children:t?Object(p.jsx)("p",{children:t}):null})]})]})})}}]),n}(r.Component),x=Object(O.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(t,n,c){(0,c.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",err:e})}))}}(t))}}}))(m),f=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",passwordAgain:"",firstname:"",lastname:"",signUpError:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.password.localeCompare(e.state.passwordAgain)?e.setState({signUpError:"password does not match"}):e.props.signUp(e.state)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(p.jsx)(o.a,{to:"/"}):Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(p.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"passwordAgain",children:"Confirm Password"}),Object(p.jsx)("input",{type:"password",id:"passwordAgain",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(p.jsx)("input",{type:"text",id:"firstname",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"lastname",children:"Lastname"}),Object(p.jsx)("input",{type:"text",id:"lastname",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(p.jsx)("div",{className:"red-text center",children:n?Object(p.jsx)("p",{children:n}):null})]}),Object(p.jsx)("div",{className:"red-text center",children:this.state.signUpError})]})})}}]),n}(r.Component),g=Object(O.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,c){var r=c.getFirebase,a=(c.getFirestore,r()),s=a.firestore();a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return s.collection("users").doc(t.user.uid).set({firstName:e.firstname,lastName:e.lastname,initials:e.firstname[0]+e.lastname[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(f),v=n(37),N=n(24),C=n(12),E=n(69),S=n.n(E),w=function(e){var t=e.project;return Object(p.jsx)("div",{className:"card z-depth-0 project_summary",children:Object(p.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(p.jsx)("span",{className:"card-title",children:t.title}),Object(p.jsxs)("p",{children:["Post by ",t.authorFirstName," ",t.authorLastName]}),Object(p.jsx)("p",{className:"grey-text",children:t.createdAt?S()(t.createdAt.toDate()).calendar():"loading"})]})})},y=function(e){var t=e.projects;return Object(p.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(p.jsx)(C.b,{to:"/project/"+e.id,children:Object(p.jsx)(w,{project:e})},e.id)}))})},R=n(250);n(414);var F=function(e){var t=Object(r.useState)(new Date),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(p.jsx)("div",{className:"container center calendar",children:Object(p.jsx)(R.a,{onChange:a,value:c,calendarType:"Hebrew"})})},I=n(251);n(415);var k=function(){var e=Object(r.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){var e=setInterval((function(){return c(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var a=S()().format("MMMM Do YYYY, h:mm:ss a");return Object(p.jsxs)("div",{className:"container center clock-container",children:[Object(p.jsxs)("p",{children:["Current time: ",a]}),Object(p.jsx)("div",{className:"clock",children:Object(p.jsx)(I.a,{value:n})})]})},P=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?Object(p.jsx)("div",{className:"dashboard container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col s12 m6",children:Object(p.jsx)(y,{projects:t})}),Object(p.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(p.jsx)(k,{})}),Object(p.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(p.jsx)(F,{})})]})}):Object(p.jsx)(o.a,{to:"/signin"})}}]),n}(r.Component),A=Object(N.d)(Object(O.b)((function(e){return{projects:e.firestore.ordered.projects||e.project.projects,auth:e.firebase.auth}})),Object(v.firestoreConnect)((function(e){return[{collection:"projects"}]})))(P),U=Object(O.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(){}))}))}}}))((function(e){var t=e.profile;return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(p.jsx)("li",{children:Object(p.jsx)(C.c,{to:"/create",children:"New Plan"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(p.jsx)("li",{children:Object(p.jsx)(C.c,{to:"/",className:"btn btn-floating pink lighten-1",children:t.initials})})]})})})),L=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(p.jsx)("li",{children:Object(p.jsx)(C.c,{to:"/signup",children:"Sign Up"})}),Object(p.jsx)("li",{children:Object(p.jsx)(C.c,{to:"/signin",children:"Log In"})})]})})},T=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile;return Object(p.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C.b,{to:"/",className:"brand-logo ",children:"PlanMaster"}),!!t.uid&&Object(p.jsx)(U,{profile:n}),!!t.uid||Object(p.jsx)(L,{})]})})})),_="planmaster/project/CREATE_PROJECT",D="planmaster/project/CREATE_PROJECT_ERROR";var G=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),setTimeout((function(){e.props.history.push("/")}),200)},e}return Object(u.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(p.jsx)("h5",{className:"grey-text text-darken-3",children:"New Plan"}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"input-field",children:[Object(p.jsx)("label",{htmlFor:"content",children:"Plan Content"}),Object(p.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(p.jsx)("div",{className:"input-field",children:Object(p.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Create"})})]})}):Object(p.jsx)(o.a,{to:"/signin"})}}]),n}(r.Component),M=Object(N.d)(Object(O.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,n,r){var a=(0,r.getFirebase)().firestore(),s=n().firebase.profile,i=n().firebase.auth.uid;a.collection("projects").doc().set(Object(c.a)(Object(c.a)({},e),{},{authorFirstName:s.firstName,authorLasttName:s.lastName,authorID:i,createdAt:new Date})).then((function(){t({type:_,project:e})})).catch((function(e){t({type:D,err:e})}))}}(t))}}})),o.g)(G),z=Object(N.d)(o.g,Object(O.b)((function(e,t){var n=t.match.params.id,c=e.firestore.data.projects;return{project:c?c[n]:null,auth:e.firebase.auth}})),Object(v.firestoreConnect)((function(e){return[{collection:"projects"}]})))((function(e){var t=e.match.params.id,n=e.project;return e.auth.uid?n?Object(p.jsx)("div",{className:"container section project-details",children:Object(p.jsxs)("div",{className:"card z-depth-0",children:[Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsxs)("span",{className:"card-title",children:[n.title," + ",t]}),Object(p.jsx)("p",{children:n.content})]}),Object(p.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(p.jsxs)("div",{children:["post by ",n.authorFirstName," ",n.authorLastName]}),Object(p.jsx)("div",{children:n.createdAt?S()(n.createdAt.toDate()).calendar():"loading"})]})]})}):Object(p.jsx)("div",{className:"container center",children:Object(p.jsx)("p",{children:"Loading project..."})}):Object(p.jsx)(o.a,{to:"/signin"})})),J=n(481),B=n(478),W=n(480);var Y=function(e){var t=a.a.useState(null),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(O.d)((function(e){return e.firebase.auth})),i=Object(O.c)(),o=function(){r(null)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(J.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},children:Object(p.jsx)("i",{className:"material-icons",children:"menu"})}),Object(p.jsx)(B.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:o,children:null!=s.uid?Object(p.jsxs)("div",{children:[Object(p.jsx)(W.a,{onClick:o,children:Object(p.jsx)(C.c,{to:"/create",children:"New Plan"})}),Object(p.jsx)(W.a,{onClick:o,children:Object(p.jsx)("a",{onClick:function(){i((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(){}))}))},children:"Log Out"})})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)(W.a,{onClick:o,children:[" ",Object(p.jsx)(C.c,{to:"/signup",children:"Sign Up"})]}),Object(p.jsxs)(W.a,{onClick:o,children:[" ",Object(p.jsx)(C.c,{to:"/signin",children:"Log In"})]})]})})]})};var V=function(){var e=Object(r.useState)(document.documentElement.clientWidth),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){c({deskWidth:document.documentElement.clientWidth})};return Object(r.useLayoutEffect)((function(){window.addEventListener("resize",a)}),[n]),Object(p.jsxs)("div",{className:"App",children:[void 0!=n&&(n<=1e3||n.deskWidth<=1e3)&&Object(p.jsx)(Y,{}),Object(p.jsx)(T,{}),Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{exact:!0,path:"/",children:Object(p.jsx)(A,{})}),Object(p.jsx)(o.b,{path:"/project/:id",children:Object(p.jsx)(z,{})}),Object(p.jsx)(o.b,{path:"/signin",children:Object(p.jsx)(x,{})}),Object(p.jsx)(o.b,{path:"/signup",children:Object(p.jsx)(g,{})}),Object(p.jsx)(o.b,{path:"/create",children:Object(p.jsx)(M,{})})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,483)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},K=n(73),X={authError:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(c.a)(Object(c.a)({},e),{},{authError:"login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(c.a)(Object(c.a)({},e),{},{authError:t.err.message});default:return e}},q={projects:[{id:"1",title:"PROJECTS ARE LOADING",content:"PROJECTS ARE LOADING"}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},$=Object(N.c)({auth:Z,project:Q,firestore:K.firestoreReducer,firebase:v.firebaseReducer}),ee=n(249),te=n(118);n(448),n(452);te.a.initializeApp({apiKey:"AIzaSyBkSfs6M8yVaOM3j7x265I_0w5RxVOVoME",authDomain:"planmaster-cc1aa.firebaseapp.com",projectId:"planmaster-cc1aa",storageBucket:"planmaster-cc1aa.appspot.com",messagingSenderId:"306240510705",appId:"1:306240510705:web:b97176b0c948c4e1352750",measurementId:"G-Z2B37XW11B"}),te.a.firestore();var ne=te.a,ce=Object(N.d)(Object(K.reduxFirestore)(ne))(N.e)($,Object(N.d)(Object(N.a)(ee.a.withExtraArgument({getFirestore:K.getFirestore,getFirebase:v.getFirebase})))),re={firebase:ne,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:ce.dispatch,createFirestoreInstance:K.createFirestoreInstance};function ae(e){var t=e.children,n=Object(O.d)((function(e){return e.firebase.auth}));return Object(v.isLoaded)(n)?t:Object(p.jsx)("div",{children:"splash screen..."})}i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O.a,{store:ce,children:Object(p.jsx)(v.ReactReduxFirebaseProvider,Object(c.a)(Object(c.a)({},re),{},{children:Object(p.jsx)(ae,{children:Object(p.jsx)(C.a,{children:Object(p.jsx)(V,{})})})}))})}),document.getElementById("root")),H()}},[[451,1,2]]]);
//# sourceMappingURL=main.2fa00d2b.chunk.js.map