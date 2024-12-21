import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Ratings } from './ratings.ui';

const meta = {
  title: 'shared/Ratings',
  component: Ratings,
  tags: ['autodocs'],
  args: { rating: 3, totalStars: 5 },
  argTypes: {
    rating: {
      description: '별점을 지정합니다 (0-totalStars)',
      control: { type: 'number', min: 0, max: 5 },
      table: {
        defaultValue: { summary: '0' },
      },
    },
    totalStars: {
      description: '전체 별의 개수를 지정합니다',
      control: { type: 'number', min: 1 },
      table: {
        defaultValue: { summary: '5' },
      },
    },
  },
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 별점 컴포넌트입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ratings = canvas.getByRole('generic');
    await expect(ratings).toBeInTheDocument();
  },
};

/**
 * 만점 별점입니다.
 */
export const FullStars: Story = {
  args: {
    rating: 5,
  },
};

/**
 * 0점 별점입니다.
 */
export const NoStars: Story = {
  args: {
    rating: 0,
  },
};

/**
 * 0.5 단위 별점입니다.
 */
export const HalfStars: Story = {
  args: {
    rating: 2.5,
  },
};
