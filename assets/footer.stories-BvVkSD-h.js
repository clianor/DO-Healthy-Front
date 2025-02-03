import{w as m,e as a}from"./index-Z5tTm0QU.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{n as s}from"./image-ChyQtvS6.js";import{L as o}from"./link-Bg4X9uzR.js";import{B as c}from"./button.ui-CCnMz6ch.js";import{C as d}from"./container.ui-yFKm1zXC.js";import"./index-B1GeB8Nz.js";import"./image-context-Cqjqifin.js";import"./index-DyFja7G4.js";import"./add-base-path-RabrT8BY.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";function h(){return e.jsx(d,{children:e.jsxs("footer",{className:"divide-y",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-y-6 pb-8 pt-12 text-base md:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("div",{className:"hidden lg:block",children:[e.jsx(o,{href:"/","aria-label":"홈으로 이동",children:e.jsx(s,{className:"invert",src:"/vercel.svg",alt:"로고",width:32,height:32})}),e.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:"건강한 삶을 위한 맞춤형 레시피 플랫폼"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-accent-foreground",children:"서비스"}),e.jsxs("ul",{className:"mt-4 flex flex-col gap-y-2 text-muted-foreground",children:[e.jsx("li",{children:"레시피 검색"}),e.jsx("li",{children:"밀프랩"}),e.jsx("li",{children:"질환별 식단"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-accent-foreground",children:"고객지원"}),e.jsxs("ul",{className:"mt-4 flex flex-col gap-y-2 text-muted-foreground",children:[e.jsx("li",{children:"자주묻는질문"}),e.jsx("li",{children:"1:1 문의"}),e.jsx("li",{children:"공지사항"})]})]}),e.jsxs("div",{className:"col-span-full flex flex-col md:col-span-1",children:[e.jsx("h3",{className:"text-accent-foreground",children:"다운로드"}),e.jsxs("ul",{className:"mt-4 flex flex-col gap-y-2",children:[e.jsx("li",{children:e.jsx(o,{href:"/",children:e.jsxs(c,{className:"w-full",onClick:()=>{window.alert("미구현 기능")},children:[e.jsx(s,{src:"/assets/svgs/app-store.svg",alt:"App Store",width:12,height:16}),"App Store"]})})}),e.jsx("li",{children:e.jsx(o,{href:"/",children:e.jsxs(c,{className:"w-full",onClick:()=>{window.alert("미구현 기능")},children:[e.jsx(s,{src:"/assets/svgs/google-store.svg",alt:"Google Play",width:12,height:12}),"Google Play"]})})})]})]})]}),e.jsx("div",{className:"flex justify-center py-8 text-muted-foreground",children:"© 2024 Do-Healthy. All rights reserved."})]})})}const A={title:"widgets/Footer",component:h,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{},play:async({canvasElement:x})=>{const t=m(x);await a(t.getByAltText("로고")).toBeInTheDocument(),await a(t.getByText("App Store")).toBeInTheDocument(),await a(t.getByText("Google Play")).toBeInTheDocument(),await a(t.getByText("레시피 검색")).toBeInTheDocument(),await a(t.getByText("밀프랩")).toBeInTheDocument(),await a(t.getByText("질환별 식단")).toBeInTheDocument(),await a(t.getByText("자주묻는질문")).toBeInTheDocument(),await a(t.getByText("1:1 문의")).toBeInTheDocument(),await a(t.getByText("공지사항")).toBeInTheDocument(),await a(t.getByText("© 2024 Do-Healthy. All rights reserved.")).toBeInTheDocument()}};var l,r,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 로고 이미지 확인
    await expect(canvas.getByAltText('로고')).toBeInTheDocument();

    // 다운로드 버튼 확인
    await expect(canvas.getByText('App Store')).toBeInTheDocument();
    await expect(canvas.getByText('Google Play')).toBeInTheDocument();

    // 메뉴 항목 확인
    await expect(canvas.getByText('레시피 검색')).toBeInTheDocument();
    await expect(canvas.getByText('밀프랩')).toBeInTheDocument();
    await expect(canvas.getByText('질환별 식단')).toBeInTheDocument();

    // 고객지원 항목 확인
    await expect(canvas.getByText('자주묻는질문')).toBeInTheDocument();
    await expect(canvas.getByText('1:1 문의')).toBeInTheDocument();
    await expect(canvas.getByText('공지사항')).toBeInTheDocument();

    // 저작권 텍스트 확인
    await expect(canvas.getByText('© 2024 Do-Healthy. All rights reserved.')).toBeInTheDocument();
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,A as default};
