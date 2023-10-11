import React, { FC } from 'react';

import { ReactComponent as EmptyStarIcon } from '../../assets/icons/EmptyStarIcon.svg';
import { ReactComponent as FilledStarIcon } from '../../assets/icons/FilledStarIcon.svg';

import 'src/scss/App.scss';
interface IRating {
  rating: string;
}

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
