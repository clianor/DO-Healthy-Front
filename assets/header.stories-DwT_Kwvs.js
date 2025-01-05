import{r as Re,a as Ee,b as Oe,c as je,d as ke,e as Ce,f as xe,g as we,u as Pe,h as Le}from"./index-DtvyZA6I.js";import{w as Te,e as Me}from"./index-Z5tTm0QU.js";import{R as ue,a as ye,g as De}from"./index-B1NDlYI3.js";import{j as P}from"./jsx-runtime-BjG_zV1W.js";import{r as Ne,n as Ue}from"./image-DCJzlrkE.js";import{_ as qe,r as Ae}from"./image-context-yBv4OQr6.js";import{B as He}from"./button.ui-CNuFdkiu.js";import{c as Be}from"./cn-CytzSlOG.js";import"./index-BATiNE4h.js";import"./index-BU-tpEox.js";import"./index-DVF2XGCm.js";const Je=o=>{let e;const r=new Set,i=(v,s)=>{const p=typeof v=="function"?v(e):v;if(!Object.is(p,e)){const h=e;e=s??(typeof p!="object"||p===null)?p:Object.assign({},e,p),r.forEach(u=>u(e,h))}},n=()=>e,d={setState:i,getState:n,getInitialState:()=>_,subscribe:v=>(r.add(v),()=>r.delete(v))},_=e=o(i,n,d);return d},Fe=o=>Je,Ke=o=>o;function $e(o,e=Ke){const r=ue.useSyncExternalStore(o.subscribe,()=>e(o.getState()),()=>e(o.getInitialState()));return ue.useDebugValue(r),r}const ze={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,STORYBOOK:"true"},G=new Map,B=o=>{const e=G.get(o);return e?Object.fromEntries(Object.entries(e.stores).map(([r,i])=>[r,i.getState()])):{}},Ge=(o,e,r)=>{if(o===void 0)return{type:"untracked",connection:e.connect(r)};const i=G.get(r.name);if(i)return{type:"tracked",store:o,...i};const n={connection:e.connect(r),stores:{}};return G.set(r.name,n),{type:"tracked",store:o,...n}},Ve=(o,e={})=>(r,i,n)=>{const{enabled:l,anonymousActionType:S,store:d,..._}=e;let v;try{v=(l??(ze?"production":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!v)return o(r,i,n);const{connection:s,...p}=Ge(d,v,_);let h=!0;n.setState=(t,f,a)=>{const c=r(t,f);if(!h)return c;const y=a===void 0?{type:S||"anonymous"}:typeof a=="string"?{type:a}:a;return d===void 0?(s==null||s.send(y,i()),c):(s==null||s.send({...y,type:`${d}/${y.type}`},{...B(_.name),[d]:n.getState()}),c)};const u=(...t)=>{const f=h;h=!1,r(...t),h=f},b=o(n.setState,i,n);if(p.type==="untracked"?s==null||s.init(b):(p.stores[p.store]=n,s==null||s.init(Object.fromEntries(Object.entries(p.stores).map(([t,f])=>[t,t===p.store?b:f.getState()])))),n.dispatchFromDevtools&&typeof n.dispatch=="function"){const t=n.dispatch;n.dispatch=(...f)=>{t(...f)}}return s.subscribe(t=>{var f;switch(t.type){case"ACTION":if(typeof t.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return z(t.payload,a=>{if(a.type==="__setState"){if(d===void 0){u(a.state);return}Object.keys(a.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const c=a.state[d];if(c==null)return;JSON.stringify(n.getState())!==JSON.stringify(c)&&u(c);return}n.dispatchFromDevtools&&typeof n.dispatch=="function"&&n.dispatch(a)});case"DISPATCH":switch(t.payload.type){case"RESET":return u(b),d===void 0?s==null?void 0:s.init(n.getState()):s==null?void 0:s.init(B(_.name));case"COMMIT":if(d===void 0){s==null||s.init(n.getState());return}return s==null?void 0:s.init(B(_.name));case"ROLLBACK":return z(t.state,a=>{if(d===void 0){u(a),s==null||s.init(n.getState());return}u(a[d]),s==null||s.init(B(_.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return z(t.state,a=>{if(d===void 0){u(a);return}JSON.stringify(n.getState())!==JSON.stringify(a[d])&&u(a[d])});case"IMPORT_STATE":{const{nextLiftedState:a}=t.payload,c=(f=a.computedStates.slice(-1)[0])==null?void 0:f.state;if(!c)return;u(d===void 0?c:c[d]),s==null||s.send(null,a);return}case"PAUSE_RECORDING":return h=!h}return}}),b},We=Ve,z=(o,e)=>{let r;try{r=JSON.parse(o)}catch(i){console.error("[zustand devtools middleware] Could not parse the received json",i)}r!==void 0&&e(r)};function Xe(o,e){let r;try{r=o()}catch{return}return{getItem:n=>{var l;const S=_=>_===null?null:JSON.parse(_,void 0),d=(l=r.getItem(n))!=null?l:null;return d instanceof Promise?d.then(S):S(d)},setItem:(n,l)=>r.setItem(n,JSON.stringify(l,void 0)),removeItem:n=>r.removeItem(n)}}const V=o=>e=>{try{const r=o(e);return r instanceof Promise?r:{then(i){return V(i)(r)},catch(i){return this}}}catch(r){return{then(i){return this},catch(i){return V(i)(r)}}}},Ye=(o,e)=>(r,i,n)=>{let l={storage:Xe(()=>localStorage),partialize:t=>t,version:0,merge:(t,f)=>({...f,...t}),...e},S=!1;const d=new Set,_=new Set;let v=l.storage;if(!v)return o((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),r(...t)},i,n);const s=()=>{const t=l.partialize({...i()});return v.setItem(l.name,{state:t,version:l.version})},p=n.setState;n.setState=(t,f)=>{p(t,f),s()};const h=o((...t)=>{r(...t),s()},i,n);n.getInitialState=()=>h;let u;const b=()=>{var t,f;if(!v)return;S=!1,d.forEach(c=>{var y;return c((y=i())!=null?y:h)});const a=((f=l.onRehydrateStorage)==null?void 0:f.call(l,(t=i())!=null?t:h))||void 0;return V(v.getItem.bind(v))(l.name).then(c=>{if(c)if(typeof c.version=="number"&&c.version!==l.version){if(l.migrate){const y=l.migrate(c.state,c.version);return y instanceof Promise?y.then(j=>[!0,j]):[!0,y]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,c.state];return[!1,void 0]}).then(c=>{var y;const[j,U]=c;if(u=l.merge(U,(y=i())!=null?y:h),r(u,!0),j)return s()}).then(()=>{a==null||a(u,void 0),u=i(),S=!0,_.forEach(c=>c(u))}).catch(c=>{a==null||a(void 0,c)})};return n.persist={setOptions:t=>{l={...l,...t},t.storage&&(v=t.storage)},clearStorage:()=>{v==null||v.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>b(),hasHydrated:()=>S,onHydrate:t=>(d.add(t),()=>{d.delete(t)}),onFinishHydration:t=>(_.add(t),()=>{_.delete(t)})},l.skipHydration||b(),u||h},Qe=Ye,Ze=o=>({session:null,setSession:e=>o({session:e},!1,"setSession"),resetSession:()=>o({session:null},!1,"resetSession")}),et=Qe(Ze,{name:"session"}),tt=We(et,{name:"Session Service"}),W=Fe()(tt);function nt(o){return $e(W,o)}var X={exports:{}},J={exports:{}},fe;function rt(){return fe||(fe=1,function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIntersection",{enumerable:!0,get:function(){return v}});const r=ye(),i=Re(),n=typeof IntersectionObserver=="function",l=new Map,S=[];function d(s){const p={root:s.root||null,margin:s.rootMargin||""},h=S.find(f=>f.root===p.root&&f.margin===p.margin);let u;if(h&&(u=l.get(h),u))return u;const b=new Map,t=new IntersectionObserver(f=>{f.forEach(a=>{const c=b.get(a.target),y=a.isIntersecting||a.intersectionRatio>0;c&&y&&c(y)})},s);return u={id:p,observer:t,elements:b},S.push(p),l.set(p,u),u}function _(s,p,h){const{id:u,observer:b,elements:t}=d(h);return t.set(s,p),b.observe(s),function(){if(t.delete(s),b.unobserve(s),t.size===0){b.disconnect(),l.delete(u);const a=S.findIndex(c=>c.root===u.root&&c.margin===u.margin);a>-1&&S.splice(a,1)}}}function v(s){let{rootRef:p,rootMargin:h,disabled:u}=s;const b=u||!n,[t,f]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)(j=>{a.current=j},[]);(0,r.useEffect)(()=>{if(n){if(b||t)return;const j=a.current;if(j&&j.tagName)return _(j,g=>g&&f(g),{root:p==null?void 0:p.current,rootMargin:h})}else if(!t){const j=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(j)}},[b,h,p,t,a.current]);const y=(0,r.useCallback)(()=>{f(!1)},[]);return[c,t,y]}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),o.exports=e.default)}(J,J.exports)),J.exports}var F={exports:{}},de;function ot(){return de||(de=1,function(o,e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getDomainLocale",{enumerable:!0,get:function(){return r}}),Ee();function r(i,n,l,S){return!1}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),o.exports=e.default)}(F,F.exports)),F.exports}(function(o,e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return U}});const r=qe,i=P,n=r._(ye()),l=Oe(),S=je(),d=ke(),_=Ce(),v=xe(),s=Ae,p=rt(),h=ot(),u=we(),b=Ne(),t=new Set;function f(g,x,k,E){if(!(typeof window>"u")&&(0,S.isLocalURL)(x)){if(!E.bypassPrefetchedCheck){const L=typeof E.locale<"u"?E.locale:"locale"in g?g.locale:void 0,w=x+"%"+k+"%"+L;if(t.has(w))return;t.add(w)}g.prefetch(x,k,E).catch(L=>{})}}function a(g){const k=g.currentTarget.getAttribute("target");return k&&k!=="_self"||g.metaKey||g.ctrlKey||g.shiftKey||g.altKey||g.nativeEvent&&g.nativeEvent.which===2}function c(g,x,k,E,L,w,q,K){const{nodeName:$}=g.currentTarget;if($.toUpperCase()==="A"&&(a(g)||!(0,S.isLocalURL)(k)))return;g.preventDefault(),(()=>{const A=q??!0;"beforePopState"in x?x[L?"replace":"push"](k,E,{shallow:w,locale:K,scroll:A}):x[L?"replace":"push"](E||k,{scroll:A})})()}function y(g){return typeof g=="string"?g:(0,d.formatUrl)(g)}const U=n.default.forwardRef(function(x,k){let E;const{href:L,as:w,children:q,prefetch:K=null,passHref:$,replace:Q,shallow:Z,scroll:A,locale:M,onClick:ee,onMouseEnter:te,onTouchStart:ne,legacyBehavior:C=!1,...be}=x;E=q,C&&(typeof E=="string"||typeof E=="number")&&(E=(0,i.jsx)("a",{children:E}));const m=n.default.useContext(s.RouterContext),re=K!==!1,{href:T,as:O}=n.default.useMemo(()=>{if(!m){const le=y(L);return{href:le,as:w?y(w):le}}const[R,D]=(0,l.resolveHref)(m,L,!0);return{href:R,as:w?(0,l.resolveHref)(m,w):D||R}},[m,L,w]),oe=n.default.useRef(T),se=n.default.useRef(O);let I;C&&(I=n.default.Children.only(E));const Se=C?I&&typeof I=="object"&&I.ref:k,[ie,ae,ce]=(0,p.useIntersection)({rootMargin:"200px"}),_e=n.default.useCallback(R=>{(se.current!==O||oe.current!==T)&&(ce(),se.current=O,oe.current=T),ie(R)},[O,T,ce,ie]),Ie=(0,b.useMergedRef)(_e,Se);n.default.useEffect(()=>{m&&(!ae||!re||f(m,T,O,{locale:M}))},[O,T,ae,M,re,m==null?void 0:m.locale,m]);const H={ref:Ie,onClick(R){!C&&typeof ee=="function"&&ee(R),C&&I.props&&typeof I.props.onClick=="function"&&I.props.onClick(R),m&&(R.defaultPrevented||c(R,m,T,O,Q,Z,A,M))},onMouseEnter(R){!C&&typeof te=="function"&&te(R),C&&I.props&&typeof I.props.onMouseEnter=="function"&&I.props.onMouseEnter(R),m&&f(m,T,O,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(D){!C&&typeof ne=="function"&&ne(D),C&&I.props&&typeof I.props.onTouchStart=="function"&&I.props.onTouchStart(D),m&&f(m,T,O,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,_.isAbsoluteUrl)(O))H.href=O;else if(!C||$||I.type==="a"&&!("href"in I.props)){const R=typeof M<"u"?M:m==null?void 0:m.locale,D=(m==null?void 0:m.isLocaleDomain)&&(0,h.getDomainLocale)(O,R,m==null?void 0:m.locales,m==null?void 0:m.domainLocales);H.href=D||(0,u.addBasePath)((0,v.addLocale)(O,R,m==null?void 0:m.defaultLocale))}return C?n.default.cloneElement(I,H):(0,i.jsx)("a",{...be,...H,children:E})});(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),o.exports=e.default)})(X,X.exports);var st=X.exports,it=st;const Y=De(it);function at(){const o=nt(e=>!!e.session);return P.jsxs("header",{className:"flex justify-between px-8 py-4 border-b border-b-border",children:[P.jsxs("span",{className:"flex items-center gap-x-8",children:[P.jsx(Y,{href:"/",children:P.jsx(Ue,{className:"invert",src:"/vercel.svg",alt:"",width:32,height:32})}),[{href:"/",text:"홈"},{href:"/recipes",text:"레시피"},{href:"/milfap",text:"밀프랩"},{href:"/recipes/disease",text:"질환별 식단"}].map(({href:e,text:r})=>P.jsx(ct,{href:e,children:r},e))]}),P.jsx("span",{children:P.jsx(He,{asChild:!0,children:P.jsx(Y,{href:o?"/auth/logout":"/auth/login",children:o?"로그아웃":"로그인"})})})]})}function ct({href:o,children:e}){const i=Pe().pathname===o;return P.jsx(Y,{href:o,className:Be("px-1","text-sm font-medium","transition-colors","border-b-2 border-transparent",{"text-foreground border-b-foreground":i,"text-muted-foreground hover:text-foreground hover:border-b-foreground":!i}),"aria-current":i?"page":void 0,children:e})}const St={title:"widgets/Header",component:at,parameters:{layout:"fullscreen",nextjs:{router:{pathname:"/recipes"}}},tags:["autodocs"]},N={beforeEach:()=>{Le().push.mockImplementation(o=>{o==="/auth/login"?W.setState({session:{email:"test@test.com",name:"test"}}):o==="/auth/logout"&&W.setState({session:null})})},play:async({canvasElement:o})=>{const r=Te(o).getByRole("banner");await Me(r).toBeInTheDocument()}};var pe,me,he,ve,ge;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  beforeEach: () => {
    getRouter().push.mockImplementation(href => {
      if (href === '/auth/login') {
        sessionStore.setState({
          session: {
            email: 'test@test.com',
            name: 'test'
          }
        });
      } else if (href === '/auth/logout') {
        sessionStore.setState({
          session: null
        });
      }
    });
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header).toBeInTheDocument();
  }
}`,...(he=(me=N.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:`기본 헤더 컴포넌트입니다.<br />
로그인하지 않은 상태에서는 로그인 버튼이 표시됩니다.`,...(ge=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:ge.description}}};const _t=["Default"];export{N as Default,_t as __namedExportsOrder,St as default};
