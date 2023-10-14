import React, { FC } from 'react';

import { IInput } from 'src/interface/interface';

import 'src/scss/App.scss';

const Input: FC<IInput> = ({ type = 'text', placeholder = '', value, label, onChange }) => {
  return (
    <div className={label ? `formInput formInput__${label}` : 'formInput'}>
      {label ? <label className="formInput__label">{label}</label> : ''}
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
