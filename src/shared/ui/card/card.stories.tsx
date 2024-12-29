import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Image from 'next/image';

import { Button } from '@/shared/ui/button';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card.ui';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 본문 내용이 들어갑니다.</p>
      </CardContent>
      <CardFooter>
        <Button>확인</Button>
      </CardFooter>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.getByTestId('card-header');
    await expect(header).toBeInTheDocument();

    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();

    const footer = canvas.getByTestId('card-footer');
    await expect(footer).toBeInTheDocument();

    // 카드 내용 검증
    const title = canvas.getByText('카드 제목');
    await expect(title).toBeInTheDocument();

    const description = canvas.getByText('카드 설명입니다.');
    await expect(description).toBeInTheDocument();

    const mainContent = canvas.getByText('카드의 본문 내용이 들어갑니다.');
    await expect(mainContent).toBeInTheDocument();

    const button = canvas.getByRole('button', { name: '확인' });
    await expect(button).toBeInTheDocument();
  },
};

export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>푸터가 없는 카드</CardTitle>
        <CardDescription>푸터가 없는 카드 예시입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 본문 내용이 들어갑니다.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.getByTestId('card-header');
    await expect(header).toBeInTheDocument();

    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();

    const footer = canvas.queryByTestId('card-footer');
    await expect(footer).not.toBeInTheDocument();
  },
};

export const OnlyContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>헤더와 푸터가 없는 심플한 카드입니다.</p>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 카드의 구조 검증
    const header = canvas.queryByTestId('card-header');
    await expect(header).not.toBeInTheDocument();

    const content = canvas.getByTestId('card-content');
    await expect(content).toBeInTheDocument();

    const footer = canvas.queryByTestId('card-footer');
    await expect(footer).not.toBeInTheDocument();
  },
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <CardHeader className="relative h-[200px] p-0">
        <Image
          src="https://picsum.photos/id/237/350/200"
          alt="카드 이미지"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRsdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          fill
        />
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="mb-2">카드 제목</CardTitle>
        <CardDescription>카드 설명입니다.</CardDescription>
      </CardContent>
    </Card>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 이미지 검증
    const image = canvas.getByRole('img', { name: '카드 이미지' });
    await expect(image).toBeInTheDocument();

    // 컨텐츠 검증
    const title = canvas.getByText('카드 제목');
    await expect(title).toBeInTheDocument();

    const description = canvas.getByText('카드 설명입니다.');
    await expect(description).toBeInTheDocument();
  },
};
