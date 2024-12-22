import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '../button';
import { Input } from '../input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form.ui';

const meta = {
  title: 'shared/Form',
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormSchema = z.object({
  username: z.string().min(2, '2글자 이상 입력해주세요.'),
});

function FormDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    window.alert(
      JSON.stringify(
        {
          title: '제출된 값:',
          description: JSON.stringify(data, null, 2),
        },
        null,
        2,
      ),
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>유저명</FormLabel>
              <FormControl>
                <Input placeholder="유저명을 입력해주세요.." {...field} />
              </FormControl>
              <FormDescription>공개적으로 표시되는 이름입니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm">
          제출
        </Button>
      </form>
    </Form>
  );
}

/**
 * 기본 폼입니다.
 */
export const Default: Story = {
  render: () => <FormDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test');
  },
};
