import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { ScrollArea, ScrollBar } from '@/shared/ui/scroll-area';

export function DailyRecipesFeed() {
  return (
    <div className="flex flex-col bg-secondary px-8 py-12 gap-y-8">
      <h2 className="font-bold text-2xl">오늘의 추천 레시피</h2>

      <ScrollArea className="w-full">
        <ul className="flex flex-row gap-x-8 flex-nowrap max-w-7xl pb-3">
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
                <DailyRecipeCard
                  key={index}
                  imageUrl={imageUrl}
                  title={title}
                  description={description}
                  cookingTime={cookingTime}
                  calorie={calorie}
                  difficulty={difficulty}
                />
              );
            })}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
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
    <li>
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
          <div className="text-muted-foreground flex items-center gap-x-1 text-sm">
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
          <div className="text-muted-foreground flex items-center gap-x-1 text-sm">
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
          <div className="text-muted-foreground flex items-center gap-x-1 text-sm">
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
    </li>
  );
}