import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{r as s,a as tt}from"./index-B1GeB8Nz.js";import{a as we,u as I,c as A,P as ie}from"./index-DzJ_GqfG.js";import{u as j,S as nt}from"./index-BAi9YrL4.js";import{c as rt,a as ot}from"./index-BJJGc8wt.js";import{P as O,d as at}from"./index-Bi9wok0D.js";import{F as it}from"./index-DyFja7G4.js";import{c as st}from"./index-DVF2XGCm.js";import{c as B}from"./cn-CytzSlOG.js";import{c as ct}from"./createLucideIcon-B2mkThYZ.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var lt=tt.useId||(()=>{}),dt=0;function Z(e){const[t,n]=s.useState(lt());return we(()=>{e||n(r=>r??String(dt++))},[e]),e||(t?`radix-${t}`:"")}function ft({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=vt({defaultProp:t,onChange:n}),a=e!==void 0,c=a?e:r,i=I(n),g=s.useCallback(l=>{if(a){const v=typeof l=="function"?l(e):l;v!==e&&i(v)}else o(l)},[a,e,o,i]);return[c,g]}function vt({defaultProp:e,onChange:t}){const n=s.useState(e),[r]=n,o=s.useRef(r),a=I(t);return s.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}function ht(e,t=globalThis==null?void 0:globalThis.document){const n=I(e);s.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var mt="DismissableLayer",oe="dismissableLayer.update",gt="dismissableLayer.pointerDownOutside",pt="dismissableLayer.focusOutside",de,xe=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Pe=s.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:i,...g}=e,l=s.useContext(xe),[d,v]=s.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=s.useState({}),x=j(t,E=>v(E)),u=Array.from(l.layers),[h]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),p=u.indexOf(h),w=d?u.indexOf(d):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,C=w>=p,S=bt(E=>{const N=E.target,W=[...l.branches].some($=>$.contains(N));!C||W||(o==null||o(E),c==null||c(E),E.defaultPrevented||i==null||i())},m),D=Ct(E=>{const N=E.target;[...l.branches].some($=>$.contains(N))||(a==null||a(E),c==null||c(E),E.defaultPrevented||i==null||i())},m);return ht(E=>{w===l.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&i&&(E.preventDefault(),i()))},m),s.useEffect(()=>{if(d)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(de=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(d)),l.layers.add(d),fe(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=de)}},[d,m,n,l]),s.useEffect(()=>()=>{d&&(l.layers.delete(d),l.layersWithOutsidePointerEventsDisabled.delete(d),fe())},[d,l]),s.useEffect(()=>{const E=()=>y({});return document.addEventListener(oe,E),()=>document.removeEventListener(oe,E)},[]),f.jsx(O.div,{...g,ref:x,style:{pointerEvents:b?C?"auto":"none":void 0,...e.style},onFocusCapture:A(e.onFocusCapture,D.onFocusCapture),onBlurCapture:A(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:A(e.onPointerDownCapture,S.onPointerDownCapture)})});Pe.displayName=mt;var yt="DismissableLayerBranch",Et=s.forwardRef((e,t)=>{const n=s.useContext(xe),r=s.useRef(null),o=j(t,r);return s.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),f.jsx(O.div,{...e,ref:o})});Et.displayName=yt;function bt(e,t=globalThis==null?void 0:globalThis.document){const n=I(e),r=s.useRef(!1),o=s.useRef(()=>{});return s.useEffect(()=>{const a=i=>{if(i.target&&!r.current){let g=function(){Re(gt,n,l,{discrete:!0})};const l={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=g,t.addEventListener("click",o.current,{once:!0})):g()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Ct(e,t=globalThis==null?void 0:globalThis.document){const n=I(e),r=s.useRef(!1);return s.useEffect(()=>{const o=a=>{a.target&&!r.current&&Re(pt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function fe(){const e=new CustomEvent(oe);document.dispatchEvent(e)}function Re(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?at(o,a):o.dispatchEvent(a)}var q="focusScope.autoFocusOnMount",Q="focusScope.autoFocusOnUnmount",ve={bubbles:!1,cancelable:!0},St="FocusScope",De=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=e,[i,g]=s.useState(null),l=I(o),d=I(a),v=s.useRef(null),m=j(t,u=>g(u)),y=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(r){let u=function(b){if(y.paused||!i)return;const C=b.target;i.contains(C)?v.current=C:T(v.current,{select:!0})},h=function(b){if(y.paused||!i)return;const C=b.relatedTarget;C!==null&&(i.contains(C)||T(v.current,{select:!0}))},p=function(b){if(document.activeElement===document.body)for(const S of b)S.removedNodes.length>0&&T(i)};document.addEventListener("focusin",u),document.addEventListener("focusout",h);const w=new MutationObserver(p);return i&&w.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",h),w.disconnect()}}},[r,i,y.paused]),s.useEffect(()=>{if(i){me.add(y);const u=document.activeElement;if(!i.contains(u)){const p=new CustomEvent(q,ve);i.addEventListener(q,l),i.dispatchEvent(p),p.defaultPrevented||(wt(Nt(Ne(i)),{select:!0}),document.activeElement===u&&T(i))}return()=>{i.removeEventListener(q,l),setTimeout(()=>{const p=new CustomEvent(Q,ve);i.addEventListener(Q,d),i.dispatchEvent(p),p.defaultPrevented||T(u??document.body,{select:!0}),i.removeEventListener(Q,d),me.remove(y)},0)}}},[i,l,d,y]);const x=s.useCallback(u=>{if(!n&&!r||y.paused)return;const h=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,p=document.activeElement;if(h&&p){const w=u.currentTarget,[b,C]=xt(w);b&&C?!u.shiftKey&&p===C?(u.preventDefault(),n&&T(b,{select:!0})):u.shiftKey&&p===b&&(u.preventDefault(),n&&T(C,{select:!0})):p===w&&u.preventDefault()}},[n,r,y.paused]);return f.jsx(O.div,{tabIndex:-1,...c,ref:m,onKeyDown:x})});De.displayName=St;function wt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(T(r,{select:t}),document.activeElement!==n)return}function xt(e){const t=Ne(e),n=he(t,e),r=he(t.reverse(),e);return[n,r]}function Ne(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function he(e,t){for(const n of e)if(!Pt(n,{upTo:t}))return n}function Pt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Rt(e){return e instanceof HTMLInputElement&&"select"in e}function T(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Rt(e)&&t&&e.select()}}var me=Dt();function Dt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ge(e,t),e.unshift(t)},remove(t){var n;e=ge(e,t),(n=e[0])==null||n.resume()}}}function ge(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Nt(e){return e.filter(t=>t.tagName!=="A")}var Ot="Portal",Oe=s.forwardRef((e,t)=>{var i;const{container:n,...r}=e,[o,a]=s.useState(!1);we(()=>a(!0),[]);const c=n||o&&((i=globalThis==null?void 0:globalThis.document)==null?void 0:i.body);return c?it.createPortal(f.jsx(O.div,{...r,ref:t}),c):null});Oe.displayName=Ot;var J=0;function Tt(){s.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??pe()),document.body.insertAdjacentElement("beforeend",e[1]??pe()),J++,()=>{J===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),J--}},[])}function pe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var R=function(){return R=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)};function Te(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function At(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var X="right-scroll-bar-position",G="width-before-scroll-bar",It="with-scroll-bars-hidden",Lt="--removed-body-scroll-bar-size";function ee(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function kt(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Mt=typeof window<"u"?s.useLayoutEffect:s.useEffect,ye=new WeakMap;function Ft(e,t){var n=kt(null,function(r){return e.forEach(function(o){return ee(o,r)})});return Mt(function(){var r=ye.get(n);if(r){var o=new Set(r),a=new Set(e),c=n.current;o.forEach(function(i){a.has(i)||ee(i,null)}),a.forEach(function(i){o.has(i)||ee(i,c)})}ye.set(n,e)},[e]),n}function _t(e){return e}function jt(e,t){t===void 0&&(t=_t);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var c=t(a,r);return n.push(c),function(){n=n.filter(function(i){return i!==c})}},assignSyncMedium:function(a){for(r=!0;n.length;){var c=n;n=[],c.forEach(a)}n={push:function(i){return a(i)},filter:function(){return n}}},assignMedium:function(a){r=!0;var c=[];if(n.length){var i=n;n=[],i.forEach(a),c=n}var g=function(){var d=c;c=[],d.forEach(a)},l=function(){return Promise.resolve().then(g)};l(),n={push:function(d){c.push(d),l()},filter:function(d){return c=c.filter(d),n}}}};return o}function Wt(e){e===void 0&&(e={});var t=jt(null);return t.options=R({async:!0,ssr:!1},e),t}var Ae=function(e){var t=e.sideCar,n=Te(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return s.createElement(r,R({},n))};Ae.isSideCarExport=!0;function Bt(e,t){return e.useMedium(t),Ae}var Ie=Wt(),te=function(){},z=s.forwardRef(function(e,t){var n=s.useRef(null),r=s.useState({onScrollCapture:te,onWheelCapture:te,onTouchMoveCapture:te}),o=r[0],a=r[1],c=e.forwardProps,i=e.children,g=e.className,l=e.removeScrollBar,d=e.enabled,v=e.shards,m=e.sideCar,y=e.noIsolation,x=e.inert,u=e.allowPinchZoom,h=e.as,p=h===void 0?"div":h,w=e.gapMode,b=Te(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=m,S=Ft([n,t]),D=R(R({},b),o);return s.createElement(s.Fragment,null,d&&s.createElement(C,{sideCar:Ie,removeScrollBar:l,shards:v,noIsolation:y,inert:x,setCallbacks:a,allowPinchZoom:!!u,lockRef:n,gapMode:w}),c?s.cloneElement(s.Children.only(i),R(R({},D),{ref:S})):s.createElement(p,R({},D,{className:g,ref:S}),i))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};z.classNames={fullWidth:G,zeroRight:X};var Ut=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Ht(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ut();return t&&e.setAttribute("nonce",t),e}function Kt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Vt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Xt=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Ht())&&(Kt(t,n),Vt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Gt=function(){var e=Xt();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Le=function(){var e=Gt(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Yt={left:0,top:0,right:0,gap:0},ne=function(e){return parseInt(e||"",10)||0},zt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ne(n),ne(r),ne(o)]},$t=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Yt;var t=zt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Zt=Le(),_="data-scroll-locked",qt=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(It,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body[`).concat(_,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(X,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(G,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(X," .").concat(X,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(_,`] {
    `).concat(Lt,": ").concat(i,`px;
  }
`)},Ee=function(){var e=parseInt(document.body.getAttribute(_)||"0",10);return isFinite(e)?e:0},Qt=function(){s.useEffect(function(){return document.body.setAttribute(_,(Ee()+1).toString()),function(){var e=Ee()-1;e<=0?document.body.removeAttribute(_):document.body.setAttribute(_,e.toString())}},[])},Jt=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;Qt();var a=s.useMemo(function(){return $t(o)},[o]);return s.createElement(Zt,{styles:qt(a,!t,o,n?"":"!important")})},ae=!1;if(typeof window<"u")try{var U=Object.defineProperty({},"passive",{get:function(){return ae=!0,!0}});window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{ae=!1}var k=ae?{passive:!1}:!1,en=function(e){return e.tagName==="TEXTAREA"},ke=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!en(e)&&n[t]==="visible")},tn=function(e){return ke(e,"overflowY")},nn=function(e){return ke(e,"overflowX")},be=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Me(e,r);if(o){var a=Fe(e,r),c=a[1],i=a[2];if(c>i)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},rn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},on=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Me=function(e,t){return e==="v"?tn(t):nn(t)},Fe=function(e,t){return e==="v"?rn(t):on(t)},an=function(e,t){return e==="h"&&t==="rtl"?-1:1},sn=function(e,t,n,r,o){var a=an(e,window.getComputedStyle(t).direction),c=a*r,i=n.target,g=t.contains(i),l=!1,d=c>0,v=0,m=0;do{var y=Fe(e,i),x=y[0],u=y[1],h=y[2],p=u-h-a*x;(x||p)&&Me(e,i)&&(v+=p,m+=x),i instanceof ShadowRoot?i=i.host:i=i.parentNode}while(!g&&i!==document.body||g&&(t.contains(i)||t===i));return(d&&(Math.abs(v)<1||!o)||!d&&(Math.abs(m)<1||!o))&&(l=!0),l},H=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ce=function(e){return[e.deltaX,e.deltaY]},Se=function(e){return e&&"current"in e?e.current:e},cn=function(e,t){return e[0]===t[0]&&e[1]===t[1]},un=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ln=0,M=[];function dn(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(ln++)[0],a=s.useState(Le)[0],c=s.useRef(e);s.useEffect(function(){c.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=At([e.lockRef.current],(e.shards||[]).map(Se),!0).filter(Boolean);return u.forEach(function(h){return h.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(h){return h.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=s.useCallback(function(u,h){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!c.current.allowPinchZoom;var p=H(u),w=n.current,b="deltaX"in u?u.deltaX:w[0]-p[0],C="deltaY"in u?u.deltaY:w[1]-p[1],S,D=u.target,E=Math.abs(b)>Math.abs(C)?"h":"v";if("touches"in u&&E==="h"&&D.type==="range")return!1;var N=be(E,D);if(!N)return!0;if(N?S=E:(S=E==="v"?"h":"v",N=be(E,D)),!N)return!1;if(!r.current&&"changedTouches"in u&&(b||C)&&(r.current=S),!S)return!0;var W=r.current||S;return sn(W,h,u,W==="h"?b:C,!0)},[]),g=s.useCallback(function(u){var h=u;if(!(!M.length||M[M.length-1]!==a)){var p="deltaY"in h?Ce(h):H(h),w=t.current.filter(function(S){return S.name===h.type&&(S.target===h.target||h.target===S.shadowParent)&&cn(S.delta,p)})[0];if(w&&w.should){h.cancelable&&h.preventDefault();return}if(!w){var b=(c.current.shards||[]).map(Se).filter(Boolean).filter(function(S){return S.contains(h.target)}),C=b.length>0?i(h,b[0]):!c.current.noIsolation;C&&h.cancelable&&h.preventDefault()}}},[]),l=s.useCallback(function(u,h,p,w){var b={name:u,delta:h,target:p,should:w,shadowParent:fn(p)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(C){return C!==b})},1)},[]),d=s.useCallback(function(u){n.current=H(u),r.current=void 0},[]),v=s.useCallback(function(u){l(u.type,Ce(u),u.target,i(u,e.lockRef.current))},[]),m=s.useCallback(function(u){l(u.type,H(u),u.target,i(u,e.lockRef.current))},[]);s.useEffect(function(){return M.push(a),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",g,k),document.addEventListener("touchmove",g,k),document.addEventListener("touchstart",d,k),function(){M=M.filter(function(u){return u!==a}),document.removeEventListener("wheel",g,k),document.removeEventListener("touchmove",g,k),document.removeEventListener("touchstart",d,k)}},[]);var y=e.removeScrollBar,x=e.inert;return s.createElement(s.Fragment,null,x?s.createElement(a,{styles:un(o)}):null,y?s.createElement(Jt,{gapMode:e.gapMode}):null)}function fn(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const vn=Bt(Ie,dn);var _e=s.forwardRef(function(e,t){return s.createElement(z,R({},e,{ref:t,sideCar:vn}))});_e.classNames=z.classNames;var hn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},F=new WeakMap,K=new WeakMap,V={},re=0,je=function(e){return e&&(e.host||je(e.parentNode))},mn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=je(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},gn=function(e,t,n,r){var o=mn(t,Array.isArray(e)?e:[e]);V[n]||(V[n]=new WeakMap);var a=V[n],c=[],i=new Set,g=new Set(o),l=function(v){!v||i.has(v)||(i.add(v),l(v.parentNode))};o.forEach(l);var d=function(v){!v||g.has(v)||Array.prototype.forEach.call(v.children,function(m){if(i.has(m))d(m);else try{var y=m.getAttribute(r),x=y!==null&&y!=="false",u=(F.get(m)||0)+1,h=(a.get(m)||0)+1;F.set(m,u),a.set(m,h),c.push(m),u===1&&x&&K.set(m,!0),h===1&&m.setAttribute(n,"true"),x||m.setAttribute(r,"true")}catch(p){console.error("aria-hidden: cannot operate on ",m,p)}})};return d(t),i.clear(),re++,function(){c.forEach(function(v){var m=F.get(v)-1,y=a.get(v)-1;F.set(v,m),a.set(v,y),m||(K.has(v)||v.removeAttribute(r),K.delete(v)),y||v.removeAttribute(n)}),re--,re||(F=new WeakMap,F=new WeakMap,K=new WeakMap,V={})}},pn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=hn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),gn(r,o,n,"aria-hidden")):function(){return null}},se="Dialog",[We,Yn]=rt(se),[yn,P]=We(se),Be=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:c=!0}=e,i=s.useRef(null),g=s.useRef(null),[l=!1,d]=ft({prop:r,defaultProp:o,onChange:a});return f.jsx(yn,{scope:t,triggerRef:i,contentRef:g,contentId:Z(),titleId:Z(),descriptionId:Z(),open:l,onOpenChange:d,onOpenToggle:s.useCallback(()=>d(v=>!v),[d]),modal:c,children:n})};Be.displayName=se;var Ue="DialogTrigger",He=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(Ue,n),a=j(t,o.triggerRef);return f.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":le(o.open),...r,ref:a,onClick:A(e.onClick,o.onOpenToggle)})});He.displayName=Ue;var ce="DialogPortal",[En,Ke]=We(ce,{forceMount:void 0}),Ve=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=P(ce,t);return f.jsx(En,{scope:t,forceMount:n,children:s.Children.map(r,c=>f.jsx(ie,{present:n||a.open,children:f.jsx(Oe,{asChild:!0,container:o,children:c})}))})};Ve.displayName=ce;var Y="DialogOverlay",Xe=s.forwardRef((e,t)=>{const n=Ke(Y,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=P(Y,e.__scopeDialog);return a.modal?f.jsx(ie,{present:r||a.open,children:f.jsx(bn,{...o,ref:t})}):null});Xe.displayName=Y;var bn=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(Y,n);return f.jsx(_e,{as:nt,allowPinchZoom:!0,shards:[o.contentRef],children:f.jsx(O.div,{"data-state":le(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),L="DialogContent",Ge=s.forwardRef((e,t)=>{const n=Ke(L,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=P(L,e.__scopeDialog);return f.jsx(ie,{present:r||a.open,children:a.modal?f.jsx(Cn,{...o,ref:t}):f.jsx(Sn,{...o,ref:t})})});Ge.displayName=L;var Cn=s.forwardRef((e,t)=>{const n=P(L,e.__scopeDialog),r=s.useRef(null),o=j(t,n.contentRef,r);return s.useEffect(()=>{const a=r.current;if(a)return pn(a)},[]),f.jsx(Ye,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:A(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:A(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&a.preventDefault()}),onFocusOutside:A(e.onFocusOutside,a=>a.preventDefault())})}),Sn=s.forwardRef((e,t)=>{const n=P(L,e.__scopeDialog),r=s.useRef(!1),o=s.useRef(!1);return f.jsx(Ye,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,i;(c=e.onCloseAutoFocus)==null||c.call(e,a),a.defaultPrevented||(r.current||(i=n.triggerRef.current)==null||i.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var g,l;(g=e.onInteractOutside)==null||g.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((l=n.triggerRef.current)==null?void 0:l.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),Ye=s.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=e,i=P(L,n),g=s.useRef(null),l=j(t,g);return Tt(),f.jsxs(f.Fragment,{children:[f.jsx(De,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:f.jsx(Pe,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":le(i.open),...c,ref:l,onDismiss:()=>i.onOpenChange(!1)})}),f.jsxs(f.Fragment,{children:[f.jsx(wn,{titleId:i.titleId}),f.jsx(Pn,{contentRef:g,descriptionId:i.descriptionId})]})]})}),ue="DialogTitle",ze=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(ue,n);return f.jsx(O.h2,{id:o.titleId,...r,ref:t})});ze.displayName=ue;var $e="DialogDescription",Ze=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P($e,n);return f.jsx(O.p,{id:o.descriptionId,...r,ref:t})});Ze.displayName=$e;var qe="DialogClose",Qe=s.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=P(qe,n);return f.jsx(O.button,{type:"button",...r,ref:t,onClick:A(e.onClick,()=>o.onOpenChange(!1))})});Qe.displayName=qe;function le(e){return e?"open":"closed"}var Je="DialogTitleWarning",[zn,et]=ot(Je,{contentName:L,titleName:ue,docsSlug:"dialog"}),wn=({titleId:e})=>{const t=et(Je),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},xn="DialogDescriptionWarning",Pn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${et(xn).contentName}}.`;return s.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},Rn=Be,Dn=He,Nn=Ve,On=Xe,Tn=Ge,An=ze,In=Ze,Ln=Qe;const $n=Rn,Zn=Dn,kn=Nn;function Mn({className:e,...t}){return f.jsx(On,{className:B("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t})}const Fn=st("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}});function qn({side:e="right",className:t,children:n,...r}){return f.jsxs(kn,{children:[f.jsx(Mn,{}),f.jsxs(Tn,{className:B(Fn({side:e}),t),...r,children:[f.jsxs(Ln,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[f.jsx(ut,{className:"h-4 w-4"}),f.jsx("span",{className:"sr-only",children:"Close"})]}),n]})]})}function Qn({className:e,...t}){return f.jsx("div",{className:B("flex flex-col space-y-2 text-center sm:text-left",e),...t})}function Jn({className:e,...t}){return f.jsx(An,{className:B("text-lg font-semibold text-foreground",e),...t})}function er({className:e,...t}){return f.jsx(In,{className:B("text-sm text-muted-foreground",e),...t})}export{$n as S,Zn as a,qn as b,Qn as c,Jn as d,er as e};
