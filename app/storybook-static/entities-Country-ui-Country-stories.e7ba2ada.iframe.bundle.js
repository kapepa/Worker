"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[63],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _toConsumableArray}});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/entities/Country/ui/Country.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WhiteBG:function(){return WhiteBG},WhiteBGInverted:function(){return WhiteBGInverted},__namedExportsOrder:function(){return __namedExportsOrder}});var _WhiteBGInverted$para,_WhiteBGInverted$para2,_WhiteBGInverted$para3,_WhiteBG$parameters,_WhiteBG$parameters2,_WhiteBG$parameters2$,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Country__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/entities/Country/ui/Country.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),_shared_const_Countries__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/const/Countries.ts"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_shared_config_i18nDecorator_i18nDecorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/config/i18nDecorator/i18nDecorator.tsx"),meta={component:_Country__WEBPACK_IMPORTED_MODULE_0__.c,decorators:[_shared_config_i18nDecorator_i18nDecorator__WEBPACK_IMPORTED_MODULE_4__.Z]};__webpack_exports__.default=meta;var WhiteBGInverted={args:{selected:function selected(val){},defaultVal:_shared_const_Countries__WEBPACK_IMPORTED_MODULE_2__.n.USA},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.bY.NORMAL)]},WhiteBG={args:{selected:function selected(val){},defaultVal:_shared_const_Countries__WEBPACK_IMPORTED_MODULE_2__.n.USA},decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_3__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.bY.DARK)]};WhiteBGInverted.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},WhiteBGInverted.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_WhiteBGInverted$para=WhiteBGInverted.parameters)||void 0===_WhiteBGInverted$para?void 0:_WhiteBGInverted$para.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  args: {\n    selected: val => {},\n    defaultVal: Countries.USA\n  },\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_WhiteBGInverted$para2=WhiteBGInverted.parameters)||void 0===_WhiteBGInverted$para2||null===(_WhiteBGInverted$para3=_WhiteBGInverted$para2.docs)||void 0===_WhiteBGInverted$para3?void 0:_WhiteBGInverted$para3.source)})}),WhiteBG.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},WhiteBG.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_WhiteBG$parameters=WhiteBG.parameters)||void 0===_WhiteBG$parameters?void 0:_WhiteBG$parameters.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  args: {\n    selected: val => {},\n    defaultVal: Countries.USA\n  },\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_WhiteBG$parameters2=WhiteBG.parameters)||void 0===_WhiteBG$parameters2||null===(_WhiteBG$parameters2$=_WhiteBG$parameters2.docs)||void 0===_WhiteBG$parameters2$?void 0:_WhiteBG$parameters2$.source)})});var __namedExportsOrder=["WhiteBGInverted","WhiteBG"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/entities/Country/ui/Country.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return Country_Country}});var react=__webpack_require__("./node_modules/react/index.js"),Select=__webpack_require__("./src/shared/ui/Select/Select.tsx"),Countries=__webpack_require__("./src/shared/const/Countries.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),BgInput=__webpack_require__("./src/shared/const/BgInput.ts"),ColorInputEnum=__webpack_require__("./src/shared/const/ColorInputEnum.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Country_Country=function Country(_ref){_ref.className;var defaultVal=_ref.defaultVal,selected=_ref.selected,readOnly=_ref.readOnly,t=(0,es.$G)().t,toTranslation=function toTranslation(str){return t("country.".concat(str))},useSelected=(0,react.useCallback)((function(val){selected(val)}),[selected]),country=(0,react.useMemo)((function(){return[{value:Countries.n.USA,text:t("country.".concat(Countries.n.USA))},{value:Countries.n.RUS,text:t("country.".concat(Countries.n.RUS))},{value:Countries.n.BLR,text:t("country.".concat(Countries.n.BLR))},{value:Countries.n.UKR,text:t("country.".concat(Countries.n.UKR))},{value:Countries.n.MLD,text:t("country.".concat(Countries.n.MLD))},{value:Countries.n.BLG,text:t("country.".concat(Countries.n.BLG))},{value:Countries.n.HNG,text:t("country.".concat(Countries.n.HNG))}]}),[t]);return(0,jsx_runtime.jsx)(Select.P,{name:"country",selectList:country,readOnly:readOnly,className:"country__input",defaultValue:toTranslation(defaultVal),toTranslation:toTranslation,selected:useSelected,label:t("login-form.label.country"),theme:BgInput.m.WHITE_BG,color:ColorInputEnum.V.WHITE_COLOR})};try{Country_Country.displayName="Country",Country_Country.__docgenInfo={description:"",displayName:"Country",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultVal:{defaultValue:null,description:"",name:"defaultVal",required:!0,type:{name:"string | undefined"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"(val: Countries) => void"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/entities/Country/ui/Country.tsx#Country"]={docgenInfo:Country_Country.__docgenInfo,name:"Country",path:"src/entities/Country/ui/Country.tsx#Country"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/const/BgInput.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return BgInputEnum}});var BgInputEnum=function(BgInputEnum){return BgInputEnum.WHITE_BG="white",BgInputEnum.WHITE_BG_INVERTED="white-inverted",BgInputEnum}({})},"./src/shared/const/ColorInputEnum.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return ColorInputEnum}});var ColorInputEnum=function(ColorInputEnum){return ColorInputEnum.WHITE_COLOR="white-color",ColorInputEnum.WHITE_COLOR_INVERTED="white-color-inverted",ColorInputEnum}({})},"./src/shared/const/Countries.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return Countries}});var Countries=function(Countries){return Countries.USA="America",Countries.RUS="Russia",Countries.BLR="Belarus",Countries.UKR="Ukraine",Countries.MLD="Moldova",Countries.BLG="Bulgaria",Countries.HNG="Hungary",Countries}(Countries||{})},"./src/shared/lib/ClassNames/ClassNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return ClassNames}});var D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function ClassNames(){for(var _len=arguments.length,props=new Array(_len),_key=0;_key<_len;_key++)props[_key]=arguments[_key];return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props.filter((function filterClass(item){if("string"==typeof item)return!0;if(item){var _Object$values=Object.values(item);return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_Object$values,1)[0]}return!1})).map((function mapClass(cl){if("string"==typeof cl)return cl;if(cl){var _Object$keys=Object.keys(cl);return(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(_Object$keys,1)[0]}return!1}))).join(" ")}},"./src/shared/ui/Select/Select.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{P:function(){return Select_Select}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Select_Select=function Select(props){var className=props.className,name=props.name,label=props.label,theme=props.theme,color=props.color,selectList=props.selectList,toTranslation=props.toTranslation,selected=props.selected,defaultValue=props.defaultValue,readOnly=props.readOnly,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),drop=_useState2[0],setDrop=_useState2[1],inputRef=(0,react.useRef)(null),onClickOption=(0,react.useCallback)((function(e){var select=e.currentTarget.dataset.select;inputRef.current.value=toTranslation(select),select&&selected(select)}),[toTranslation,selected]),dropList=(0,react.useMemo)((function(){return selectList.map((function(cou,index){return(0,jsx_runtime.jsx)("div",{className:"select__drop_arrow",onClick:onClickOption,"data-select":cou.value,children:cou.text},"".concat(cou.value,"-").concat(index))}))}),[selectList,onClickOption]);return(0,react.useEffect)((function(){inputRef.current&&(inputRef.current.value=defaultValue)}),[defaultValue]),(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("select",{"select--readonly":readOnly}),"data-testid":"select",children:(0,jsx_runtime.jsxs)("div",{className:"select__frame",onClick:function onDrop(){readOnly||setDrop((function(prev){return!prev}))},children:[(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("select__wrapper",(0,defineProperty.Z)({},"select__wrapper--".concat(color),!!color)),children:[!!label&&(0,jsx_runtime.jsx)("label",{className:"select__label",children:label}),(0,jsx_runtime.jsx)("input",{type:"text",ref:inputRef,name:name,disabled:!0,className:(0,ClassNames.m)("select__input",(0,defineProperty.Z)({},"select__input--".concat(theme),!!theme),className)})]}),(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("select__drop",{"select__drop--open":drop}),children:dropList})]})})};try{Select_Select.displayName="Select",Select_Select.__docgenInfo={description:"",displayName:"Select",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"white-inverted"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"white-color"'},{value:'"white-color-inverted"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},selectList:{defaultValue:null,description:"",name:"selectList",required:!0,type:{name:"CountryListType[]"}},toTranslation:{defaultValue:null,description:"",name:"toTranslation",required:!0,type:{name:"(str: string | undefined) => string"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"(val: string) => void"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Select/Select.tsx#Select"]={docgenInfo:Select_Select.__docgenInfo,name:"Select",path:"src/shared/ui/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}}}]);