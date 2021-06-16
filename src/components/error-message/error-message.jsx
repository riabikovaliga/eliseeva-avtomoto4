import React from 'react';
import {ErrorType} from '../../const';

const ErrorMessage = () => {
  return (
  <span className="form__input--error">{ErrorType.EMPTY_FIELD}</span>
  )
}

export default ErrorMessage;