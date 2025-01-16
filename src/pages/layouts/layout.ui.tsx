import { PropsWithChildren } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
