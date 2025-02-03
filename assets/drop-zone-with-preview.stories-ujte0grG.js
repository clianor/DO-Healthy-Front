import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as m}from"./index-Z5tTm0QU.js";import{r as P}from"./index-B1GeB8Nz.js";import{D as c}from"./drop-zone-with-preview.ui-8ZOOSvD3.js";import"./image-ChyQtvS6.js";import"./image-context-Cqjqifin.js";import"./index-DyFja7G4.js";import"./button.ui-CCnMz6ch.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./drop-zone.ui-DQRe2tdh.js";import"./tslib.es6-BUas5LQb.js";import"./createLucideIcon-B2mkThYZ.js";import"./x-DuZhaump.js";const G={title:"shared/DropZoneWithPreview",component:c,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>t.jsx("div",{className:"w-60",children:t.jsx(c,{})}),play:async({canvasElement:e})=>{const a=l(e).getByText("파일을 드래그하거나 클릭하여 업로드하세요");await m(a).toBeInTheDocument()}},o={render:()=>t.jsx("div",{className:"w-60",children:t.jsx(c,{defaultValue:"https://picsum.photos/200",onValueChange:e=>{console.log("Value changed:",e)}})}),play:async({canvasElement:e})=>{const a=l(e).getByAltText("이미지 미리보기");await m(a).toBeInTheDocument()}},n={render:function(){const[i,a]=P.useState("https://picsum.photos/200");return t.jsxs("div",{className:"w-60",children:[t.jsx(c,{value:i,onValueChange:a}),t.jsx("div",{className:"mt-4 flex justify-end",children:t.jsx("button",{type:"button",onClick:()=>a(null),className:"text-sm text-muted-foreground hover:text-foreground",children:"외부에서 초기화"})})]})},play:async({canvasElement:e})=>{const a=l(e).getByAltText("이미지 미리보기");await m(a).toBeInTheDocument()}},r={args:{disabled:!0},render:e=>t.jsx("div",{className:"w-60",children:t.jsx(c,{...e})})};var p,d,u,v,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-60">
      <DropZoneWithPreview />
    </div>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const dropzone = canvas.getByText('파일을 드래그하거나 클릭하여 업로드하세요');
    await expect(dropzone).toBeInTheDocument();
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:`기본적인 이미지 드롭존 컴포넌트입니다.
이미지를 드래그 앤 드롭하거나 클릭하여 업로드할 수 있으며,
업로드된 이미지는 미리보기로 표시됩니다.`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.description}}};var g,x,y,w,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="w-60">
      <DropZoneWithPreview defaultValue="https://picsum.photos/200" onValueChange={value => {
      console.log('Value changed:', value);
    }} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByAltText('이미지 미리보기');
    await expect(image).toBeInTheDocument();
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Uncontrolled 모드에서 초기값을 설정한 드롭존입니다.",...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};var D,j,C,V,T;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: function ControlledComponent() {
    const [value, setValue] = useState<string | File | null>('https://picsum.photos/200');
    return <div className="w-60">
        <DropZoneWithPreview value={value} onValueChange={setValue} />
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={() => setValue(null)} className="text-sm text-muted-foreground hover:text-foreground">
            외부에서 초기화
          </button>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByAltText('이미지 미리보기');
    await expect(image).toBeInTheDocument();
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source},description:{story:`Controlled 모드로 동작하는 드롭존입니다.
상태 변경을 직접 제어할 수 있습니다.`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.description}}};var B,N,E,b,W;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: (args: React.ComponentProps<typeof DropZoneWithPreview>) => <div className="w-60">
      <DropZoneWithPreview {...args} />
    </div>
}`,...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:"비활성화된 드롭존입니다.",...(W=(b=r.parameters)==null?void 0:b.docs)==null?void 0:W.description}}};const J=["Default","WithDefaultValue","Controlled","Disabled"];export{n as Controlled,s as Default,r as Disabled,o as WithDefaultValue,J as __namedExportsOrder,G as default};
