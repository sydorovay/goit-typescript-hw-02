import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => (
  <div onClick={() => onImageClick(image)}>
    <img className={css.imageCardImg} src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;