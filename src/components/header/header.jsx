import React from 'react';
import Navigation from '../navigation/navigation';
import {NavigationType} from '../../const';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__container">
        <img className="header__logo" src="../img/logo-avtomoto.svg" width="134" height="55" alt="Салон Avto-Moto"/>
        <Navigation navigationType={NavigationType.HEADER} />
      </div>
    </header>
  )
};

export default Header;