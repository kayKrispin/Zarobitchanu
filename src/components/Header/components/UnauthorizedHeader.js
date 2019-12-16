import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import RegisterModal from "../../RegisterModal";
import LoginModal from "../../LoginModal";

const UnauthorizedHeader = ({ openModal }) => (
  <React.Fragment>
    <FontAwesomeIcon className="mr-1" icon={["fas", "edit"]} />
    <h4 onClick={() => openModal(<RegisterModal />, 500)} className="upper-item mr-3">
     Register
    </h4>
    <FontAwesomeIcon className="mr-1" icon={["fas", "sign-in-alt"]} />
    <h4 onClick={() => openModal(<LoginModal loginDivider={true}/>, 500)} className="upper-item ml-1">
     Login
    </h4>
  </React.Fragment>
);

export default UnauthorizedHeader;


UnauthorizedHeader.propTypes = {
  openModal: PropTypes.func.isRequired
};
