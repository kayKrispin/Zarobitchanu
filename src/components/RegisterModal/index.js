import React from "react";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";
import { connect } from "react-redux";
import RegisterForm from "../RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterModal = ({ close, clearForm }) => {

  const handleClose = () => {
    close();
    clearForm();
  };

  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon
            onClick={handleClose}
            className="mr-2 cross-icon"
            icon={["fas", "times"]}
        />
        <RegisterForm />
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
)(RegisterModal);
