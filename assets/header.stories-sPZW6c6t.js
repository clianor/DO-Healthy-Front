import{g as p}from"./index-hC3NRYyC.js";import{w as c,e as l}from"./index-Z5tTm0QU.js";import{H as u,s as o}from"./header.ui-CG0Z3Pe7.js";import"./index-B1GeB8Nz.js";import"./image-context-Cqjqifin.js";import"./add-base-path-RabrT8BY.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-DyFja7G4.js";import"./image-ChyQtvS6.js";import"./link-Bg4X9uzR.js";import"./button.ui-CCnMz6ch.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";import"./container.ui-CDt7v4Er.js";import"./sheet.ui-CQDB8ZYD.js";import"./index-DzJ_GqfG.js";import"./index-BJJGc8wt.js";import"./index-Bi9wok0D.js";import"./x-DuZhaump.js";import"./createLucideIcon-B2mkThYZ.js";const z={title:"widgets/Header",component:u,parameters:{layout:"fullscreen",nextjs:{router:{pathname:"/recipes"}}},tags:["autodocs"]},e={beforeEach:()=>{p().push.mockImplementation(t=>{t==="/auth/login"?o.setState({session:{email:"test@test.com",name:"test"}}):t==="/auth/logout"&&o.setState({session:null})})},play:async({canvasElement:t})=>{const m=c(t).getByRole("banner");await l(m).toBeInTheDocument()}};var s,n,a,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  beforeEach: () => {
    getRouter().push.mockImplementation(href => {
      if (href === '/auth/login') {
        sessionStore.setState({
          session: {
            email: 'test@test.com',
            name: 'test'
          }
        });
      } else if (href === '/auth/logout') {
        sessionStore.setState({
          session: null
        });
      }
    });
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header).toBeInTheDocument();
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source},description:{story:`기본 헤더 컴포넌트입니다.<br />
로그인하지 않은 상태에서는 로그인 버튼이 표시됩니다.`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.description}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,z as default};
