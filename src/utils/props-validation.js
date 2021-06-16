import PropTypes from 'prop-types';

export const carPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  fuel: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  transmissionShort: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  wheelsDrive: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  torque: PropTypes.string.isRequired,
  cylinders: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    FULL: PropTypes.string.isRequired,
    THUMBNAIL: PropTypes.string.isRequired
  }))
});

export const reviewPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  carId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  advantages: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
});

export const carsPropTypes = PropTypes.arrayOf(carPropTypes);

export const reviewsPropTypes = PropTypes.arrayOf(reviewPropTypes);
