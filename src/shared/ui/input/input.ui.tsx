import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  {
    variants: {
      size: {
        default: 'h-9 px-3 py-1',
        sm: 'h-8 px-3 py-1 text-xs',
        lg: 'h-10 px-4 py-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & VariantProps<typeof inputVariants>;

function Input({ className, type, size, ...props }: InputProps) {
  return <input type={type} className={cn(inputVariants({ size }), className)} {...props} />;
}

export { Input };
