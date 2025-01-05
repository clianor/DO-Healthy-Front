import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Hero } from './hero.ui';

const meta = {
  title: 'widgets/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 히어로 컴포넌트입니다.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hero = canvas.getByRole('region');
    await expect(hero).toBeInTheDocument();
  },
};
