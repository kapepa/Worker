"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2379],{"./node_modules/@headlessui/react/dist/hooks/use-disposables.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return p}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/@headlessui/react/dist/hooks/use-text-value.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return b}});var react=__webpack_require__("./node_modules/react/index.js");let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var r,i;let n=null!=(r=e.innerText)?r:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let u=!1;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=!0;let l=u?null!=(i=t.innerText)?i:"":n;return a.test(l)&&(l=l.replace(a,"")),l}var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");function b(c){let t=(0,react.useRef)(""),r=(0,react.useRef)("");return(0,use_event.z)((()=>{let e=c.current;if(!e)return"";let u=e.innerText;if(t.current===u)return r.current;let n=function g(e){let n=e.getAttribute("aria-label");if("string"==typeof n)return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map((l=>{let r=document.getElementById(l);if(r){let i=r.getAttribute("aria-label");return"string"==typeof i?i.trim():o(r).trim()}return null})).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}(e).trim().toLowerCase();return t.current=u,r.current=n,n}))}},"./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return u}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}},"./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return a},d:function(){return x}});var e,a=((e=a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex((e=>!n.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((i,c,u)=>!(-1!==s&&u.length-c-1>=s)&&!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,i)=>!(i<=s)&&!n.resolveDisabled(e)));case 3:{let e=t.slice().reverse().findIndex((i=>!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((e=>n.resolveId(e)===r.id));case 5:return null;default:!function f(r){throw new Error("Unexpected object: "+r)}(r)}})();return-1===d?l:d}},"./src/pages/Home/ui/Home.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeDark:function(){return HomeDark},HomeNormal:function(){return HomeNormal},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Home_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),ListBox=__webpack_require__("./src/widgets/ListBox/ui/ListBox.tsx"),react=__webpack_require__("./node_modules/react/index.js"),PreLoaderAvatar=__webpack_require__("./src/widgets/PreLoaderAvatar/ui/PreLoaderAvatar.tsx"),react_redux_es=__webpack_require__("./node_modules/react-redux/es/index.js"),Users=__webpack_require__("./src/entities/Users/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var _HomeNormal$parameter,_HomeNormal$parameter2,_HomeNormal$parameter3,_HomeDark$parameters,_HomeDark$parameters2,_HomeDark$parameters3,ui_Home=function Home_Home(){var t=(0,es.$G)("home").t,profile=(0,react_redux_es.v9)(Users.qr),people=[{name:"Durward Reynolds",unavailable:!1},{name:"Kenton Towne",unavailable:!1},{name:"Therese Wunsch",unavailable:!1},{name:"Benedict Kessler",unavailable:!1},{name:"Katelyn Rohan",unavailable:!1}],changeListBox=(0,react.useCallback)((function(box){console.log(box)}),[]);return(0,jsx_runtime.jsxs)("div",{className:"home","data-testid":"home",children:[(0,jsx_runtime.jsx)(Text.xv,{theme:Text.lg.PRIMARY,headerTag:"h1",title:t("home page"),size:Text.yH.XL}),(0,jsx_runtime.jsx)(ListBox.w,{list:people,defaultValue:people[0],callback:changeListBox}),(0,jsx_runtime.jsx)(PreLoaderAvatar.x,{url:null==profile?void 0:profile.avatar,size:100,alt:null==profile?void 0:profile.firstname,api:!0,symbol:(null==profile?void 0:profile.firstname)&&(null==profile?void 0:profile.firstname.charAt(1))})]})},ThemeDecorator=__webpack_require__("./src/shared/config/ThemeDecorator/ThemeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/contexts/Theme/lib/ThemeContext.tsx"),RouterDecorator=__webpack_require__("./src/shared/config/RouterDecorator/RouterDecorator.tsx"),StoreDecorator=__webpack_require__("./src/shared/config/StoreDecorator/StoreDecorator.tsx"),Home_stories={component:ui_Home,decorators:[RouterDecorator.Z,(0,StoreDecorator.Z)({})]},HomeNormal={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.NORMAL)]},HomeDark={decorators:[(0,ThemeDecorator.Z)(ThemeContext.bY.DARK)]};HomeNormal.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HomeNormal.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HomeNormal$parameter=HomeNormal.parameters)||void 0===_HomeNormal$parameter?void 0:_HomeNormal$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.NORMAL)]\n}"},null===(_HomeNormal$parameter2=HomeNormal.parameters)||void 0===_HomeNormal$parameter2||null===(_HomeNormal$parameter3=_HomeNormal$parameter2.docs)||void 0===_HomeNormal$parameter3?void 0:_HomeNormal$parameter3.source)})}),HomeDark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},HomeDark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_HomeDark$parameters=HomeDark.parameters)||void 0===_HomeDark$parameters?void 0:_HomeDark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  decorators: [ThemeDecorator(ThemeEnum.DARK)]\n}"},null===(_HomeDark$parameters2=HomeDark.parameters)||void 0===_HomeDark$parameters2||null===(_HomeDark$parameters3=_HomeDark$parameters2.docs)||void 0===_HomeDark$parameters3?void 0:_HomeDark$parameters3.source)})});var __namedExportsOrder=["HomeNormal","HomeDark"]},"./src/app/contexts/Theme/lib/ThemeContext.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ni:function(){return ThemeContext},a1:function(){return LOCAL_STORAGE_THEME_KEY},bY:function(){return ThemeEnum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeEnum=function(ThemeEnum){return ThemeEnum.DARK="dark",ThemeEnum.NORMAL="normal",ThemeEnum.ORANGE="orange",ThemeEnum}({}),ThemeContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({theme:ThemeEnum.NORMAL,setTheme:function setTheme(){}}),LOCAL_STORAGE_THEME_KEY="them"},"./src/shared/config/RouterDecorator/RouterDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_router_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=function RouterDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.VK,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}},"./src/shared/config/ThemeDecorator/ThemeDecorator.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function ThemeDecorator(theme){return function decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}};__webpack_exports__.Z=ThemeDecorator;try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/ListBox/ui/ListBox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:function(){return ListBox_ListBox}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js"),use_id=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-id.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function use_computed_i(e,o){let[u,t]=(0,react.useState)(e),r=(0,use_latest_value.E)(e);return(0,use_iso_morphic_effect.e)((()=>t(r.current)),[r,t,...o]),u}var use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),disposables=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),calculate_active_index=__webpack_require__("./node_modules/@headlessui/react/dist/utils/calculate-active-index.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),open_closed=__webpack_require__("./node_modules/@headlessui/react/dist/internal/open-closed.js"),use_resolve_button_type=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js"),use_outside_click=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-outside-click.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js");function form_e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):form_e(t,s,i)}var owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");var i,n,use_tracked_pointer=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js"),use_text_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-text-value.js"),Be=((n=Be||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=((i=Ne||{})[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i);function z(e,a=(n=>n)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,focus_management.z2)(a(e.options.slice()),(t=>t.dataRef.current.domRef.current)),l=n?r.indexOf(n):null;return-1===l&&(l=null),{options:r,activeOptionIndex:l}}let je={1(e){return e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex((l=>n(l.dataRef.current.value)));return-1!==r&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},2(e,a){var l;if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=z(e),r=(0,calculate_active_index.d)(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:null!=(l=a.trigger)?l:1}},3:(e,a)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find((i=>{var b;return!i.dataRef.current.disabled&&(null==(b=i.dataRef.current.textValue)?void 0:b.startsWith(l))})),u=p?e.options.indexOf(p):-1;return-1===u||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},4(e){return e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""}},5:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,(l=>[...l,n]));return null===e.activeOptionIndex&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,a)=>{let n=z(e,(r=>{let l=r.findIndex((t=>t.id===a.id));return-1!==l&&r.splice(l,1),r}));return{...e,...n,activationTrigger:1}},7:(e,a)=>({...e,labelId:a.id})},J=(0,react.createContext)(null);function _(e){let a=(0,react.useContext)(J);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return a}J.displayName="ListboxActionsContext";let q=(0,react.createContext)(null);function U(e){let a=(0,react.useContext)(q);if(null===a){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return a}function Ve(e,a){return(0,match.E)(a.type,je,e,a)}q.displayName="ListboxDataContext";let Ke=react.Fragment;let qe=render.AN.RenderStrategy|render.AN.Static;let tt=(0,render.yV)((function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=((s,c)=>s===c),disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,use_sync_refs.T)(a),[L=(R?[]:void 0),y]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,use_event.z)((n=>(e||s(n),null==r?void 0:r(n))))]}(n,p,r),[T,o]=(0,react.useReducer)(Ve,{dataRef:(0,react.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),x=(0,react.useRef)({static:!1,hold:!1}),E=(0,react.useRef)(null),B=(0,react.useRef)(null),W=(0,react.useRef)(null),C=(0,use_event.z)("string"==typeof u?(s,c)=>{let O=u;return(null==s?void 0:s[O])===(null==c?void 0:c[O])}:u),A=(0,react.useCallback)((s=>(0,match.E)(d.mode,{1:()=>L.some((c=>C(c,s))),0:()=>C(L,s)})),[L]),d=(0,react.useMemo)((()=>({...T,value:L,disabled:i,mode:R?1:0,orientation:P,compare:C,isSelected:A,optionsPropsRef:x,labelRef:E,buttonRef:B,optionsRef:W})),[L,i,R,T]);(0,use_iso_morphic_effect.e)((()=>{T.dataRef.current=d}),[d]),(0,use_outside_click.O)([d.buttonRef,d.optionsRef],((s,c)=>{var O;o({type:1}),(0,focus_management.sP)(c,focus_management.tJ.Loose)||(s.preventDefault(),null==(O=d.buttonRef.current)||O.focus())}),0===d.listboxState);let H=(0,react.useMemo)((()=>({open:0===d.listboxState,disabled:i,value:L})),[d,i,L]),ie=(0,use_event.z)((s=>{let c=d.options.find((O=>O.id===s));c&&X(c.dataRef.current.value)})),re=(0,use_event.z)((()=>{if(null!==d.activeOptionIndex){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:calculate_active_index.T.Specific,id:c})}})),ae=(0,use_event.z)((()=>o({type:0}))),le=(0,use_event.z)((()=>o({type:1}))),se=(0,use_event.z)(((s,c,O)=>s===calculate_active_index.T.Specific?o({type:2,focus:calculate_active_index.T.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O}))),pe=(0,use_event.z)(((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s})))),ue=(0,use_event.z)((s=>(o({type:7,id:s}),()=>o({type:7,id:null})))),X=(0,use_event.z)((s=>(0,match.E)(d.mode,{0(){return null==y?void 0:y(s)},1(){let c=d.value.slice(),O=c.findIndex((F=>C(F,s)));return-1===O?c.push(s):c.splice(O,1),null==y?void 0:y(c)}}))),de=(0,use_event.z)((s=>o({type:3,value:s}))),ce=(0,use_event.z)((()=>o({type:4}))),fe=(0,react.useMemo)((()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce})),[]),Te={ref:S},G=(0,react.useRef)(null),be=(0,use_disposables.G)();return(0,react.useEffect)((()=>{G.current&&void 0!==r&&be.addEventListener(G.current,"reset",(()=>{null==y||y(r)}))}),[G,y]),react.createElement(J.Provider,{value:fe},react.createElement(q.Provider,{value:d},react.createElement(open_closed.up,{value:(0,match.E)(d.listboxState,{0:open_closed.ZM.Open,1:open_closed.ZM.Closed})},null!=t&&null!=L&&form_e({[t]:L}).map((([s,c],O)=>react.createElement(internal_hidden._,{features:internal_hidden.A.Hidden,ref:0===O?F=>{var Y;G.current=null!=(Y=null==F?void 0:F.closest("form"))?Y:null}:void 0,...(0,render.oA)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:s,value:c})}))),(0,render.sY)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))})),ot=(0,render.yV)((function Xe(e,a){var y;let n=(0,use_id.M)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=U("Listbox.Button"),p=_("Listbox.Button"),u=(0,use_sync_refs.T)(t.buttonRef,a),i=(0,use_disposables.G)(),b=(0,use_event.z)((T=>{switch(T.key){case keyboard.R.Space:case keyboard.R.Enter:case keyboard.R.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(calculate_active_index.T.First)}));break;case keyboard.R.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame((()=>{t.value||p.goToOption(calculate_active_index.T.Last)}))}})),R=(0,use_event.z)((T=>{if(T.key===keyboard.R.Space)T.preventDefault()})),m=(0,use_event.z)((T=>{if((0,bugs.P)(T.currentTarget))return T.preventDefault();0===t.listboxState?(p.closeListbox(),i.nextFrame((()=>{var o;return null==(o=t.buttonRef.current)?void 0:o.focus({preventScroll:!0})}))):(T.preventDefault(),p.openListbox())})),P=use_computed_i((()=>{if(t.labelId)return[t.labelId,r].join(" ")}),[t.labelId,r]),S=(0,react.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled,value:t.value})),[t]),L={ref:u,id:r,type:(0,use_resolve_button_type.f)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(y=t.optionsRef.current)?void 0:y.id,"aria-expanded":0===t.listboxState,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return(0,render.sY)({ourProps:L,theirProps:l,slot:S,defaultTag:"button",name:"Listbox.Button"})})),nt=(0,render.yV)((function ze(e,a){let n=(0,use_id.M)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=U("Listbox.Label"),p=_("Listbox.Label"),u=(0,use_sync_refs.T)(t.labelRef,a);(0,use_iso_morphic_effect.e)((()=>p.registerLabel(r)),[r]);let i=(0,use_event.z)((()=>{var m;return null==(m=t.buttonRef.current)?void 0:m.focus({preventScroll:!0})})),b=(0,react.useMemo)((()=>({open:0===t.listboxState,disabled:t.disabled})),[t]);return(0,render.sY)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:"label",name:"Listbox.Label"})})),it=(0,render.yV)((function Ye(e,a){var T;let n=(0,use_id.M)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=U("Listbox.Options"),p=_("Listbox.Options"),u=(0,use_sync_refs.T)(t.optionsRef,a),i=(0,use_disposables.G)(),b=(0,use_disposables.G)(),R=(0,open_closed.oJ)(),m=null!==R?(R&open_closed.ZM.Open)===open_closed.ZM.Open:0===t.listboxState;(0,react.useEffect)((()=>{var x;let o=t.optionsRef.current;o&&0===t.listboxState&&o!==(null==(x=(0,owner.r)(o))?void 0:x.activeElement)&&o.focus({preventScroll:!0})}),[t.listboxState,t.optionsRef]);let P=(0,use_event.z)((o=>{switch(b.dispose(),o.key){case keyboard.R.Space:if(""!==t.searchQuery)return o.preventDefault(),o.stopPropagation(),p.search(o.key);case keyboard.R.Enter:if(o.preventDefault(),o.stopPropagation(),null!==t.activeOptionIndex){let{dataRef:x}=t.options[t.activeOptionIndex];p.onChange(x.current.value)}0===t.mode&&(p.closeListbox(),(0,disposables.k)().nextFrame((()=>{var x;return null==(x=t.buttonRef.current)?void 0:x.focus({preventScroll:!0})})));break;case(0,match.E)(t.orientation,{vertical:keyboard.R.ArrowDown,horizontal:keyboard.R.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.T.Next);case(0,match.E)(t.orientation,{vertical:keyboard.R.ArrowUp,horizontal:keyboard.R.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.T.Previous);case keyboard.R.Home:case keyboard.R.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.T.First);case keyboard.R.End:case keyboard.R.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(calculate_active_index.T.Last);case keyboard.R.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame((()=>{var x;return null==(x=t.buttonRef.current)?void 0:x.focus({preventScroll:!0})}));case keyboard.R.Tab:o.preventDefault(),o.stopPropagation();break;default:1===o.key.length&&(p.search(o.key),b.setTimeout((()=>p.clearSearch()),350))}})),S=use_computed_i((()=>{var o,x,E;return null!=(E=null==(o=t.labelRef.current)?void 0:o.id)?E:null==(x=t.buttonRef.current)?void 0:x.id}),[t.labelRef.current,t.buttonRef.current]),L=(0,react.useMemo)((()=>({open:0===t.listboxState})),[t]),y={"aria-activedescendant":null===t.activeOptionIndex||null==(T=t.options[t.activeOptionIndex])?void 0:T.id,"aria-multiselectable":1===t.mode||void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return(0,render.sY)({ourProps:y,theirProps:l,slot:L,defaultTag:"ul",features:qe,visible:m,name:"Listbox.Options"})})),rt=(0,render.yV)((function et(e,a){let n=(0,use_id.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=U("Listbox.Option"),i=_("Listbox.Option"),b=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===r,R=u.isSelected(t),m=(0,react.useRef)(null),P=(0,use_text_value.x)(m),S=(0,use_latest_value.E)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),L=(0,use_sync_refs.T)(a,m);(0,use_iso_morphic_effect.e)((()=>{if(0!==u.listboxState||!b||0===u.activationTrigger)return;let A=(0,disposables.k)();return A.requestAnimationFrame((()=>{var d,H;null==(H=null==(d=m.current)?void 0:d.scrollIntoView)||H.call(d,{block:"nearest"})})),A.dispose}),[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,use_iso_morphic_effect.e)((()=>i.registerOption(r,S)),[S,r]);let y=(0,use_event.z)((A=>{if(l)return A.preventDefault();i.onChange(t),0===u.mode&&(i.closeListbox(),(0,disposables.k)().nextFrame((()=>{var d;return null==(d=u.buttonRef.current)?void 0:d.focus({preventScroll:!0})})))})),T=(0,use_event.z)((()=>{if(l)return i.goToOption(calculate_active_index.T.Nothing);i.goToOption(calculate_active_index.T.Specific,r)})),o=(0,use_tracked_pointer.g)(),x=(0,use_event.z)((A=>o.update(A))),E=(0,use_event.z)((A=>{o.wasMoved(A)&&(l||b||i.goToOption(calculate_active_index.T.Specific,r,0))})),B=(0,use_event.z)((A=>{o.wasMoved(A)&&(l||b&&i.goToOption(calculate_active_index.T.Nothing))})),W=(0,react.useMemo)((()=>({active:b,selected:R,disabled:l})),[b,R,l]);return(0,render.sY)({ourProps:{id:r,ref:L,role:"option",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,"aria-selected":R,disabled:void 0,onClick:y,onFocus:T,onPointerEnter:x,onMouseEnter:x,onPointerMove:E,onMouseMove:E,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:"li",name:"Listbox.Option"})})),Nt=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt});var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ListBox_ListBox=(0,react.memo)((function(props){var className=props.className,list=props.list,defaultValue=props.defaultValue,callback=props.callback,_useState=(0,react.useState)(defaultValue),_useState2=(0,slicedToArray.Z)(_useState,2),selectedBox=_useState2[0],setSelectedBox=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),isOpen=_useState4[0],setIsOpen=_useState4[1],_useFloating=(0,floating_ui_react.YF)({open:isOpen,onOpenChange:setIsOpen,middleware:[(0,floating_ui_core.cv)(10),(0,floating_ui_core.RR)(),(0,floating_ui_core.uY)()],whileElementsMounted:floating_ui_dom.Me}),refs=_useFloating.refs,floatingStyles=_useFloating.floatingStyles,context=_useFloating.context,click=(0,floating_ui_react.eS)(context),dismiss=(0,floating_ui_react.bQ)(context),role=(0,floating_ui_react.qs)(context),_useInteractions=(0,floating_ui_react.NI)([click,dismiss,role]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps,onChange=(0,react.useCallback)((function(box){setSelectedBox(box),callback(box)}),[callback]);return(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("list-box",className),children:(0,jsx_runtime.jsxs)(Nt,{value:selectedBox,onChange:onChange,children:[(0,jsx_runtime.jsx)(Nt.Button,(0,objectSpread2.Z)((0,objectSpread2.Z)({as:react.Fragment,ref:refs.setReference},getReferenceProps()),{},{children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.ZP,{className:"list-box__btn",theme:Button.b4.OUTLINE,children:selectedBox.name})})})),(0,jsx_runtime.jsx)(floating_ui_react.wD,{context:context,modal:!1,children:(0,jsx_runtime.jsx)(Nt.Options,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"list-box__options",ref:refs.setFloating,style:floatingStyles},getFloatingProps()),{},{children:list.map((function(box,index){return(0,jsx_runtime.jsx)(Nt.Option,{value:box,disabled:box.unavailable,className:(0,ClassNames.m)("list-box__option",{"list-box__option--active":box.name===selectedBox.name}),children:box.name},"".concat(box.name,"-").concat(index))}))}))})]})})}));try{ListBox_ListBox.displayName="ListBox",ListBox_ListBox.__docgenInfo={description:"",displayName:"ListBox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"ListBoxInt[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"ListBoxInt"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(box: ListBoxInt) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/ListBox/ui/ListBox.tsx#ListBox"]={docgenInfo:ListBox_ListBox.__docgenInfo,name:"ListBox",path:"src/widgets/ListBox/ui/ListBox.tsx#ListBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/PreLoaderAvatar/ui/PreLoaderAvatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return PreLoaderAvatar_PreLoaderAvatar}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),ClassNames=__webpack_require__("./src/shared/lib/ClassNames/ClassNames.ts"),Avatar=__webpack_require__("./src/shared/ui/Avatar/Avatar.tsx"),Skeleton=__webpack_require__("./src/shared/ui/Skeleton/Skeleton.tsx"),SkeletonShape=__webpack_require__("./src/shared/const/SkeletonShape.ts"),IcoImg=__webpack_require__("./src/shared/ui/IcoImg/IcoImg.tsx"),Text=__webpack_require__("./src/shared/ui/Text/Text.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),config=__webpack_require__("./src/config.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","symbol","alt","api","size","url"],StateLoader=function(StateLoader){return StateLoader.Default="Default",StateLoader.Loading="Loading",StateLoader.Error="Error",StateLoader.Success="Success",StateLoader}({}),PreLoaderAvatar_PreLoaderAvatar=(0,react.memo)((function(props){var className=props.className,symbol=props.symbol,alt=props.alt,api=props.api,size=props.size,url=props.url,otherProps=(0,objectWithoutProperties.Z)(props,_excluded),t=(0,es.$G)().t,_useState=(0,react.useState)(void 0),_useState2=(0,slicedToArray.Z)(_useState,2),avatar=_useState2[0],setAvatar=_useState2[1],_useState3=(0,react.useState)(StateLoader.Default),_useState4=(0,slicedToArray.Z)(_useState3,2),loader=_useState4[0],setLoader=_useState4[1];(0,react.useLayoutEffect)((function(){if(url&&"string"==typeof url){var image=new Image,fullUrl=api?"".concat(config.Z.api,"/").concat(url):url;setLoader(StateLoader.Loading),image.src=fullUrl,image.onload=function(){setLoader(StateLoader.Success),setAvatar(fullUrl)},image.onabort=function(){return console.log("onabort")},image.onerror=function(){setLoader(StateLoader.Error)}}}),[url,api]);var haveAvatar=(0,react.useMemo)((function(){return(0,jsx_runtime.jsx)(Avatar.q,(0,objectSpread2.Z)({size:size,src:avatar,alt:alt,api:api,symbol:symbol},otherProps))}),[avatar,alt,api,otherProps,size,symbol]),isLoading=(0,react.useMemo)((function(){return(0,jsx_runtime.jsx)(Skeleton.O,{className:"pre-loader-avatar__circle",shape:SkeletonShape.o.Circle})}),[]),isDefault=(0,react.useMemo)((function(){return(0,jsx_runtime.jsx)(IcoImg.Z,{className:"pre-loader-avatar__circle",color:IcoImg.a.PRIMARY_COLOR,ico:"UserIco"})}),[]),isError=(0,react.useMemo)((function(){return(0,jsx_runtime.jsx)(Text.xv,{className:"pre-loader-avatar__circle",theme:Text.lg.ERROR,title:t("error.avatar-loading"),align:Text.PH.CENTER})}),[t]),AvatarCondition=(0,react.useMemo)((function(){switch(loader){case StateLoader.Default:return isDefault;case StateLoader.Error:return isError;case StateLoader.Success:return haveAvatar;case StateLoader.Loading:return isLoading}}),[loader,isDefault,isError,haveAvatar,isLoading]);return(0,jsx_runtime.jsx)("div",{className:(0,ClassNames.m)("pre-loader-avatar",className),children:AvatarCondition})}));try{PreLoaderAvatar_PreLoaderAvatar.displayName="PreLoaderAvatar",PreLoaderAvatar_PreLoaderAvatar.__docgenInfo={description:"",displayName:"PreLoaderAvatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string | File | undefined"}},api:{defaultValue:null,description:"",name:"api",required:!1,type:{name:"boolean"}},classImage:{defaultValue:null,description:"",name:"classImage",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string | undefined"}},symbol:{defaultValue:null,description:"",name:"symbol",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/PreLoaderAvatar/ui/PreLoaderAvatar.tsx#PreLoaderAvatar"]={docgenInfo:PreLoaderAvatar_PreLoaderAvatar.__docgenInfo,name:"PreLoaderAvatar",path:"src/widgets/PreLoaderAvatar/ui/PreLoaderAvatar.tsx#PreLoaderAvatar"})}catch(__react_docgen_typescript_loader_error){}}}]);