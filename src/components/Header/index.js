import React, { useState } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";

const HeaderContainer = ({ openModal, userName, isAuthenticated, avatar, handleLogout }) => {

  const [showModal, toggleModal] = useState(false);
  const [activeModal, handleActiveModal] = useState("");

  const modalHandler = name => {
    handleActiveModal(name);
    toggleModal(!showModal);
  };


  const props = {
    showModal,
    toggleModal,
    activeModal,
    handleActiveModal,
    openModal,
    userName,
    isAuthenticated,
    avatar,
    handleLogout,
    modalHandler,
  };

  return <Header {...props} />
};

export default connect(
  state => ({
    isAuthenticated: state.authStore.isAuthenticated,
    userName: state.authStore.user.email || "",
    avatar: state.authStore.user.img
  }),
  dispatch => ({
    openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
    handleLogout: () => dispatch(actions.logoutRequest()),
  })
)(HeaderContainer);


HeaderContainer.propTypes = {
  userName: PropTypes.any,
  openModal: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  avatar: PropTypes.string
};
