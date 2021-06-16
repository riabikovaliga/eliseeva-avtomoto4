import React from 'react';
import Slider from '../slider/slider';
import ShortInfo from '../short-info/short-info';
import DetailedInfo from '../detailed-info/detailed-info';

const Main = () => {
  return (
    <main className="page__main main">
      <h1 className="main__heading visually-hidden">Описание автомобиля</h1>
      <Slider />
      <ShortInfo />
      <DetailedInfo />
    </main>
  )
}

export default Main;