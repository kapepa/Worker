"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1739],{"./src/pages/ArticleEdit/ui/ArticleEdit.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ArticleEditDARK:function(){return ArticleEditDARK},ArticleEditNORMAL:function(){return ArticleEditNORMAL},ArticleEditORANGE:function(){return ArticleEditORANGE},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ArticleEdit_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),Scroll=__webpack_require__("./src/shared/ui/Scroll/Scroll.tsx"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),EditorArticle=__webpack_require__("./src/features/EditorArticle/index.ts"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),Loader=__webpack_require__("./src/shared/ui/Loader/Loader.tsx"),dist_es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ArticleEdit_ArticleEdit=(0,react.memo)((function(){var id=(0,dist.UO)().id,dispatch=(0,es.I0)(),t=(0,dist_es.$G)("editor").t,setIdArticle=EditorArticle.vH.setIdArticle,error=(0,es.v9)(EditorArticle.BV),loading=(0,es.v9)(EditorArticle.eg),record=(0,es.v9)(EditorArticle.jp);(0,react.useEffect)((function(){id&&(dispatch(setIdArticle(id)),dispatch((0,EditorArticle.rX)()))}),[]);var sendCallback=(0,react.useCallback)((function(){dispatch((0,EditorArticle.IB)())}),[dispatch]);return error?(0,jsx_runtime.jsx)(Text.xv,{theme:Text.lg.PRIMARY,title:t(error),className:"article-edit__frame"}):loading?(0,jsx_runtime.jsx)("div",{className:"article-edit__frame",children:(0,jsx_runtime.jsx)(Loader.Z,{})}):(0,jsx_runtime.jsx)(Scroll.X,{children:(0,jsx_runtime.jsx)(EditorArticle.MS,{isEdit:!0,record:record,sendCallback:sendCallback})})}));try{ArticleEdit_ArticleEdit.displayName="ArticleEdit",ArticleEdit_ArticleEdit.__docgenInfo={description:"",displayName:"ArticleEdit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/ArticleEdit/ui/ArticleEdit.tsx#ArticleEdit"]={docgenInfo:ArticleEdit_ArticleEdit.__docgenInfo,name:"ArticleEdit",path:"src/pages/ArticleEdit/ui/ArticleEdit.tsx#ArticleEdit"})}catch(__react_docgen_typescript_loader_error){}var _ArticleEditDARK$para,_ArticleEditDARK$para2,_ArticleEditDARK$para3,_ArticleEditORANGE$pa,_ArticleEditORANGE$pa2,_ArticleEditORANGE$pa3,_ArticleEditNORMAL$pa,_ArticleEditNORMAL$pa2,_ArticleEditNORMAL$pa3,ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),article=__webpack_require__("./src/shared/test/mock/article.json"),ArticleEdit_stories={component:ArticleEdit_ArticleEdit,decorators:[(0,StoreDecorator.Z)({editorArticle:{loading:!1,error:void 0,idArt:void 0,record:article.Y2,edit:article.Y2}})]},ArticleEditDARK={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]},ArticleEditORANGE={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.ORANGE)]},ArticleEditNORMAL={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]};ArticleEditDARK.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleEditDARK.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleEditDARK$para=ArticleEditDARK.parameters)||void 0===_ArticleEditDARK$para?void 0:_ArticleEditDARK$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_ArticleEditDARK$para2=ArticleEditDARK.parameters)||void 0===_ArticleEditDARK$para2||null===(_ArticleEditDARK$para3=_ArticleEditDARK$para2.docs)||void 0===_ArticleEditDARK$para3?void 0:_ArticleEditDARK$para3.source)})}),ArticleEditORANGE.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleEditORANGE.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleEditORANGE$pa=ArticleEditORANGE.parameters)||void 0===_ArticleEditORANGE$pa?void 0:_ArticleEditORANGE$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.ORANGE)]\n}"},null===(_ArticleEditORANGE$pa2=ArticleEditORANGE.parameters)||void 0===_ArticleEditORANGE$pa2||null===(_ArticleEditORANGE$pa3=_ArticleEditORANGE$pa2.docs)||void 0===_ArticleEditORANGE$pa3?void 0:_ArticleEditORANGE$pa3.source)})}),ArticleEditNORMAL.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ArticleEditNORMAL.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ArticleEditNORMAL$pa=ArticleEditNORMAL.parameters)||void 0===_ArticleEditNORMAL$pa?void 0:_ArticleEditNORMAL$pa.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_ArticleEditNORMAL$pa2=ArticleEditNORMAL.parameters)||void 0===_ArticleEditNORMAL$pa2||null===(_ArticleEditNORMAL$pa3=_ArticleEditNORMAL$pa2.docs)||void 0===_ArticleEditNORMAL$pa3?void 0:_ArticleEditNORMAL$pa3.source)})});var __namedExportsOrder=["ArticleEditDARK","ArticleEditORANGE","ArticleEditNORMAL"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Scroll/Scroll.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return Scroll_Scroll}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","children","wrapperRef"],Scroll_Scroll=(0,react.memo)((function(props){var className=props.className,children=props.children,wrapperRef=props.wrapperRef,otherProps=(0,objectWithoutProperties.Z)(props,_excluded);return(0,jsx_runtime.jsx)("section",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:wrapperRef,className:(0,ClassNames.m)("scroll",className)},otherProps),{},{"data-testid":"scroll",children:children}))}));try{Scroll_Scroll.displayName="Scroll",Scroll_Scroll.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},wrapperRef:{defaultValue:null,description:"",name:"wrapperRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Scroll/Scroll.tsx#Scroll"]={docgenInfo:Scroll_Scroll.__docgenInfo,name:"Scroll",path:"src/shared/ui/Scroll/Scroll.tsx#Scroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/test/mock/article.json":function(module){module.exports=JSON.parse('{"Y2":{"id":"1","title":"Javascript news","subtitle":"Что нового в JS за 2022 год?","img":"https://teknotower.com/wp-content/uploads/2020/11/js.png","views":1022,"createdAt":"2022-01-10T15:30:00+00:00","type":["IT"],"blocks":[],"comments":[]},"TU":{"id":"4","type":"CODE","code":"<!DOCTYPE html>\\n<html>\\n  <body>\\n    <p id=\\"hello\\"></p>\\n\\n    <script>\\n      document.getElementById(\\"hello\\").innerHTML = \\"Hello, world!\\";\\n    <\/script>\\n  </body>\\n</html>;"},"BH":{"id":"22","type":"IMAGE","src":"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png","title":"Рисунок 1 - скриншот сайта"},"fL":{"id":"14","type":"TEXT","title":"Заголовок этого блока","paragraphs":["Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.","JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.","Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:"]}}')}}]);