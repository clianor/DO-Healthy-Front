import 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

export function Footer() {
  return (
    <Container>
      <footer className="divide-y">
        <div className="grid grid-cols-2 gap-y-6 pb-8 pt-12 text-base md:grid-cols-3 lg:grid-cols-4">
          <div className="hidden lg:block">
            <Link href="/" aria-label="홈으로 이동">
              <Image className="invert" src="/vercel.svg" alt="로고" width={32} height={32} />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              건강한 삶을 위한 맞춤형 레시피 플랫폼
            </p>
          </div>
          <div>
            <h3 className="text-accent-foreground">서비스</h3>
            <ul className="mt-4 flex flex-col gap-y-2 text-muted-foreground">
              <li>레시피 검색</li>
              <li>밀프랩</li>
              <li>질환별 식단</li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent-foreground">고객지원</h3>
            <ul className="mt-4 flex flex-col gap-y-2 text-muted-foreground">
              <li>자주묻는질문</li>
              <li>1:1 문의</li>
              <li>공지사항</li>
            </ul>
          </div>
          <div className="col-span-full flex flex-col md:col-span-1">
            <h3 className="text-accent-foreground">다운로드</h3>
            <ul className="mt-4 flex flex-col gap-y-2">
              <li>
                <Link href="/">
                  <Button
                    className="w-full"
                    onClick={() => {
                      window.alert('미구현 기능');
                    }}
                  >
                    <Image
                      src="/assets/svgs/app-store.svg"
                      alt="App Store"
                      width={12}
                      height={16}
                    />
                    App Store
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Button
                    className="w-full"
                    onClick={() => {
                      window.alert('미구현 기능');
                    }}
                  >
                    <Image
                      src="/assets/svgs/google-store.svg"
                      alt="Google Play"
                      width={12}
                      height={12}
                    />
                    Google Play
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center py-8 text-muted-foreground">
          © 2024 Do-Healthy. All rights reserved.
        </div>
      </footer>
    </Container>
  );
}
