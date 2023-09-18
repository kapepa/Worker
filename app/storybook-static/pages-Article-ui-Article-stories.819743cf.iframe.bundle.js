"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3905],{"./src/pages/Article/ui/Article.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArticleDARK:function(){return ArticleDARK},ArticleNORMAL:function(){return ArticleNORMAL},ArticleORANGE:function(){return ArticleORANGE},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Article_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),Routers=__webpack_require__("./src/shared/const/Routers.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),Users=__webpack_require__("./src/entities/Users/index.ts"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),entities_Article=__webpack_require__("./src/entities/Article/index.ts"),FetchAllArticles=__webpack_require__("./src/entities/Article/service/FetchAllArticles/FetchAllArticles.ts"),SwitchView=__webpack_require__("./src/widgets/SwitchView/ui/SwitchView.tsx"),InfiniteScroll=__webpack_require__("./src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Article_Article=(0,react.memo)((function(){var dispatch=(0,es.I0)(),articlesHasMore=(0,es.v9)(entities_Article.wA),profile=(0,es.v9)(Users.jf).profile,ids=(0,es.v9)(entities_Article.pI),articlesView=(0,es.v9)(entities_Article.hE),navigate=(0,dist.s0)(),firstLoading=(0,react.useCallback)((function(){dispatch((0,FetchAllArticles.o)())}),[dispatch]),onScrollNextArticles=(0,react.useCallback)((function(){articlesHasMore&&dispatch((0,FetchAllArticles.o)())}),[dispatch,articlesHasMore]);return(0,react.useEffect)((function(){profile||dispatch((0,Users.vx)()),null!=profile&&profile.id||navigate(Routers.a.HOME)}),[profile,navigate,dispatch]),(0,react.useEffect)((function(){ids.length||firstLoading()}),[ids,firstLoading]),(0,jsx_runtime.jsx)(InfiniteScroll.v,{scrollEnd:onScrollNextArticles,children:(0,jsx_runtime.jsxs)("div",{className:"article","data-testid":"article",children:[(0,jsx_runtime.jsx)("div",{className:"article__roof",children:(0,jsx_runtime.jsx)(SwitchView.B,{})}),(0,jsx_runtime.jsx)(entities_Article.fO,{view:articlesView})]})})}));try{Article_Article.displayName="Article",Article_Article.__docgenInfo={description:"",displayName:"Article",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Article/ui/Article.tsx#Article"]={docgenInfo:Article_Article.__docgenInfo,name:"Article",path:"src/pages/Article/ui/Article.tsx#Article"})}catch(__react_docgen_typescript_loader_error){}var _ArticleNORMAL$parame,_ArticleNORMAL$parame2,_ArticleNORMAL$parame3,_ArticleDARK$paramete,_ArticleDARK$paramete2,_ArticleDARK$paramete3,_ArticleORANGE$parame,_ArticleORANGE$parame2,_ArticleORANGE$parame3,StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),RouterDecorator=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),article=__webpack_require__("./src/shared/test/mock/article.json"),user=__webpack_require__("./src/shared/test/mock/user.json"),ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),ArticlesView=__webpack_require__("./src/shared/const/ArticlesView.ts"),articles={ids:[article.Y2.id],entities:(0,defineProperty.Z)({},article.Y2.id,(0,objectSpread2.Z)((0,objectSpread2.Z)({},article.Y2),{},{blocks:[article.fL,article.TU,article.BH]})),data:void 0,error:void 0,loading:!1,view:ArticlesView.c.Block,hasMore:!1},Article_stories={component:Article_Article,decorators:[RouterDecorator.Z,(0,StoreDecorator.Z)({users:{profile:user},articles:articles})]},ArticleNORMAL={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},ArticleDARK={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]},ArticleORANGE={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.ORANGE)]};ArticleNORMAL.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleNORMAL.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleNORMAL$parame=ArticleNORMAL.parameters)||void 0===_ArticleNORMAL$parame?void 0:_ArticleNORMAL$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_ArticleNORMAL$parame2=ArticleNORMAL.parameters)||void 0===_ArticleNORMAL$parame2||null===(_ArticleNORMAL$parame3=_ArticleNORMAL$parame2.docs)||void 0===_ArticleNORMAL$parame3?void 0:_ArticleNORMAL$parame3.source)})}),ArticleDARK.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleDARK.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleDARK$paramete=ArticleDARK.parameters)||void 0===_ArticleDARK$paramete?void 0:_ArticleDARK$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_ArticleDARK$paramete2=ArticleDARK.parameters)||void 0===_ArticleDARK$paramete2||null===(_ArticleDARK$paramete3=_ArticleDARK$paramete2.docs)||void 0===_ArticleDARK$paramete3?void 0:_ArticleDARK$paramete3.source)})}),ArticleORANGE.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleORANGE.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleORANGE$parame=ArticleORANGE.parameters)||void 0===_ArticleORANGE$parame?void 0:_ArticleORANGE$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]\n}"},null===(_ArticleORANGE$parame2=ArticleORANGE.parameters)||void 0===_ArticleORANGE$parame2||null===(_ArticleORANGE$parame3=_ArticleORANGE$parame2.docs)||void 0===_ArticleORANGE$parame3?void 0:_ArticleORANGE$parame3.source)})});var __namedExportsOrder=["ArticleNORMAL","ArticleDARK","ArticleORANGE"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Scroll/Scroll.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Scroll_Scroll}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","children","wrapperRef"],Scroll_Scroll=(0,react.memo)((function(props){var className=props.className,children=props.children,wrapperRef=props.wrapperRef,otherProps=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("section",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:wrapperRef,className:(0,ClassNames.m)("scroll",className)},otherProps),{},{"data-testid":"scroll",children:children}))}));try{Scroll_Scroll.displayName="Scroll",Scroll_Scroll.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Scroll/Scroll.tsx#Scroll"]={docgenInfo:Scroll_Scroll.__docgenInfo,name:"Scroll",path:"src/shared/ui/Scroll/Scroll.tsx#Scroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return InfiniteScroll_InfiniteScroll}});var react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Scroll=__webpack_require__("./src/shared/ui/Scroll/Scroll.tsx"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),ScrollHistory=__webpack_require__("./src/features/ScrollHistory/index.ts"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InfiniteScroll_InfiniteScroll=function InfiniteScroll(props){var children=props.children,scrollEnd=props.scrollEnd,className=props.className,pathname=(0,dist.TH)().pathname,scrollPage=(0,es.v9)((0,ScrollHistory.Gt)(pathname)),dispatch=(0,es.I0)(),setScrollPage=ScrollHistory.Ve.setScrollPage,wrapperRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null);!function UseInfiniteScroll(_ref){var triggerRef=_ref.triggerRef,wrapperRef=_ref.wrapperRef,callback=_ref.callback;(0,react.useEffect)((function(){var trigger=triggerRef.current,wrapper=wrapperRef.current;if(trigger&&wrapper){var observer=new IntersectionObserver((function(_ref2){(0,slicedToArray.Z)(_ref2,1)[0].isIntersecting&&callback()}),{root:wrapper,rootMargin:"0px",threshold:1});return observer.observe(trigger),function(){observer&&observer.unobserve(trigger)}}}),[triggerRef,wrapperRef,callback])}({wrapperRef:wrapperRef,triggerRef:triggerRef,callback:scrollEnd});var setStoryScroll=(0,react.useCallback)((function(){var _wrapperRef$current,position=scrollPage.position;wrapperRef.current&&position&&(null===(_wrapperRef$current=wrapperRef.current)||void 0===_wrapperRef$current||_wrapperRef$current.scrollTo(0,position))}),[wrapperRef]),onScroll=function UseThrottle(callback,delay){var throttleRef=(0,react.useRef)(!1);return(0,react.useCallback)((function(){throttleRef.current||(callback.apply(void 0,arguments),throttleRef.current=!0,setTimeout((function(){throttleRef.current=!1}),delay))}),[callback,delay])}((function(e){dispatch(setScrollPage({page:pathname,position:e.currentTarget.scrollTop}))}),500);return(0,react.useEffect)((function(){setStoryScroll()}),[setStoryScroll]),(0,jsx_runtime.jsx)(Scroll.X,{wrapperRef:wrapperRef,onScroll:onScroll,children:(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("infinite-scroll",className),"data-testid":"infinite-scroll",children:[children,(0,jsx_runtime.jsx)("div",{className:"infinite-scroll__trigger",ref:triggerRef})]})})};try{InfiniteScroll_InfiniteScroll.displayName="InfiniteScroll",InfiniteScroll_InfiniteScroll.__docgenInfo={description:"",displayName:"InfiniteScroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},scrollEnd:{defaultValue:null,description:"",name:"scrollEnd",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx#InfiniteScroll"]={docgenInfo:InfiniteScroll_InfiniteScroll.__docgenInfo,name:"InfiniteScroll",path:"src/widgets/InfiniteScroll/ui/InfiniteScroll.tsx#InfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/SwitchView/ui/SwitchView.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return SwitchView_SwitchView}});var react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),IcoImg=__webpack_require__("./src/shared/ui/IcoImg/IcoImg.tsx"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),Article=__webpack_require__("./src/entities/Article/index.ts"),ArticlesView=__webpack_require__("./src/shared/const/ArticlesView.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GetTokenStorage=window.localStorage.getItem("view"),SwitchView_SwitchView=(0,react.memo)((function(_ref){var className=_ref.className,changeView=Article.Mu.changeView,dispatch=(0,es.I0)(),getView=(0,es.v9)(Article.hE),onChangeView=(0,react.useCallback)((function(view){dispatch(changeView(view)),window.localStorage.setItem("view",view)}),[changeView,dispatch]),preLoaderView=(0,react.useCallback)((function(){switch(GetTokenStorage){case ArticlesView.c.Block:onChangeView(ArticlesView.c.Block);break;case ArticlesView.c.Square:onChangeView(ArticlesView.c.Square);break;default:onChangeView(ArticlesView.c.Block)}}),[onChangeView]);return(0,react.useEffect)((function(){preLoaderView()}),[preLoaderView]),(0,jsx_runtime.jsxs)("div",{className:(0,ClassNames.m)("switch-view",className),"data-testid":"switch-view",children:[(0,jsx_runtime.jsx)("button",{className:"switch-view__btn",onClick:function onClick(){return onChangeView(ArticlesView.c.Block)},title:ArticlesView.c.Block,children:(0,jsx_runtime.jsx)(IcoImg.Z,{className:(0,ClassNames.m)("switch-view__ico",{"switch-view__ico--active":getView===ArticlesView.c.Block}),ico:"ListIco"})}),(0,jsx_runtime.jsx)("button",{className:"switch-view__btn",onClick:function onClick(){return onChangeView(ArticlesView.c.Square)},title:ArticlesView.c.Square,children:(0,jsx_runtime.jsx)(IcoImg.Z,{className:(0,ClassNames.m)("switch-view__ico",{"switch-view__ico--active":getView===ArticlesView.c.Square}),ico:"TiledIco"})})]})}));try{SwitchView_SwitchView.displayName="SwitchView",SwitchView_SwitchView.__docgenInfo={description:"",displayName:"SwitchView",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/SwitchView/ui/SwitchView.tsx#SwitchView"]={docgenInfo:SwitchView_SwitchView.__docgenInfo,name:"SwitchView",path:"src/widgets/SwitchView/ui/SwitchView.tsx#SwitchView"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/test/mock/article.json":function(module){module.exports=JSON.parse('{"Y2":{"id":"1","title":"Javascript news","subtitle":"Что нового в JS за 2022 год?","img":"https://teknotower.com/wp-content/uploads/2020/11/js.png","views":1022,"createdAt":"2022-01-10T15:30:00+00:00","type":["IT"],"blocks":[],"comments":[]},"TU":{"id":"4","type":"CODE","code":"<!DOCTYPE html>\\n<html>\\n  <body>\\n    <p id=\\"hello\\"></p>\\n\\n    <script>\\n      document.getElementById(\\"hello\\").innerHTML = \\"Hello, world!\\";\\n    <\/script>\\n  </body>\\n</html>;"},"BH":{"id":"22","type":"IMAGE","src":"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png","title":"Рисунок 1 - скриншот сайта"},"fL":{"id":"14","type":"TEXT","title":"Заголовок этого блока","paragraphs":["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]}}')},"./src/shared/test/mock/user.json":function(module){module.exports=JSON.parse('{"id":"userID","username":"UserName","firstname":"Firstname","lastname":"Lastname","email":"user@mail.com","avatar":"https://cdn-icons-png.flaticon.com/512/1088/1088537.png","country":"America","city":"Loa Angeles"}')}}]);