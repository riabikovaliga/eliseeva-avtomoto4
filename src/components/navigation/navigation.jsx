import React from 'react';
import classnames from 'classnames';
import {PropTypes} from 'prop-types';
import NavigationElement from '../navigation-element/navigation-element';
import {
  NavigationType,
  NavigationItem
} from '../../const';

const Navigation = (props) => {
  const {navigationType} = props;

  const navigationClass = classnames(
    {"header__navigation": navigationType === NavigationType.HEADER},
    {"footer__navigation": navigationType === NavigationType.FOOTER},
    `navigation`
  );

  const navigationItemsList = Object.values(NavigationItem[navigationType]);

  const renderNavigationItems = () => {
    return navigationItemsList.map((item) => {
      return <NavigationElement 
        key={item.ID}
        name={item.NAME}
        url={item.URL}
        navigationType={navigationType}
        />
    })
  };

  return (
    <nav className={navigationClass}>
      <ul className="navigation__list">
        {renderNavigationItems()}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  navigationType: PropTypes.string.isRequired
}

export default Navigation;