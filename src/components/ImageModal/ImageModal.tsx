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
      isOpen={true} // modal завжди відкритий, поки є зображення
      onRequestClose={onClose} 
      contentLabel="Image Modal"
      ariaHideApp={false} // Додано для уникнення помилок з aria
    >
      <h2>{image.alt_description}</h2>
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;