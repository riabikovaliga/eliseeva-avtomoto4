import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Review from '../reivew/review';
import NewReview from '../new-review/new-reivew';

const ReviewsTab = () => {
  const reviews = useSelector((state) => state.reviews);
  const popupToBeOpen = useSelector((state) => state.popupToBeOpen);
  const dispatch = useDispatch();

  const renderReviews = () => {
    return reviews.map((review) => {
      return <Review 
        key={review.id}
        review={review}
      />
    });
  }

  const renderNewReviewPopup = popupToBeOpen ?  <NewReview /> : ``

  const handleAddReviewClick = () => {
    onOpenPopup();
  };

  const onOpenPopup = () => {
    dispatch(ActionCreator.openPopup())
    document.body.style.overflow = 'hidden';
  }

  return (
    <section className="detailed-info__reivews reviews">
      <h3 className="reviews__heading visually-hidden">Отзывы</h3>
      <ul className="reviews__list"> 
        {renderReviews()}
      </ul>
      <button 
        className="reviews__add-review"
        onClick={handleAddReviewClick}
      >
        ОСТАВИТЬ ОТЗЫВ
      </button>
      {renderNewReviewPopup}
    </section>
  )
};

export default ReviewsTab;
