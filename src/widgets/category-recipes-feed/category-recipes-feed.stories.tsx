import type { Meta, StoryObj } from '@storybook/react';

import { CategoryRecipesFeed } from './category-recipes-feed.ui';

const meta = {
  title: 'widgets/CategoryRecipesFeed',
  component: CategoryRecipesFeed,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryRecipesFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
