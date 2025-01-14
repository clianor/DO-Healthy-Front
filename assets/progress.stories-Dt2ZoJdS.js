import{w as M,e as T}from"./index-Z5tTm0QU.js";import{j as u}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-B1GeB8Nz.js";import{c as A}from"./index-BJJGc8wt.js";import{P as $}from"./index-Bi9wok0D.js";import{c as B}from"./cn-CytzSlOG.js";import"./index-DyFja7G4.js";import"./index-BAi9YrL4.js";var p="Progress",m=100,[L,re]=A(p),[O,G]=L(p),R=I.forwardRef((e,r)=>{const{__scopeProgress:o,value:s=null,max:a,getValueLabel:S=X,...V}=e;(a||a===0)&&!d(a)&&console.error(F(`${a}`,"Progress"));const t=d(a)?a:m;s!==null&&!v(s,t)&&console.error(U(`${s}`,"Progress"));const n=v(s,t)?s:null,C=c(n)?S(n,t):void 0;return u.jsx(O,{scope:o,value:n,max:t,children:u.jsx($.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":c(n)?n:void 0,"aria-valuetext":C,role:"progressbar","data-state":j(n,t),"data-value":n??void 0,"data-max":t,...V,ref:r})})});R.displayName=p;var _="ProgressIndicator",D=I.forwardRef((e,r)=>{const{__scopeProgress:o,...s}=e,a=G(_,o);return u.jsx($.div,{"data-state":j(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:r})});D.displayName=_;function X(e,r){return`${Math.round(e/r*100)}%`}function j(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function c(e){return typeof e=="number"}function d(e){return c(e)&&!isNaN(e)&&e>0}function v(e,r){return c(e)&&!isNaN(e)&&e<=r&&e>=0}function F(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${m}\`.`}function U(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${m} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var k=R,q=D;function z({className:e,value:r,...o}){return u.jsx(k,{className:B("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...o,children:u.jsx(q,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})})}const ae={title:"shared/Progress",component:z,tags:["autodocs"],args:{value:40},argTypes:{value:{description:"진행률을 지정합니다 (0-100)",control:{type:"number",min:0,max:100},table:{defaultValue:{summary:"0"}}}}},i={play:async({canvasElement:e})=>{const o=M(e).getByRole("progressbar");await T(o).toBeInTheDocument()}},l={args:{value:100}};var f,g,x,P,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"기본 프로그레스바입니다.",...(y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:y.description}}};var b,h,N,w,E;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(N=(h=l.parameters)==null?void 0:h.docs)==null?void 0:N.source},description:{story:"완료된 상태의 프로그레스바입니다.",...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};const oe=["Default","Complete"];export{l as Complete,i as Default,oe as __namedExportsOrder,ae as default};
