import React from "react";
import ContentPlaceholder from "./ContentPlaceholder";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Auth";
import { modalActions } from "../../redux/modules/Modal";


const ContentPlaceholderContainer = ({ openModal }) => {

  const props = {
    openModal
  };

  return <ContentPlaceholder {...props}/>
};

export default connect(
  null,
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
    })
)(ContentPlaceholderContainer);

