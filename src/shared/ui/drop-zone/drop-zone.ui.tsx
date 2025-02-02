import { UploadCloud } from 'lucide-react';
import { type DropzoneProps as _DropzoneProps, useDropzone } from 'react-dropzone';

import { cn } from '@/shared/utils';

type DropZoneProps = Omit<_DropzoneProps, 'children'> &
  Pick<React.ComponentProps<'div'>, 'className'>;

export function DropZone({ className, disabled, ...props }: DropZoneProps) {
  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    disabled,
    ...props,
  });

  return (
    <div
      className={cn(
        'flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-4 py-8 text-center transition-colors',
        isDragActive && 'border-primary bg-muted/80',
        !disabled && 'hover:bg-muted/80',
        disabled && 'cursor-not-allowed opacity-60',
        className,
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <UploadCloud className="mb-4 h-10 w-10 text-muted-foreground" />
      <div className="space-y-1">
        <p className="break-keep text-sm font-medium">
          {isDragActive ? '여기에 놓아주세요' : '파일을 드래그하거나 클릭하여 업로드하세요'}
        </p>
      </div>
    </div>
  );
}
