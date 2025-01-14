import { CategoryRecipesFeed } from '@/widgets/category-recipes-feed';
import { DailyRecipesFeed } from '@/widgets/daily-recipes-feed';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <DailyRecipesFeed />
      <CategoryRecipesFeed />
      <Footer />
    </>
  );
}
