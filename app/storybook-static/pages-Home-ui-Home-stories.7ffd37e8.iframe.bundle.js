"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2379],{"./src/pages/Home/ui/Home.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeDark:function(){return HomeDark},HomeNormal:function(){return HomeNormal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Home_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var _HomeNormal$parameter,_HomeNormal$parameter2,_HomeNormal$parameter3,_HomeDark$parameters,_HomeDark$parameters2,_HomeDark$parameters3,ui_Home=function Home_Home(){var t=(0,es.$G)("home").t;return(0,jsx_runtime.jsx)("div",{className:"home","data-testid":"home",children:t("home page")})},ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),RouterDecorator=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),Home_stories={component:ui_Home,decorators:[RouterDecorator.Z,(0,StoreDecorator.Z)({})]},HomeNormal={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},HomeDark={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};HomeNormal.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HomeNormal.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HomeNormal$parameter=HomeNormal.parameters)||void 0===_HomeNormal$parameter?void 0:_HomeNormal$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_HomeNormal$parameter2=HomeNormal.parameters)||void 0===_HomeNormal$parameter2||null===(_HomeNormal$parameter3=_HomeNormal$parameter2.docs)||void 0===_HomeNormal$parameter3?void 0:_HomeNormal$parameter3.source)})}),HomeDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HomeDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HomeDark$parameters=HomeDark.parameters)||void 0===_HomeDark$parameters?void 0:_HomeDark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_HomeDark$parameters2=HomeDark.parameters)||void 0===_HomeDark$parameters2||null===(_HomeDark$parameters3=_HomeDark$parameters2.docs)||void 0===_HomeDark$parameters3?void 0:_HomeDark$parameters3.source)})});var __namedExportsOrder=["HomeNormal","HomeDark"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);