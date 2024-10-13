// import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick, lastImageRef }) => (
  <ul className={css.imageGallery}>
    {images.map((image, index) => {
      if (images.length === index + 1) {
        return (
          <li className={css.imageGalleryItem} key={image.id} ref={lastImageRef}>
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
      } else {
        return (
          <li className={css.imageGalleryItem} key={image.id}>
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
      }
    })}
  </ul>
);

export default ImageGallery;