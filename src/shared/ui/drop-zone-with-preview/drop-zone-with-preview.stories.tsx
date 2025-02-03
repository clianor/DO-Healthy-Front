import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { useState } from 'react';

import { DropZoneWithPreview } from './drop-zone-with-preview.ui';

const meta = {
  title: 'shared/DropZoneWithPreview',
  component: DropZoneWithPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropZoneWithPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본적인 이미지 드롭존 컴포넌트입니다.
 * 이미지를 드래그 앤 드롭하거나 클릭하여 업로드할 수 있으며,
 * 업로드된 이미지는 미리보기로 표시됩니다.
 */
export const Default: Story = {
  render: () => (
    <div className="w-60">
      <DropZoneWithPreview />
    </div>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const dropzone = canvas.getByText('파일을 드래그하거나 클릭하여 업로드하세요');
    await expect(dropzone).toBeInTheDocument();
  },
};

/**
 * Uncontrolled 모드에서 초기값을 설정한 드롭존입니다.
 */
export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-60">
      <DropZoneWithPreview
        defaultValue="https://picsum.photos/200"
        onValueChange={(value) => {
          console.log('Value changed:', value);
        }}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByAltText('이미지 미리보기');
    await expect(image).toBeInTheDocument();
  },
};

/**
 * Controlled 모드로 동작하는 드롭존입니다.
 * 상태 변경을 직접 제어할 수 있습니다.
 */
export const Controlled: Story = {
  render: function ControlledComponent() {
    const [value, setValue] = useState<string | File | null>('https://picsum.photos/200');

    return (
      <div className="w-60">
        <DropZoneWithPreview value={value} onValueChange={setValue} />
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => setValue(null)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            외부에서 초기화
          </button>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByAltText('이미지 미리보기');
    await expect(image).toBeInTheDocument();
  },
};

/**
 * 비활성화된 드롭존입니다.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: React.ComponentProps<typeof DropZoneWithPreview>) => (
    <div className="w-60">
      <DropZoneWithPreview {...args} />
    </div>
  ),
};
