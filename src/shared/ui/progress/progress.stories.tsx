import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Progress } from './progress.ui';

const meta = {
  title: 'shared/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: { value: 40 },
  argTypes: {
    value: {
      description: '진행률을 지정합니다 (0-100)',
      control: { type: 'number', min: 0, max: 100 },
      table: {
        defaultValue: { summary: '0' },
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 프로그레스바입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
  },
};

/**
 * 완료된 상태의 프로그레스바입니다.
 */
export const Complete: Story = {
  args: {
    value: 100,
  },
};
