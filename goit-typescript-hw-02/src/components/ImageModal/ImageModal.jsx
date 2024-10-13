import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <button className={css.closeButton} onClick={onClose}>
        &times;
      </button>
      {image && <img src={image.urls.regular} alt={image.alt_description} className={css.modalImage} />}
    </ReactModal>
  );
};

export default ImageModal;