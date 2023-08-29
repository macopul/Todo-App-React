import { RefObject, useEffect } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
  ignoreDataSetProperty?: string,
) {
  const handleClickOutside = (event: any) => {
    if (
      ref.current &&
      !ref.current?.contains(event.target) &&
      event.target.dataset.ignoreClickOutside !== ignoreDataSetProperty
    ) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
}
