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
    <header className="flex justify-between border-b border-b-border px-8 py-4">
      <nav>
        <div className="flex items-center gap-x-8">
          <Link href="/" aria-label="홈으로 이동">
            <Image className="invert" src="/vercel.svg" alt="로고" width={32} height={32} />
          </Link>
          <ul className="flex list-none items-center gap-x-8">
            {[
              { href: '/', text: '홈' },
              { href: '/recipes', text: '레시피' },
              { href: '/milfap', text: '밀프랩' },
              { href: '/recipes/disease', text: '질환별 식단' },
            ].map(({ href, text }) => (
              <li key={href}>
                <NavLink href={href}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div>
        <Button asChild>
          <Link href={isLoggedIn ? '/auth/logout' : '/auth/login'}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </Link>
        </Button>
      </div>
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
