import React, { FC, useState } from 'react';

import { ITabMenu } from 'src/utils/interface';

import './_TabMenu.scss'

const TabMenu: FC<ITabMenu> = ({ text1, text2, text3, onChange }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
    onChange(index);
  };

  return (
    <div className="formTabMenu">
      {text1 ? (
        <div className={toggleState === 1 ? 'formTabMenu__text1 active' : 'formTabMenu__text1'} onClick={() => toggleTab(1)}>
          {text1}
        </div>
      ) : (
        ''
      )}
      {text2 ? (
      <div className={toggleState === 2 ? 'formTabMenu__text2 active' : 'formTabMenu__text2'} onClick={() => toggleTab(2)}>
          {text2}
        </div>
      ) : (
        ''
      )}
      {text3 ? (
      <div className={toggleState === 3 ? 'formTabMenu__text3 active' : 'formTabMenu__text3'} onClick={() => toggleTab(3)}>
          {text3}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TabMenu;
