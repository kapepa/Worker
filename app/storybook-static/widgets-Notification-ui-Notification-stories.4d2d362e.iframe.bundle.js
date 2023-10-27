"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1582],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toPropertyKey}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/widgets/Notification/ui/Notification.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotificationDARK:function(){return NotificationDARK},NotificationNORMAL:function(){return NotificationNORMAL},NotificationORANGE:function(){return NotificationORANGE},__namedExportsOrder:function(){return __namedExportsOrder}});var _NotificationNORMAL$p,_NotificationNORMAL$p2,_NotificationNORMAL$p3,_NotificationDARK$par,_NotificationDARK$par2,_NotificationDARK$par3,_NotificationORANGE$p,_NotificationORANGE$p2,_NotificationORANGE$p3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Notification__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/Notification/ui/Notification.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),_shared_const_NotificationEnum__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/const/NotificationEnum.ts"),meta={component:_Notification__WEBPACK_IMPORTED_MODULE_0__.P};__webpack_exports__.default=meta;var NotificationNORMAL={args:{isOpen:!0,text:"Notification text.",type:_shared_const_NotificationEnum__WEBPACK_IMPORTED_MODULE_3__.m.Attention,onClose:function onClose(){},onConfirmed:function onConfirmed(){},isLoading:!1},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.NORMAL)]},NotificationDARK={args:{isOpen:!0,text:"Notification text.",type:_shared_const_NotificationEnum__WEBPACK_IMPORTED_MODULE_3__.m.Attention,onClose:function onClose(){},onConfirmed:function onConfirmed(){},isLoading:!1},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.DARK)]},NotificationORANGE={args:{isOpen:!0,text:"Notification text.",type:_shared_const_NotificationEnum__WEBPACK_IMPORTED_MODULE_3__.m.Attention,onClose:function onClose(){},onConfirmed:function onConfirmed(){},isLoading:!1},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.bY.ORANGE)]};NotificationNORMAL.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},NotificationNORMAL.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_NotificationNORMAL$p=NotificationNORMAL.parameters)||void 0===_NotificationNORMAL$p?void 0:_NotificationNORMAL$p.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    isOpen: true,\n    text: "Notification text.",\n    type: NotificationEnum.Attention,\n    onClose: () => {},\n    onConfirmed: () => {},\n    isLoading: false\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}'},null===(_NotificationNORMAL$p2=NotificationNORMAL.parameters)||void 0===_NotificationNORMAL$p2||null===(_NotificationNORMAL$p3=_NotificationNORMAL$p2.docs)||void 0===_NotificationNORMAL$p3?void 0:_NotificationNORMAL$p3.source)})}),NotificationDARK.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},NotificationDARK.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_NotificationDARK$par=NotificationDARK.parameters)||void 0===_NotificationDARK$par?void 0:_NotificationDARK$par.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    isOpen: true,\n    text: "Notification text.",\n    type: NotificationEnum.Attention,\n    onClose: () => {},\n    onConfirmed: () => {},\n    isLoading: false\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}'},null===(_NotificationDARK$par2=NotificationDARK.parameters)||void 0===_NotificationDARK$par2||null===(_NotificationDARK$par3=_NotificationDARK$par2.docs)||void 0===_NotificationDARK$par3?void 0:_NotificationDARK$par3.source)})}),NotificationORANGE.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},NotificationORANGE.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_NotificationORANGE$p=NotificationORANGE.parameters)||void 0===_NotificationORANGE$p?void 0:_NotificationORANGE$p.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    isOpen: true,\n    text: "Notification text.",\n    type: NotificationEnum.Attention,\n    onClose: () => {},\n    onConfirmed: () => {},\n    isLoading: false\n  },\n  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]\n}'},null===(_NotificationORANGE$p2=NotificationORANGE.parameters)||void 0===_NotificationORANGE$p2||null===(_NotificationORANGE$p3=_NotificationORANGE$p2.docs)||void 0===_NotificationORANGE$p3?void 0:_NotificationORANGE$p3.source)})});var __namedExportsOrder=["NotificationNORMAL","NotificationDARK","NotificationORANGE"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/const/NotificationEnum.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return NotificationEnum}});var NotificationEnum=function(NotificationEnum){return NotificationEnum[NotificationEnum.Attention=0]="Attention",NotificationEnum[NotificationEnum.Warning=1]="Warning",NotificationEnum}({})},"./src/shared/lib/ClassNames/ClassNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ClassNames}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function ClassNames(){for(var _len=arguments.length,props=new Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props.filter((function filterClass(item){return"string"==typeof item||!(!item||"object"!=typeof item)&&!!Object.values(item)})).map((function mapClass(cl){return"string"==typeof cl?cl:!(!cl||"object"!=typeof cl)&&Object.entries(cl).reduce((function(accum,_ref){var _ref2=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_ref,2),className=_ref2[0];return _ref2[1]&&accum.push(className),accum}),Array()).join(" ")}))).join(" ")}},"./src/shared/ui/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t0:function(){return SizeButton},b4:function(){return ThemeButtonEnum},ZP:function(){return ui_Button_Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme","disabled","size","children"],ThemeButtonEnum=function(ThemeButtonEnum){return ThemeButtonEnum.CLEAR="clear",ThemeButtonEnum.OUTLINE="outline",ThemeButtonEnum.OUTLINE_RED="outline_red",ThemeButtonEnum.BACKGROUND="background",ThemeButtonEnum.BACKGROUND_INVERTED="background_inverted",ThemeButtonEnum.OUTLINE_INVERTED="outline_inverted",ThemeButtonEnum}({}),SizeButton=function(SizeButton){return SizeButton.M="medium",SizeButton.L="large",SizeButton.XL="extra-large",SizeButton.C="custom",SizeButton}({}),Button_Button=(0,react.memo)((function(props){var className=props.className,_props$theme=props.theme,theme=void 0===_props$theme?ThemeButtonEnum.CLEAR:_props$theme,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,_props$size=props.size,size=void 0===_props$size?SizeButton.M:_props$size,children=props.children,otherProps=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({"data-testid":"button",className:(0,ClassNames.m)(className,"button","button--".concat(theme),"button--".concat(size),{"button-disabled":disabled}),disabled:disabled},otherProps),{},{children:children}))})),ui_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'},{value:'"outline_red"'},{value:'"background"'},{value:'"background_inverted"'},{value:'"outline_inverted"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"extra-large"'},{value:'"custom"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Text/Text.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{xv:function(){return Text_Text},PH:function(){return TextAlign},yH:function(){return TextSize},lg:function(){return TextTheme}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextTheme=function(TextTheme){return TextTheme.PRIMARY="primary",TextTheme.INVERTED="inverted",TextTheme.ERROR="error",TextTheme}({}),TextAlign=function(TextAlign){return TextAlign.RIGHT="right",TextAlign.CENTER="center",TextAlign.LEFT="left",TextAlign}({}),TextSize=function(TextSize){return TextSize.M="size-m",TextSize.L="size-l",TextSize.XL="size-xl",TextSize}({}),Text_Text=(0,react.memo)((function(props){var className=props.className,classTitle=props.classTitle,classText=props.classText,title=props.title,text=props.text,theme=props.theme,size=props.size,_props$align=props.align,align=void 0===_props$align?TextAlign.LEFT:_props$align;return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("text",className),children:[title&&(0,jsx_runtime.jsx)("p",{className:(0,ClassNames.m)("text__title","text__title--".concat(theme),"text--".concat(align),(0,defineProperty.Z)({},"text--".concat(size),size),classTitle),children:title}),text&&(0,jsx_runtime.jsx)("p",{className:(0,ClassNames.m)("text__p","text__p--".concat(theme),"text--".concat(align),(0,defineProperty.Z)({},"text--".concat(size),size),classText),children:text})]})}));try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classTitle:{defaultValue:null,description:"",name:"classTitle",required:!1,type:{name:"string"}},classText:{defaultValue:null,description:"",name:"classText",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"inverted"'},{value:'"error"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"center"'},{value:'"left"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"size-m"'},{value:'"size-l"'},{value:'"size-xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/shared/ui/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/XClose/XClose.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_XClose_XClose}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cb","className","color"],ColorCloseEnum=function(ColorCloseEnum){return ColorCloseEnum.BG_COLOR="bg-color",ColorCloseEnum.BG_COLOR_INVERTED="bg-color-inverted",ColorCloseEnum.PRIMARY_COLOR="primary-color",ColorCloseEnum.SECONDARY_COLOR="secondary-color",ColorCloseEnum.PRIMARY_COLOR_INVERTED="primary-color-inverted",ColorCloseEnum.SECONDARY_COLOR_INVERTED="secondary-color-inverted",ColorCloseEnum}(ColorCloseEnum||{}),XClose_XClose=(0,react.memo)((function(_ref){var cb=_ref.cb,className=_ref.className,_ref$color=_ref.color,color=void 0===_ref$color?"BG_COLOR":_ref$color,otherProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)({onClick:cb,className:(0,ClassNames.m)("x-close",className,"x-close--".concat(ColorCloseEnum[color])),"data-testid":"x-close"},otherProps))})),ui_XClose_XClose=XClose_XClose;try{XClose_XClose.displayName="XClose",XClose_XClose.__docgenInfo={description:"",displayName:"XClose",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},cb:{defaultValue:null,description:"",name:"cb",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"BG_COLOR"'},{value:'"BG_COLOR_INVERTED"'},{value:'"PRIMARY_COLOR"'},{value:'"SECONDARY_COLOR"'},{value:'"PRIMARY_COLOR_INVERTED"'},{value:'"SECONDARY_COLOR_INVERTED"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/XClose/XClose.tsx#XClose"]={docgenInfo:XClose_XClose.__docgenInfo,name:"XClose",path:"src/shared/ui/XClose/XClose.tsx#XClose"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/Notification/ui/Notification.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return Notification_Notification}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),NotificationEnum=__webpack_require__("./src/shared/const/NotificationEnum.ts"),XClose=__webpack_require__("./src/shared/ui/XClose/XClose.tsx"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Notification_Notification=(0,react.memo)((function(_ref){var isOpen=_ref.isOpen,className=_ref.className,text=_ref.text,type=_ref.type,onClose=_ref.onClose,onConfirmed=_ref.onConfirmed,isLoading=_ref.isLoading,t=(0,es.$G)("notification").t,selectType=(0,react.useCallback)((function(type){switch(type){case NotificationEnum.m.Attention:return t("attention");case NotificationEnum.m.Warning:return t("warning")}}),[t]);return(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("notification",{"notification--open":isOpen},className),children:[(0,jsx_runtime.jsx)("div",{className:"notification__overlay",onClick:onClose}),(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("notification__frame"),children:[(0,jsx_runtime.jsx)("div",{className:"notification__x-close",children:(0,jsx_runtime.jsx)(XClose.Z,{color:"PRIMARY_COLOR",onClick:onClose})}),(0,jsx_runtime.jsx)("h5",{className:"notification__h",children:selectType(type)}),(0,jsx_runtime.jsx)(Text.xv,{theme:Text.lg.PRIMARY,text:text,classText:"notification__text"}),(0,jsx_runtime.jsxs)("div",{className:"notification__basement",children:[(0,jsx_runtime.jsx)(Button.ZP,{onClick:onConfirmed,className:"notification__btn",theme:Button.b4.OUTLINE_INVERTED,disabled:isLoading,children:t("ok")}),(0,jsx_runtime.jsx)(Button.ZP,{onClick:onClose,className:"notification__btn",theme:Button.b4.OUTLINE_RED,children:t("cancel")})]})]})]})}));try{Notification_Notification.displayName="Notification",Notification_Notification.__docgenInfo={description:"",displayName:"Notification",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onConfirmed:{defaultValue:null,description:"",name:"onConfirmed",required:!0,type:{name:"() => void"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Notification/ui/Notification.tsx#Notification"]={docgenInfo:Notification_Notification.__docgenInfo,name:"Notification",path:"src/widgets/Notification/ui/Notification.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}}}]);