import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{C as n,a as d,b as s,d as o,c as i}from"./card.ui-CQo-P26X.js";import{S as t,a as j}from"./scroll-area.ui-BoCPl1Gf.js";import"./cn-CytzSlOG.js";import"./index-SZDuJNPZ.js";import"./index-DlkltAQV.js";import"./index-CPocAcyr.js";import"./index-D5lFlNIX.js";import"./index-B0-tpzaR.js";const b={title:"shared/ScrollArea",component:t,tags:["autodocs"]},e={render:()=>r.jsx(t,{className:"h-[200px] w-[350px] rounded-md border p-4",children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs(n,{children:[r.jsx(d,{children:r.jsx(s,{children:"스크롤 영역 1"})}),r.jsx(o,{children:r.jsx(i,{children:"긴 내용이 있는 경우 스크롤이 생성됩니다. 이 영역을 스크롤해보세요."})})]}),r.jsxs(n,{children:[r.jsx(d,{children:r.jsx(s,{children:"스크롤 영역 2"})}),r.jsx(o,{children:r.jsx(i,{children:"스크롤바는 자동으로 숨겨지며 스크롤 시 나타납니다."})})]}),r.jsxs(n,{children:[r.jsx(d,{children:r.jsx(s,{children:"스크롤 영역 3"})}),r.jsx(o,{children:r.jsx(i,{children:"스크롤바의 스타일은 커스터마이징이 가능합니다."})})]})]})})},a={render:()=>r.jsxs(t,{className:"w-96 whitespace-nowrap rounded-md border",children:[r.jsx("div",{className:"flex w-max space-x-4 p-4",children:Array.from({length:5},(u,c)=>r.jsxs(n,{className:"shrink-0",children:[r.jsx(d,{children:r.jsxs(s,{children:["가로 스크롤 ",c+1]})}),r.jsx(o,{children:r.jsx(i,{children:"가로로 스크롤할 수 있는 컨텐츠입니다."})})]},c))}),r.jsx(j,{orientation:"horizontal"})]})};var l,C,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>스크롤 영역 1</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              긴 내용이 있는 경우 스크롤이 생성됩니다. 이 영역을 스크롤해보세요.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>스크롤 영역 2</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>스크롤바는 자동으로 숨겨지며 스크롤 시 나타납니다.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>스크롤 영역 3</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>스크롤바의 스타일은 커스터마이징이 가능합니다.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
}`,...(p=(C=e.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};var m,x,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({
        length: 5
      }, (_, i) => <Card key={i} className="shrink-0">
            <CardHeader>
              <CardTitle>가로 스크롤 {i + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>가로로 스크롤할 수 있는 컨텐츠입니다.</CardDescription>
            </CardContent>
          </Card>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const g=["Default","Horizontal"];export{e as Default,a as Horizontal,g as __namedExportsOrder,b as default};
