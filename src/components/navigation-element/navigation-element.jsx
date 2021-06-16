import React from 'react';
import classnames from 'classnames';
import {PropTypes} from 'prop-types';
import {NavigationType} from '../../const';

const NavigationElement = (props) => {
  const {name, url, navigationType} = props;

  const navigationElementClass = classnames(
    {"navigation__element--header": navigationType === NavigationType.HEADER},
    {"navigation__element--footer": navigationType === NavigationType.FOOTER},
    `navigation__element`
  );

  return (
    <li className={navigationElementClass}> 
      <a className="navigation__link" href={url}>
        {name}
      </a>
    </li>
  );
};

NavigationElement.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  navigationType: PropTypes.string.isRequired
};

export default NavigationElement;