import React, { FC } from 'react';

import { IInput } from 'src/utils/interface';

import './_Input.scss';

const Input: FC<IInput> = ({ type = 'text', placeholder = '', value, label, children, onChange, onClick }) => {
  return (
    <div className={label ? `formInput formInput__${label}` : 'formInput'}>
      {label ? <label className="formInput__label">{label}</label> : ''}
      <input
        className={children ? 'inputError' : ''}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        onClick={onClick}
      />
      {children}
    </div>
  );
};

export default Input;
