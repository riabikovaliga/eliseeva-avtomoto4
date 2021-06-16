import React from 'react';
import {reviewPropTypes} from '../../utils/props-validation';
import {
  RecommendRating,
  MAX_RATING
} from '../../const';
import {getHumanDateFormat} from '../../utils/day';
import {nanoid} from 'nanoid';

const Review = ({review}) => {
  const {author, date, advantages, disadvantages, comment, rating} = review;

  const renderStarRating = () => {
    let starsList = [];
    for (let i = 0; i < rating; i++) {
      starsList.push(<span key={nanoid()} className="rating__star rating__star--active"></span>)
    }
    for (let i = 0; i < MAX_RATING - rating; i++) {
      starsList.push(<span key={nanoid()} className="rating__star rating__star--inactive"></span>)
    }
    return starsList;
  }

  const renderRecommends = () => {
    if (rating >= RecommendRating) {
      return <p className="review__recommends">Советует</p>
    }
  }

  return (
    <li className="reviews__item review">
      <h3 className="review__author">{author}</h3>
      <div className="review__text review-text">
        <h4 className="review-text__heading review-text__heading--advantages">Достоинства</h4>
        <p className="review-text__text review-text__text--advantages">{advantages}</p>
        <h4 className="review-text__heading review-text__heading--disadvantages">Недостатки</h4>
        <p className="review-text__text review-text__text--disadvantages">{disadvantages}</p>
        <h4 className="review-text__heading review-text__heading--comment">Комментарий</h4>
        <p className="review-text__text review-text__text--comment">{comment}</p>
      </div>
      <div className="review__rating rating">
        {renderStarRating()}
      </div>
      {renderRecommends()}
      <p className="review__date">{getHumanDateFormat(date)}</p>
      <button className="review__reply">Ответить</button>
    </li>
  )
}

Review.propTypes = {
  review: reviewPropTypes
};

export default Review;