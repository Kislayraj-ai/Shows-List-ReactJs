import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};
const Modal = (props) => {
  return createPortal(
    <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
    document.getElementById('backgdrop-overlay')
  );
};

export default Modal;
