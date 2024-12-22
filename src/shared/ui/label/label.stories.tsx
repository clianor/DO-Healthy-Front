import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Label } from './label.ui';

const meta = {
  title: 'shared/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: '라벨',
  },
  argTypes: {
    children: {
      description: '라벨 내부에 들어갈 콘텐츠를 지정합니다.',
      control: 'text',
    },
    className: {
      description: '라벨에 적용할 추가 클래스를 지정합니다.',
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 라벨입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText(/라벨/i);
    await expect(label).toBeInTheDocument();
  },
};

/**
 * 커스텀 클래스가 적용된 라벨입니다.
 */
export const CustomClass: Story = {
  args: {
    className: 'text-blue-500 font-bold',
    children: '커스텀 라벨',
  },
};

/**
 * disabled 상태의 라벨입니다.
 */
export const Disabled: Story = {
  args: {
    children: '비활성화된 라벨',
  },
  decorators: [
    (Story) => (
      <div className="peer-disabled:opacity-70">
        <input type="text" disabled className="peer" />
        <Story />
      </div>
    ),
  ],
};
