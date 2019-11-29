import React, { useState } from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";

const HeaderContainer = ({ openModal, userName, isAuthenticated, imgBlob, handleLogout }) => {

  const [showModal, toggleModal] = useState(false);
  const [activeModal, handleActiveModal] = useState("");

  const modalHandler = name => {
    handleActiveModal(name);
    toggleModal(!showModal);
  };

  let avatar = new File([imgBlob], "avatar");

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

  console.log(avatar)


  return <Header {...props} />
};

export default connect(
  state => ({
    isAuthenticated: state.authStore.isAuthenticated,
    userName: state.authStore.user.email,
    imgBlob: state.authStore.user.img
  }),
  dispatch => ({
    openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
    handleLogout: () => dispatch(actions.logoutRequest()),
  })
)(HeaderContainer);


HeaderContainer.propTypes = {
  userName: PropTypes.string,
  openModal: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  avatar: PropTypes.string
};
