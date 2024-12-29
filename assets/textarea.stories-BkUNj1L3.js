import{w,e as T}from"./index-Z5tTm0QU.js";import{j as D}from"./jsx-runtime-BjG_zV1W.js";import{c as B}from"./cn-CytzSlOG.js";function E({className:r,...s}){return D.jsx("textarea",{className:B("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),...s})}const S={title:"shared/Textarea",component:E,tags:["autodocs"],args:{placeholder:"내용을 입력하세요..."},argTypes:{placeholder:{description:"텍스트 영역의 플레이스홀더를 지정합니다.",control:"text",table:{defaultValue:{summary:""}}},disabled:{description:"텍스트 영역의 비활성화 여부를 지정합니다.",control:"boolean",table:{defaultValue:{summary:"false"}}}}},e={play:async({canvasElement:r})=>{const v=w(r).getByRole("textbox");await T(v).toBeInTheDocument()}},a={args:{disabled:!0}},t={args:{readOnly:!0,value:`안녕하세요! 저는 긴 텍스트를 작성하고 있습니다.
텍스트 영역은 내용이 길어져도 자연스럽게 스크롤됩니다.
자유롭게 긴 내용을 작성해보세요.`}};var o,n,c,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeInTheDocument();
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"기본 텍스트 영역입니다.",...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.description}}};var l,p,m,u,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"비활성화된 텍스트 영역입니다.",...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var b,g,f,y,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    value: '안녕하세요! 저는 긴 텍스트를 작성하고 있습니다.\\n텍스트 영역은 내용이 길어져도 자연스럽게 스크롤됩니다.\\n자유롭게 긴 내용을 작성해보세요.'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"긴 내용이 있는 텍스트 영역입니다.",...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};const I=["Default","Disabled","WithLongText"];export{e as Default,a as Disabled,t as WithLongText,I as __namedExportsOrder,S as default};
