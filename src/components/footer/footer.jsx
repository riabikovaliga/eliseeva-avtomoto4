import React from 'react';
import {NavigationType} from '../../const';
import Navigation from '../navigation/navigation';

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <div className="footer__container">
        <Navigation navigationType={NavigationType.FOOTER} />
      </div>
    </footer>
  )
}

export default Footer;