import { X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { useControlled } from '@/shared/hooks';
import { Button } from '@/shared/ui/button';
import { DropZone } from '@/shared/ui/drop-zone';
import { cn, fileToBase64 } from '@/shared/utils';

type DropZoneWithPreviewProps = Omit<React.ComponentProps<typeof DropZone>, 'onDrop' | 'accept'> & {
  defaultValue?: File | string;
  value?: File | string | null;
  onValueChange?: (value: File | null) => void;
};

export function DropZoneWithPreview({
  value: valueProps,
  onValueChange: onValueChangeProps,
  defaultValue,
  className,
  ...props
}: DropZoneWithPreviewProps) {
  const [value, setValue, isControlled] = useControlled({
    controlled: valueProps,
    default: defaultValue,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(
    typeof value === 'string' ? value : null,
  );

  const onValueChange = useCallback(
    (nextValue: File | null) => {
      setValue(nextValue);
      onValueChangeProps?.(nextValue);
    },
    [onValueChangeProps, setValue],
  );

  const handleDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const base64 = await fileToBase64(file);
      setPreviewUrl(base64);
      onValueChange?.(file);
    }
  };

  const handleDelete = () => {
    if (!isControlled) setValue(null);
    onValueChangeProps?.(null);
  };

  useEffect(() => {
    if (value === null) {
      setPreviewUrl(null);
    } else if (value instanceof File) {
      fileToBase64(value).then(setPreviewUrl);
    } else if (typeof value === 'string') {
      setPreviewUrl(value);
    }
  }, [value]);

  return (
    <div className={cn('relative grid', className)}>
      {previewUrl ? (
        <div className="group relative min-h-[160px] w-full overflow-hidden rounded-lg border">
          <Image fill src={previewUrl} alt="이미지 미리보기" className="object-cover" />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleDelete}
          >
            <span className="sr-only">삭제</span>
            <X className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      ) : (
        <DropZone multiple={false} accept={{ 'image/*': [] }} onDrop={handleDrop} {...props} />
      )}
    </div>
  );
}
