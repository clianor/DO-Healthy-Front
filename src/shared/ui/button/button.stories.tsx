import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';

import { Button } from './button.ui';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn(), size: 'md', children: '클릭!' },
  argTypes: {
    size: {
      description: '버튼의 크기를 지정합니다.',
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      description: '버튼 내부에 들어갈 콘텐츠를 지정합니다.',
      control: 'text',
    },
    onClick: {
      description: '버튼 클릭 시 실행될 함수를 지정합니다.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /클릭!/i });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

/**
 * 작은 크기의 버튼입니다.
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * 중간 크기의 버튼입니다.
 */
export const Medium: Story = {
  args: {
    size: 'md',
  },
};

/**
 * 큰 크기의 버튼입니다.
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
};
