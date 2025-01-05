import type { Meta, StoryObj } from '@storybook/react';

import { DailyRecipesFeed } from './daily-recipes-feed.ui';

const meta = {
  title: 'widgets/DailyRecipesFeed',
  component: DailyRecipesFeed,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DailyRecipesFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
