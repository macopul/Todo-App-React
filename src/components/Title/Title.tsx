import React from 'react';
import { forwardRef } from 'react';

type TitleType = {
  id: string;
  classname?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  readonly: boolean;
};

const Title = forwardRef(
  (
    { id, classname, value, onChange, onClick, readonly }: TitleType,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        className={classname}
        type="text"
        value={value}
        onChange={onChange}
        readOnly={readonly}
        onClick={onClick}
      />
    );
  },
);
export default Title;
