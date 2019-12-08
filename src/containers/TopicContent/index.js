import React from "react";
import TopicContent from "./TopicContent";
import {actions} from "../../redux/modules/Forum";
import {modalActions} from "../../redux/modules/Modal";
import {connect} from "react-redux";

const TopicContentContainer = ({ openModal, match }) => {

    const topicId = match.params.id;

    const props = {
      openModal,
      topicId
    };

    return <TopicContent {...props} />
};

export default connect(
    null,
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width))
    })
)(TopicContentContainer);
