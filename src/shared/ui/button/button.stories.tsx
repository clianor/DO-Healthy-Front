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
  args: { onClick: fn(), variant: 'default', size: 'default', children: '클릭!' },
  argTypes: {
    variant: {
      description: '버튼의 스타일을 지정합니다.',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: '버튼의 크기를 지정합니다.',
      options: ['sm', 'default', 'lg', 'icon'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      description: '버튼 내부에 들어갈 콘텐츠를 지정합니다.',
      control: 'text',
    },
    onClick: {
      description: '버튼 클릭 시 실행될 함수를 지정합니다.',
    },
    asChild: {
      description: '버튼을 다른 컴포넌트로 렌더링할지 여부를 지정합니다.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
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
    size: 'default',
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

/**
 * 위험한 동작을 수행하는 버튼입니다.
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

/**
 * 테두리가 있는 버튼입니다.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

/**
 * 보조 버튼입니다.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

/**
 * 배경이 투명한 버튼입니다.
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

/**
 * 링크처럼 보이는 버튼입니다.
 */
export const Link: Story = {
  args: {
    variant: 'link',
  },
};

/**
 * 아이콘 크기의 버튼입니다.
 */
export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: '🔍',
  },
};
