"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[869],{"./src/pages/Profile/ui/Profile.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProfileDark:function(){return ProfileDark},ProfileNormal:function(){return ProfileNormal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Profile_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),entities_Profile=__webpack_require__("./src/entities/Profile/index.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Profile_Profile=function Profile(){var refSend=(0,react.useRef)(null),dispatch=(0,es.I0)(),_useSelector=(0,es.v9)(entities_Profile.Do),data=_useSelector.data,edit=_useSelector.edit,loading=_useSelector.loading,error=_useSelector.error,readonly=_useSelector.readonly,onSend=(0,react.useCallback)((function(){refSend.current&&refSend.current.click()}),[refSend]);return(0,react.useEffect)((function(){null!=data&&data.id||dispatch((0,entities_Profile.ce)())}),[dispatch,null==data?void 0:data.id]),(0,jsx_runtime.jsxs)("div",{className:"profile","data-testid":"profile",children:[!!data&&(0,jsx_runtime.jsx)(entities_Profile.gF,{onSend:onSend}),(0,jsx_runtime.jsx)(entities_Profile.PP,{edit:edit,profile:data,isLoading:loading,error:error,readonly:readonly,refSend:refSend})]})};try{Profile_Profile.displayName="Profile",Profile_Profile.__docgenInfo={description:"",displayName:"Profile",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Profile/ui/Profile.tsx#Profile"]={docgenInfo:Profile_Profile.__docgenInfo,name:"Profile",path:"src/pages/Profile/ui/Profile.tsx#Profile"})}catch(__react_docgen_typescript_loader_error){}var _ProfileNormal$parame,_ProfileNormal$parame2,_ProfileNormal$parame3,_ProfileDark$paramete,_ProfileDark$paramete2,_ProfileDark$paramete3,RouterDecorator=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),Profile_stories={component:Profile_Profile,decorators:[RouterDecorator.Z,(0,StoreDecorator.Z)({profile:{data:{id:"MyID",username:"MyName"}}})]},ProfileNormal={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},ProfileDark={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};ProfileNormal.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ProfileNormal.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ProfileNormal$parame=ProfileNormal.parameters)||void 0===_ProfileNormal$parame?void 0:_ProfileNormal$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_ProfileNormal$parame2=ProfileNormal.parameters)||void 0===_ProfileNormal$parame2||null===(_ProfileNormal$parame3=_ProfileNormal$parame2.docs)||void 0===_ProfileNormal$parame3?void 0:_ProfileNormal$parame3.source)})}),ProfileDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ProfileDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ProfileDark$paramete=ProfileDark.parameters)||void 0===_ProfileDark$paramete?void 0:_ProfileDark$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_ProfileDark$paramete2=ProfileDark.parameters)||void 0===_ProfileDark$paramete2||null===(_ProfileDark$paramete3=_ProfileDark$paramete2.docs)||void 0===_ProfileDark$paramete3?void 0:_ProfileDark$paramete3.source)})});var __namedExportsOrder=["ProfileNormal","ProfileDark"]},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}}]);