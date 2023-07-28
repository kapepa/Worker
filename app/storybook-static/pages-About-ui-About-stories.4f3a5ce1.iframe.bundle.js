"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[278],{"./src/pages/About/ui/About.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AboutDark:function(){return AboutDark},AboutNormal:function(){return AboutNormal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return About_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Panel=__webpack_require__("./src/widgets/Panel/index.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Sidebar=__webpack_require__("./src/widgets/Sidebar/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),About_About=function About(){var t=(0,es.$G)("about").t;return(0,jsx_runtime.jsxs)("div",{"data-testid":"about",children:[(0,jsx_runtime.jsx)(Panel.Z,{}),(0,jsx_runtime.jsxs)("div",{className:"content-page",children:[(0,jsx_runtime.jsx)(Sidebar.Z,{className:""}),(0,jsx_runtime.jsx)("main",{className:"content-main ",children:t("about page")})]})]})},ui_About=About_About;try{About_About.displayName="About",About_About.__docgenInfo={description:"",displayName:"About",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/About/ui/About.tsx#About"]={docgenInfo:About_About.__docgenInfo,name:"About",path:"src/pages/About/ui/About.tsx#About"})}catch(__react_docgen_typescript_loader_error){}var _AboutNormal$paramete,_AboutNormal$paramete2,_AboutNormal$paramete3,_AboutDark$parameters,_AboutDark$parameters2,_AboutDark$parameters3,ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),About_stories={component:ui_About,decorators:[__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx").Z]},AboutNormal={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},AboutDark={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};AboutNormal.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AboutNormal.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AboutNormal$paramete=AboutNormal.parameters)||void 0===_AboutNormal$paramete?void 0:_AboutNormal$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_AboutNormal$paramete2=AboutNormal.parameters)||void 0===_AboutNormal$paramete2||null===(_AboutNormal$paramete3=_AboutNormal$paramete2.docs)||void 0===_AboutNormal$paramete3?void 0:_AboutNormal$paramete3.source)})}),AboutDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AboutDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AboutDark$parameters=AboutDark.parameters)||void 0===_AboutDark$parameters?void 0:_AboutDark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_AboutDark$parameters2=AboutDark.parameters)||void 0===_AboutDark$parameters2||null===(_AboutDark$parameters3=_AboutDark$parameters2.docs)||void 0===_AboutDark$parameters3?void 0:_AboutDark$parameters3.source)})});var __namedExportsOrder=["AboutNormal","AboutDark"]},"./src/entities/Users/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ao:function(){return GetUsersMyself},m5:function(){return UsersReducer}});var redux_toolkit_esm=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),axios=__webpack_require__("./src/utils/axios.ts"),MyselfUsers=(0,redux_toolkit_esm.hg)("users/MyselfUsers",function(){var _ref2=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(data,_ref){var rejectWithValue,response;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return rejectWithValue=_ref.rejectWithValue,_context.prev=1,_context.next=4,axios.Y.get("/api/users/myself");case 4:if((response=_context.sent).data){_context.next=7;break}throw new Error("error-user");case 7:return _context.abrupt("return",response.data);case 10:return _context.prev=10,_context.t0=_context.catch(1),_context.abrupt("return",rejectWithValue("error-user"));case 13:case"end":return _context.stop()}}),_callee,null,[[1,10]])})));return function(_x,_x2){return _ref2.apply(this,arguments)}}()),initialState={loading:!1,data:void 0,error:void 0},UsersSlice=(0,redux_toolkit_esm.oM)({name:"users",initialState:initialState,reducers:{cleanUsers:function cleanUsers(state){state.data=void 0}},extraReducers:function extraReducers(builder){builder.addCase(MyselfUsers.pending,(function(state,action){state.loading=!0})).addCase(MyselfUsers.fulfilled,(function(state,action){state.loading=!1,state.data=action.payload})).addCase(MyselfUsers.rejected,(function(state,action){state.loading=!1,state.error=action.payload}))}}),UsersReducer=(UsersSlice.actions,UsersSlice.reducer),GetUsersMyself=(0,__webpack_require__("./node_modules/reselect/es/index.js").P1)((function GetUsers(state){return state.users}),(function(state){return state.data}))},"./src/features/AuthByUsername/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_A:function(){return _ui_LoginModal_LoginModal__WEBPACK_IMPORTED_MODULE_0__._},lz:function(){return _model_slice_authSlice__WEBPACK_IMPORTED_MODULE_1__.lz}});var _ui_LoginModal_LoginModal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx"),_model_slice_authSlice__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/AuthByUsername/model/slice/authSlice.ts");__webpack_require__("./src/features/AuthByUsername/model/selectors/getLogin/getLogin.ts")},"./src/features/AuthByUsername/model/selectors/getAuth/getAuth.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return GetAuth}});var GetAuth=function GetAuth(state){return state.auth}},"./src/features/AuthByUsername/model/selectors/getLogin/getLogin.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return GetLogin}});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/reselect/es/index.js"),_getAuth_getAuth__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/AuthByUsername/model/selectors/getAuth/getAuth.ts"),GetLogin=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.P1)(_getAuth_getAuth__WEBPACK_IMPORTED_MODULE_1__.H,(function(state){return state.login}))},"./src/features/AuthByUsername/model/services/loginByUser/loginByUser.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return LoginByUser}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),_utils_axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/axios.ts"),LoginByUser=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.hg)("login/LoginByUser",function(){var _ref2=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().mark((function _callee(data,_ref){var rejectWithValue,response;return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return rejectWithValue=_ref.rejectWithValue,_context.prev=1,_context.next=4,_utils_axios__WEBPACK_IMPORTED_MODULE_0__.Y.post("/api/auth/login",data);case 4:if((response=_context.sent).data){_context.next=7;break}throw new Error("error-login");case 7:return _context.abrupt("return",response.data);case 10:return _context.prev=10,_context.t0=_context.catch(1),_context.abrupt("return",rejectWithValue("error-login"));case 13:case"end":return _context.stop()}}),_callee,null,[[1,10]])})));return function(_x,_x2){return _ref2.apply(this,arguments)}}())},"./src/features/AuthByUsername/model/slice/authSlice.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{lz:function(){return AuthReducer},uQ:function(){return AuthActions}});var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),_services_loginByUser_loginByUser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/AuthByUsername/model/services/loginByUser/loginByUser.ts"),initialState={loading:!1,login:{username:"",password:""},token:void 0,error:void 0},AuthSlice=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.oM)({name:"auth",initialState:initialState,reducers:{setUsername:function setUsername(state,action){state.login.username=action.payload},setPassword:function setPassword(state,action){state.login.password=action.payload},cleanLogin:function cleanLogin(state){state.login={username:"",password:""}},cleanToken:function cleanToken(state){state.token=void 0}},extraReducers:function extraReducers(builder){builder.addCase(_services_loginByUser_loginByUser__WEBPACK_IMPORTED_MODULE_0__.D.pending,(function(state){state.error=void 0,state.loading=!0})).addCase(_services_loginByUser_loginByUser__WEBPACK_IMPORTED_MODULE_0__.D.fulfilled,(function(state,action){state.token=action.payload,state.loading=!1})).addCase(_services_loginByUser_loginByUser__WEBPACK_IMPORTED_MODULE_0__.D.rejected,(function(state,action){state.error=action.payload,state.loading=!1}))}}),AuthActions=AuthSlice.actions,AuthReducer=AuthSlice.reducer},"./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return LoginForm_LoginForm}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Input=__webpack_require__("./src/shared/ui/Input/Input.tsx"),react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),authSlice=__webpack_require__("./src/features/AuthByUsername/model/slice/authSlice.ts"),getLogin=__webpack_require__("./src/features/AuthByUsername/model/selectors/getLogin/getLogin.ts"),loginByUser=__webpack_require__("./src/features/AuthByUsername/model/services/loginByUser/loginByUser.ts"),getAuth=__webpack_require__("./src/features/AuthByUsername/model/selectors/getAuth/getAuth.ts"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginForm_LoginForm=(0,react.memo)((function(_ref){var className=_ref.className,onClose=_ref.onClose,refForm=(0,react.useRef)(null),dispatch=(0,react_redux_es.I0)(),_useSelector=(0,react_redux_es.v9)(getAuth.H),loading=_useSelector.loading,error=_useSelector.error,_useSelector2=(0,react_redux_es.v9)(getLogin.l),username=_useSelector2.username,password=_useSelector2.password,setUsername=authSlice.uQ.setUsername,setPassword=authSlice.uQ.setPassword,cleanLogin=authSlice.uQ.cleanLogin,t=(0,es.$G)().t,_useForm=(0,index_esm.cI)({defaultValues:{username:username,password:password}}),reset=_useForm.reset,register=_useForm.register,handleSubmit=_useForm.handleSubmit,getFieldState=_useForm.getFieldState,errors=_useForm.formState.errors,onChangeLogin=(0,react.useCallback)((function(e){var target=e.target;"username"===target.name&&dispatch(setUsername(target.value)),"password"===target.name&&dispatch(setPassword(target.value))}),[dispatch,setUsername,setPassword]);return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)(className,"login-form__wrapper"),children:[(0,jsx_runtime.jsx)("h4",{className:"login-form__h",children:t("login-form.login")}),(0,jsx_runtime.jsxs)("form",{ref:refForm,onSubmit:handleSubmit((function onSubmit(data){errors&&dispatch((0,loginByUser.D)(data)).then((function(attr){"fulfilled"===attr.meta.requestStatus&&(!function resetForm(){refForm.current&&(reset(),refForm.current.reset(),dispatch(cleanLogin()))}(),onClose())}))})),className:"login-form","data-testid":"form",children:[!!error&&(0,jsx_runtime.jsx)(Text.x,{className:"login-form__error",text:t("login-form.error.".concat(error)),theme:Text.l.ERROR}),(0,jsx_runtime.jsx)(Input.II,{onChange:onChangeLogin,placeholder:t("login-form.placeholder-user"),label:"username",type:"text",name:"username",getFieldState:getFieldState,register:register,required:!0,minLength:4,theme:Input.mz.WHITE_BG,color:Input.Vp.WHITE_COLOR,className:"login-form__input",role:"name"}),(0,jsx_runtime.jsx)(Input.II,{onChange:onChangeLogin,placeholder:t("login-form.placeholder-password"),label:"password",type:"password",name:"password",getFieldState:getFieldState,register:register,required:!0,minLength:4,theme:Input.mz.WHITE_BG,color:Input.Vp.WHITE_COLOR,className:"login-form__input",role:"password"}),(0,jsx_runtime.jsx)("div",{className:"login-form__basement",children:(0,jsx_runtime.jsx)(Button.ZP,{className:"login-form__btn",theme:Button.b4.OUTLINE_INVERTED,type:"submit",role:"submit",disabled:loading,children:t("login-form.send")})})]})]})}));try{LoginForm_LoginForm.displayName="LoginForm",LoginForm_LoginForm.__docgenInfo={description:"",displayName:"LoginForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"]={docgenInfo:LoginForm_LoginForm.__docgenInfo,name:"LoginForm",path:"src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return LoginModal_LoginModal}});var ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),Modal=__webpack_require__("./src/shared/ui/Modal/Modal.tsx"),LoginForm=__webpack_require__("./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginModal_LoginModal=function LoginModal(_ref){var className=_ref.className,isOpen=_ref.isOpen,onClose=_ref.onClose;return(0,jsx_runtime.jsx)(Modal.Z,{className:(0,ClassNames.m)(className,"login-modal"),isOpen:isOpen,onClose:onClose,"data-testid":"login-modal",children:(0,jsx_runtime.jsx)(LoginForm.U,{onClose:onClose})})};try{LoginModal_LoginModal.displayName="LoginModal",LoginModal_LoginModal.__docgenInfo={description:"",displayName:"LoginModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"]={docgenInfo:LoginModal_LoginModal.__docgenInfo,name:"LoginModal",path:"src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Input/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{mz:function(){return BgInputEnum},Vp:function(){return ColorInputEnum},II:function(){return Input_Input}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","register","label","getFieldState","required","maxLength","minLength","theme","color"],BgInputEnum=function(BgInputEnum){return BgInputEnum.WHITE_BG="white",BgInputEnum.WHITE_BG_INVERTED="white-inverted",BgInputEnum}({}),ColorInputEnum=function(ColorInputEnum){return ColorInputEnum.WHITE_COLOR="white-color",ColorInputEnum.WHITE_COLOR_INVERTED="white-color-inverted",ColorInputEnum}({}),Input_Input=function Input(_ref){var _getFieldState$error,className=_ref.className,register=_ref.register,label=_ref.label,getFieldState=_ref.getFieldState,required=_ref.required,maxLength=_ref.maxLength,minLength=_ref.minLength,theme=_ref.theme,color=_ref.color,otherProps=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,es.$G)().t;return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("input__wrapper","input__wrapper--".concat(color)),children:[!!label&&(0,jsx_runtime.jsx)("label",{className:"input__label",children:t("login-form.label.".concat(label))}),(0,jsx_runtime.jsx)("input",(0,objectSpread2.Z)((0,objectSpread2.Z)({"data-testid":"input",className:(0,ClassNames.m)("input","input--".concat(theme),className)},label&&register?register(label,{required:required,maxLength:maxLength,minLength:minLength}):{}),otherProps)),getFieldState&&label&&getFieldState(label).error&&(0,jsx_runtime.jsx)("span",{className:"input__alert",children:t("form-error.".concat(null===(_getFieldState$error=getFieldState(label).error)||void 0===_getFieldState$error?void 0:_getFieldState$error.type))})]})};try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegister<LoginTypes>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"enum",value:[{value:'"username"'},{value:'"password"'}]}},getFieldState:{defaultValue:null,description:"",name:"getFieldState",required:!1,type:{name:"UseFormGetFieldState<LoginTypes>"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"white"'},{value:'"white-inverted"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"white-color"'},{value:'"white-color-inverted"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Input/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/shared/ui/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Modal/Modal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_Modal_Modal}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),XClose=__webpack_require__("./src/shared/ui/XClose/XClose.tsx"),PortalModal=__webpack_require__("./src/shared/ui/PortalModal/PortalModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal_Modal=function Modal(_ref){var className=_ref.className,children=_ref.children,isOpen=_ref.isOpen,onClose=_ref.onClose,closeHandler=(0,react.useCallback)((function(e){var target=e.target;(target.classList.contains("modal__overlay")||target.classList.contains("modal__x-close"))&&onClose()}),[onClose]),mods={"modal--open":isOpen},onEscape=(0,react.useCallback)((function(e){isOpen&&e.key&&"escape"===e.key.toLowerCase()&&onClose()}),[isOpen,onClose]);return(0,react.useEffect)((function(){return window.addEventListener("keydown",onEscape),function(){return window.removeEventListener("keydown",onEscape)}})),(0,jsx_runtime.jsx)(PortalModal.Z,{children:(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)(className,"modal",mods),"data-testid":"modal",children:(0,jsx_runtime.jsx)("div",{onClick:closeHandler,className:"modal__overlay",children:(0,jsx_runtime.jsxs)("div",{className:"modal__content",children:[children,(0,jsx_runtime.jsx)(XClose.Z,{cb:closeHandler,color:"BG_COLOR",className:"modal__x-close"})]})})})})},ui_Modal_Modal=Modal_Modal;try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/PortalModal/PortalModal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PortalModal=function PortalModal(_ref){var children=_ref.children,refEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),findModals=Promise.resolve(document.getElementById("modals-container"));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){findModals.then((function(el){return refEl.current=el}))}),[findModals]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:refEl.current&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,refEl.current)})};__webpack_exports__.Z=PortalModal;try{PortalModal.displayName="PortalModal",PortalModal.__docgenInfo={description:"",displayName:"PortalModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/PortalModal/PortalModal.tsx#PortalModal"]={docgenInfo:PortalModal.__docgenInfo,name:"PortalModal",path:"src/shared/ui/PortalModal/PortalModal.tsx#PortalModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Text/Text.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return Text_Text},l:function(){return TextTheme}});var ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextTheme=function(TextTheme){return TextTheme.PRIMARY="primary",TextTheme.ERROR="error",TextTheme}({}),Text_Text=function Text(_ref){var className=_ref.className,title=_ref.title,text=_ref.text,theme=_ref.theme;return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)(className,"text"),children:[title&&(0,jsx_runtime.jsx)("p",{className:(0,ClassNames.m)("text__title","text__title--".concat(theme)),children:title}),text&&(0,jsx_runtime.jsx)("p",{className:(0,ClassNames.m)("text__p","text__p--".concat(theme)),children:text})]})};try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/shared/ui/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/XClose/XClose.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_XClose_XClose}});__webpack_require__("./node_modules/react/index.js");var ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ColorCloseEnum=function(ColorCloseEnum){return ColorCloseEnum.BG_COLOR="bg-color",ColorCloseEnum.BG_COLOR_INVERTED="bg-color-inverted",ColorCloseEnum.PRIMARY_COLOR="primary-color",ColorCloseEnum.SECONDARY_COLOR="secondary-color",ColorCloseEnum.PRIMARY_COLOR_INVERTED="primary-color-inverted",ColorCloseEnum.SECONDARY_COLOR_INVERTED="secondary-color-inverted",ColorCloseEnum}(ColorCloseEnum||{}),XClose_XClose=function XClose(_ref){var cb=_ref.cb,className=_ref.className,_ref$color=_ref.color,color=void 0===_ref$color?"BG_COLOR":_ref$color;return(0,jsx_runtime.jsx)("button",{onClick:cb,className:(0,ClassNames.m)("x-close",className,"x-close--".concat(ColorCloseEnum[color])),"data-testid":"x-close"})},ui_XClose_XClose=XClose_XClose;try{XClose_XClose.displayName="XClose",XClose_XClose.__docgenInfo={description:"",displayName:"XClose",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cb:{defaultValue:null,description:"",name:"cb",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},color:{defaultValue:{value:"BG_COLOR"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"BG_COLOR"'},{value:'"BG_COLOR_INVERTED"'},{value:'"PRIMARY_COLOR"'},{value:'"SECONDARY_COLOR"'},{value:'"PRIMARY_COLOR_INVERTED"'},{value:'"SECONDARY_COLOR_INVERTED"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/XClose/XClose.tsx#XClose"]={docgenInfo:XClose_XClose.__docgenInfo,name:"XClose",path:"src/shared/ui/XClose/XClose.tsx#XClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/axios.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return Axios}});var src_config={api:"http://nestjs:5000"},Axios=__webpack_require__("./node_modules/axios/lib/axios.js").Z.create({baseURL:src_config.api})},"./src/widgets/Panel/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _ui_Panel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/Panel/ui/Panel.tsx");__webpack_exports__.Z=_ui_Panel__WEBPACK_IMPORTED_MODULE_0__.Z;try{Panel.displayName="Panel",Panel.__docgenInfo={description:"",displayName:"Panel",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Panel/index.tsx#Panel"]={docgenInfo:Panel.__docgenInfo,name:"Panel",path:"src/widgets/Panel/index.tsx#Panel"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/Panel/ui/Panel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_Panel}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),AuthByUsername=__webpack_require__("./src/features/AuthByUsername/index.ts"),TokenContext_TokenContext=(0,react.createContext)({logout:function logout(){}}),react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),Users=(__webpack_require__("./src/utils/axios.ts"),__webpack_require__("./src/entities/Users/index.ts")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TokenProvider_TokenProvider=function TokenProvider(_ref){var children=_ref.children,dispatch=useDispatch(),cleanUsers=UsersActions.cleanUsers,token=useSelector(GetAuth).token,cleanToken=AuthActions.cleanToken,setAxiosToken=function setAxiosToken(bearer){bearer?Axios.interceptors.request.use((function(config){return config.headers.Authorization="Bearer ".concat(bearer),config}),null,{synchronous:!0}):Axios.interceptors.request.clear()},setToken=useCallback((function(){token&&(window.localStorage.setItem(LOCAL_STORAGE_TOKEN,token),setAxiosToken(token),dispatch(MyselfUsers()))}),[token,dispatch]),getToken=useCallback((function(){var bearer=window.localStorage.getItem(LOCAL_STORAGE_TOKEN);bearer&&(setAxiosToken(bearer),dispatch(MyselfUsers()))}),[dispatch]),logout=useCallback((function(){dispatch(cleanToken()),dispatch(cleanUsers()),window.localStorage.removeItem(LOCAL_STORAGE_TOKEN)}),[dispatch,cleanToken,cleanUsers]);return useEffect((function(){token&&setToken()}),[token,setToken]),useEffect((function(){getToken()})),_jsx(TokenContext.Provider,{value:{logout:logout},children:children})};try{TokenProvider_TokenProvider.displayName="TokenProvider",TokenProvider_TokenProvider.__docgenInfo={description:"",displayName:"TokenProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/contexts/Token/lib/TokenProvider.tsx#TokenProvider"]={docgenInfo:TokenProvider_TokenProvider.__docgenInfo,name:"TokenProvider",path:"src/app/contexts/Token/lib/TokenProvider.tsx#TokenProvider"})}catch(__react_docgen_typescript_loader_error){}try{TokenProvider.displayName="TokenProvider",TokenProvider.__docgenInfo={description:"",displayName:"TokenProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/contexts/Token/index.tsx#TokenProvider"]={docgenInfo:TokenProvider.__docgenInfo,name:"TokenProvider",path:"src/app/contexts/Token/index.tsx#TokenProvider"})}catch(__react_docgen_typescript_loader_error){}var Panel_Panel=function Panel(_ref){var classNames=_ref.classNames,logout=function UseToken(){return{logout:(0,react.useContext)(TokenContext_TokenContext).logout}}().logout,userMyself=(0,react_redux_es.v9)(Users.Ao),_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),open=_useState2[0],setOpen=_useState2[1],t=(0,es.$G)().t,onCloseModal=(0,react.useCallback)((function(){open&&setOpen(!1)}),[open]),onOpenModal=(0,react.useCallback)((function(){open||setOpen(!0)}),[open]);return(0,jsx_runtime.jsxs)("div",{"data-testid":"panel",className:(0,ClassNames.m)(classNames,"panel"),children:[(0,jsx_runtime.jsx)("div",{children:"Logo"}),userMyself?(0,jsx_runtime.jsx)(Button.ZP,{onClick:logout,children:t("logout")}):(0,jsx_runtime.jsx)(Button.ZP,{onClick:onOpenModal,children:t("sign_in")}),(0,jsx_runtime.jsx)(AuthByUsername._A,{isOpen:open,onClose:onCloseModal})]})},ui_Panel=Panel_Panel;try{Panel_Panel.displayName="Panel",Panel_Panel.__docgenInfo={description:"",displayName:"Panel",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Panel/ui/Panel.tsx#Panel"]={docgenInfo:Panel_Panel.__docgenInfo,name:"Panel",path:"src/widgets/Panel/ui/Panel.tsx#Panel"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/Sidebar/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _ui_Sidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/Sidebar/ui/Sidebar.tsx");__webpack_exports__.Z=_ui_Sidebar__WEBPACK_IMPORTED_MODULE_0__.Z;try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Sidebar/index.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"src/widgets/Sidebar/index.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}}}]);