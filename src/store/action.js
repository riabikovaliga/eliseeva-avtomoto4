export const ActionType = {
  SAVE_REVIEW: `reviews/saveReview`,
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`
};

export const ActionCreator = {
  saveReview: (review) => ({
    type: ActionType.SAVE_REVIEW,
    payload: review
  }),
  openPopup: () => ({
    type: ActionType.OPEN_POPUP
  }),
  closePopup: () => ({
    type: ActionType.CLOSE_POPUP
  })
};