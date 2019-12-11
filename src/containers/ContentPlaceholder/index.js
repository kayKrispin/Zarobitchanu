import React from "react";
import ContentPlaceholder from "./ContentPlaceholder";
import { connect } from "react-redux";
import { modalActions } from "../../redux/modules/Modal";

const ContentPlaceholderContainer = props => {

  return <ContentPlaceholder {...props}/>
};

export default connect(
    state => ({
        isAdmin: state.authStore.user.isAdmin
    }),
  dispatch => ({
    openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
  })
)(ContentPlaceholderContainer);
