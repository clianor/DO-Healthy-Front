import{w as k,e as F}from"./index-Z5tTm0QU.js";import{j as m}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-B1NDlYI3.js";import{P as A}from"./index-B1IQl1Nj.js";import{c as H}from"./cn-CytzSlOG.js";import"./index-BATiNE4h.js";import"./index-BU-tpEox.js";function U(e,r=[]){let a=[];function c(i,n){const o=u.createContext(n),s=a.length;a=[...a,n];const p=d=>{var N;const{scope:l,children:h,...v}=d,g=((N=l==null?void 0:l[e])==null?void 0:N[s])||o,X=u.useMemo(()=>v,Object.values(v));return m.jsx(g.Provider,{value:X,children:h})};p.displayName=i+"Provider";function $(d,l){var g;const h=((g=l==null?void 0:l[e])==null?void 0:g[s])||o,v=u.useContext(h);if(v)return v;if(n!==void 0)return n;throw new Error(`\`${d}\` must be used within \`${i}\``)}return[p,$]}const t=()=>{const i=a.map(n=>u.createContext(n));return function(o){const s=(o==null?void 0:o[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...o,[e]:s}}),[o,s])}};return t.scopeName=e,[c,q(t,...r)]}function q(...e){const r=e[0];if(e.length===1)return r;const a=()=>{const c=e.map(t=>({useScope:t(),scopeName:t.scopeName}));return function(i){const n=c.reduce((o,{useScope:s,scopeName:p})=>{const d=s(i)[`__scope${p}`];return{...o,...d}},{});return u.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return a.scopeName=r.scopeName,a}var b="Progress",y=100,[z,ue]=U(b),[J,K]=z(b),B=u.forwardRef((e,r)=>{const{__scopeProgress:a,value:c=null,max:t,getValueLabel:i=Q,...n}=e;(t||t===0)&&!S(t)&&console.error(W(`${t}`,"Progress"));const o=S(t)?t:y;c!==null&&!_(c,o)&&console.error(Y(`${c}`,"Progress"));const s=_(c,o)?c:null,p=P(s)?i(s,o):void 0;return m.jsx(J,{scope:a,value:s,max:o,children:m.jsx(A.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":P(s)?s:void 0,"aria-valuetext":p,role:"progressbar","data-state":G(s,o),"data-value":s??void 0,"data-max":o,...n,ref:r})})});B.displayName=b;var O="ProgressIndicator",L=u.forwardRef((e,r)=>{const{__scopeProgress:a,...c}=e,t=K(O,a);return m.jsx(A.div,{"data-state":G(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...c,ref:r})});L.displayName=O;function Q(e,r){return`${Math.round(e/r*100)}%`}function G(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function P(e){return typeof e=="number"}function S(e){return P(e)&&!isNaN(e)&&e>0}function _(e,r){return P(e)&&!isNaN(e)&&e<=r&&e>=0}function W(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${y}\`.`}function Y(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${y} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var Z=B,ee=L;function re({className:e,value:r,...a}){return m.jsx(Z,{className:H("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...a,children:m.jsx(ee,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})})}const le={title:"shared/Progress",component:re,tags:["autodocs"],args:{value:40},argTypes:{value:{description:"진행률을 지정합니다 (0-100)",control:{type:"number",min:0,max:100},table:{defaultValue:{summary:"0"}}}}},f={play:async({canvasElement:e})=>{const a=k(e).getByRole("progressbar");await F(a).toBeInTheDocument()}},x={args:{value:100}};var w,C,E,I,j;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
  }
}`,...(E=(C=f.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"기본 프로그레스바입니다.",...(j=(I=f.parameters)==null?void 0:I.docs)==null?void 0:j.description}}};var M,R,D,V,T;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...(D=(R=x.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:"완료된 상태의 프로그레스바입니다.",...(T=(V=x.parameters)==null?void 0:V.docs)==null?void 0:T.description}}};const pe=["Default","Complete"];export{x as Complete,f as Default,pe as __namedExportsOrder,le as default};
