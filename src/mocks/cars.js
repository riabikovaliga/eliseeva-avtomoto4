import {nanoid} from 'nanoid';

export const cars = [
  {
    id: 1,
    name: `Марпех 11`,
    price: `2 300 000 ₽`,
    oldPrice: `2 400 000 ₽`,
    fuel: `бензин`,
    transmission: `Роботизированная`,
    transmissionShort: `механика`,
    power: `249`,
    type: `Бензиновый`,
    wheelsDrive: `Полный`,
    size: `2.4`,
    torque: `370/4500`,
    cylinders: `4`,
    images: [
      {
        id: nanoid(),
        alt: `Внешний вид автомобиля`,
        FULL: `./img/slider-exterior.jpg`,
        THUMBNAIL: `./img/thumbnail-exterior.jpg`
      },
      {
        id: nanoid(),
        alt: `Салон автомобиля`,
        FULL: `./img/slider-interior.jpg`,
        THUMBNAIL: `./img/thumbnail-interior.jpg`
      },
      {
        id: nanoid(),
        alt: `Приборная панель автомобиля`,
        FULL: `./img/slider-speed.jpg`,
        THUMBNAIL: `./img/thumbnail-speed.jpg`
      }
    ]
  }
];