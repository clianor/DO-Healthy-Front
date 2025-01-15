import{j as A}from"./jsx-runtime-BjG_zV1W.js";import{w as m,e as t}from"./index-Z5tTm0QU.js";import{n as f}from"./image-ChyQtvS6.js";import{B as W}from"./button.ui-CCnMz6ch.js";import{C as s,a as h,b as p,c as R,d as l,e as N}from"./card.ui-CQo-P26X.js";import"./index-B1GeB8Nz.js";import"./image-context-Cqjqifin.js";import"./index-DyFja7G4.js";import"./index-BAi9YrL4.js";import"./index-DVF2XGCm.js";import"./cn-CytzSlOG.js";const q={title:"shared/Card",component:s,parameters:{layout:"centered"}},r={render:()=>A.jsxs(s,{className:"w-[350px]",children:[A.jsxs(h,{children:[A.jsx(p,{children:"카드 제목"}),A.jsx(R,{children:"카드 설명입니다."})]}),A.jsx(l,{children:A.jsx("p",{children:"카드의 본문 내용이 들어갑니다."})}),A.jsx(N,{children:A.jsx(W,{children:"확인"})})]}),play:async({canvasElement:a})=>{const e=m(a),n=e.getByTestId("card-header");await t(n).toBeInTheDocument();const o=e.getByTestId("card-content");await t(o).toBeInTheDocument();const c=e.getByTestId("card-footer");await t(c).toBeInTheDocument();const j=e.getByText("카드 제목");await t(j).toBeInTheDocument();const v=e.getByText("카드 설명입니다.");await t(v).toBeInTheDocument();const b=e.getByText("카드의 본문 내용이 들어갑니다.");await t(b).toBeInTheDocument();const F=e.getByRole("button",{name:"확인"});await t(F).toBeInTheDocument()}},d={render:()=>A.jsxs(s,{className:"w-[350px]",children:[A.jsxs(h,{children:[A.jsx(p,{children:"푸터가 없는 카드"}),A.jsx(R,{children:"푸터가 없는 카드 예시입니다."})]}),A.jsx(l,{children:A.jsx("p",{children:"카드의 본문 내용이 들어갑니다."})})]}),play:async({canvasElement:a})=>{const e=m(a),n=e.getByTestId("card-header");await t(n).toBeInTheDocument();const o=e.getByTestId("card-content");await t(o).toBeInTheDocument();const c=e.queryByTestId("card-footer");await t(c).not.toBeInTheDocument()}},i={render:()=>A.jsx(s,{className:"w-[350px]",children:A.jsx(l,{children:A.jsx("p",{children:"헤더와 푸터가 없는 심플한 카드입니다."})})}),play:async({canvasElement:a})=>{const e=m(a),n=e.queryByTestId("card-header");await t(n).not.toBeInTheDocument();const o=e.getByTestId("card-content");await t(o).toBeInTheDocument();const c=e.queryByTestId("card-footer");await t(c).not.toBeInTheDocument()}},B={render:()=>A.jsxs(s,{className:"w-[350px] overflow-hidden",children:[A.jsx(h,{className:"relative h-[200px] p-0",children:A.jsx(f,{src:"https://picsum.photos/id/237/350/200",alt:"카드 이미지",className:"object-cover",placeholder:"blur",blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRsdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",fill:!0})}),A.jsxs(l,{className:"mt-4",children:[A.jsx(p,{className:"mb-2",children:"카드 제목"}),A.jsx(R,{children:"카드 설명입니다."})]})]}),play:async({canvasElement:a})=>{const e=m(a),n=e.getByRole("img",{name:"카드 이미지"});await t(n).toBeInTheDocument();const o=e.getByText("카드 제목");await t(o).toBeInTheDocument();const c=e.getByText("카드 설명입니다.");await t(c).toBeInTheDocument()}};var H,x,C;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 본문 내용이 들어갑니다.</p>
      </CardContent>
      <CardFooter>
        <Button>확인</Button>
      </CardFooter>
    </Card>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.getByTestId('card-header');
    await expect(header).toBeInTheDocument();
    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();
    const footer = canvas.getByTestId('card-footer');
    await expect(footer).toBeInTheDocument();

    // 카드 내용 검증
    const title = canvas.getByText('카드 제목');
    await expect(title).toBeInTheDocument();
    const description = canvas.getByText('카드 설명입니다.');
    await expect(description).toBeInTheDocument();
    const mainContent = canvas.getByText('카드의 본문 내용이 들어갑니다.');
    await expect(mainContent).toBeInTheDocument();
    const button = canvas.getByRole('button', {
      name: '확인'
    });
    await expect(button).toBeInTheDocument();
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var D,I,u;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>푸터가 없는 카드</CardTitle>
        <CardDescription>푸터가 없는 카드 예시입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 본문 내용이 들어갑니다.</p>
      </CardContent>
    </Card>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.getByTestId('card-header');
    await expect(header).toBeInTheDocument();
    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();
    const footer = canvas.queryByTestId('card-footer');
    await expect(footer).not.toBeInTheDocument();
  }
}`,...(u=(I=d.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var T,w,y;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardContent>
        <p>헤더와 푸터가 없는 심플한 카드입니다.</p>
      </CardContent>
    </Card>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.queryByTestId('card-header');
    await expect(header).not.toBeInTheDocument();
    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();
    const footer = canvas.queryByTestId('card-footer');
    await expect(footer).not.toBeInTheDocument();
  }
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,E,Q;B.parameters={...B.parameters,docs:{...(g=B.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px] overflow-hidden">
      <CardHeader className="relative h-[200px] p-0">
        <Image src="https://picsum.photos/id/237/350/200" alt="카드 이미지" className="object-cover" placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRsdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=" fill />
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="mb-2">카드 제목</CardTitle>
        <CardDescription>카드 설명입니다.</CardDescription>
      </CardContent>
    </Card>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 이미지 검증
    const image = canvas.getByRole('img', {
      name: '카드 이미지'
    });
    await expect(image).toBeInTheDocument();

    // 컨텐츠 검증
    const title = canvas.getByText('카드 제목');
    await expect(title).toBeInTheDocument();
    const description = canvas.getByText('카드 설명입니다.');
    await expect(description).toBeInTheDocument();
  }
}`,...(Q=(E=B.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};const O=["Default","WithoutFooter","OnlyContent","WithImage"];export{r as Default,i as OnlyContent,B as WithImage,d as WithoutFooter,O as __namedExportsOrder,q as default};
