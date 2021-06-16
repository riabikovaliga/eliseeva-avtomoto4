import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid';
import classnames from 'classnames';
import ErrorMessage from '../error-message/error-message';
import Star from '../star/star';
import {
  RequiredField,
  STAR_ARRAY,
  Key
} from '../../const';

const NewReview = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    author: ``,
    advantages: ``,
    disadvantages: ``,
    comment: ``,
    rating: 0,
    ratingOnHover: 0,
    isFormInvalid: false
  });

  const popupContentRef = useRef(null);
  const ratingContainerRef = useRef(null);

  useEffect(() => {
    document.addEventListener(`keydown`, escButtonClickHandler);
    document.addEventListener(`click`, outsidePopupClickHandler);
    return (
      () => {
        document.removeEventListener(`keydown`, escButtonClickHandler);
        document.removeEventListener(`click`, outsidePopupClickHandler);
      }
    )
  });

  const isFormValid = formData.author !== `` && formData.comment !==``

  const composeNewReview = () => {
    return {
       ...formData,
       id: nanoid(),
       carId: 1,
       date: new Date(),
     }
   }

  const setInvalidStatus = () => {
    setFormData({
      ...formData,
      isFormInvalid: true
    })
  }

  const getRequiredFieldClass = (fieldName) => {
    return classnames(
      {"form__input--invalid" : formData.isFormInvalid && formData[fieldName] === ``},
      `form__input--${fieldName}`,
      `form__input`
    )
  }

  const renderRatingStars = () => {
    return STAR_ARRAY.map((starIndex) => {
      return <Star
        key={nanoid()}
        starIndex={starIndex}
        rating={formData.rating}
        ratingOnHover={formData.ratingOnHover}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onSelectRating={onSelectRating}
       />
    })
  }

  const renderErrorMessage = (fieldName) => {
    return Object.values(RequiredField).map((requiredFieldName) => {
      if (fieldName === requiredFieldName &&
          formData[fieldName] === `` &&
          formData.isFormInvalid
        ) {
        return <ErrorMessage key={nanoid()} />;
      } else {
        return ``;
      }
    })
  };

  const onMouseEnter = (index) => {
    setFormData({
      ...formData,
      ratingOnHover: index
    })
  };

  const onMouseLeave = () => {
    setFormData({
      ...formData,
      ratingOnHover: 0
    })
  };

  const onSelectRating = (index) => {
    setFormData({
      ...formData,
      rating: index
    })
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      const newReviewData = composeNewReview();
      onSubmitReview(newReviewData);
      onClosePopup();
    } else {
      setInvalidStatus();
    }
  };

  const handleCloseButtonClick = () => {
    onClosePopup();
  };

  const escButtonClickHandler = (evt) => {
    if (evt.keyCode === Key.ESC) {
      onClosePopup()
    }
  };

  const outsidePopupClickHandler = (evt) => {
    if (
      popupContentRef.current && 
      !popupContentRef.current.contains(evt.target) &&
      !Object.values(evt.path).includes(ratingContainerRef.current)
    ) {
      onClosePopup();
    }
  };

  const onClosePopup = () => {
    dispatch(ActionCreator.closePopup())
    document.body.style.overflow = 'scroll'
  };

  const onSubmitReview = (newReviewData) => {
    dispatch(ActionCreator.saveReview(newReviewData))
  };
  
  return (
    <section className="main__new-review new-review">
      <div 
        className="new-review__popup" 
        ref={popupContentRef}
      >
        <h1 className="new-review__heading">Оставить отзыв</h1>
        <form 
          className="new-review__form form"
          action=""
          onSubmit={handleFormSubmit}
        >
          <div className="form__required-wrapper form__required-wrapper--author">
            <label className="form__label form__label--author visually-hidden" htmlFor="author">Имя</label>
            <input 
              className={getRequiredFieldClass(RequiredField.AUTHOR)} 
              type="text" 
              name="author" 
              id="author" 
              placeholder="Имя" 
              value={formData.author}
              onInput={handleInputChange}
              autoFocus
            />
            {renderErrorMessage(RequiredField.AUTHOR)}
          </div>
          <div className="form__rating form-rating">
            <span className="form-rating__text">Оцените товар:</span>
            <div className="form-rating__stars" ref={ratingContainerRef}>
              {renderRatingStars()}
            </div>
          </div>
          <label className="form__label form__label--advantages visually-hidden" htmlFor="advantages">Достоинства</label>
          <input 
            className="form__input form__input--advantages" 
            type="text" 
            name="advantages" 
            id="advantages" 
            placeholder="Достоинства" 
            value={formData.advantages}
            onInput={handleInputChange}
          />
          <label className="form__label form__label--disadvantages visually-hidden" htmlFor="disadvantages">Недостатки</label>
          <input 
            className="form__input form__input--disadvantages" 
            type="text" 
            name="disadvantages" 
            id="disadvantages" 
            placeholder="Недостатки" 
            value={formData.disadvantages}
            onInput={handleInputChange}
          />
          <div className="form__required-wrapper form__required-wrapper--comment">
            <label className="form__label form__label--comment visually-hidden" htmlFor="comment">Комментарий</label>
            <textarea 
              className={getRequiredFieldClass(RequiredField.COMMENT)} 
              rows="3" 
              name="comment" 
              id="comment" 
              placeholder="Комментарий" 
              value={formData.comment}
              onInput={handleInputChange}
            />
            {renderErrorMessage(RequiredField.COMMENT)}
          </div>
          <button 
            className="form__submit" 
            type="submit"
          >
            ОСТАВИТЬ ОТЗЫВ
          </button>

        </form>
        <button 
          className="new-review__close-button"
          onClick={handleCloseButtonClick}
        >
          <span className="new_review__close-text visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  )
}

export default NewReview