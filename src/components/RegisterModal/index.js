import React from "react";
import { actions } from "../../redux/modules/Modal";
import { connect } from "react-redux";
import RegisterForm from "../RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterModal = ({ close }) => (
    <React.Fragment>
      <div>
        <FontAwesomeIcon onClick={close} className="mr-2 cross-icon" icon={["fas", "times"]} />
        <RegisterForm />
      </div>
    </React.Fragment>
);

export default connect(
  null,
  dispatch => ({ close: () => dispatch(actions.closeModal()) })
)(RegisterModal);
