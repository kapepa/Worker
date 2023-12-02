"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6158],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/widgets/RatingStars/ui/RatingStars.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RatingDARK:function(){return RatingDARK},RatingFill:function(){return RatingFill},RatingNORMAL:function(){return RatingNORMAL},RatingORANGE:function(){return RatingORANGE},__namedExportsOrder:function(){return __namedExportsOrder}});var _RatingDARK$parameter,_RatingDARK$parameter2,_RatingDARK$parameter3,_RatingORANGE$paramet,_RatingORANGE$paramet2,_RatingORANGE$paramet3,_RatingNORMAL$paramet,_RatingNORMAL$paramet2,_RatingNORMAL$paramet3,_RatingFill$parameter,_RatingFill$parameter2,_RatingFill$parameter3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_RatingStars__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/RatingStars/ui/RatingStars.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),meta={component:_RatingStars__WEBPACK_IMPORTED_MODULE_0__.T};__webpack_exports__.default=meta;var RatingDARK={args:{countStars:function countStars(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]},RatingORANGE={args:{countStars:function countStars(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.ORANGE)]},RatingNORMAL={args:{countStars:function countStars(){}},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},RatingFill={args:{countStars:function countStars(){},isFill:4},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]};RatingDARK.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},RatingDARK.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_RatingDARK$parameter=RatingDARK.parameters)||void 0===_RatingDARK$parameter?void 0:_RatingDARK$parameter.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  args: {\n    countStars: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_RatingDARK$parameter2=RatingDARK.parameters)||void 0===_RatingDARK$parameter2||null===(_RatingDARK$parameter3=_RatingDARK$parameter2.docs)||void 0===_RatingDARK$parameter3?void 0:_RatingDARK$parameter3.source)})}),RatingORANGE.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},RatingORANGE.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_RatingORANGE$paramet=RatingORANGE.parameters)||void 0===_RatingORANGE$paramet?void 0:_RatingORANGE$paramet.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  args: {\n    countStars: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]\n}"},null===(_RatingORANGE$paramet2=RatingORANGE.parameters)||void 0===_RatingORANGE$paramet2||null===(_RatingORANGE$paramet3=_RatingORANGE$paramet2.docs)||void 0===_RatingORANGE$paramet3?void 0:_RatingORANGE$paramet3.source)})}),RatingNORMAL.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},RatingNORMAL.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_RatingNORMAL$paramet=RatingNORMAL.parameters)||void 0===_RatingNORMAL$paramet?void 0:_RatingNORMAL$paramet.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  args: {\n    countStars: () => {}\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_RatingNORMAL$paramet2=RatingNORMAL.parameters)||void 0===_RatingNORMAL$paramet2||null===(_RatingNORMAL$paramet3=_RatingNORMAL$paramet2.docs)||void 0===_RatingNORMAL$paramet3?void 0:_RatingNORMAL$paramet3.source)})}),RatingFill.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},RatingFill.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},null===(_RatingFill$parameter=RatingFill.parameters)||void 0===_RatingFill$parameter?void 0:_RatingFill$parameter.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({originalSource:"{\n  args: {\n    countStars: () => {},\n    isFill: 4\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_RatingFill$parameter2=RatingFill.parameters)||void 0===_RatingFill$parameter2||null===(_RatingFill$parameter3=_RatingFill$parameter2.docs)||void 0===_RatingFill$parameter3?void 0:_RatingFill$parameter3.source)})});var __namedExportsOrder=["RatingDARK","RatingORANGE","RatingNORMAL","RatingFill"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Flex/Flex.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{k:function(){return Flex_Flex}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","children","justifyContent","flexDirection","alignItems","gap","max","refDiv"],Flex_Flex=function Flex(props){var className=props.className,children=props.children,justifyContent=props.justifyContent,flexDirection=props.flexDirection,alignItems=props.alignItems,gap=props.gap,max=props.max,refDiv=props.refDiv,otherProps=(0,objectWithoutProperties.Z)(props,_excluded),setJustifyContent=(0,react.useMemo)((function(){switch(justifyContent){case"start":return"flex__justify-content--start";case"center":return"flex__justify-content--center";case"space-between":return"flex__justify-content--space-between";case"space-around":return"flex__justify-content--space-around";case"space-evenly":return"flex__justify-content--space-evenly";default:return}}),[justifyContent]),setFlexDirection=(0,react.useMemo)((function(){switch(flexDirection){case"row":return"flex__flex-direction--row";case"row-reverse":return"flex__flex-direction--row-reverse";case"column":return"flex__flex-direction--column";case"column-reverse":return"flex__flex-direction--column-reverse";case"unset":return"flex__flex-direction--column-unset";default:return}}),[flexDirection]),setAlignItems=(0,react.useMemo)((function(){switch(alignItems){case"flex-start":return"flex__align-items__flex-start";case"flex-end":return"flex__align-items__flex-end";case"center":return"flex__align-items__center";case"stretch":return"flex__align-items__stretch";case"unset":return"flex__align-items__unset";case"baseline":return"flex__align-items__baseline";default:return}}),[alignItems]),setGap=(0,react.useMemo)((function(){switch(gap){case 0:return"flex__gap--0";case 8:return"flex__gap--8";case 16:return"flex__gap--16";case 24:return"flex__gap--24";case 32:return"flex__gap--32";case 40:return"flex__gap--40";default:return}}),[gap]),setMax=(0,react.useMemo)((function(){if(!0===max)return"flex__max"}),[max]);return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:(0,ClassNames.m)("flex",className,setJustifyContent,setFlexDirection,setAlignItems,setGap,setMax),ref:refDiv,"data-testid":"flex"},otherProps),{},{children:children}))};try{Flex_Flex.displayName="Flex",Flex_Flex.__docgenInfo={description:"",displayName:"Flex",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"JustifyContent"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"row"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"AlignItems"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"8"},{value:"16"},{value:"24"},{value:"32"},{value:"40"}]}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"boolean"}},refDiv:{defaultValue:null,description:"",name:"refDiv",required:!1,type:{name:"RefObject<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Flex/Flex.tsx#Flex"]={docgenInfo:Flex_Flex.__docgenInfo,name:"Flex",path:"src/shared/ui/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/RatingStars/ui/RatingStars.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return RatingStars_RatingStars}});var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),IcoImg=__webpack_require__("./src/shared/ui/IcoImg/IcoImg.tsx"),Flex=__webpack_require__("./src/shared/ui/Flex/Flex.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),RatingStars_RatingStars=(0,react.memo)((function(props){var className=props.className,_props$stars=props.stars,stars=void 0===_props$stars?5:_props$stars,_props$isFill=props.isFill,isFill=void 0===_props$isFill?0:_props$isFill,countStars=props.countStars,_useState=(0,react.useState)(isFill),_useState2=(0,slicedToArray.Z)(_useState,2),starsFill=_useState2[0],setStarsFill=_useState2[1],sendStars=(0,react.useCallback)((function(count){null==countStars||countStars(count)}),[countStars]),selectStars=(0,react.useCallback)((function(positionStar){sendStars(positionStar!==starsFill?positionStar:0)}),[sendStars,starsFill]),BoxStars=(0,react.useMemo)((function(){return Array(stars).fill(null).map((function(_,index){return(0,jsx_runtime.jsx)(IcoImg.Z,{className:(0,ClassNames.m)("rating-stars__unit",{"rating-stars__fill":index+1<=starsFill}),ico:"StarIco",onClick:function onClick(){return selectStars(index+1)}},"star-".concat(index))}))}),[stars,starsFill,selectStars]);return(0,react.useEffect)((function(){setStarsFill(isFill)}),[isFill]),(0,jsx_runtime.jsx)(Flex.k,{className:(0,ClassNames.m)("rating-stars",className),gap:0,children:BoxStars})}));try{RatingStars_RatingStars.displayName="RatingStars",RatingStars_RatingStars.__docgenInfo={description:"",displayName:"RatingStars",props:{stars:{defaultValue:null,description:"",name:"stars",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFill:{defaultValue:null,description:"",name:"isFill",required:!1,type:{name:"number"}},countStars:{defaultValue:null,description:"",name:"countStars",required:!1,type:{name:"((count: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/RatingStars/ui/RatingStars.tsx#RatingStars"]={docgenInfo:RatingStars_RatingStars.__docgenInfo,name:"RatingStars",path:"src/widgets/RatingStars/ui/RatingStars.tsx#RatingStars"})}catch(__react_docgen_typescript_loader_error){}}}]);