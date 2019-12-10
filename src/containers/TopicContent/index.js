import React, { useEffect, useState } from "react";
import TopicContent from "./TopicContent";
import { actions } from "../../redux/modules/Forum";
import { modalActions } from "../../redux/modules/Modal";
import { connect } from "react-redux";

const TopicContentContainer = ({ openModal, match, selectedForumId, getReplies, replies, users }) => {

  const [counter, handleCount] = useState(0);
  const topicId = match.params.id;
  const likeClass = counter === 1 ? [].push("active") : [].push("");

  useEffect(() => {
    getReplies(selectedForumId, topicId)
  }, []);

    const props = {
      openModal,
      topicId,
      replies,
      users,
      likeClass,
      handleCount,
      counter
    };

    console.log(likeClass)

    return <TopicContent {...props} />
};

export default connect(
  state => ({
    selectedForumId: state.forumStore.selectedForumId,
    replies: state.forumStore.replies,
    users: state.forumStore.users
  }),
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
        getReplies: (forumId, topicId) => dispatch(actions.getRepliesRequest(forumId, topicId))
    })
)(TopicContentContainer);
