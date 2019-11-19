import React from "react";
import LoginForm from "../LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ loginDivider, closeModal }) => {

  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon onClick={() => { closeModal(false) }} className="mr-2 cross-icon" icon={["fas", "times"]} />
        <LoginForm loginDivider={loginDivider}/>
      </div>
    </React.Fragment>
  )
};

export default LoginModal;
