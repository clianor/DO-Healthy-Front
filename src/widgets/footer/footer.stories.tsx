import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Footer } from './footer.ui';

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 로고 이미지 확인
    await expect(canvas.getByAltText('로고')).toBeInTheDocument();

    // 다운로드 버튼 확인
    await expect(canvas.getByText('App Store')).toBeInTheDocument();
    await expect(canvas.getByText('Google Play')).toBeInTheDocument();

    // 메뉴 항목 확인
    await expect(canvas.getByText('레시피 검색')).toBeInTheDocument();
    await expect(canvas.getByText('밀프랩')).toBeInTheDocument();
    await expect(canvas.getByText('질환별 식단')).toBeInTheDocument();

    // 고객지원 항목 확인
    await expect(canvas.getByText('자주묻는질문')).toBeInTheDocument();
    await expect(canvas.getByText('1:1 문의')).toBeInTheDocument();
    await expect(canvas.getByText('공지사항')).toBeInTheDocument();

    // 저작권 텍스트 확인
    await expect(canvas.getByText('© 2024 건강식단. All rights reserved.')).toBeInTheDocument();
  },
};
