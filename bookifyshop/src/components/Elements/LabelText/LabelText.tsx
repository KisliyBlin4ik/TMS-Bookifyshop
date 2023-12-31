import React, { FC } from 'react';
import { ILabelText } from 'src/utils/interface';

const LabelText: FC<ILabelText> = ({ text1, text2, text3 }) => {
  return (
    <div className="labelText__detalise">
      <div>{text1}</div>
      <div>
        {text2}
        {text3 ? <>{`, ${text3}`}</> : ''}
      </div>
    </div>
  );
};

export default LabelText;
