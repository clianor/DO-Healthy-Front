import { z } from 'zod';

const ImageSchema = z
  .union([z.instanceof(File), z.string()])
  .nullable()
  .superRefine((val, ctx) => {
    if (val === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '이미지를 선택해주세요',
      });
    }
  });

export const IngredientSchema = z.object({
  name: z.string().trim().min(1, {
    message: '재료 이름을 입력해주세요',
  }),
  quantity: z.string().trim().min(1, {
    message: '재료 양을 입력해주세요',
  }),
});

export const CookingStepSchema = z.object({
  image: ImageSchema,
  content: z.string().trim().min(1, {
    message: '단계 설명을 입력해주세요',
  }),
});

export const CreateRecipeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, {
      message: '레시피 제목을 입력해주세요',
    })
    .default(''),
  thumbnail: ImageSchema.default(null),
  cookingTime: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
      required_error: '레시피 소요 시간을 입력해주세요',
    })
    .min(0, {
      message: '레시피 소요 시간을 입력해주세요',
    }),
  calories: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
    })
    .min(0, {
      message: '칼로리를 입력해주세요',
    })
    .optional(),
  servings: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
      required_error: '분량을 입력해주세요',
    })
    .min(0, {
      message: '분량을 입력해주세요',
    }),
  description: z
    .string()
    .trim()
    .min(1, {
      message: '레시피에 대한 소개를 입력해주세요',
    })
    .default(''),
  tags: z.array(z.string().trim()).default([]),
  ingredients: z.array(IngredientSchema),
  cookingSteps: z.array(CookingStepSchema),
  carbohydrate: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
    })
    .optional(),
  protein: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
    })
    .optional(),
  fat: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
    })
    .optional(),
  sodium: z
    .number({
      invalid_type_error: '올바른 값을 입력해주세요',
    })
    .optional(),
});
export type CreateRecipe = z.infer<typeof CreateRecipeSchema>;
