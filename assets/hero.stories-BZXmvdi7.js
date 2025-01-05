import{w as j,e as b}from"./index-Z5tTm0QU.js";import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{B as v}from"./button.ui-Dyp5MyY_.js";import{I as N}from"./input.ui-CAkoe_sF.js";import{r as c}from"./index-SZDuJNPZ.js";import"./index-D5lFlNIX.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:i="",children:n,iconNode:h,...x},g)=>c.createElement("svg",{ref:g,...E,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:f("lucide",i),...x},[...h.map(([w,y])=>c.createElement(w,y)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const r=c.forwardRef(({className:s,...i},n)=>c.createElement(k,{ref:n,iconNode:t,className:f(`lucide-${B(e)}`,s),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=C("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function R(){return o.jsxs("section",{className:"flex flex-col items-center py-8",children:[o.jsx("h1",{className:"text-4xl font-bold text-accent-foreground",children:"건강한 삶을 위한 맞춤형 레시피"}),o.jsx("p",{className:"mt-4 text-xl font-medium text-muted-foreground",children:"당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요"}),o.jsxs("form",{className:"my-8 flex w-full max-w-3xl items-center gap-2 rounded-md border border-input p-1 shadow-sm focus-within:ring-1 focus-within:ring-ring",children:[o.jsx(N,{placeholder:"재료, 질환, 식단을 검색해보세요",className:"h-12 border-none shadow-none focus-visible:ring-0"}),o.jsxs(v,{type:"submit",size:"lg",className:"h-12",children:[o.jsx(I,{className:"size-4"}),"검색"]})]})]})}const T={title:"widgets/Hero",component:R,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={play:async({canvasElement:e})=>{const r=j(e).getByRole("region");await b(r).toBeInTheDocument()}};var m,l,d,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hero = canvas.getByRole('region');
    await expect(hero).toBeInTheDocument();
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"기본 히어로 컴포넌트입니다.",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,T as default};
