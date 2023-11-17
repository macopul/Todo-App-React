import { RefObject, useCallback, useEffect } from 'react';

const useClickOutside = function (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
  ignoreDataSetProperty: string,
) {
  const handleClickOutside = useCallback(
    (event: any) => {
      console.log('handler invoked');
      if (
        ref.current &&
        event.target.dataset.ignoreClickOutside !== ignoreDataSetProperty &&
        !ref.current?.contains(event.target)
      ) {
        onClickOutside();
      }
    },
    [ref, ignoreDataSetProperty],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      console.log('cleaned-up');
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
