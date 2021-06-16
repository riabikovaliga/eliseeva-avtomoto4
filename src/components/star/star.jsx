import React from 'react';
import {PropTypes} from 'prop-types';
import {StarType} from '../../const';

const Star = (props) => {
  const {starIndex, rating, ratingOnHover, onMouseEnter, onMouseLeave, onSelectRating} = props;

  const getStarImage = () => {
    if (ratingOnHover >= starIndex) {
      return StarType.active.SRC;
    } else if (!ratingOnHover && rating >= starIndex) {
      return StarType.active.SRC;
    } else {
      return StarType.inactive.SRC;
    }
  }

  return (
    <img 
      className="form-rating__star"
      src={getStarImage()} 
      width="27" 
      height="27" 
      alt="Звезда" 
      tabIndex="0"
      onMouseEnter={() => onMouseEnter(starIndex)}
      onMouseLeave={onMouseLeave}
      onClick = {() => onSelectRating(starIndex)}
    />
  )
}

Star.propTypes = {
  starIndex: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  ratingOnHover: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSelectRating: PropTypes.func.isRequired,
};

export default Star;