import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


const Portal =  ({ toggleModal, showModal, children, maxWidth }) => {
  return  ReactDOM.createPortal (
    <CSSTransition  in={showModal} timeout={500} classNames="alert" mountOnEnter unmountOnExit>
      <div className="my_modal" onClick={() => {toggleModal(!showModal)}}>
        <div style={{width: maxWidth && maxWidth}} className="modal_body" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    document.body
  )
};

export default Portal;