import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Button } from '../button';
import { Label } from '../label';
import { Input } from './input.ui';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { placeholder: '입력해주세요' },
  argTypes: {
    type: {
      description: '입력 필드의 타입을 지정합니다.',
      options: ['text', 'password', 'email', 'number', 'tel'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      description: '입력 필드의 플레이스홀더를 지정합니다.',
      control: 'text',
    },
    disabled: {
      description: '입력 필드의 비활성화 여부를 지정합니다.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 입력 필드입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('입력해주세요');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, '안녕하세요');
    await expect(input).toHaveValue('안녕하세요');
  },
};

/**
 * 비활성화된 입력 필드입니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 입력 필드',
  },
};

/**
 * 라벨이 있는 입력 필드입니다.
 */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="이메일을 입력해주세요" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('이메일을 입력해주세요');
    const label = canvas.getByText('이메일');
    await expect(input).toBeInTheDocument();
    await expect(label).toBeInTheDocument();
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  },
};

/**
 * 버튼이 있는 입력 필드입니다.
 */
export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input placeholder="검색어를 입력해주세요" />
      <Button type="submit" size="sm">
        검색
      </Button>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('검색어를 입력해주세요');
    const button = canvas.getByRole('button', { name: '검색' });
    await expect(input).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
    await userEvent.type(input, '검색어');
    await expect(input).toHaveValue('검색어');
  },
};
