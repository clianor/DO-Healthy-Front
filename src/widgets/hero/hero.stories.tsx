import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

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
    const hero = canvas.getByRole('region', { name: '레시피 검색' });
    await expect(hero).toBeInTheDocument();

    const heading = canvas.getByRole('heading', { level: 1 });
    await expect(heading).toBeInTheDocument();
    await expect(heading).toHaveTextContent('건강한 삶을 위한 맞춤형 레시피');

    const description = canvas.getByText('당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요');
    await expect(description).toBeInTheDocument();

    const searchInput = canvas.getByPlaceholderText('재료, 질환, 식단을 검색해보세요');
    await expect(searchInput).toBeInTheDocument();
    await expect(searchInput).toHaveAttribute('autocomplete', 'off');

    const searchButton = canvas.getByRole('button', { name: '검색' });
    await expect(searchButton).toBeInTheDocument();

    // 검색어 입력 및 제출 테스트
    await userEvent.type(searchInput, '당뇨병');
    await userEvent.click(searchButton);
  },
};
