import { RefObject, useCallback, useEffect } from 'react';

const useClickOutside = (
  onClickOutside: () => void,
  ref: RefObject<HTMLElement>,
  ignoreDataSetProperty = 'ignoreClickOutside',
) => {
  const handleClickOutside = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      if (
        ref.current &&
        !ref.current?.contains(event.target) &&
        !event.target.dataset[ignoreDataSetProperty]
      ) {
        onClickOutside();
      }
    },
    [ref, onClickOutside, ignoreDataSetProperty],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
