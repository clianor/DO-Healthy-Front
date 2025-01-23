import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{w as n,e as s,u as r}from"./index-Z5tTm0QU.js";import{r as Y}from"./index-B1GeB8Nz.js";import{B as X}from"./button.ui-CCnMz6ch.js";import{L as Z}from"./label.ui-J_JczIqu.js";import{I as c}from"./input.ui-Croae_oO.js";import{S as $}from"./search-CdCDIYHG.js";import{c as y}from"./createLucideIcon-B2mkThYZ.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./index-Bi9wok0D.js";import"./index-DyFja7G4.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=y("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=y("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=y("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=y("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ve={title:"shared/Input",component:c,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"입력해주세요"},argTypes:{type:{description:"입력 필드의 타입을 지정합니다.",options:["text","password","email","number","tel"],control:{type:"radio"},table:{defaultValue:{summary:"text"}}},placeholder:{description:"입력 필드의 플레이스홀더를 지정합니다.",control:"text"},disabled:{description:"입력 필드의 비활성화 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}}}},i={play:async({canvasElement:a})=>{const e=n(a).getByPlaceholderText("입력해주세요");await s(e).toBeInTheDocument(),await r.type(e,"안녕하세요"),await s(e).toHaveValue("안녕하세요")}},l={args:{disabled:!0,placeholder:"비활성화된 입력 필드"}},p={render:()=>t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsx(Z,{htmlFor:"email",children:"이메일"}),t.jsx(c,{type:"email",id:"email",placeholder:"이메일을 입력해주세요"})]}),play:async({canvasElement:a})=>{const o=n(a),e=o.getByPlaceholderText("이메일을 입력해주세요"),x=o.getByText("이메일");await s(e).toBeInTheDocument(),await s(x).toBeInTheDocument(),await r.type(e,"test@example.com"),await s(e).toHaveValue("test@example.com")}},m={render:()=>t.jsxs("div",{className:"flex w-full max-w-sm items-center gap-2",children:[t.jsx(c,{placeholder:"검색어를 입력해주세요"}),t.jsx(X,{type:"submit",size:"sm",children:"검색"})]}),play:async({canvasElement:a})=>{const o=n(a),e=o.getByPlaceholderText("검색어를 입력해주세요"),x=o.getByRole("button",{name:"검색"});await s(e).toBeInTheDocument(),await s(x).toBeInTheDocument(),await r.type(e,"검색어"),await s(e).toHaveValue("검색어")}},d={render:()=>t.jsx("div",{className:"w-full max-w-sm",children:t.jsx(c,{placeholder:"검색어를 입력해주세요",leftSlot:t.jsx($,{className:"h-4 w-4 text-muted-foreground"})})}),play:async({canvasElement:a})=>{const e=n(a).getByPlaceholderText("검색어를 입력해주세요");await s(e).toBeInTheDocument(),await r.type(e,"검색어"),await s(e).toHaveValue("검색어")}};function oe(){const[a,o]=Y.useState("password");return t.jsx("div",{className:"w-full max-w-sm",children:t.jsx(c,{type:a,placeholder:"비밀번호를 입력해주세요",rightSlot:t.jsx(X,{variant:"ghost",className:"h-4 w-4 p-0 text-muted-foreground",onClick:()=>o(a==="password"?"text":"password"),children:a==="password"?t.jsx(se,{}):t.jsx(ae,{})})})})}const h={render:()=>t.jsx(oe,{}),play:async({canvasElement:a})=>{const e=n(a).getByPlaceholderText("비밀번호를 입력해주세요");await s(e).toBeInTheDocument(),await r.type(e,"password123"),await s(e).toHaveValue("password123")}},u={render:()=>t.jsx("div",{className:"w-full max-w-sm",children:t.jsx(c,{placeholder:"금액을 입력해주세요",leftSlot:t.jsx(te,{className:"h-4 w-4 text-muted-foreground"}),rightSlot:t.jsx(ee,{className:"h-4 w-4 text-muted-foreground"})})}),play:async({canvasElement:a})=>{const e=n(a).getByPlaceholderText("금액을 입력해주세요");await s(e).toBeInTheDocument(),await r.type(e,"10000"),await s(e).toHaveValue("10000")}};var w,v,g,f,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, '안녕하세요');
    await expect(input).toHaveValue('안녕하세요');
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"기본 입력 필드입니다.",...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.description}}};var T,S,b,E,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '비활성화된 입력 필드'
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:"비활성화된 입력 필드입니다.",...(D=(E=l.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var I,j,N,H,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"라벨이 있는 입력 필드입니다.",...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var P,W,k,L,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"버튼이 있는 입력 필드입니다.",...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var R,M,z,O,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <Input placeholder="검색어를 입력해주세요" leftSlot={<Search className="h-4 w-4 text-muted-foreground" />} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('검색어를 입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, '검색어');
    await expect(input).toHaveValue('검색어');
  }
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:"왼쪽에 아이콘이 있는 입력 필드입니다.",...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.description}}};var F,_,A;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <WithRightSlotDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('비밀번호를 입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'password123');
    await expect(input).toHaveValue('password123');
  }
}`,...(A=(_=h.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var G,J,K,Q,U;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <Input placeholder="금액을 입력해주세요" leftSlot={<DollarSign className="h-4 w-4 text-muted-foreground" />} rightSlot={<CreditCard className="h-4 w-4 text-muted-foreground" />} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('금액을 입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, '10000');
    await expect(input).toHaveValue('10000');
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"양쪽에 아이콘이 있는 입력 필드입니다.",...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};const ge=["Default","Disabled","WithLabel","WithButton","WithLeftSlot","WithRightSlot","WithBothSlots"];export{i as Default,l as Disabled,u as WithBothSlots,m as WithButton,p as WithLabel,d as WithLeftSlot,h as WithRightSlot,ge as __namedExportsOrder,ve as default};
