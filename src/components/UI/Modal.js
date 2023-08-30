import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from './Modal.module.css';

const portalElement = document.getElementById("overlays");

const ModalOveriay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOveriay>{props.children}</ModalOveriay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
