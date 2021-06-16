import React, {useState} from 'react';
import classnames from 'classnames';
import {useSelector} from 'react-redux';
import {
  ImageType,
  ButtonType
} from '../../const';
import ImageItem from '../image-item/image-item';

const Slider = () => {
  const cars = useSelector((state) => state.cars);
  const {images} = cars[0];

  const [activeSlideImage, setActiveSlideImage] = useState({
    id: images[0].id,
    index: 0,
    isFirstImage: true,
    isLastImage: false
  });

  const previousButtonClass = classnames(
    `slider__button`,
    {"slider__button--previous-active": !activeSlideImage.isFirstImage},
    {"slider__button--previous-inactive": activeSlideImage.isFirstImage}
  );

  const nextButtonClass = classnames(
    `slider__button`,
    {"slider__button--next-active": !activeSlideImage.isLastImage},
    {"slider__button--next-inactive": activeSlideImage.isLastImage}
    );

  const renderThumbnailsList = () => {
    return images.map((image) => {
      return <ImageItem 
        key={image.id} 
        type={ImageType.THUMBNAIL.name}
        image={image}
      /> 
    });
  };

  const renderSlideImage = () => {
    const selectedSlideImage = images.find((image) => {
      return image.id === activeSlideImage.id
    });
    return <ImageItem 
      key={selectedSlideImage.id} 
      type={ImageType.FULL.name}
      image={selectedSlideImage}
    /> 
  };

  const getTargetImage = (buttonType) => {
    if (buttonType === ButtonType.NEXT) {
      return images[activeSlideImage.index + 1]
    } else if (buttonType === ButtonType.PREVIOUS) {
      return images[activeSlideImage.index - 1]
    }
  };

  const isExtremeImage = (buttonType, imageIndex) => {
    if (buttonType === ButtonType.NEXT) {
      return (imageIndex === images.length - 1)
    } else if (buttonType === ButtonType.PREVIOUS) {
      return (imageIndex === 0)
    }
  }

  const changeActiveSlide = (targetImage) => {
    const targetImageIndex = images.indexOf(targetImage);
    setActiveSlideImage({
      ...activeSlideImage,
      id: targetImage.id,
      index: targetImageIndex,
      isFirstImage: isExtremeImage(ButtonType.PREVIOUS, targetImageIndex),
      isLastImage: isExtremeImage(ButtonType.NEXT, targetImageIndex)
    });
  };

  const handleButtonClick = (buttonType) => {
    if (
        (buttonType === ButtonType.NEXT && !activeSlideImage.isLastImage) || 
        (buttonType === ButtonType.PREVIOUS && !activeSlideImage.isFirstImage)
      ) {
      const targetImage = getTargetImage(buttonType);
      changeActiveSlide(targetImage);
    } 
  }

  return (
    <section className="main__slider slider">
      <h2 className="slider__heading visually-hidden">Фотографии автомобиля</h2>
      <div className="slider__slides">
        {renderSlideImage()}
      </div>
      <div className="slider__thumbnails-wrapper">
        <button 
          className={previousButtonClass}
          onClick={() => handleButtonClick(ButtonType.PREVIOUS)} 
        >
            <span className="visually-hidden">Назад</span>
        </button>
        <div className="slider__thumbnails">
          {renderThumbnailsList()}
        </div>
        <button 
          className={nextButtonClass}
          onClick={() => handleButtonClick(ButtonType.NEXT)}
        >
          <span className="visually-hidden">Вперед</span>
        </button>
      </div>
    </section>
  )
}

export default Slider;