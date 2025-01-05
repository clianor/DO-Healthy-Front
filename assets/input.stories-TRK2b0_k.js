import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{w as p,e as t,u as m}from"./index-Z5tTm0QU.js";import{B as S}from"./button.ui-CNuFdkiu.js";import{L as W}from"./label.ui-CVV9Sblr.js";import{I as u}from"./input.ui-CAkoe_sF.js";import"./index-BU-tpEox.js";import"./index-B1NDlYI3.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./index-B1IQl1Nj.js";import"./index-BATiNE4h.js";const K={title:"shared/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"입력해주세요"},argTypes:{type:{description:"입력 필드의 타입을 지정합니다.",options:["text","password","email","number","tel"],control:{type:"radio"},table:{defaultValue:{summary:"text"}}},placeholder:{description:"입력 필드의 플레이스홀더를 지정합니다.",control:"text"},disabled:{description:"입력 필드의 비활성화 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}}}},o={play:async({canvasElement:n})=>{const e=p(n).getByPlaceholderText("입력해주세요");await t(e).toBeInTheDocument(),await m.type(e,"안녕하세요"),await t(e).toHaveValue("안녕하세요")}},r={args:{disabled:!0,placeholder:"비활성화된 입력 필드"}},c={render:()=>s.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[s.jsx(W,{htmlFor:"email",children:"이메일"}),s.jsx(u,{type:"email",id:"email",placeholder:"이메일을 입력해주세요"})]}),play:async({canvasElement:n})=>{const a=p(n),e=a.getByPlaceholderText("이메일을 입력해주세요"),l=a.getByText("이메일");await t(e).toBeInTheDocument(),await t(l).toBeInTheDocument(),await m.type(e,"test@example.com"),await t(e).toHaveValue("test@example.com")}},i={render:()=>s.jsxs("div",{className:"flex w-full max-w-sm items-center gap-2",children:[s.jsx(u,{placeholder:"검색어를 입력해주세요"}),s.jsx(S,{type:"submit",size:"sm",children:"검색"})]}),play:async({canvasElement:n})=>{const a=p(n),e=a.getByPlaceholderText("검색어를 입력해주세요"),l=a.getByRole("button",{name:"검색"});await t(e).toBeInTheDocument(),await t(l).toBeInTheDocument(),await m.type(e,"검색어"),await t(e).toHaveValue("검색어")}};var d,y,x,h,w;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, '안녕하세요');
    await expect(input).toHaveValue('안녕하세요');
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"기본 입력 필드입니다.",...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};var v,B,g,b,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '비활성화된 입력 필드'
  }
}`,...(g=(B=r.parameters)==null?void 0:B.docs)==null?void 0:g.source},description:{story:"비활성화된 입력 필드입니다.",...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var f,I,D,E,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="이메일을 입력해주세요" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('이메일을 입력해주세요');
    const label = canvas.getByText('이메일');
    await expect(input).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"라벨이 있는 입력 필드입니다.",...(j=(E=c.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var V,H,L,P,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-sm items-center gap-2">
      <Input placeholder="검색어를 입력해주세요" />
      <Button type="submit" size="sm">
        검색
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('검색어를 입력해주세요');
    const button = canvas.getByRole('button', {
      name: '검색'
    });
    await expect(input).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
    await userEvent.type(input, '검색어');
    await expect(input).toHaveValue('검색어');
  }
}`,...(L=(H=i.parameters)==null?void 0:H.docs)==null?void 0:L.source},description:{story:"버튼이 있는 입력 필드입니다.",...(N=(P=i.parameters)==null?void 0:P.docs)==null?void 0:N.description}}};const M=["Default","Disabled","WithLabel","WithButton"];export{o as Default,r as Disabled,i as WithButton,c as WithLabel,M as __namedExportsOrder,K as default};
