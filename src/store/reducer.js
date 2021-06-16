import {ActionType} from './action';
import {cars} from '../mocks/cars';
import {reviews} from '../mocks/reviews';

const initialState = {
  cars: cars,
  reviews: reviews,
  popupToBeOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      }
    case ActionType.OPEN_POPUP:
      return {
        ...state,
        popupToBeOpen: true
      }
    case ActionType.CLOSE_POPUP:
      return {
        ...state,
        popupToBeOpen: false
      }
    default: 
      return state;
  }
}

export {reducer};