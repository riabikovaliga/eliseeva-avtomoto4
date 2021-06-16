import React from 'react';
import classnames from 'classnames';
import {PropTypes} from 'prop-types';
import {ImageType} from '../../const';

const ImageItem = (props) => {
  const {type, image} = props;

  const imageItemClass = classnames(
    {"slider__slide": type === ImageType.FULL.name},
    {"slider__thumbnail": type === ImageType.THUMBNAIL.name}
  )

  return (
    <img 
      className={imageItemClass}
      src={image[type]}
      alt={image.alt}
      width={ImageType[type].width}
      height={ImageType[type].height}
    /> 
  )
};

ImageItem.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    FULL: PropTypes.string.isRequired,
    THUMBNAIL: PropTypes.string.isRequired
  })
  
}

export default ImageItem;