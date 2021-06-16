import {nanoid} from 'nanoid';

export const NavigationItem = {
  header: {
    Auto: {
      ID: nanoid(),
      NAME: `Автомобили`,
      URL: `#`
    },
    Contacts: {
      ID: nanoid(),
      NAME: `Контакты`,
      URL: `#`
    },
    Services: {
      ID: nanoid(),
      NAME: `Услуги`,
      URL: `#`
    },
    Vacancies: {
      ID: nanoid(),
      NAME: `Вакансии`,
      URL: `#`
    }
  },
  footer: {
    Corporate: {
      ID: nanoid(),
      NAME: `Корпоративным клиентам`,
      URL: `#`
    },
    Clients: {
      ID: nanoid(),
      NAME: `Клиентам`,
      URL: `#`
    },
    CarRental: {
      ID: nanoid(),
      NAME: `Аренда авто`,
      URL: `#`
    },
    CarSharing: {
      ID: nanoid(),
      NAME: `Каршеринг`,
      URL: `#`
    },
    CarSell: {
      ID: nanoid(),
      NAME: `Как продать авто`,
      URL: `#`
    },
    TradeIn: {
      ID: nanoid(),
      NAME: `Trade-in`,
      URL: `#`
    },
    TestDrive: {
      ID: nanoid(),
      NAME: `Test drive`,
      URL: `#`
    },
  }
};

export const NavigationType = {
  HEADER: `header`,
  FOOTER: `footer`
};

export const ImageType = {
  FULL: {
    name: `FULL`,
    width: `600`,
    height: `375`
  },
  THUMBNAIL: {
    name: `THUMBNAIL`,
    width: `128`,
    height: `80`
  }
};

export const FeatureItem = {
  transmission: {
    ID: nanoid(),
    NAME: `Трансмиссия`,
    NAME_EN: `transmission`
  },
  power: {
    ID: nanoid(),
    NAME: `Мощность двигателя, л.с.`,
    NAME_EN: `power`
  },
  type: {
    ID: nanoid(),
    NAME: `Тип двигателя`,
    NAME_EN: `type`
  },
  wheels: {
    ID: nanoid(),
    NAME: `Привод`,
    NAME_EN: `wheelsDrive`
  },
  size: {
    ID: nanoid(),
    NAME: `Объем двигателя, л`,
    NAME_EN: `size`
  },
  torque: {
    ID: nanoid(),
    NAME: `Макс. крутящий момент`,
    NAME_EN: `torque`
  },
  cylinders: {
    ID: nanoid(),
    NAME: `Количество цилиндров`,
    NAME_EN: `cylinders`
  }
};

export const ButtonType = {
  PREVIOUS: `PREVIOUS`,
  NEXT: `NEXT`
};

export const RecommendRating = 3;

export const TabButtonType = {
  DETAILED_FEATURES: `detailed-features`,
  REVIEWS: `reviews`,
  CONTACTS: `contacts`
};

export const STAR_NUMBER = 5;

export const STAR_ARRAY = Array.from(Array(STAR_NUMBER).keys(), (_,x) => x + 1)

export const StarType = {
  active: {
    NAME: `active`,
    SRC: `../img/icon-star-active.svg`
  },
  inactive: {
    NAME: `inactive`,
    SRC: `../img/icon-star-inactive.svg`
  }
};

export const ErrorType = {
  EMPTY_FIELD: `Пожалуйста, заполните поле`
};

export const RequiredField = {
  COMMENT: `comment`,
  AUTHOR: `author`
  
};

export const Key = {
  ESC: 27
}

export const MAX_RATING = 5;
