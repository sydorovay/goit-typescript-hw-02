import React from 'react';
import css from './ImageCard.module.css';
import { ImageType } from '../types/types';

interface ImageCardProps {
  image: ImageType;
  onImageClick: (image: ImageType) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => (
  <div className={css.imageCard} onClick={() => onImageClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} className={css.image} />
  </div>
);

export default ImageCard;