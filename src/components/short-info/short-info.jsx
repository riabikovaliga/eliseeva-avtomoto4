import React from 'react';
import {useSelector} from 'react-redux';

const ShortInfo = () => {
  const cars = useSelector((state) => state.cars);
  const {name, fuel, transmissionShort, power, size, price, oldPrice} = cars[0];

  return (
    <section className="main__short-info short-info">
      <h2 className="short-info__heading">{name}</h2>
      <ul className="short-info__short-features short-features">
        <li className="short-features__item short-features__item--fuel">{fuel}</li>
        <li className="short-features__item short-features__item--transmission">{transmissionShort}</li>
        <li className="short-features__item short-features__item--power">{power} л.с.</li>
        <li className="short-features__item short-features__item--size">{size} л</li>
      </ul>
      <div className="short-info__price price">
        <span className="price price--new">{price}</span>
        <span className="price price--old">{oldPrice}</span>
      </div>
      <button className="short-info__request">ОСТАВИТЬ ЗАЯВКУ</button>
      <button className="short-info__loan">В КРЕДИТ ОТ 11 000 ₽</button>
    </section>
  )
};

export default ShortInfo;