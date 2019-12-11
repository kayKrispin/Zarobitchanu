import React from "react";
import LoginForm from "../LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";

const LoginModal = ({ loginDivider, close, clearForm }) => {

  //Close and clear reducer errors
  const handleClose = () => {
    close();
    clearForm();
  };

  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon onClick={handleClose} className="mr-2 cross-icon" icon={["fas", "times"]} />
        <LoginForm loginDivider={loginDivider}/>
      </div>
    </React.Fragment>
  )
};

export default connect(
  null,
  dispatch => ({
    close: () => dispatch(modalActions.closeModal()),
    clearForm: () => dispatch(actions.clearError())
  })
)(LoginModal);
