import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "./components";
import LoginModal from "../../components/LoginModal";
import RegisterModal from "../../components/RegisterModal";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Modal";
import Portal from "../../components/Portal";
import PropTypes from "prop-types";


const Header = ({ showModal, toggleModal, activeModal, modalHandler, openModal }) => (
  <div className="header-container">
    <div className="header-container--gradient h-100">
      <Particles/>
      <div className="header-container--upper d-flex justify-content-between">
      <div className="d-flex left-section align-items-center">
        <FontAwesomeIcon className="mr-2" icon={["fas", "bars"]} />
        <h4 onClick={() => modalHandler("login")} className="upper-item quick-links">
          Quick Links
        </h4>
        <FontAwesomeIcon className="ml-2"  icon={["fas", "question-circle"]} />
        <h4 className="upper-item ml-2">
          FAQ
        </h4>
      </div>
      <div className="d-flex right-section align-items-center">
        <FontAwesomeIcon className="mr-1" icon={["fas", "edit"]} />
        <h4 onClick={() => openModal(<RegisterModal />, 500)} className="upper-item mr-3">
          Register
        </h4>
        <FontAwesomeIcon className="mr-1" icon={["fas", "sign-in-alt"]} />
        <h4  onClick={() => openModal(<LoginModal loginDivider={true}/>, 500)} className="upper-item ml-1">
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
      <div>

      </div>
      <Portal
        showModal={activeModal === "login" && showModal}
        toggleModal={toggleModal}
        children={
          <LoginModal
            closeModal={toggleModal}
            loginDivider={true}
          />
        }
        maxWidth={500}
      />
  </div>
  </div>
);



export default connect(
  null,
  dispatch => ({
    openModal: (content, width) => dispatch(actions.openModal(content, width))
  })
)(Header);


Header.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func
};
