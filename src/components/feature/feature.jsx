import React from 'react';
import PropTypes from 'prop-types';

const Feature = (props) => {
  const {name, value} = props;

  return (
    <li className="detailed-features__item feature">
      <span className="feature__name">{name}</span>
      <span className="feature__value">{value}</span>
    </li>
  )
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Feature;