import { useCallback, useState } from 'react';

interface UseControlledProps<T> {
  controlled: T | undefined;
  default: T | undefined;
}

export function useControlled<T>({ controlled, default: defaultValue }: UseControlledProps<T>) {
  const isControlled = controlled !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<T | undefined>(defaultValue);

  const value = isControlled ? controlled : uncontrolledValue;

  const setValue = useCallback(
    (nextValue: T | undefined) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
    },
    [isControlled],
  );

  return [value, setValue, isControlled] as const;
}
