import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { DropZone } from './dropzone.ui';

const meta = {
  title: 'shared/DropZone',
  component: DropZone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: '드롭존의 비활성화 여부를 지정합니다.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      description: '허용되는 파일 형식을 지정합니다.',
      control: 'text',
      table: {
        defaultValue: { summary: 'image/*' },
      },
    },
  },
} satisfies Meta<typeof DropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본적인 드롭존 컴포넌트입니다.
 * 파일을 드래그 앤 드롭하거나 클릭하여 업로드할 수 있습니다.
 */
export const Default: Story = {
  render: () => (
    <div className="w-96 max-w-sm">
      <DropZone />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropzone = canvas.getByText('DropZone');
    await expect(dropzone).toBeInTheDocument();
  },
};

/**
 * 비활성화된 드롭존입니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
