import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { useSessionStore } from '@/shared/session';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';
import { cn } from '@/shared/utils';

import { NAVIGATIONS } from './header.config';

export function Header() {
  const isLoggedIn = useSessionStore((state) => !!state.session);

  return (
    <header className="border-b border-b-border px-8 py-4">
      <Container>
        <nav className="flex justify-between">
          <div className="flex items-center gap-x-8">
            <Link href="/" aria-label="홈으로 이동">
              <Image className="invert" src="/vercel.svg" alt="" width={32} height={32} />
            </Link>
            <ul className="hidden list-none items-center gap-x-8 lg:flex">
              {NAVIGATIONS.map(({ href, text }) => (
                <li key={href}>
                  <NavLink href={href}>{text}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex">
            <Button asChild>
              <Link href={isLoggedIn ? '/auth/logout' : '/auth/login'}>
                {isLoggedIn ? '로그아웃' : '로그인'}
              </Link>
            </Button>
          </div>

          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon">
                  <span className="sr-only">메뉴 오픈</span>
                  <Menu aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" aria-label="홈으로 이동">
                      <Image className="invert" src="/vercel.svg" alt="" width={32} height={32} />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    <ul className="mt-8 flex list-none flex-col items-start gap-y-4">
                      {NAVIGATIONS.map(({ href, text }) => (
                        <li key={href}>
                          <NavLink href={href}>{text}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}

type NavLinkProps = PropsWithChildren<{
  href: string;
}>;

function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'px-1',
        'text-sm font-medium',
        'transition-colors',
        'border-b-2 border-transparent',
        {
          'border-b-foreground text-foreground': isActive,
          'text-muted-foreground hover:border-b-foreground hover:text-foreground': !isActive,
        },
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
