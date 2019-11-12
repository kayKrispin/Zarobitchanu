import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portal from "../../components/Portal";
import Particles from "./components"
import PropTypes from "prop-types";


const Header = ({ showModal, toggleModal }) => (
  <div className="header-container">
    <div className="header-container--gradient h-100">
      <Particles/>
      <div className="header-container--upper d-flex justify-content-between">
      <div className="d-flex left-section align-items-center">
        <FontAwesomeIcon className="mr-2" icon={["fas", "bars"]} />
        <h4 className="upper-item quick-links">
          Quick Links
        </h4>
        <FontAwesomeIcon className="ml-2"  icon={["fas", "question-circle"]} />
        <h4 className="upper-item ml-2">
          FAQ
        </h4>
      </div>
      <div className="d-flex right-section align-items-center">
        <FontAwesomeIcon className="mr-1" icon={["fas", "edit"]} />
        <h4 onClick={() => toggleModal(!showModal)} className="upper-item mr-3">
          Register
        </h4>
        <FontAwesomeIcon className="mr-1" icon={["fas", "sign-in-alt"]} />
        <h4 onClick={() => toggleModal(!showModal)} className="upper-item ml-1">
          Login
        </h4>
      </div>
    </div>
    <div className="header-container--main text-center">
        <h1 className="text-uppercase title">
          zarobitchanu v0.01
        </h1>
      <h4>
        Oнлайн платформа для обговорення роботодавців за кордоном.
      </h4>
      <p className="text-uppercase font-weight-bold subtitle-description">
        дізнавайся.поширюй.карай.
      </p>
    </div>
  </div>
    <Portal showModal={showModal} toggleModal={toggleModal} children={<div>hello there</div>} maxWidth={500}/>
  </div>
);

export default Header;


Header.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func
};
