import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Container } from '@/shared/ui/container';
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area';

export function DailyRecipesFeed() {
  return (
    <Container className="flex flex-col gap-y-8 bg-secondary py-12">
      <h2 className="text-2xl font-bold">오늘의 추천 레시피</h2>

      <ScrollArea className="w-full">
        <ul className="flex flex-row flex-nowrap gap-x-8 pb-3">
          {new Array(8)
            .fill({
              imageUrl: 'https://picsum.photos/id/63/350/200',
              title: '카페라떼',
              description: '에스프레소에 스팀 밀크를 부어 만드는 부드러운 커피 음료',
              cookingTime: 30,
              calorie: 450,
              difficulty: '초급',
            })
            .map(({ imageUrl, title, description, cookingTime, calorie, difficulty }, index) => {
              return (
                <li key={index}>
                  <DailyRecipeCard
                    imageUrl={imageUrl}
                    title={title}
                    description={description}
                    cookingTime={cookingTime}
                    calorie={calorie}
                    difficulty={difficulty}
                  />
                </li>
              );
            })}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Container>
  );
}

type DailyRecipeCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  cookingTime: number;
  calorie: number;
  difficulty: '초급' | '중급' | '고급';
};

function DailyRecipeCard({
  title,
  description,
  imageUrl,
  cookingTime,
  calorie,
  difficulty,
}: DailyRecipeCardProps) {
  return (
    <Card className="w-96 overflow-hidden">
      <CardHeader className="relative h-[200px] p-0">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshIRshHRsdIR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          fill
        />
      </CardHeader>
      <CardContent className="mt-4">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
          <Image
            className="dark:invert"
            src="/assets/svgs/time.svg"
            alt="소요시간"
            width={14}
            height={14}
            priority
          />
          <span>{cookingTime}분</span>
        </div>
        <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
          <Image
            className="dark:invert"
            src="/assets/svgs/calorie.svg"
            alt="칼로리"
            width={14}
            height={14}
            priority
          />
          <span>{calorie}kcal</span>
        </div>
        <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
          <Image
            className="dark:invert"
            src="/assets/svgs/difficulty.svg"
            alt="난이도"
            width={14}
            height={14}
            priority
          />
          <span>{difficulty}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
