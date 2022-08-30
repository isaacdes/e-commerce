import React from "react";
import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

/**
 * to make the backdrop of the modal
 * @param {*} props it has an onClick to close the modal
 * @returns it renders a the backdrop of the modal
 */
const BackDrop = (props) => {
  return <div className={classes["backdrop"]} onClick={props.onClose}></div>;
};

/**
 * To display the contents of the modal
 * @param {*} props it has children as contents
 * @returns it renders the contents of the modal
 */
const ModalOverlay = (props) => {
  return (
    <div className={classes["modal"]}>
      <div className={classes["content"]}>{props.children}</div>
    </div>
  );
};

/**
 * It gets the div element from index.html from public folder with the id of overlays
 */
const portalElement = document.getElementById("overlays");

/**
 * It is a resuable modal which uses styles from Modal.module.scss
 * @param {*} props
 * @returns It returns the modal with content and backdops
 */
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
      {}
    </>
  );
};

export default Modal;
