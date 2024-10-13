import React from 'react';
import css from './ImageGallery.module.css';
import { ImageType } from '../types/types';

interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
  lastImageRef?: React.Ref<HTMLLIElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick, lastImageRef }) => (
  <ul className={css.imageGallery}>
    {images.map((image, index) => {
      const isLastImage = index === images.length - 1;
      return (
        <li
          className={css.imageGalleryItem}
          key={image.id}
          ref={isLastImage && lastImageRef ? lastImageRef : undefined}
        >
          <div>
            <img
              className={css.imageGalleryImg}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </div>
        </li>
      );
    })}
  </ul>
);

export default ImageGallery;