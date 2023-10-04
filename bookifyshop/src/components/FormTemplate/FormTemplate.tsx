import React, { FC } from 'react';

import { IPageTemplate } from 'src/interface/interface';

import 'src/scss/App.scss';

const FormTemplate: FC<IPageTemplate> = ({ customClass, title, children }) => {
  return (
    <div className={`FormTemplate${`__` + title} FormTemplate`}>
      <label className='FormTemplate__label'>{title}</label>
      <div className={customClass}>{children}</div>
    </div>
  );
};

export default FormTemplate;
