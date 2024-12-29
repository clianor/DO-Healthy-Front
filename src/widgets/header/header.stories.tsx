import { getRouter } from '@storybook/nextjs/router.mock';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { sessionStore } from '@/shared/session';

import { Header } from './header.ui';

const meta = {
  title: 'widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        pathname: '/recipes',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 헤더 컴포넌트입니다.<br />
 * 로그인하지 않은 상태에서는 로그인 버튼이 표시됩니다.
 */
export const Default: Story = {
  beforeEach: () => {
    getRouter().push.mockImplementation((href) => {
      if (href === '/auth/login') {
        sessionStore.setState({ session: { email: 'test@test.com', name: 'test' } });
      } else if (href === '/auth/logout') {
        sessionStore.setState({ session: null });
      }
    });
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('banner');
    await expect(header).toBeInTheDocument();
  },
};
