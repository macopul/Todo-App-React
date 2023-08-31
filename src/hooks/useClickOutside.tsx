import { RefObject, useEffect } from 'react';

const useClickOutside = function (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
  ignoreDataSetProperty: string,
) {
  const handleClickOutside = (event: any) => {
    if (
      ref.current &&
      !(event.target.dataset.ignoreClickOutside === ignoreDataSetProperty) &&
      !ref.current?.contains(event.target)
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
};

export default useClickOutside;
