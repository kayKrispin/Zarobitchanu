import React from "react";
import RegisterForm from "../RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ loginDivider, closeModal }) => {

  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon onClick={() => { closeModal(false) }} className="mr-2 cross-icon" icon={["fas", "times"]} />
        <RegisterForm />
      </div>
    </React.Fragment>
  )
};

export default LoginModal;
