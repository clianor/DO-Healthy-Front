import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{u as n}from"./index.esm-DgZpH6ar.js";import{B as t}from"./button.ui-CCnMz6ch.js";import{I as a}from"./input.ui-Croae_oO.js";import{S as s}from"./search-CdCDIYHG.js";function f(){const{register:r,handleSubmit:i}=n({mode:"onSubmit"}),o=m=>{window.alert(JSON.stringify(m))};return e.jsxs("section",{"aria-label":"레시피 검색",className:"flex flex-col items-center px-8 py-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-accent-foreground md:text-4xl",children:"건강한 삶을 위한 맞춤형 레시피"}),e.jsx("p",{className:"mt-4 text-sm font-medium text-muted-foreground md:text-xl",children:"당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요"}),e.jsxs("form",{className:"mx-8 mt-8 flex w-full max-w-3xl items-center gap-2 rounded-md border border-input p-1 shadow-sm focus-within:ring-1 focus-within:ring-ring",onSubmit:i(o),children:[e.jsx(a,{placeholder:"재료, 질환, 식단을 검색해보세요",className:"h-8 border-none text-xs shadow-none focus-visible:ring-0 md:h-12",autoComplete:"off",...r("search",{required:!0})}),e.jsxs(t,{type:"submit",size:"lg",className:"hidden h-12 md:flex",children:[e.jsx(s,{"aria-hidden":!0}),"검색"]}),e.jsxs(t,{type:"submit",size:"sm",className:"flex h-8 md:hidden",children:[e.jsx(s,{"aria-hidden":!0}),"검색"]})]})]})}export{f as H};
