import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '../../utils';

const ButtonVariants = cva(['rounded-md', 'text-neutral-100', 'bg-neutral-1100'], {
  variants: {
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2 text-base',
      lg: 'px-6 py-3 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof ButtonVariants>;

export function Button({ className, size, ...props }: ButtonProps) {
  return <button {...props} className={cn(ButtonVariants({ size }), className)} />;
}
