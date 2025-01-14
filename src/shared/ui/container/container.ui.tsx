import { ComponentProps } from 'react';

import { cn } from '@/shared/utils';

type ContainerProps = ComponentProps<'div'>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto max-w-screen-2xl px-8', className)} {...props}>
      {children}
    </div>
  );
}
