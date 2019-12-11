import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux/modules/Auth";

const SidebarContainer = ({ isAuthenticated, socialLogin }) => {

  const responseGoogle = response => {

    if (response) {
      const credentials = {
        email: response.profileObj.email,
        password: response.profileObj.familyName,
        img: response.profileObj.imageUrl
      };

      socialLogin(credentials)
    }
  };

  const responseFacebook = response => {
    console.log(response)
  };

  return <Sidebar
    responseGoogle={responseGoogle}
    responseFacebook={responseFacebook}
    isAuthenticated={isAuthenticated}
  />
};

export default connect(
  state => ({
    isAuthenticated: state.authStore.isAuthenticated
  }),
  dispatch => ({
    socialLogin: credentials => dispatch(authActions.loginSocialRequest(credentials)),
  })
)(SidebarContainer);
