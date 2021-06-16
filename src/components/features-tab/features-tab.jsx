import React from 'react';
import {useSelector} from 'react-redux';
import Feature from '../feature/feature';
import {FeatureItem} from '../../const';

const FeaturesTab = () => {
  const cars = useSelector((state) => state.cars)
  const car = cars[0];

  const featuresList = Object.values(FeatureItem);

  const renderFeaturesList = () => {
    return featuresList.map((item) => {
      return <Feature
        key={item.ID}
        name={item.NAME}
        value={car[item.NAME_EN]}
      />
    })
  }

  return (
    <section className="detailed-info__features detailed-features">
      <h3 className="detailed-features visually-hidden">Детальные характеристики</h3>
      <ul className="detailed-features__list">
        {renderFeaturesList()}
      </ul>
    </section>
  )
};

export default FeaturesTab;