"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[314],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoginFormDARK:function(){return LoginFormDARK},LoginFormError:function(){return LoginFormError},LoginFormLoading:function(){return LoginFormLoading},LoginFormNORMAL:function(){return LoginFormNORMAL},__namedExportsOrder:function(){return __namedExportsOrder}});var _LoginFormNORMAL$para,_LoginFormNORMAL$para2,_LoginFormNORMAL$para3,_LoginFormDARK$parame,_LoginFormDARK$parame2,_LoginFormDARK$parame3,_LoginFormError$param,_LoginFormError$param2,_LoginFormError$param3,_LoginFormLoading$par,_LoginFormLoading$par2,_LoginFormLoading$par3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_LoginForm__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),mockInitState={token:void 0,error:void 0,loading:!1,login:{username:"admin",password:"123456"}},meta={component:_LoginForm__WEBPACK_IMPORTED_MODULE_0__.LoginForm,decorators:[(0,_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)({auth:mockInitState})]};__webpack_exports__.default=meta;var LoginFormNORMAL={args:{onClose:function onClose(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},LoginFormDARK={args:{onClose:function onClose(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]},LoginFormError={args:{onClose:function onClose(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK),(0,_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)({auth:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},mockInitState),{},{error:"error-login"})})]},LoginFormLoading={args:{onClose:function onClose(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK),(0,_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)({auth:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},mockInitState),{},{loading:!0})})]};LoginFormNORMAL.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},LoginFormNORMAL.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_LoginFormNORMAL$para=LoginFormNORMAL.parameters)||void 0===_LoginFormNORMAL$para?void 0:_LoginFormNORMAL$para.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_LoginFormNORMAL$para2=LoginFormNORMAL.parameters)||void 0===_LoginFormNORMAL$para2||null===(_LoginFormNORMAL$para3=_LoginFormNORMAL$para2.docs)||void 0===_LoginFormNORMAL$para3?void 0:_LoginFormNORMAL$para3.source)})}),LoginFormDARK.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},LoginFormDARK.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_LoginFormDARK$parame=LoginFormDARK.parameters)||void 0===_LoginFormDARK$parame?void 0:_LoginFormDARK$parame.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_LoginFormDARK$parame2=LoginFormDARK.parameters)||void 0===_LoginFormDARK$parame2||null===(_LoginFormDARK$parame3=_LoginFormDARK$parame2.docs)||void 0===_LoginFormDARK$parame3?void 0:_LoginFormDARK$parame3.source)})}),LoginFormError.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},LoginFormError.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_LoginFormError$param=LoginFormError.parameters)||void 0===_LoginFormError$param?void 0:_LoginFormError$param.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({\n    auth: {\n      ...mockInitState,\n      error: "error-login"\n    }\n  })]\n}'},null===(_LoginFormError$param2=LoginFormError.parameters)||void 0===_LoginFormError$param2||null===(_LoginFormError$param3=_LoginFormError$param2.docs)||void 0===_LoginFormError$param3?void 0:_LoginFormError$param3.source)})}),LoginFormLoading.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},LoginFormLoading.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_LoginFormLoading$par=LoginFormLoading.parameters)||void 0===_LoginFormLoading$par?void 0:_LoginFormLoading$par.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({\n    auth: {\n      ...mockInitState,\n      loading: true\n    }\n  })]\n}"},null===(_LoginFormLoading$par2=LoginFormLoading.parameters)||void 0===_LoginFormLoading$par2||null===(_LoginFormLoading$par3=_LoginFormLoading$par2.docs)||void 0===_LoginFormLoading$par3?void 0:_LoginFormLoading$par3.source)})});var __namedExportsOrder=["LoginFormNORMAL","LoginFormDARK","LoginFormError","LoginFormLoading"]},"./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoginForm:function(){return LoginForm_LoginForm}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),Input=__webpack_require__("./src/shared/ui/Input/Input.tsx"),react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),authSlice=__webpack_require__("./src/features/AuthByUsername/model/slice/authSlice.ts"),getLogin=__webpack_require__("./src/features/AuthByUsername/model/selectors/getLogin/getLogin.ts"),loginByUser=__webpack_require__("./src/features/AuthByUsername/model/services/loginByUser/loginByUser.ts"),getAuth=__webpack_require__("./src/features/AuthByUsername/model/selectors/getAuth/getAuth.ts"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),BgInput=__webpack_require__("./src/shared/const/BgInput.ts"),ColorInputEnum=__webpack_require__("./src/shared/const/ColorInputEnum.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginForm_LoginForm=(0,react.memo)((function(_ref){var className=_ref.className,onClose=_ref.onClose,refForm=(0,react.useRef)(null),dispatch=(0,react_redux_es.I0)(),_useSelector=(0,react_redux_es.v9)(getAuth.H),loading=_useSelector.loading,error=_useSelector.error,_useSelector2=(0,react_redux_es.v9)(getLogin.l),email=_useSelector2.email,password=_useSelector2.password,setEmail=authSlice.uQ.setEmail,setPassword=authSlice.uQ.setPassword,cleanLogin=authSlice.uQ.cleanLogin,t=(0,es.$G)().t,_useForm=(0,index_esm.cI)({defaultValues:{email:email,password:password}}),reset=_useForm.reset,register=_useForm.register,handleSubmit=_useForm.handleSubmit,getFieldState=_useForm.getFieldState,errors=_useForm.formState.errors,onChangeLogin=(0,react.useCallback)((function(e){var target=e.target;"username"===target.name&&dispatch(setEmail(target.value)),"password"===target.name&&dispatch(setPassword(target.value))}),[dispatch,setEmail,setPassword]);return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("login-form__wrapper",className),children:[(0,jsx_runtime.jsx)("h4",{className:"login-form__h",children:t("login-form.login")}),(0,jsx_runtime.jsxs)("form",{ref:refForm,onSubmit:handleSubmit((function onSubmit(data){errors&&dispatch((0,loginByUser.D)(data)).then((function(attr){"fulfilled"===attr.meta.requestStatus&&(!function resetForm(){refForm.current&&(reset(),refForm.current.reset(),dispatch(cleanLogin()))}(),onClose())}))})),className:"login-form","data-testid":"form",children:[!!error&&(0,jsx_runtime.jsx)(Text.xv,{className:"login-form__error",text:t("login-form.error.".concat(error)),theme:Text.lg.ERROR}),(0,jsx_runtime.jsx)(Input.I,{onChange:onChangeLogin,placeholder:t("login-form.placeholder-email"),label:"email",type:"email",name:"email",getFieldState:getFieldState,register:register,required:!0,minLength:4,theme:BgInput.m.WHITE_BG,color:ColorInputEnum.V.WHITE_COLOR,className:"login-form__input",role:"email",errors:errors.email}),(0,jsx_runtime.jsx)(Input.I,{onChange:onChangeLogin,placeholder:t("login-form.placeholder-password"),label:"password",type:"password",name:"password",getFieldState:getFieldState,register:register,required:!0,minLength:4,theme:BgInput.m.WHITE_BG,color:ColorInputEnum.V.WHITE_COLOR,className:"login-form__input",role:"password",errors:errors.password}),(0,jsx_runtime.jsx)("div",{className:"login-form__basement",children:(0,jsx_runtime.jsx)(Button.ZP,{className:"login-form__btn",theme:Button.b4.OUTLINE_INVERTED,type:"submit",role:"submit",disabled:loading,children:t("login-form.send")})})]})]})}));try{LoginForm_LoginForm.displayName="LoginForm",LoginForm_LoginForm.__docgenInfo={description:"",displayName:"LoginForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"]={docgenInfo:LoginForm_LoginForm.__docgenInfo,name:"LoginForm",path:"src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"})}catch(__react_docgen_typescript_loader_error){}}}]);