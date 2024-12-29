import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Textarea } from './textarea.ui';

const meta = {
  title: 'shared/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: '내용을 입력하세요...' },
  argTypes: {
    placeholder: {
      description: '텍스트 영역의 플레이스홀더를 지정합니다.',
      control: 'text',
      table: {
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      description: '텍스트 영역의 비활성화 여부를 지정합니다.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 텍스트 영역입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeInTheDocument();
  },
};

/**
 * 비활성화된 텍스트 영역입니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * 긴 내용이 있는 텍스트 영역입니다.
 */
export const WithLongText: Story = {
  args: {
    readOnly: true,
    value:
      '안녕하세요! 저는 긴 텍스트를 작성하고 있습니다.\n텍스트 영역은 내용이 길어져도 자연스럽게 스크롤됩니다.\n자유롭게 긴 내용을 작성해보세요.',
  },
};
