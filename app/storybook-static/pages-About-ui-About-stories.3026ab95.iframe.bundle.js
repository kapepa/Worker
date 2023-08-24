"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1278],{"./src/pages/About/ui/About.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AboutDark:function(){return AboutDark},AboutNormal:function(){return AboutNormal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return About_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),About_About=function About(){var t=(0,es.$G)("about").t;return(0,jsx_runtime.jsx)("div",{className:"about","data-testid":"about",children:t("about page")})};try{About_About.displayName="About",About_About.__docgenInfo={description:"",displayName:"About",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/About/ui/About.tsx#About"]={docgenInfo:About_About.__docgenInfo,name:"About",path:"src/pages/About/ui/About.tsx#About"})}catch(__react_docgen_typescript_loader_error){}var _AboutNormal$paramete,_AboutNormal$paramete2,_AboutNormal$paramete3,_AboutDark$parameters,_AboutDark$parameters2,_AboutDark$parameters3,ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),RouterDecorator=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),About_stories={component:About_About,decorators:[RouterDecorator.Z,(0,StoreDecorator.Z)({})]},AboutNormal={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},AboutDark={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};AboutNormal.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AboutNormal.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AboutNormal$paramete=AboutNormal.parameters)||void 0===_AboutNormal$paramete?void 0:_AboutNormal$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_AboutNormal$paramete2=AboutNormal.parameters)||void 0===_AboutNormal$paramete2||null===(_AboutNormal$paramete3=_AboutNormal$paramete2.docs)||void 0===_AboutNormal$paramete3?void 0:_AboutNormal$paramete3.source)})}),AboutDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AboutDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AboutDark$parameters=AboutDark.parameters)||void 0===_AboutDark$parameters?void 0:_AboutDark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_AboutDark$parameters2=AboutDark.parameters)||void 0===_AboutDark$parameters2||null===(_AboutDark$parameters3=_AboutDark$parameters2.docs)||void 0===_AboutDark$parameters3?void 0:_AboutDark$parameters3.source)})});var __namedExportsOrder=["AboutNormal","AboutDark"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);