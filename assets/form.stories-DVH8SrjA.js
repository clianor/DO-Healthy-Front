import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{o as p,s as l,F as u,a as d,b as x,c as f,d as h,e as y,f as j,t as F}from"./index-C6si8OIY.js";import{w,e as b,u as v}from"./index-Z5tTm0QU.js";import{u as g}from"./index.esm-DgZpH6ar.js";import{B as D}from"./button.ui-CCnMz6ch.js";import{I as S}from"./input.ui-DCJB7S0U.js";import"./index-BAi9YrL4.js";import"./index-B1GeB8Nz.js";import"./label.ui-J_JczIqu.js";import"./index-Bi9wok0D.js";import"./index-DyFja7G4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const q={title:"shared/Form",tags:["autodocs"]},B=p({username:l().min(2,"2글자 이상 입력해주세요.")});function E(){const s=g({resolver:F(B),defaultValues:{username:""}});function o(t){window.alert(JSON.stringify({title:"제출된 값:",description:JSON.stringify(t,null,2)},null,2))}return e.jsx(u,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(o),className:"w-2/3 space-y-6",children:[e.jsx(d,{control:s.control,name:"username",render:({field:t})=>e.jsxs(x,{children:[e.jsx(f,{children:"유저명"}),e.jsx(h,{children:e.jsx(S,{placeholder:"유저명을 입력해주세요..",...t})}),e.jsx(y,{children:"공개적으로 표시되는 이름입니다."}),e.jsx(j,{})]})}),e.jsx(D,{type:"submit",size:"sm",children:"제출"})]})})}const r={render:()=>e.jsx(E,{}),play:async({canvasElement:s})=>{const t=w(s).getByRole("textbox");await b(t).toBeInTheDocument(),await v.type(t,"test")}};var n,a,i,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <FormDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test');
  }
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"기본 폼입니다.",...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const A=["Default"];export{r as Default,A as __namedExportsOrder,q as default};
