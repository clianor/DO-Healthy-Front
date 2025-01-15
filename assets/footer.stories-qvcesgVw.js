import{w as m,e as t}from"./index-Z5tTm0QU.js";import{F as s}from"./footer.ui-C0P6sibN.js";import"./jsx-runtime-BjG_zV1W.js";import"./image-ChyQtvS6.js";import"./index-B1GeB8Nz.js";import"./image-context-Cqjqifin.js";import"./index-DyFja7G4.js";import"./link-Bg4X9uzR.js";import"./add-base-path-RabrT8BY.js";import"./button.ui-CCnMz6ch.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./container.ui-CDt7v4Er.js";const d={title:"widgets/Footer",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{},play:async({canvasElement:r})=>{const e=m(r);await t(e.getByAltText("로고")).toBeInTheDocument(),await t(e.getByText("App Store")).toBeInTheDocument(),await t(e.getByText("Google Play")).toBeInTheDocument(),await t(e.getByText("레시피 검색")).toBeInTheDocument(),await t(e.getByText("밀프랩")).toBeInTheDocument(),await t(e.getByText("질환별 식단")).toBeInTheDocument(),await t(e.getByText("자주묻는질문")).toBeInTheDocument(),await t(e.getByText("1:1 문의")).toBeInTheDocument(),await t(e.getByText("공지사항")).toBeInTheDocument(),await t(e.getByText("© 2024 Do-Healthy. All rights reserved.")).toBeInTheDocument()}};var n,o,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,d as default};
