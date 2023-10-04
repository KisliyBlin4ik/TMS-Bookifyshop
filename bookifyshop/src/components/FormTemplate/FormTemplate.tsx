import React, { FC } from 'react';

import { IPageTemplate } from 'src/interface/interface';

// import './FormTemplate.scss';

const FormTemplate: FC<IPageTemplate> = ({ customClass, title, children }) => {
  return (
    <div className={`FormTemplate${`__` + title} FormTemplate`}>
      <label>{title}</label>
      <div className={customClass}>{children}</div>
    </div>
  );
};

export default FormTemplate;
