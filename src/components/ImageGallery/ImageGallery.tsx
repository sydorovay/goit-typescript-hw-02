import React from 'react';
import css from './ImageGallery.module.css';
import { ImageType } from '../types/types'; 

interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
  lastImageRef: React.Ref<HTMLLIElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick, lastImageRef }) => (
  <ul className={css.imageGallery}>
    {images.map((image, index) => {
      const galleryItem = (
        <li className={css.imageGalleryItem} key={image.id} ref={index === images.length - 1 ? lastImageRef : null}>
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
      return galleryItem;
    })}
  </ul>
);

export default ImageGallery;