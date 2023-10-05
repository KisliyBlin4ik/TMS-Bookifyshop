import React, { FC } from 'react';

import 'src/scss/App.scss';

interface ILabelText {
  text1: string;
  text2: string;
  text3?: string;
}

const LabelText: FC<ILabelText> = ({ text1, text2, text3 }) => {
  return (
    <div className="post-single__detalise">
      <div>{text1}</div>
      <div>
        {text2}
        {text3 ? <>{`, ${text3}`}</> : ''}
      </div>
    </div>
  );
};

export default LabelText;
