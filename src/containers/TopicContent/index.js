import React, { useEffect } from "react";
import TopicContent from "./TopicContent";
import { actions } from "../../redux/modules/Forum";
import { modalActions } from "../../redux/modules/Modal";
import { connect } from "react-redux";

const TopicContentContainer = ({ openModal, match, selectedForumId, getReplies, replies }) => {

  const topicId = match.params.id;

  useEffect(() => {
    getReplies(selectedForumId, topicId)
  }, []);

    const props = {
      openModal,
      topicId,
      replies
    };

    return <TopicContent {...props} />
};

export default connect(
  state => ({
    selectedForumId: state.forumStore.selectedForumId,
    replies: state.forumStore.replies
  }),
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
        getReplies: (forumId, topicId) => dispatch(actions.getRepliesRequest(forumId, topicId))
    })
)(TopicContentContainer);
