"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3905],{"./src/pages/Article/ui/Article.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Article_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),Routers=__webpack_require__("./src/shared/const/Routers.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),Users=__webpack_require__("./src/entities/Users/index.ts"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Article_Article=(0,react.memo)((function(){var _useSelector=(0,es.v9)(Users.jf),profile=_useSelector.profile,loading=_useSelector.loading,navigate=(0,dist.s0)();return(0,react.useEffect)((function(){null!=profile&&profile.id||loading||navigate(Routers.a.HOME)}),[profile,loading,navigate]),(0,jsx_runtime.jsx)("div",{className:"article","data-testid":"article",children:(0,jsx_runtime.jsx)(react_router_dom_dist.OL,{to:"".concat(Routers.a.ARTICLE,"/aed4c183-3f50-44a8-acb9-750311590502"),children:"Der"})})}));try{Article_Article.displayName="Article",Article_Article.__docgenInfo={description:"",displayName:"Article",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Article/ui/Article.tsx#Article"]={docgenInfo:Article_Article.__docgenInfo,name:"Article",path:"src/pages/Article/ui/Article.tsx#Article"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),Article_stories={component:Article_Article,decorators:[__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx").Z,(0,StoreDecorator.Z)({users:{profile:{id:"id",username:"MyName",firstname:"MyFirstname",lastname:"MyLastname"}}})]},Primary={};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}}]);