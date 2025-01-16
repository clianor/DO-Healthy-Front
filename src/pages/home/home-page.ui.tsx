import { CategoryRecipesFeed } from '@/widgets/category-recipes-feed';
import { DailyRecipesFeed } from '@/widgets/daily-recipes-feed';
import { Hero } from '@/widgets/hero';

export function HomePage() {
  return (
    <>
      <Hero />
      <DailyRecipesFeed />
      <CategoryRecipesFeed />
    </>
  );
}
