"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{8013:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7896),o=n(2784),c={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:t}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"},r=n(2258),a=o.forwardRef(function(e,t){return o.createElement(r.Z,(0,l.Z)({},e,{ref:t,icon:c}))})},6052:function(e,t,n){let l;n.d(t,{Z:function(){return ek}});var o,c=n(5942),r=n(2784),a=n(3001),s=n(3930),i=n(2255),u=n(3682),f=n(2829),m=n(5965),d=n(7840),p=n(2524),b=n.n(p),g=n(472),v=n(7480),y=n(3400),C=n(3241),O=n(2813),x=n(3615),E=n(5200);function j(e){return!!(null==e?void 0:e.then)}var h=e=>{let{type:t,children:n,prefixCls:l,buttonProps:o,close:c,autoFocus:a,emitEvent:s,isSilent:i,quitOnNullishReturnValue:u,actionFn:f}=e,m=r.useRef(!1),d=r.useRef(null),[p,b]=(0,O.Z)(!1),g=function(){null==c||c.apply(void 0,arguments)};r.useEffect(()=>{let e=null;return a&&(e=setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.focus()})),()=>{e&&clearTimeout(e)}},[]);let v=e=>{j(e)&&(b(!0),e.then(function(){b(!1,!0),g.apply(void 0,arguments),m.current=!1},e=>{if(b(!1,!0),m.current=!1,null==i||!i())return Promise.reject(e)}))};return r.createElement(x.ZP,Object.assign({},(0,E.nx)(t),{onClick:e=>{let t;if(!m.current){if(m.current=!0,!f){g();return}if(s){if(t=f(e),u&&!j(t)){m.current=!1,g(e);return}}else if(f.length)t=f(c),m.current=!1;else if(!j(t=f())){g();return}v(t)}},loading:p,prefixCls:l},o,{ref:d}),n)};let k=r.createContext({}),{Provider:P}=k;var w=()=>{let{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:n,isSilent:l,mergedOkCancel:o,rootPrefixCls:c,close:a,onCancel:s,onConfirm:i}=(0,r.useContext)(k);return o?r.createElement(h,{isSilent:l,actionFn:s,close:function(){null==a||a.apply(void 0,arguments),null==i||i(!1)},autoFocus:"cancel"===e,buttonProps:t,prefixCls:"".concat(c,"-btn")},n):null},Z=()=>{let{autoFocusButton:e,close:t,isSilent:n,okButtonProps:l,rootPrefixCls:o,okTextLocale:c,okType:a,onConfirm:s,onOk:i}=(0,r.useContext)(k);return r.createElement(h,{isSilent:n,type:a||"primary",actionFn:i,close:function(){null==t||t.apply(void 0,arguments),null==s||s(!0)},autoFocus:"ok"===e,buttonProps:l,prefixCls:"".concat(o,"-btn")},c)},N=n(6817),T=n(1241),I=n(5011),S=n(5638);function M(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function z(e){let{closable:t,closeIcon:n}=e||{};return r.useMemo(()=>{if(!t&&(!1===t||!1===n||null===n))return!1;if(void 0===t&&void 0===n)return null;let e={closeIcon:"boolean"!=typeof n&&null!==n?n:void 0};return t&&"object"==typeof t&&(e=Object.assign(Object.assign({},e),t)),e},[t,n])}function B(){let e={};for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];return n.forEach(t=>{t&&Object.keys(t).forEach(n=>{void 0!==t[n]&&(e[n]=t[n])})}),e}let R={};var F=n(7756),A=n(589),_=n(632),q=n(5271),H=n(9954);function L(){}let W=r.createContext({add:L,remove:L});var X=n(6435),D=()=>{let{cancelButtonProps:e,cancelTextLocale:t,onCancel:n}=(0,r.useContext)(k);return r.createElement(x.ZP,Object.assign({onClick:n},e),t)},Y=()=>{let{confirmLoading:e,okButtonProps:t,okType:n,okTextLocale:l,onOk:o}=(0,r.useContext)(k);return r.createElement(x.ZP,Object.assign({},(0,E.nx)(n),{loading:e,onClick:o},t),l)},G=n(9529);function U(e,t){return r.createElement("span",{className:"".concat(e,"-close-x")},t||r.createElement(N.Z,{className:"".concat(e,"-close-icon")}))}let V=e=>{let t;let{okText:n,okType:l="primary",cancelText:o,confirmLoading:a,onOk:s,onCancel:i,okButtonProps:u,cancelButtonProps:f,footer:m}=e,[d]=(0,y.Z)("Modal",(0,G.A)()),p={confirmLoading:a,okButtonProps:u,cancelButtonProps:f,okTextLocale:n||(null==d?void 0:d.okText),cancelTextLocale:o||(null==d?void 0:d.cancelText),okType:l,onOk:s,onCancel:i},b=r.useMemo(()=>p,(0,c.Z)(Object.values(p)));return"function"==typeof m||void 0===m?(t=r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(Y,null)),"function"==typeof m&&(t=m(t,{OkBtn:Y,CancelBtn:D})),t=r.createElement(P,{value:b},t)):t=m,r.createElement(X.n,{disabled:!1},t)};var J=n(3136),K=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n};(0,F.Z)()&&window.document.documentElement&&document.documentElement.addEventListener("click",e=>{l={x:e.pageX,y:e.pageY},setTimeout(()=>{l=null},100)},!0);var Q=e=>{var t;let{getPopupContainer:n,getPrefixCls:o,direction:c,modal:a}=r.useContext(s.E_),i=t=>{let{onCancel:n}=e;null==n||n(t)},{prefixCls:u,className:f,rootClassName:m,open:d,wrapClassName:p,centered:y,getContainer:C,focusTriggerAfterClose:O=!0,style:x,visible:E,width:j=520,footer:h,classNames:k,styles:P,children:w,loading:Z}=e,F=K(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),L=o("modal",u),X=o(),D=(0,_.Z)(L),[Y,G,Q]=(0,J.ZP)(L,D),$=b()(p,{["".concat(L,"-centered")]:!!y,["".concat(L,"-wrap-rtl")]:"rtl"===c}),ee=null===h||Z?null:r.createElement(V,Object.assign({},e,{onOk:t=>{let{onOk:n}=e;null==n||n(t)},onCancel:i})),[et,en,el]=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R,l=z(e),o=z(t),c="boolean"!=typeof l&&!!(null==l?void 0:l.disabled),a=r.useMemo(()=>Object.assign({closeIcon:r.createElement(N.Z,null)},n),[n]),s=r.useMemo(()=>!1!==l&&(l?B(a,o,l):!1!==o&&(o?B(a,o):!!a.closable&&a)),[l,o,a]);return r.useMemo(()=>{if(!1===s)return[!1,null,c];let{closeIconRender:e}=a,{closeIcon:t}=s,n=t;if(null!=n){e&&(n=e(t));let l=(0,S.Z)(s,!0);Object.keys(l).length&&(n=r.isValidElement(n)?r.cloneElement(n,l):r.createElement("span",Object.assign({},l),n))}return[!0,n,c]},[s,a])}(M(e),M(a),{closable:!0,closeIcon:r.createElement(N.Z,{className:"".concat(L,"-close-icon")}),closeIconRender:e=>U(L,e)}),eo=function(e){let t=r.useContext(W),n=r.useRef();return(0,H.zX)(l=>{if(l){let o=e?l.querySelector(e):l;t.add(o),n.current=o}else t.remove(n.current)})}(".".concat(L,"-content")),[ec,er]=(0,g.Cn)("Modal",F.zIndex);return Y(r.createElement(I.Z,{form:!0,space:!0},r.createElement(A.Z.Provider,{value:er},r.createElement(T.Z,Object.assign({width:j},F,{zIndex:ec,getContainer:void 0===C?n:C,prefixCls:L,rootClassName:b()(G,m,Q,D),footer:ee,visible:null!=d?d:E,mousePosition:null!==(t=F.mousePosition)&&void 0!==t?t:l,onClose:i,closable:et?{disabled:el,closeIcon:en}:et,closeIcon:en,focusTriggerAfterClose:O,transitionName:(0,v.m)(X,"zoom",e.transitionName),maskTransitionName:(0,v.m)(X,"fade",e.maskTransitionName),className:b()(G,f,null==a?void 0:a.className),style:Object.assign(Object.assign({},null==a?void 0:a.style),x),classNames:Object.assign(Object.assign(Object.assign({},null==a?void 0:a.classNames),k),{wrapper:b()($,null==k?void 0:k.wrapper)}),styles:Object.assign(Object.assign({},null==a?void 0:a.styles),P),panelRef:eo}),Z?r.createElement(q.Z,{active:!0,title:!1,paragraph:{rows:4},className:"".concat(L,"-body-skeleton")}):w))))},$=n(9095),ee=n(5809),et=n(9870);let en=e=>{let{componentCls:t,titleFontSize:n,titleLineHeight:l,modalConfirmIconSize:o,fontSize:c,lineHeight:r,modalTitleHeight:a,fontHeight:s,confirmBodyPadding:i}=e,u="".concat(t,"-confirm");return{[u]:{"&-rtl":{direction:"rtl"},["".concat(e.antCls,"-modal-header")]:{display:"none"},["".concat(u,"-body-wrapper")]:Object.assign({},(0,ee.dF)()),["&".concat(t," ").concat(t,"-body")]:{padding:i},["".concat(u,"-body")]:{display:"flex",flexWrap:"nowrap",alignItems:"start",["> ".concat(e.iconCls)]:{flex:"none",fontSize:o,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(o).equal()).div(2).equal()},["&-has-title > ".concat(e.iconCls)]:{marginTop:e.calc(e.calc(a).sub(o).equal()).div(2).equal()}},["".concat(u,"-paragraph")]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},["".concat(e.iconCls," + ").concat(u,"-paragraph")]:{maxWidth:"calc(100% - ".concat((0,$.bf)(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal()),")")},["".concat(u,"-title")]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:n,lineHeight:l},["".concat(u,"-content")]:{color:e.colorText,fontSize:c,lineHeight:r},["".concat(u,"-btns")]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,["".concat(e.antCls,"-btn + ").concat(e.antCls,"-btn")]:{marginBottom:0,marginInlineStart:e.marginXS}}},["".concat(u,"-error ").concat(u,"-body > ").concat(e.iconCls)]:{color:e.colorError},["".concat(u,"-warning ").concat(u,"-body > ").concat(e.iconCls,",\n        ").concat(u,"-confirm ").concat(u,"-body > ").concat(e.iconCls)]:{color:e.colorWarning},["".concat(u,"-info ").concat(u,"-body > ").concat(e.iconCls)]:{color:e.colorInfo},["".concat(u,"-success ").concat(u,"-body > ").concat(e.iconCls)]:{color:e.colorSuccess}}};var el=(0,et.bk)(["Modal","confirm"],e=>[en((0,J.B4)(e))],J.eh,{order:-1e3}),eo=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n};function ec(e){let{prefixCls:t,icon:n,okText:l,cancelText:o,confirmPrefixCls:a,type:s,okCancel:i,footer:p,locale:g}=e,v=eo(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]),C=n;if(!n&&null!==n)switch(s){case"info":C=r.createElement(d.Z,null);break;case"success":C=r.createElement(u.Z,null);break;case"error":C=r.createElement(f.Z,null);break;default:C=r.createElement(m.Z,null)}let O=null!=i?i:"confirm"===s,x=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),[E]=(0,y.Z)("Modal"),j=g||E,h=l||(O?null==j?void 0:j.okText:null==j?void 0:j.justOkText),k=Object.assign({autoFocusButton:x,cancelTextLocale:o||(null==j?void 0:j.cancelText),okTextLocale:h,mergedOkCancel:O},v),N=r.useMemo(()=>k,(0,c.Z)(Object.values(k))),T=r.createElement(r.Fragment,null,r.createElement(w,null),r.createElement(Z,null)),I=void 0!==e.title&&null!==e.title,S="".concat(a,"-body");return r.createElement("div",{className:"".concat(a,"-body-wrapper")},r.createElement("div",{className:b()(S,{["".concat(S,"-has-title")]:I})},C,r.createElement("div",{className:"".concat(a,"-paragraph")},I&&r.createElement("span",{className:"".concat(a,"-title")},e.title),r.createElement("div",{className:"".concat(a,"-content")},e.content))),void 0===p||"function"==typeof p?r.createElement(P,{value:N},r.createElement("div",{className:"".concat(a,"-btns")},"function"==typeof p?p(T,{OkBtn:Z,CancelBtn:w}):T)):p,r.createElement(el,{prefixCls:t}))}let er=e=>{let{close:t,zIndex:n,afterClose:l,open:o,keyboard:c,centered:a,getContainer:s,maskStyle:i,direction:u,prefixCls:f,wrapClassName:m,rootPrefixCls:d,bodyStyle:p,closable:y=!1,closeIcon:O,modalRender:x,focusTriggerAfterClose:E,onConfirm:j,styles:h}=e,k="".concat(f,"-confirm"),P=e.width||416,w=e.style||{},Z=void 0===e.mask||e.mask,N=void 0!==e.maskClosable&&e.maskClosable,T=b()(k,"".concat(k,"-").concat(e.type),{["".concat(k,"-rtl")]:"rtl"===u},e.className),[,I]=(0,C.ZP)(),S=r.useMemo(()=>void 0!==n?n:I.zIndexPopupBase+g.u6,[n,I]);return r.createElement(Q,{prefixCls:f,className:T,wrapClassName:b()({["".concat(k,"-centered")]:!!e.centered},m),onCancel:()=>{null==t||t({triggerCancel:!0}),null==j||j(!1)},open:o,title:"",footer:null,transitionName:(0,v.m)(d||"","zoom",e.transitionName),maskTransitionName:(0,v.m)(d||"","fade",e.maskTransitionName),mask:Z,maskClosable:N,style:w,styles:Object.assign({body:p,mask:i},h),width:P,zIndex:S,afterClose:l,keyboard:c,centered:a,getContainer:s,closable:y,closeIcon:O,modalRender:x,focusTriggerAfterClose:E},r.createElement(ec,Object.assign({},e,{confirmPrefixCls:k})))};var ea=e=>{let{rootPrefixCls:t,iconPrefixCls:n,direction:l,theme:o}=e;return r.createElement(i.ZP,{prefixCls:t,iconPrefixCls:n,direction:l,theme:o},r.createElement(er,Object.assign({},e)))},es=[];let ei="",eu=e=>{var t,n;let{prefixCls:l,getContainer:o,direction:c}=e,a=(0,G.A)(),i=(0,r.useContext)(s.E_),u=ei||i.getPrefixCls(),f=l||"".concat(u,"-modal"),m=o;return!1===m&&(m=void 0),r.createElement(ea,Object.assign({},e,{rootPrefixCls:u,prefixCls:f,iconPrefixCls:i.iconPrefixCls,theme:i.theme,direction:null!=c?c:i.direction,locale:null!==(n=null===(t=i.locale)||void 0===t?void 0:t.Modal)&&void 0!==n?n:a,getContainer:m}))};function ef(e){let t;let n=(0,i.w6)(),l=document.createDocumentFragment(),o=Object.assign(Object.assign({},e),{close:f,open:!0});function s(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];o.some(e=>null==e?void 0:e.triggerCancel)&&(null===(t=e.onCancel)||void 0===t||t.call.apply(t,[e,()=>{}].concat((0,c.Z)(o.slice(1)))));for(let e=0;e<es.length;e++)if(es[e]===f){es.splice(e,1);break}(0,a.v)(l)}function u(e){clearTimeout(t),t=setTimeout(()=>{let t=n.getPrefixCls(void 0,ei),o=n.getIconPrefixCls(),c=n.getTheme(),s=r.createElement(eu,Object.assign({},e));(0,a.s)(r.createElement(i.ZP,{prefixCls:t,iconPrefixCls:o,theme:c},n.holderRender?n.holderRender(s):s),l)})}function f(){for(var t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];(o=Object.assign(Object.assign({},o),{open:!1,afterClose:()=>{"function"==typeof e.afterClose&&e.afterClose(),s.apply(this,n)}})).visible&&delete o.visible,u(o)}return u(o),es.push(f),{destroy:f,update:function(e){u(o="function"==typeof e?e(o):Object.assign(Object.assign({},o),e))}}}function em(e){return Object.assign(Object.assign({},e),{type:"warning"})}function ed(e){return Object.assign(Object.assign({},e),{type:"info"})}function ep(e){return Object.assign(Object.assign({},e),{type:"success"})}function eb(e){return Object.assign(Object.assign({},e),{type:"error"})}function eg(e){return Object.assign(Object.assign({},e),{type:"confirm"})}n(2391);var ev=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n},ey=(o=e=>{let{prefixCls:t,className:n,closeIcon:l,closable:o,type:c,title:a,children:i,footer:u}=e,f=ev(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:m}=r.useContext(s.E_),d=m(),p=t||m("modal"),g=(0,_.Z)(d),[v,y,C]=(0,J.ZP)(p,g),O="".concat(p,"-confirm"),x={};return x=c?{closable:null!=o&&o,title:"",footer:"",children:r.createElement(ec,Object.assign({},e,{prefixCls:p,confirmPrefixCls:O,rootPrefixCls:d,content:i}))}:{closable:null==o||o,title:a,footer:null!==u&&r.createElement(V,Object.assign({},e)),children:i},v(r.createElement(T.s,Object.assign({prefixCls:p,className:b()(y,"".concat(p,"-pure-panel"),c&&O,c&&"".concat(O,"-").concat(c),n,C,g)},f,{closeIcon:U(p,l),closable:o},x)))},e=>r.createElement(i.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},r.createElement(o,Object.assign({},e)))),eC=n(2642),eO=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(e);o<l.length;o++)0>t.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]]);return n},ex=r.forwardRef((e,t)=>{var n,{afterClose:l,config:o}=e,a=eO(e,["afterClose","config"]);let[i,u]=r.useState(!0),[f,m]=r.useState(o),{direction:d,getPrefixCls:p}=r.useContext(s.E_),b=p("modal"),g=p(),v=function(){u(!1);for(var e,t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];n.some(e=>null==e?void 0:e.triggerCancel)&&(null===(e=f.onCancel)||void 0===e||e.call.apply(e,[f,()=>{}].concat((0,c.Z)(n.slice(1)))))};r.useImperativeHandle(t,()=>({destroy:v,update:e=>{m(t=>Object.assign(Object.assign({},t),e))}}));let C=null!==(n=f.okCancel)&&void 0!==n?n:"confirm"===f.type,[O]=(0,y.Z)("Modal",eC.Z.Modal);return r.createElement(ea,Object.assign({prefixCls:b,rootPrefixCls:g},f,{close:v,open:i,afterClose:()=>{var e;l(),null===(e=f.afterClose)||void 0===e||e.call(f)},okText:f.okText||(C?null==O?void 0:O.okText:null==O?void 0:O.justOkText),direction:f.direction||d,cancelText:f.cancelText||(null==O?void 0:O.cancelText)},a))});let eE=0,ej=r.memo(r.forwardRef((e,t)=>{let[n,l]=function(){let[e,t]=r.useState([]);return[e,r.useCallback(e=>(t(t=>[].concat((0,c.Z)(t),[e])),()=>{t(t=>t.filter(t=>t!==e))}),[])]}();return r.useImperativeHandle(t,()=>({patchElement:l}),[]),r.createElement(r.Fragment,null,n)}));function eh(e){return ef(em(e))}Q.useModal=function(){let e=r.useRef(null),[t,n]=r.useState([]);r.useEffect(()=>{t.length&&((0,c.Z)(t).forEach(e=>{e()}),n([]))},[t]);let l=r.useCallback(t=>function(l){var o;let a,s;eE+=1;let i=r.createRef(),u=new Promise(e=>{a=e}),f=!1,m=r.createElement(ex,{key:"modal-".concat(eE),config:t(l),ref:i,afterClose:()=>{null==s||s()},isSilent:()=>f,onConfirm:e=>{a(e)}});return(s=null===(o=e.current)||void 0===o?void 0:o.patchElement(m))&&es.push(s),{destroy:()=>{function e(){var e;null===(e=i.current)||void 0===e||e.destroy()}i.current?e():n(t=>[].concat((0,c.Z)(t),[e]))},update:e=>{function t(){var t;null===(t=i.current)||void 0===t||t.update(e)}i.current?t():n(e=>[].concat((0,c.Z)(e),[t]))},then:e=>(f=!0,u.then(e))}},[]);return[r.useMemo(()=>({info:l(ed),success:l(ep),error:l(eb),warning:l(em),confirm:l(eg)}),[]),r.createElement(ej,{key:"modal-holder",ref:e})]},Q.info=function(e){return ef(ed(e))},Q.success=function(e){return ef(ep(e))},Q.error=function(e){return ef(eb(e))},Q.warning=eh,Q.warn=eh,Q.confirm=function(e){return ef(eg(e))},Q.destroyAll=function(){for(;es.length;){let e=es.pop();e&&e()}},Q.config=function(e){let{rootPrefixCls:t}=e;ei=t},Q._InternalPanelDoNotUseOrYouWillBeFired=ey;var ek=Q}}]);