import React, { FC } from 'react';

import { IRating } from 'src/utils/interface';

import { ReactComponent as EmptyStarIcon } from 'src/assets/icons/EmptyStarIcon.svg';
import { ReactComponent as FilledStarIcon } from 'src/assets/icons/FilledStarIcon.svg';

const Rating: FC<IRating> = ({ rating }) => {
  const maxRating = [1, 2, 3, 4, 5];

  return (
    <div className="formRating">
      {maxRating.map((item, index) => (
        <div key={index}>
          {index < +rating ? <FilledStarIcon /> : <EmptyStarIcon />}
        </div>
      ))}
    </div>
  );
};

export default Rating;
