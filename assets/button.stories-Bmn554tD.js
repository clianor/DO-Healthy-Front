import{f as ie,w as de,e as pe,u as me}from"./index-Z5tTm0QU.js";import{B as ue}from"./button.ui-CaQFQTRb.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-BAi9YrL4.js";import"./index-B1GeB8Nz.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const ze={title:"shared/Button",component:ue,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:ie(),variant:"default",size:"default",children:"클릭!"},argTypes:{variant:{description:"버튼의 스타일을 지정합니다.",options:["default","destructive","outline","secondary","ghost","link"],control:{type:"radio"},table:{defaultValue:{summary:"default"}}},size:{description:"버튼의 크기를 지정합니다.",options:["sm","default","lg","icon"],control:{type:"radio"},table:{defaultValue:{summary:"default"}}},children:{description:"버튼 내부에 들어갈 콘텐츠를 지정합니다.",control:"text"},onClick:{description:"버튼 클릭 시 실행될 함수를 지정합니다."},asChild:{description:"버튼을 다른 컴포넌트로 렌더링할지 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}}}},e={play:async({canvasElement:ce})=>{const p=de(ce).getByRole("button",{name:/클릭!/i});await pe(p).toBeInTheDocument(),await me.click(p)}},r={args:{size:"sm"}},a={args:{size:"default"}},s={args:{size:"lg"}},t={args:{variant:"destructive"}},o={args:{variant:"outline"}},n={args:{variant:"secondary"}},c={args:{variant:"ghost"}},i={args:{variant:"link"}},d={args:{size:"icon",variant:"outline",children:"🔍"}};var m,u,l,g,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /클릭!/i
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  }
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source},description:{story:"기본 버튼입니다.",...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var v,f,h,S,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"작은 크기의 버튼입니다.",...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var z,k,w,B,D;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'default'
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"중간 크기의 버튼입니다.",...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var x,E,I,L,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"큰 크기의 버튼입니다.",...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var O,T,V,G,M;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'destructive'
  }
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source},description:{story:"위험한 동작을 수행하는 버튼입니다.",...(M=(G=t.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var R,_,j,q,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...(j=(_=o.parameters)==null?void 0:_.docs)==null?void 0:j.source},description:{story:"테두리가 있는 버튼입니다.",...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};var F,H,J,K,N;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(J=(H=n.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"보조 버튼입니다.",...(N=(K=n.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var P,Q,U,W,X;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"배경이 투명한 버튼입니다.",...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.description}}};var Y,Z,$,ee,re;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  }
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"링크처럼 보이는 버튼입니다.",...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var ae,se,te,oe,ne;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    variant: 'outline',
    children: '🔍'
  }
}`,...(te=(se=d.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"아이콘 크기의 버튼입니다.",...(ne=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};const ke=["Default","Small","Medium","Large","Destructive","Outline","Secondary","Ghost","Link","Icon"];export{e as Default,t as Destructive,c as Ghost,d as Icon,s as Large,i as Link,a as Medium,o as Outline,n as Secondary,r as Small,ke as __namedExportsOrder,ze as default};
