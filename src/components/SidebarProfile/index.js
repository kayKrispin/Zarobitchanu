import React from "react";
import SidebarProfile from "./SidebarProfile";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Auth"
import { Avatar } from "antd";

const SidebarProfileContainer = ({ img, name, handleLogout }) => {

  const avatar = img
    ? <img className="avatar" src={img} alt=""/>
    : <Avatar className="avatar mr-2" icon="user"/>

  const props = {
    avatar,
    name,
    handleLogout
  };

  return <SidebarProfile {...props} />
};

export default connect(
  state => ({
    img: state.authStore.user.img,
    name: state.authStore.user.email
  }),
  dispatch => ({
    handleLogout: () => dispatch(actions.logoutRequest())
  })
)(SidebarProfileContainer);
