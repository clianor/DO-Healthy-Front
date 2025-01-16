import{w as d,e,u as s}from"./index-Z5tTm0QU.js";import{H as w}from"./hero.ui-Bjupupzh.js";import"./jsx-runtime-BjG_zV1W.js";import"./index.esm-DgZpH6ar.js";import"./index-B1GeB8Nz.js";import"./button.ui-CCnMz6ch.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./input.ui-DCJB7S0U.js";import"./createLucideIcon-B2mkThYZ.js";const b={title:"widgets/Hero",component:w,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={play:async({canvasElement:h})=>{const t=d(h),l=t.getByRole("region",{name:"레시피 검색"});await e(l).toBeInTheDocument();const o=t.getByRole("heading",{level:1});await e(o).toBeInTheDocument(),await e(o).toHaveTextContent("건강한 삶을 위한 맞춤형 레시피");const B=t.getByText("당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요");await e(B).toBeInTheDocument();const a=t.getByPlaceholderText("재료, 질환, 식단을 검색해보세요");await e(a).toBeInTheDocument(),await e(a).toHaveAttribute("autocomplete","off");const c=t.getByRole("button",{name:"검색"});await e(c).toBeInTheDocument(),await s.type(a,"당뇨병"),await s.click(c)}};var r,i,p,m,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source},description:{story:"기본 히어로 컴포넌트입니다.",...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,b as default};
