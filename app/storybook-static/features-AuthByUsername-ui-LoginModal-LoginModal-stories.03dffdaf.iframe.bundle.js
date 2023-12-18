"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8831],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/features/AuthByUsername/ui/LoginModal/LoginModal.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoginModalDARK:function(){return LoginModalDARK},LoginModalNORMAL:function(){return LoginModalNORMAL},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LoginModal_stories}});var _LoginModalNORMAL$par,_LoginModalNORMAL$par2,_LoginModalNORMAL$par3,_LoginModalDARK$param,_LoginModalDARK$param2,_LoginModalDARK$param3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),LoginModal=__webpack_require__("./src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx"),ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalDecorator_ModalDecorator=function ModalDecorator(Story){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Story,{}),(0,jsx_runtime.jsx)("div",{id:"modals-container"})]})},LoginModal_stories={component:LoginModal._,decorators:[ModalDecorator_ModalDecorator]},LoginModalNORMAL={args:{isOpen:!0,onClose:function onClose(){}},decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},LoginModalDARK={args:{isOpen:!0,onClose:function onClose(){}},decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};LoginModalNORMAL.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LoginModalNORMAL.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LoginModalNORMAL$par=LoginModalNORMAL.parameters)||void 0===_LoginModalNORMAL$par?void 0:_LoginModalNORMAL$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_LoginModalNORMAL$par2=LoginModalNORMAL.parameters)||void 0===_LoginModalNORMAL$par2||null===(_LoginModalNORMAL$par3=_LoginModalNORMAL$par2.docs)||void 0===_LoginModalNORMAL$par3?void 0:_LoginModalNORMAL$par3.source)})}),LoginModalDARK.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LoginModalDARK.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LoginModalDARK$param=LoginModalDARK.parameters)||void 0===_LoginModalDARK$param?void 0:_LoginModalDARK$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_LoginModalDARK$param2=LoginModalDARK.parameters)||void 0===_LoginModalDARK$param2||null===(_LoginModalDARK$param3=_LoginModalDARK$param2.docs)||void 0===_LoginModalDARK$param3?void 0:_LoginModalDARK$param3.source)})});var __namedExportsOrder=["LoginModalNORMAL","LoginModalDARK"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/features/AuthByUsername/ui/LoginForm/LoginForm.async.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return LoginFormAsync}});var LoginFormAsync=(0,__webpack_require__("./node_modules/react/index.js").lazy)((function(){return Promise.all([__webpack_require__.e(2439),__webpack_require__.e(9444),__webpack_require__.e(4279)]).then(__webpack_require__.bind(__webpack_require__,"./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx")).then((function(module){return{default:module.LoginForm}}))}))},"./src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return LoginModal_LoginModal}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),Modal=__webpack_require__("./src/shared/ui/Modal/Modal.tsx"),LoginForm_async=__webpack_require__("./src/features/AuthByUsername/ui/LoginForm/LoginForm.async.tsx"),Loader=__webpack_require__("./src/shared/ui/Loader/Loader.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginModal_LoginModal=function LoginModal(_ref){var className=_ref.className,isOpen=_ref.isOpen,onClose=_ref.onClose;return(0,jsx_runtime.jsx)(Modal.Z,{className:(0,ClassNames.m)(className,"login-modal"),isOpen:isOpen,onClose:onClose,"data-testid":"login-modal",children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)(Loader.Z,{}),children:(0,jsx_runtime.jsx)(LoginForm_async.l,{onClose:onClose})})})};try{LoginModal_LoginModal.displayName="LoginModal",LoginModal_LoginModal.__docgenInfo={description:"",displayName:"LoginModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"]={docgenInfo:LoginModal_LoginModal.__docgenInfo,name:"LoginModal",path:"src/features/AuthByUsername/ui/LoginModal/LoginModal.tsx#LoginModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/ClassNames/ClassNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ClassNames}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function ClassNames(){for(var _len=arguments.length,props=new Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props.filter((function filterClass(item){return"string"==typeof item||!(!item||"object"!=typeof item)&&!!Object.values(item)})).map((function mapClass(cl){return"string"==typeof cl?cl:!(!cl||"object"!=typeof cl)&&Object.entries(cl).reduce((function(accum,_ref){var _ref2=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,2),className=_ref2[0];return _ref2[1]&&accum.push(className),accum}),Array()).join(" ")}))).join(" ")}},"./src/shared/ui/Loader/Loader.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_Loader_Loader}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Loader_Loader=(0,react.memo)((function(_ref){var className=_ref.className;return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("lds-ripple",className),"data-testid":"loader",children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)("div",{})]})})),ui_Loader_Loader=Loader_Loader;try{Loader_Loader.displayName="Loader",Loader_Loader.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Loader/Loader.tsx#Loader"]={docgenInfo:Loader_Loader.__docgenInfo,name:"Loader",path:"src/shared/ui/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Modal/Modal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_Modal_Modal}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),XClose=__webpack_require__("./src/shared/ui/XClose/XClose.tsx"),PortalModal=__webpack_require__("./src/shared/ui/PortalModal/PortalModal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal_Modal=function Modal(_ref){var className=_ref.className,children=_ref.children,isOpen=_ref.isOpen,onClose=_ref.onClose,closeHandler=(0,react.useCallback)((function(e){var target=e.target;(target.classList.contains("modal__overlay")||target.classList.contains("modal__x-close"))&&onClose()}),[onClose]),mods={"modal--open":isOpen},onEscape=(0,react.useCallback)((function(e){isOpen&&e.key&&"escape"===e.key.toLowerCase()&&onClose()}),[isOpen,onClose]);return(0,react.useEffect)((function(){return window.addEventListener("keydown",onEscape),function(){return window.removeEventListener("keydown",onEscape)}})),(0,jsx_runtime.jsx)(PortalModal.Z,{children:(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)(className,"modal",mods),"data-testid":"modal",children:(0,jsx_runtime.jsx)("div",{onMouseDown:closeHandler,className:"modal__overlay",children:(0,jsx_runtime.jsxs)("div",{className:"modal__content",children:[children,(0,jsx_runtime.jsx)(XClose.Z,{cb:closeHandler,color:"BG_COLOR",className:"modal__x-close"})]})})})})},ui_Modal_Modal=Modal_Modal;try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/shared/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/PortalModal/PortalModal.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),PortalModal=function PortalModal(_ref){var children=_ref.children,refEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){Promise.resolve(document.getElementById("modals-container")).then((function(el){refEl.current=el}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:refEl.current&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,refEl.current)})};__webpack_exports__.Z=PortalModal;try{PortalModal.displayName="PortalModal",PortalModal.__docgenInfo={description:"",displayName:"PortalModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/PortalModal/PortalModal.tsx#PortalModal"]={docgenInfo:PortalModal.__docgenInfo,name:"PortalModal",path:"src/shared/ui/PortalModal/PortalModal.tsx#PortalModal"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/XClose/XClose.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_XClose_XClose}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cb","className","color"],ColorCloseEnum=function(ColorCloseEnum){return ColorCloseEnum.BG_COLOR="bg-color",ColorCloseEnum.BG_COLOR_INVERTED="bg-color-inverted",ColorCloseEnum.PRIMARY_COLOR="primary-color",ColorCloseEnum.SECONDARY_COLOR="secondary-color",ColorCloseEnum.PRIMARY_COLOR_INVERTED="primary-color-inverted",ColorCloseEnum.SECONDARY_COLOR_INVERTED="secondary-color-inverted",ColorCloseEnum}(ColorCloseEnum||{}),XClose_XClose=(0,react.memo)((function(_ref){var cb=_ref.cb,className=_ref.className,_ref$color=_ref.color,color=void 0===_ref$color?"BG_COLOR":_ref$color,otherProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)({onClick:cb,className:(0,ClassNames.m)("x-close",className,"x-close--".concat(ColorCloseEnum[color])),"data-testid":"x-close"},otherProps))})),ui_XClose_XClose=XClose_XClose;try{XClose_XClose.displayName="XClose",XClose_XClose.__docgenInfo={description:"",displayName:"XClose",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cb:{defaultValue:null,description:"",name:"cb",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"BG_COLOR"'},{value:'"BG_COLOR_INVERTED"'},{value:'"PRIMARY_COLOR"'},{value:'"SECONDARY_COLOR"'},{value:'"PRIMARY_COLOR_INVERTED"'},{value:'"SECONDARY_COLOR_INVERTED"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/XClose/XClose.tsx#XClose"]={docgenInfo:XClose_XClose.__docgenInfo,name:"XClose",path:"src/shared/ui/XClose/XClose.tsx#XClose"})}catch(__react_docgen_typescript_loader_error){}}}]);