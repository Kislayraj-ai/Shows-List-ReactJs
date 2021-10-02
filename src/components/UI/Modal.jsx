import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      {props.children}
    </div>
  );
};
const VideoModal = (props) => {
  return createPortal(
    <Modal onClose={props.onClose}>{props.children}</Modal>,
    document.getElementById('backgdrop-overlay')
  );
};

export default VideoModal;
