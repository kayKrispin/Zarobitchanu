import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { modalActions } from "../../redux/modules/Modal";
import { CSSTransition } from "react-transition-group";


const Modal = ({ isOpen, content, close, width }) => {

  const div = document.createElement("div");

  useEffect(() => {
    const modalContainer = document.getElementById("modal");

    modalContainer.appendChild(div);

    //Remove modal from DOM
    return () => {
      div.removeEventListener("click", close);
      modalContainer.removeChild(div);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} timeout={500} classNames="ddd" mountOnEnter unmountOnExit>
      <div className="modal-container" onClick={close}>
        <div
          style={{ width: width }}
          className="modal_body"
          onClick={e => e.stopPropagation()}
        >
          {content}
        </div>
      </div>
    </CSSTransition>,
    div,
  );
};

export default connect(
  state => state.modalStore,
  dispatch => ({
    close: () => dispatch(modalActions.closeModal())
  })
)(Modal);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.any,
  close: PropTypes.func.isRequired,
  width: PropTypes.number
};
