declare module 'react-modal' {
  import { Component } from 'react';

  interface ModalProps {
    isOpen: boolean;
    onRequestClose?: () => void;
    contentLabel?: string;
    ariaHideApp?: boolean;
    appElement?: HTMLElement | null;
    shouldCloseOnOverlayClick?: boolean;
    style?: {
      overlay?: React.CSSProperties;
      content?: React.CSSProperties;
    };
    className?: string;
    overlayClassName?: string;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
  }

  class Modal extends Component<ModalProps> {}

  export default Modal;
  export function setAppElement(element: string | HTMLElement): void;
}