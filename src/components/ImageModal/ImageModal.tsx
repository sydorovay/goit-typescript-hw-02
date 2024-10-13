import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageType } from '../types/types';

interface ImageModalProps {
  image: ImageType | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <h2 className={css.title}>{image.alt_description}</h2>
        <img className={css.image} src={image.urls.regular} alt={image.alt_description} />
        <button className={css.closeButton} onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
