import React from "react";
import LoginForm from "../LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {actions} from "../../redux/modules/Modal";

const LoginModal = ({ loginDivider, close }) => {

  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon onClick={close} className="mr-2 cross-icon" icon={["fas", "times"]} />
        <LoginForm loginDivider={loginDivider}/>
      </div>
    </React.Fragment>
  )
};

export default connect(
  null,
  dispatch => ({ close: () => dispatch(actions.closeModal()) })
)(LoginModal);
