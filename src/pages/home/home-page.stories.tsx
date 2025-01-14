import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './home-page.ui';

const meta = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        pathname: '/recipes',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
