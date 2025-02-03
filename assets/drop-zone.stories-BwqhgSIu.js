import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{w as D,e as f}from"./index-Z5tTm0QU.js";import{D as u}from"./drop-zone.ui-DQRe2tdh.js";import"./index-B1GeB8Nz.js";import"./tslib.es6-BUas5LQb.js";import"./cn-CytzSlOG.js";import"./createLucideIcon-B2mkThYZ.js";const B={title:"shared/DropZone",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{description:"드롭존의 비활성화 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}},accept:{description:"허용되는 파일 형식을 지정합니다.",control:"text",table:{defaultValue:{summary:"image/*"}}}}},e={render:()=>r.jsx("div",{className:"w-96 max-w-sm",children:r.jsx(u,{})}),play:async({canvasElement:x})=>{const y=D(x).getByText("DropZone");await f(y).toBeInTheDocument()}},a={args:{disabled:!0}};var s,o,t,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="w-96 max-w-sm">
      <DropZone />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dropzone = canvas.getByText('DropZone');
    await expect(dropzone).toBeInTheDocument();
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source},description:{story:`기본적인 드롭존 컴포넌트입니다.
파일을 드래그 앤 드롭하거나 클릭하여 업로드할 수 있습니다.`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.description}}};var p,i,m,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:"비활성화된 드롭존입니다.",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};const E=["Default","Disabled"];export{e as Default,a as Disabled,E as __namedExportsOrder,B as default};
