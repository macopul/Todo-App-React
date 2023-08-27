import { RefObject, useEffect } from 'react';

const UseClickOutside = function (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
  ignoreDataSetProperty: string,
) {
  const handleClickOutside = (event: any) => {
    if (
      ref.current &&
      (!event.target.dataset[ignoreDataSetProperty] || event.target.id !== ref.current.id) &&
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

export default UseClickOutside;
