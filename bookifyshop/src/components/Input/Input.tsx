import React, { FC } from 'react';

import { IInput } from 'src/interface/interface';

import './Input.scss';

const Input: FC<IInput> = ({ type, placeholder, value, label, onChange }) => {
  return (
    <div className={label ? `formInput formInput__${label}` : 'formInput'}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default Input;
