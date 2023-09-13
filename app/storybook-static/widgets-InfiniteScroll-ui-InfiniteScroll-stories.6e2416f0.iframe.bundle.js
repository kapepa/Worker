"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6592],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/widgets/InfiniteScroll/ui/InfiniteScroll.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InfiniteScrollDARK:function(){return InfiniteScrollDARK},InfiniteScrollNORMAL:function(){return InfiniteScrollNORMAL},InfiniteScrollORANGE:function(){return InfiniteScrollORANGE},__namedExportsOrder:function(){return __namedExportsOrder}});var _InfiniteScrollNORMAL,_InfiniteScrollNORMAL2,_InfiniteScrollNORMAL3,_InfiniteScrollDARK$p,_InfiniteScrollDARK$p2,_InfiniteScrollDARK$p3,_InfiniteScrollORANGE,_InfiniteScrollORANGE2,_InfiniteScrollORANGE3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_InfiniteScroll__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={component:_InfiniteScroll__WEBPACK_IMPORTED_MODULE_0__.v};__webpack_exports__.default=meta;var ArrayBr=new Array(50).fill((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{})),InfiniteScrollNORMAL={args:{scrollEnd:function scrollEnd(){},children:ArrayBr},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},InfiniteScrollDARK={args:{scrollEnd:function scrollEnd(){},children:ArrayBr},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]},InfiniteScrollORANGE={args:{scrollEnd:function scrollEnd(){},children:ArrayBr},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.ORANGE)]};InfiniteScrollNORMAL.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},InfiniteScrollNORMAL.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_InfiniteScrollNORMAL=InfiniteScrollNORMAL.parameters)||void 0===_InfiniteScrollNORMAL?void 0:_InfiniteScrollNORMAL.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    scrollEnd: () => {},\n    children: ArrayBr\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_InfiniteScrollNORMAL2=InfiniteScrollNORMAL.parameters)||void 0===_InfiniteScrollNORMAL2||null===(_InfiniteScrollNORMAL3=_InfiniteScrollNORMAL2.docs)||void 0===_InfiniteScrollNORMAL3?void 0:_InfiniteScrollNORMAL3.source)})}),InfiniteScrollDARK.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},InfiniteScrollDARK.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_InfiniteScrollDARK$p=InfiniteScrollDARK.parameters)||void 0===_InfiniteScrollDARK$p?void 0:_InfiniteScrollDARK$p.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    scrollEnd: () => {},\n    children: ArrayBr\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_InfiniteScrollDARK$p2=InfiniteScrollDARK.parameters)||void 0===_InfiniteScrollDARK$p2||null===(_InfiniteScrollDARK$p3=_InfiniteScrollDARK$p2.docs)||void 0===_InfiniteScrollDARK$p3?void 0:_InfiniteScrollDARK$p3.source)})}),InfiniteScrollORANGE.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},InfiniteScrollORANGE.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_InfiniteScrollORANGE=InfiniteScrollORANGE.parameters)||void 0===_InfiniteScrollORANGE?void 0:_InfiniteScrollORANGE.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  args: {\n    scrollEnd: () => {},\n    children: ArrayBr\n  },\n  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]\n}"},null===(_InfiniteScrollORANGE2=InfiniteScrollORANGE.parameters)||void 0===_InfiniteScrollORANGE2||null===(_InfiniteScrollORANGE3=_InfiniteScrollORANGE2.docs)||void 0===_InfiniteScrollORANGE3?void 0:_InfiniteScrollORANGE3.source)})});var __namedExportsOrder=["InfiniteScrollNORMAL","InfiniteScrollDARK","InfiniteScrollORANGE"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/lib/ClassNames/ClassNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ClassNames}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function ClassNames(){for(var _len=arguments.length,props=new Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props.filter((function filterClass(item){return"string"==typeof item||!(!item||"object"!=typeof item)&&!!Object.values(item)})).map((function mapClass(cl){return"string"==typeof cl?cl:!(!cl||"object"!=typeof cl)&&Object.entries(cl).reduce((function(accum,_ref){var _ref2=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,2),className=_ref2[0];return _ref2[1]&&accum.push(className),accum}),Array()).join(" ")}))).join(" ")}},"./src/shared/ui/Scroll/Scroll.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Scroll_Scroll}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Scroll_Scroll=(0,react.memo)((function(_ref){var className=_ref.className,children=_ref.children,wrapperRef=_ref.wrapperRef;return(0,jsx_runtime.jsx)("section",{ref:wrapperRef,className:(0,ClassNames.m)("scroll",className),"data-testid":"scroll",children:children})}));try{Scroll_Scroll.displayName="Scroll",Scroll_Scroll.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Scroll/Scroll.tsx#Scroll"]={docgenInfo:Scroll_Scroll.__docgenInfo,name:"Scroll",path:"src/shared/ui/Scroll/Scroll.tsx#Scroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return InfiniteScroll_InfiniteScroll}});var react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Scroll=__webpack_require__("./src/shared/ui/Scroll/Scroll.tsx"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfiniteScroll_InfiniteScroll=function InfiniteScroll(_ref){var children=_ref.children,scrollEnd=_ref.scrollEnd,className=_ref.className,wrapperRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null);return function UseInfiniteScroll(_ref){var triggerRef=_ref.triggerRef,wrapperRef=_ref.wrapperRef,callback=_ref.callback;(0,react.useEffect)((function(){var trigger=triggerRef.current,wrapper=wrapperRef.current;if(trigger&&wrapper){var observer=new IntersectionObserver((function(_ref2){(0,slicedToArray.Z)(_ref2,1)[0].isIntersecting&&callback()}),{root:wrapper,rootMargin:"0px",threshold:1});return observer.observe(trigger),function(){observer&&observer.unobserve(trigger)}}}),[triggerRef,wrapperRef,callback])}({wrapperRef:wrapperRef,triggerRef:triggerRef,callback:scrollEnd}),(0,jsx_runtime.jsx)(Scroll.X,{wrapperRef:wrapperRef,children:(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("infinite-scroll",className),"data-testid":"infinite-scroll",children:[children,(0,jsx_runtime.jsx)("div",{className:"infinite-scroll__trigger",ref:triggerRef})]})})};try{InfiniteScroll_InfiniteScroll.displayName="InfiniteScroll",InfiniteScroll_InfiniteScroll.__docgenInfo={description:"",displayName:"InfiniteScroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},scrollEnd:{defaultValue:null,description:"",name:"scrollEnd",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx#InfiniteScroll"]={docgenInfo:InfiniteScroll_InfiniteScroll.__docgenInfo,name:"InfiniteScroll",path:"src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx#InfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}}}]);