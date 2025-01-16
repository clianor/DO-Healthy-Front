import type { Meta, StoryObj } from '@storybook/react';

import { CreateRecipeEditorPage, UpdateRecipeEditorPage } from './recipe-editor-page.ui';

const meta = {
  title: 'pages/RecipeEditorPage',
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        pathname: '/recipes',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<never>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateRecipeEditor: Story = {
  render: () => <CreateRecipeEditorPage />,
};

export const UpdateRecipeEditor: Story = {
  render: () => <UpdateRecipeEditorPage />,
};
