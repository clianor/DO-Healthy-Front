import{w as b,e as r,u as l}from"./index-Z5tTm0QU.js";import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{b as I}from"./index.esm-D_kG5lJZ.js";import{B as T}from"./button.ui-Dyp5MyY_.js";import{I as j}from"./input.ui-CAkoe_sF.js";import{r as m}from"./index-SZDuJNPZ.js";import"./index-D5lFlNIX.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:c="",children:a,iconNode:u,...g},y)=>m.createElement("svg",{ref:y,...E,width:e,height:e,stroke:t,strokeWidth:o?Number(n)*24/Number(e):n,className:f("lucide",c),...g},[...u.map(([B,v])=>m.createElement(B,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=(t,e)=>{const n=m.forwardRef(({className:o,...c},a)=>m.createElement(N,{ref:a,iconNode:e,className:f(`lucide-${D(t)}`,o),...c}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=k("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function R(){const{register:t,handleSubmit:e}=I({mode:"onSubmit"}),n=o=>{window.alert(JSON.stringify(o))};return s.jsxs("section",{"aria-label":"레시피 검색",className:"flex flex-col items-center py-8",children:[s.jsx("h1",{className:"text-4xl font-bold text-accent-foreground",children:"건강한 삶을 위한 맞춤형 레시피"}),s.jsx("p",{className:"mt-4 text-xl font-medium text-muted-foreground",children:"당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요"}),s.jsxs("form",{className:"my-8 flex w-full max-w-3xl items-center gap-2 rounded-md border border-input p-1 shadow-sm focus-within:ring-1 focus-within:ring-ring",onSubmit:e(n),children:[s.jsx(j,{placeholder:"재료, 질환, 식단을 검색해보세요",className:"h-12 border-none shadow-none focus-visible:ring-0",autoComplete:"off",...t("search",{required:!0})}),s.jsxs(T,{type:"submit",size:"lg",className:"h-12",children:[s.jsx(C,{className:"size-4"}),"검색"]})]})]})}const z={title:"widgets/Hero",component:R,parameters:{layout:"fullscreen"},tags:["autodocs"]},i={play:async({canvasElement:t})=>{const e=b(t),n=e.getByRole("region",{name:"레시피 검색"});await r(n).toBeInTheDocument();const o=e.getByRole("heading",{level:1});await r(o).toBeInTheDocument(),await r(o).toHaveTextContent("건강한 삶을 위한 맞춤형 레시피");const c=e.getByText("당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요");await r(c).toBeInTheDocument();const a=e.getByPlaceholderText("재료, 질환, 식단을 검색해보세요");await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("autocomplete","off");const u=e.getByRole("button",{name:"검색"});await r(u).toBeInTheDocument(),await l.type(a,"당뇨병"),await l.click(u)}};var p,d,h,x,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hero = canvas.getByRole('region', {
      name: '레시피 검색'
    });
    await expect(hero).toBeInTheDocument();
    const heading = canvas.getByRole('heading', {
      level: 1
    });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('건강한 삶을 위한 맞춤형 레시피');
    const description = canvas.getByText('당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요');
    await expect(description).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText('재료, 질환, 식단을 검색해보세요');
    await expect(searchInput).toBeInTheDocument();
    await expect(searchInput).toHaveAttribute('autocomplete', 'off');
    const searchButton = canvas.getByRole('button', {
      name: '검색'
    });
    await expect(searchButton).toBeInTheDocument();

    // 검색어 입력 및 제출 테스트
    await userEvent.type(searchInput, '당뇨병');
    await userEvent.click(searchButton);
  }
}`,...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:"기본 히어로 컴포넌트입니다.",...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,z as default};
