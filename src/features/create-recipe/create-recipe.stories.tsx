import type { Meta, StoryObj } from '@storybook/react';

import { CreateRecipeForm } from './create-recipe.ui';

const meta = {
  title: 'features/CreateRecipeForm',
  component: CreateRecipeForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreateRecipeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 새로운 레시피를 생성하기 위한 폼을 표시합니다.
 */
export const Default: Story = {};
