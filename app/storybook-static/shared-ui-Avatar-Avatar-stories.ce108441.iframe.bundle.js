"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7385],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/shared/ui/Avatar/Avatar.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarDark:function(){return AvatarDark},AvatarDarkSrc:function(){return AvatarDarkSrc},AvatarNormal:function(){return AvatarNormal},AvatarNormalSrc:function(){return AvatarNormalSrc},__namedExportsOrder:function(){return __namedExportsOrder}});var _AvatarNormal$paramet,_AvatarNormal$paramet2,_AvatarNormal$paramet3,_AvatarDark$parameter,_AvatarDark$parameter2,_AvatarDark$parameter3,_AvatarNormalSrc$para,_AvatarNormalSrc$para2,_AvatarNormalSrc$para3,_AvatarDarkSrc$parame,_AvatarDarkSrc$parame2,_AvatarDarkSrc$parame3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),_assets_img_avatar_face_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/assets/img/avatar-face.jpg"),meta={component:_Avatar__WEBPACK_IMPORTED_MODULE_0__.q};__webpack_exports__.default=meta;var AvatarNormal={args:{alt:"alt",symbol:"t",size:100},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},AvatarDark={args:{alt:"alt",symbol:"t",size:100},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]},AvatarNormalSrc={args:{alt:"alt",symbol:"t",size:100,src:_assets_img_avatar_face_jpg__WEBPACK_IMPORTED_MODULE_3__,api:!1},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},AvatarDarkSrc={args:{alt:"alt",symbol:"t",size:100,src:_assets_img_avatar_face_jpg__WEBPACK_IMPORTED_MODULE_3__,api:!1},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]};AvatarNormal.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},AvatarNormal.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_AvatarNormal$paramet=AvatarNormal.parameters)||void 0===_AvatarNormal$paramet?void 0:_AvatarNormal$paramet.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    alt: "alt",\n    symbol: "t",\n    size: 100\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}'},null===(_AvatarNormal$paramet2=AvatarNormal.parameters)||void 0===_AvatarNormal$paramet2||null===(_AvatarNormal$paramet3=_AvatarNormal$paramet2.docs)||void 0===_AvatarNormal$paramet3?void 0:_AvatarNormal$paramet3.source)})}),AvatarDark.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},AvatarDark.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_AvatarDark$parameter=AvatarDark.parameters)||void 0===_AvatarDark$parameter?void 0:_AvatarDark$parameter.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    alt: "alt",\n    symbol: "t",\n    size: 100\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}'},null===(_AvatarDark$parameter2=AvatarDark.parameters)||void 0===_AvatarDark$parameter2||null===(_AvatarDark$parameter3=_AvatarDark$parameter2.docs)||void 0===_AvatarDark$parameter3?void 0:_AvatarDark$parameter3.source)})}),AvatarNormalSrc.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},AvatarNormalSrc.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_AvatarNormalSrc$para=AvatarNormalSrc.parameters)||void 0===_AvatarNormalSrc$para?void 0:_AvatarNormalSrc$para.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    alt: "alt",\n    symbol: "t",\n    size: 100,\n    src: Img,\n    api: false\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}'},null===(_AvatarNormalSrc$para2=AvatarNormalSrc.parameters)||void 0===_AvatarNormalSrc$para2||null===(_AvatarNormalSrc$para3=_AvatarNormalSrc$para2.docs)||void 0===_AvatarNormalSrc$para3?void 0:_AvatarNormalSrc$para3.source)})}),AvatarDarkSrc.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},AvatarDarkSrc.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_AvatarDarkSrc$parame=AvatarDarkSrc.parameters)||void 0===_AvatarDarkSrc$parame?void 0:_AvatarDarkSrc$parame.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    alt: "alt",\n    symbol: "t",\n    size: 100,\n    src: Img,\n    api: false\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}'},null===(_AvatarDarkSrc$parame2=AvatarDarkSrc.parameters)||void 0===_AvatarDarkSrc$parame2||null===(_AvatarDarkSrc$parame3=_AvatarDarkSrc$parame2.docs)||void 0===_AvatarDarkSrc$parame3?void 0:_AvatarDarkSrc$parame3.source)})});var __namedExportsOrder=["AvatarNormal","AvatarDark","AvatarNormalSrc","AvatarDarkSrc"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/config.ts":function(__unused_webpack_module,__webpack_exports__){var config={api:"http://nestjs:5000"};__webpack_exports__.Z=config},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/ClassNames/ClassNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ClassNames}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function ClassNames(){for(var _len=arguments.length,props=new Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props.filter((function filterClass(item){return"string"==typeof item||!(!item||"object"!=typeof item)&&!!Object.values(item)})).map((function mapClass(cl){return"string"==typeof cl?cl:!(!cl||"object"!=typeof cl)&&Object.entries(cl).reduce((function(accum,_ref){var _ref2=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,2),className=_ref2[0];return _ref2[1]&&accum.push(className),accum}),Array()).join(" ")}))).join(" ")}},"./src/shared/ui/Avatar/Avatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:function(){return Avatar_Avatar}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),config=__webpack_require__("./src/config.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Avatar_Avatar=(0,react.memo)((function(_ref){var _ref$api=_ref.api,api=void 0===_ref$api||_ref$api,className=_ref.className,classImage=_ref.classImage,src=_ref.src,alt=_ref.alt,size=_ref.size,symbol=_ref.symbol,style=(0,react.useMemo)((function(){return{maxWidth:"".concat(size,"px"),maxHeight:"".concat(size,"px"),fontSize:"".concat(.5*size,"px")}}),[size]),getFirstLetter=function getFirstLetter(str){return str.charAt(0).toUpperCase()};return(0,jsx_runtime.jsx)("div",{style:style,className:(0,ClassNames.m)("avatar",className),"data-testid":"avatar",children:function ToHaveAvatar(src){if("string"==typeof src&&/http/gi.test(src))return(0,jsx_runtime.jsx)("img",{src:src,alt:alt,className:(0,ClassNames.m)("avatar__circle",classImage)});if(src){var _toString="string"==typeof src?src:URL.createObjectURL(src);return(0,jsx_runtime.jsx)("img",{src:"".concat(api?config.Z.api+"/":"").concat(_toString),alt:alt,className:(0,ClassNames.m)("avatar__circle",classImage)})}return symbol?(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("avatar__circle","avatar__symbol",classImage),children:getFirstLetter(symbol)}):void 0}(src)})}));try{Avatar_Avatar.displayName="Avatar",Avatar_Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{api:{defaultValue:null,description:"",name:"api",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classImage:{defaultValue:null,description:"",name:"classImage",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string | File | undefined"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/shared/ui/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/assets/img/avatar-face.jpg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"f4bf6c0c42c8cfbb642e.jpg"}}]);