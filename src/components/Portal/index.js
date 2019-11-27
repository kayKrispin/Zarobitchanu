import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


const Portal =  ({ toggleModal, showModal, children, maxWidth }) => {
  console.log(showModal)
  return  ReactDOM.createPortal (
    <CSSTransition in={showModal} timeout={500} classNames="alert" mountOnEnter unmountOnExit>
      <div className="my_modal" onClick={() => {toggleModal(false)}}>
        <div style={{width: maxWidth && maxWidth}} className="modal_body" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("modal")
  )
};

export default Portal;
