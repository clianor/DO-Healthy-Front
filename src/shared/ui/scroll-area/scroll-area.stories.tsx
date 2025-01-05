import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card';

import { ScrollArea, ScrollBar } from './scroll-area.ui';

const meta = {
  title: 'shared/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
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
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i} className="shrink-0">
            <CardHeader>
              <CardTitle>가로 스크롤 {i + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>가로로 스크롤할 수 있는 컨텐츠입니다.</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
