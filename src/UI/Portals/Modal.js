import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
const portals = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portals)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portals
      )}
    </Fragment>
  );
};

export default Modal;
