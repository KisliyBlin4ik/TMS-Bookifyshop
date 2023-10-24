import React, { FC } from 'react';

import { IPageTemplate } from 'src/utils/interface';

const FormTemplate: FC<IPageTemplate> = ({ customClass, title, children }) => {
  return (
    <div
      className={
        title ? `formTemplate${`__` + title} formTemplate` : 'formTemplate'
      }
    >
      <label className="formTemplate__label">{title}</label>
      <div className={customClass}>{children}</div>
    </div>
  );
};

export default FormTemplate;
