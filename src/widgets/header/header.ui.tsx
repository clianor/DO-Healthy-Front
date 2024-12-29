import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { useSessionStore } from '@/shared/session';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';

export function Header() {
  const isLoggedIn = useSessionStore((state) => !!state.session);

  return (
    <header className="flex justify-between px-8 py-4 border-b border-b-border">
      <span className="flex items-center gap-x-8">
        <Link href="/">
          <Image className="invert" src="/vercel.svg" alt="" width={32} height={32} />
        </Link>
        {[
          { href: '/', text: '홈' },
          { href: '/recipes', text: '레시피' },
          { href: '/milfap', text: '밀프랩' },
          { href: '/recipes/disease', text: '질환별 식단' },
        ].map(({ href, text }) => {
          return (
            <NavLink key={href} href={href}>
              {text}
            </NavLink>
          );
        })}
      </span>

      <span>
        <Button asChild>
          <Link href={isLoggedIn ? '/auth/logout' : '/auth/login'}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </Link>
        </Button>
      </span>
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
          'text-foreground border-b-foreground': isActive,
          'text-muted-foreground hover:text-foreground hover:border-b-foreground': !isActive,
        },
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
