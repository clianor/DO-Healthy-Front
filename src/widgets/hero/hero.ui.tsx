import { SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export function Hero() {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  });
  const onSubmit = (data: unknown) => {
    window.alert(JSON.stringify(data));
  };
  return (
    <section aria-label="레시피 검색" className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-accent-foreground">건강한 삶을 위한 맞춤형 레시피</h1>
      <p className="mt-4 text-xl font-medium text-muted-foreground">
        당신의 건강 상태와 목표에 맞는 최적의 식단을 찾아보세요
      </p>
      <form
        className="my-8 flex w-full max-w-3xl items-center gap-2 rounded-md border border-input p-1 shadow-sm focus-within:ring-1 focus-within:ring-ring"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="재료, 질환, 식단을 검색해보세요"
          className="h-12 border-none shadow-none focus-visible:ring-0"
          autoComplete="off"
          {...register('search', { required: true })}
        />
        <Button type="submit" size="lg" className="h-12">
          <SearchIcon className="size-4" />
          검색
        </Button>
      </form>
    </section>
  );
}
