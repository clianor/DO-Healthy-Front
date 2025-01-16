import{w as v,e as T}from"./index-Z5tTm0QU.js";import{T as D}from"./textarea.ui-Dy2PMZj1.js";import"./jsx-runtime-BjG_zV1W.js";import"./cn-CytzSlOG.js";const I={title:"shared/Textarea",component:D,tags:["autodocs"],args:{placeholder:"내용을 입력하세요..."},argTypes:{placeholder:{description:"텍스트 영역의 플레이스홀더를 지정합니다.",control:"text",table:{defaultValue:{summary:""}}},disabled:{description:"텍스트 영역의 비활성화 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}}}},e={play:async({canvasElement:h})=>{const f=v(h).getByRole("textbox");await T(f).toBeInTheDocument()}},a={args:{disabled:!0}},t={args:{readOnly:!0,value:`안녕하세요! 저는 긴 텍스트를 작성하고 있습니다.
텍스트 영역은 내용이 길어져도 자연스럽게 스크롤됩니다.
자유롭게 긴 내용을 작성해보세요.`}};var r,s,o,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeInTheDocument();
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source},description:{story:"기본 텍스트 영역입니다.",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.description}}};var i,d,p,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"비활성화된 텍스트 영역입니다.",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var u,x,g,y,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: '안녕하세요! 저는 긴 텍스트를 작성하고 있습니다.\\n텍스트 영역은 내용이 길어져도 자연스럽게 스크롤됩니다.\\n자유롭게 긴 내용을 작성해보세요.'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"긴 내용이 있는 텍스트 영역입니다.",...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};const L=["Default","Disabled","WithLongText"];export{e as Default,a as Disabled,t as WithLongText,L as __namedExportsOrder,I as default};
