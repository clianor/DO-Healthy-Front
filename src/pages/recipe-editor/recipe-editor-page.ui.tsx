import { PropsWithChildren } from 'react';

import { CreateRecipeForm } from '@/features/create-recipe';
import { Container } from '@/shared/ui/container';

export function CreateRecipeEditorPage() {
  return (
    <EditorPageWrapper>
      <CreateRecipeForm />
    </EditorPageWrapper>
  );
}

export function UpdateRecipeEditorPage() {
  return <EditorPageWrapper>{/* <UpdateRecipeForm slug={slug} /> */}</EditorPageWrapper>;
}

function EditorPageWrapper({ children }: PropsWithChildren) {
  return (
    <div className="bg-secondary py-8">
      <Container className="flex flex-col gap-y-6 rounded-lg bg-background py-6 shadow">
        <h2 className="text-2xl font-bold">레시피 작성하기</h2>
        {children}
      </Container>
    </div>
  );
}
