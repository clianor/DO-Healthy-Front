import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as m,u as p}from"./index-Z5tTm0QU.js";import{B as u}from"./button.ui-CCnMz6ch.js";import{S as i,a as d,b as S,c as x,d as g,e as v}from"./sheet.ui-DV75tfE7.js";import"./index-BAi9YrL4.js";import"./index-B1GeB8Nz.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./index-DzJ_GqfG.js";import"./index-BJJGc8wt.js";import"./index-Bi9wok0D.js";import"./index-DyFja7G4.js";import"./tslib.es6-BUas5LQb.js";import"./x-DuZhaump.js";import"./createLucideIcon-B2mkThYZ.js";const _={title:"shared/Sheet",component:i,tags:["autodocs"]},t={render:()=>e.jsxs(i,{children:[e.jsx(d,{asChild:!0,children:e.jsx(u,{variant:"outline",children:"시트 열기"})}),e.jsx(S,{children:e.jsxs(x,{children:[e.jsx(g,{children:"시트 제목"}),e.jsx(v,{children:"이것은 시트 컴포넌트의 설명입니다. 오른쪽에서 슬라이드되어 나타나는 패널을 표시합니다."})]})})]}),play:async({canvasElement:s})=>{const a=l(s),c=a.queryByRole("dialog");await m(c).not.toBeInTheDocument();const h=a.getByRole("button",{name:"시트 열기"});await p.click(h)}};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">시트 열기</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>시트 제목</SheetTitle>
          <SheetDescription>
            이것은 시트 컴포넌트의 설명입니다. 오른쪽에서 슬라이드되어 나타나는 패널을 표시합니다.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 시트가 처음에는 보이지 않는지 확인
    const initialSheet = canvas.queryByRole('dialog');
    await expect(initialSheet).not.toBeInTheDocument();

    // 버튼 클릭
    const button = canvas.getByRole('button', {
      name: '시트 열기'
    });
    await userEvent.click(button);
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,_ as default};
