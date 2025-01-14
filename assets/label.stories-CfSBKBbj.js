import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{w as N,e as D}from"./index-Z5tTm0QU.js";import{L as j}from"./label.ui-J_JczIqu.js";import"./index-B1GeB8Nz.js";import"./index-Bi9wok0D.js";import"./index-DyFja7G4.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const R={title:"shared/Label",component:j,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"라벨"},argTypes:{children:{description:"라벨 내부에 들어갈 콘텐츠를 지정합니다.",control:"text"},className:{description:"라벨에 적용할 추가 클래스를 지정합니다.",control:"text"}}},e={play:async({canvasElement:t})=>{const f=N(t).getByText(/라벨/i);await D(f).toBeInTheDocument()}},s={args:{className:"text-blue-500 font-bold",children:"커스텀 라벨"}},a={args:{children:"비활성화된 라벨"},decorators:[t=>r.jsxs("div",{className:"peer-disabled:opacity-70",children:[r.jsx("input",{type:"text",disabled:!0,className:"peer"}),r.jsx(t,{})]})]};var o,c,n,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(/라벨/i);
    await expect(label).toBeInTheDocument();
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source},description:{story:"기본 라벨입니다.",...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var p,l,m,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    className: 'text-blue-500 font-bold',
    children: '커스텀 라벨'
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"커스텀 클래스가 적용된 라벨입니다.",...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var y,b,g,h,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: '비활성화된 라벨'
  },
  decorators: [Story => <div className="peer-disabled:opacity-70">
        <input type="text" disabled className="peer" />
        <Story />
      </div>]
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"disabled 상태의 라벨입니다.",...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};const k=["Default","CustomClass","Disabled"];export{s as CustomClass,e as Default,a as Disabled,k as __namedExportsOrder,R as default};
