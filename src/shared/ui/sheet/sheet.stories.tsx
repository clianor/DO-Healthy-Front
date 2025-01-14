import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Button } from '@/shared/ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet.ui';

const meta = {
  title: 'shared/Sheet',
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">시트 열기</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>시트 제목</SheetTitle>
          <SheetDescription>
            이것은 시트 컴포넌트의 설명입니다. 오른쪽에서 슬라이드되어 나타나는 패널을 표시합니다.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 시트가 처음에는 보이지 않는지 확인
    const initialSheet = canvas.queryByRole('dialog');
    await expect(initialSheet).not.toBeInTheDocument();

    // 버튼 클릭
    const button = canvas.getByRole('button', { name: '시트 열기' });
    await userEvent.click(button);
  },
};
