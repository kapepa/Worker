"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2811],{"./src/widgets/Navbar/ui/Navbar.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavbarDark:function(){return NavbarDark},NavbarNormal:function(){return NavbarNormal},__namedExportsOrder:function(){return __namedExportsOrder}});var _NavbarNormal$paramet,_NavbarNormal$paramet2,_NavbarNormal$paramet3,_NavbarDark$parameter,_NavbarDark$parameter2,_NavbarDark$parameter3,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Navbar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/Navbar/ui/Navbar.tsx"),_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),_shared_config_RouterDecorator_RouterDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),meta={component:_Navbar__WEBPACK_IMPORTED_MODULE_0__.Z,decorators:[_shared_config_RouterDecorator_RouterDecorator__WEBPACK_IMPORTED_MODULE_2__.Z,(0,_shared_config_StoreDecorator_StoreDecorator__WEBPACK_IMPORTED_MODULE_4__.Z)({})]};__webpack_exports__.default=meta;var NavbarNormal={decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.bY.NORMAL)]},NavbarDark={decorators:[(0,_shared_config_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.Z)(_app_contexts_Theme_lib_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.bY.DARK)]};NavbarNormal.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},NavbarNormal.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_NavbarNormal$paramet=NavbarNormal.parameters)||void 0===_NavbarNormal$paramet?void 0:_NavbarNormal$paramet.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_NavbarNormal$paramet2=NavbarNormal.parameters)||void 0===_NavbarNormal$paramet2||null===(_NavbarNormal$paramet3=_NavbarNormal$paramet2.docs)||void 0===_NavbarNormal$paramet3?void 0:_NavbarNormal$paramet3.source)})}),NavbarDark.parameters=(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},NavbarDark.parameters),{},{docs:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_NavbarDark$parameter=NavbarDark.parameters)||void 0===_NavbarDark$parameter?void 0:_NavbarDark$parameter.docs),{},{source:(0,D_Site_Worker_app_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_NavbarDark$parameter2=NavbarDark.parameters)||void 0===_NavbarDark$parameter2||null===(_NavbarDark$parameter3=_NavbarDark$parameter2.docs)||void 0===_NavbarDark$parameter3?void 0:_NavbarDark$parameter3.source)})});var __namedExportsOrder=["NavbarNormal","NavbarDark"]},"./src/app/contexts/Side/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{HS:function(){return ui_UseSide}});var react=__webpack_require__("./node_modules/react/index.js"),side={open:!1,toggleSide:function toggleSide(){}},SideContext_SideContext=react.createContext(side),SideProvider_SideProvider=(__webpack_require__("./node_modules/react/jsx-runtime.js"),function SideProvider(_ref){var children=_ref.children,_useState=useState(!1),_useState2=_slicedToArray(_useState,2),side=_useState2[0],setSide=_useState2[1],onToggle=function onToggle(){return setSide((function(prev){return!prev}))},valueSide=useMemo((function(){return{open:side,toggleSide:onToggle}}),[side]);return _jsx(SideContext.Provider,{value:valueSide,children:children})});try{SideProvider_SideProvider.displayName="SideProvider",SideProvider_SideProvider.__docgenInfo={description:"",displayName:"SideProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/contexts/Side/lib/SideProvider.tsx#SideProvider"]={docgenInfo:SideProvider_SideProvider.__docgenInfo,name:"SideProvider",path:"src/app/contexts/Side/lib/SideProvider.tsx#SideProvider"})}catch(__react_docgen_typescript_loader_error){}var ui_UseSide=function UseSide(){return(0,react.useContext)(SideContext_SideContext)};try{SideProvider.displayName="SideProvider",SideProvider.__docgenInfo={description:"",displayName:"SideProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/contexts/Side/index.tsx#SideProvider"]={docgenInfo:SideProvider.__docgenInfo,name:"SideProvider",path:"src/app/contexts/Side/index.tsx#SideProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/AppLink/AppLink.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return AppLinkTheme},Z:function(){return ui_AppLink_AppLink}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["to","children","theme","className"],AppLinkTheme=function(AppLinkTheme){return AppLinkTheme.PRIMARY="primary",AppLinkTheme.SECONDARY="secondary",AppLinkTheme.RED="red",AppLinkTheme}({}),AppLink_AppLink=(0,react.memo)((function(_ref){var to=_ref.to,children=_ref.children,_ref$theme=_ref.theme,theme=void 0===_ref$theme?AppLinkTheme.PRIMARY:_ref$theme,_ref$className=_ref.className,className=void 0===_ref$className?void 0:_ref$className,otherProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(dist.OL,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:(0,ClassNames.m)("AppLink",theme,className),to:to},otherProps),{},{"data-testid":"nav-link",children:children}))})),ui_AppLink_AppLink=AppLink_AppLink;try{AppLink_AppLink.displayName="AppLink",AppLink_AppLink.__docgenInfo={description:"",displayName:"AppLink",props:{to:{defaultValue:null,description:"",name:"to",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"red"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/AppLink/AppLink.tsx#AppLink"]={docgenInfo:AppLink_AppLink.__docgenInfo,name:"AppLink",path:"src/shared/ui/AppLink/AppLink.tsx#AppLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/Navbar/ui/Navbar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return ui_Navbar}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),AppLink=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),IcoImg=__webpack_require__("./src/shared/ui/IcoImg/IcoImg.tsx"),Side=__webpack_require__("./src/app/contexts/Side/index.tsx"),Routers=__webpack_require__("./src/shared/const/Routers.ts"),react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),Users=__webpack_require__("./src/entities/Users/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Navbar_Navbar=(0,react.memo)((function(_ref){var className=_ref.className,t=(0,es.$G)().t,profile=(0,react_redux_es.v9)(Users.jf).profile,open=(0,Side.HS)().open;return(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("navbar",className),"data-testid":"navbar",children:(0,jsx_runtime.jsxs)("nav",{className:"navbar__nav",children:[(0,jsx_runtime.jsxs)(AppLink.Z,{className:(0,ClassNames.m)("navbar__link",{"navbar__link--squeeze":open}),theme:AppLink.u.SECONDARY,to:Routers.a.HOME,role:"link",children:[(0,jsx_runtime.jsx)(IcoImg.Z,{className:"navbar__ico",ico:"HomeIco",color:IcoImg.a.PRIMARY_COLOR_INVERTED}),(0,jsx_runtime.jsx)("span",{className:"navbar__symbol",children:t("nav.home")})]}),(0,jsx_runtime.jsxs)(AppLink.Z,{className:(0,ClassNames.m)("navbar__link",{"navbar__link--squeeze":open}),theme:AppLink.u.SECONDARY,to:Routers.a.ABOUT,role:"link",children:[(0,jsx_runtime.jsx)(IcoImg.Z,{className:"navbar__ico",ico:"AboutIco",color:IcoImg.a.PRIMARY_COLOR_INVERTED}),(0,jsx_runtime.jsx)("span",{className:"navbar__symbol",children:t("nav.about")})]}),!!profile&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(AppLink.Z,{className:(0,ClassNames.m)("navbar__link",{"navbar__link--squeeze":open}),theme:AppLink.u.SECONDARY,to:Routers.a.PROFILE,role:"link",children:[(0,jsx_runtime.jsx)(IcoImg.Z,{className:"navbar__ico",ico:"ProfileIco",color:IcoImg.a.PRIMARY_COLOR_INVERTED}),(0,jsx_runtime.jsx)("span",{className:"navbar__symbol",children:t("nav.profile")})]}),(0,jsx_runtime.jsxs)(AppLink.Z,{className:(0,ClassNames.m)("navbar__link",{"navbar__link--squeeze":open}),theme:AppLink.u.SECONDARY,to:Routers.a.ARTICLE,role:"link",children:[(0,jsx_runtime.jsx)(IcoImg.Z,{className:"navbar__ico",ico:"ArticleIco",color:IcoImg.a.PRIMARY_COLOR_INVERTED}),(0,jsx_runtime.jsx)("span",{className:"navbar__symbol",children:t("nav.article")})]})]})]})})})),ui_Navbar=Navbar_Navbar;try{Navbar_Navbar.displayName="Navbar",Navbar_Navbar.__docgenInfo={description:"",displayName:"Navbar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Navbar/ui/Navbar.tsx#Navbar"]={docgenInfo:Navbar_Navbar.__docgenInfo,name:"Navbar",path:"src/widgets/Navbar/ui/Navbar.tsx#Navbar"})}catch(__react_docgen_typescript_loader_error){}}}]);