import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{w as l,e as a}from"./index-Z5tTm0QU.js";import{n as N}from"./image-DCJzlrkE.js";import{B as W}from"./button.ui-CNuFdkiu.js";import{c as r}from"./cn-CytzSlOG.js";import"./index-B1NDlYI3.js";import"./image-context-yBv4OQr6.js";import"./index-BATiNE4h.js";import"./index-BU-tpEox.js";import"./index-DVF2XGCm.js";function d({className:t,...A}){return e.jsx("div",{"data-testid":"card",className:r("rounded-lg border bg-card text-card-foreground shadow",t),...A})}function p({className:t,...A}){return e.jsx("div",{"data-testid":"card-header",className:r("flex flex-col space-y-1.5 p-6",t),...A})}function R({className:t,...A}){return e.jsx("div",{"data-testid":"card-title",className:r("font-semibold leading-none tracking-tight",t),...A})}function x({className:t,...A}){return e.jsx("div",{"data-testid":"card-description",className:r("text-sm text-muted-foreground",t),...A})}function h({className:t,...A}){return e.jsx("div",{"data-testid":"card-content",className:r("p-6 pt-0",t),...A})}function U({className:t,...A}){return e.jsx("div",{"data-testid":"card-footer",className:r("flex items-center p-6 pt-0",t),...A})}const q={title:"shared/Card",component:d,parameters:{layout:"centered"}},s={render:()=>e.jsxs(d,{className:"w-[350px]",children:[e.jsxs(p,{children:[e.jsx(R,{children:"카드 제목"}),e.jsx(x,{children:"카드 설명입니다."})]}),e.jsx(h,{children:e.jsx("p",{children:"카드의 본문 내용이 들어갑니다."})}),e.jsx(U,{children:e.jsx(W,{children:"확인"})})]}),play:async({canvasElement:t})=>{const A=l(t),n=A.getByTestId("card-header");await a(n).toBeInTheDocument();const o=A.getByTestId("card-content");await a(o).toBeInTheDocument();const c=A.getByTestId("card-footer");await a(c).toBeInTheDocument();const Q=A.getByText("카드 제목");await a(Q).toBeInTheDocument();const f=A.getByText("카드 설명입니다.");await a(f).toBeInTheDocument();const b=A.getByText("카드의 본문 내용이 들어갑니다.");await a(b).toBeInTheDocument();const F=A.getByRole("button",{name:"확인"});await a(F).toBeInTheDocument()}},i={render:()=>e.jsxs(d,{className:"w-[350px]",children:[e.jsxs(p,{children:[e.jsx(R,{children:"푸터가 없는 카드"}),e.jsx(x,{children:"푸터가 없는 카드 예시입니다."})]}),e.jsx(h,{children:e.jsx("p",{children:"카드의 본문 내용이 들어갑니다."})})]}),play:async({canvasElement:t})=>{const A=l(t),n=A.getByTestId("card-header");await a(n).toBeInTheDocument();const o=A.getByTestId("card-content");await a(o).toBeInTheDocument();const c=A.queryByTestId("card-footer");await a(c).not.toBeInTheDocument()}},B={render:()=>e.jsx(d,{className:"w-[350px]",children:e.jsx(h,{children:e.jsx("p",{children:"헤더와 푸터가 없는 심플한 카드입니다."})})}),play:async({canvasElement:t})=>{const A=l(t),n=A.queryByTestId("card-header");await a(n).not.toBeInTheDocument();const o=A.getByTestId("card-content");await a(o).toBeInTheDocument();const c=A.queryByTestId("card-footer");await a(c).not.toBeInTheDocument()}},m={render:()=>e.jsxs(d,{className:"w-[350px] overflow-hidden",children:[e.jsx(p,{className:"relative h-[200px] p-0",children:e.jsx(N,{src:"https://picsum.photos/id/237/350/200",alt:"카드 이미지",className:"object-cover",placeholder:"blur",blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRsdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",fill:!0})}),e.jsxs(h,{className:"mt-4",children:[e.jsx(R,{className:"mb-2",children:"카드 제목"}),e.jsx(x,{children:"카드 설명입니다."})]})]}),play:async({canvasElement:t})=>{const A=l(t),n=A.getByRole("img",{name:"카드 이미지"});await a(n).toBeInTheDocument();const o=A.getByText("카드 제목");await a(o).toBeInTheDocument();const c=A.getByText("카드 설명입니다.");await a(c).toBeInTheDocument()}};var H,u,C;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(u=s.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var D,I,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var g,w,y;B.parameters={...B.parameters,docs:{...(g=B.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(w=B.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,v,E;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const O=["Default","WithoutFooter","OnlyContent","WithImage"];export{s as Default,B as OnlyContent,m as WithImage,i as WithoutFooter,O as __namedExportsOrder,q as default};
