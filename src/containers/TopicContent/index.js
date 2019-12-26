import React, { useEffect, useState } from "react";
import TopicContent from "./TopicContent";
import { actions } from "../../redux/modules/Forum";
import { modalActions } from "../../redux/modules/Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopicContentContainer = ({
  openModal,
  match,
  selectedForumId,
  getReplies,
  replies,
  users,
  totalReplies,
  likeUnlikeReply,
  newLikesLength,
  user
}) => {

  const [counter, handleCount] = useState(0);
  const [page, handlePage] = useState(1);

  const pageLimit = 3;
  const topicId = match.params.id;

  //Get total pages for forum
  const totalPages = Math.ceil(totalReplies / pageLimit) * 10;

  const likeClass = counter === 1 ? [].push("active") : [].push("");

  useEffect(() => {
    getReplies(selectedForumId, topicId, page, pageLimit)
  }, [page]);

  const handlePagination = page => {
    handlePage(page);
    getReplies(selectedForumId, topicId, page, pageLimit);
  };

  const props = {
    openModal,
    topicId,
    replies,
    users,
    likeClass,
    handleCount,
    counter,
    handlePage,
    handlePagination,
    totalReplies,
    page,
    pageLimit,
    totalPages,
    likeUnlikeReply,
    user,
    selectedForumId,
    newLikesLength
  };

  return <TopicContent {...props} />
};

export default connect(
  state => ({
    user: state.authStore.user,
    selectedForumId: state.forumStore.selectedForumId,
    totalReplies: state.forumStore.totalReplies,
    replies: state.forumStore.replies,
    users: state.forumStore.users,
    newLikesLength: state.forumStore.length
  }),
  dispatch => ({
    openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
    getReplies:
      (forumId, topicId, page, pageLimit) => dispatch(actions.getRepliesRequest(forumId, topicId, page, pageLimit)),
    likeUnlikeReply: (
      userId,
      replyId,
      isLiked,
      topicId,
      selectedForumId,
      page,
      pageLimit
    ) => dispatch(actions.likeUnlikeRequest(userId, replyId, isLiked, topicId, selectedForumId, page, pageLimit))
  })
)(TopicContentContainer);


TopicContentContainer.propTypes = {
  openModal: PropTypes.func,
  match: PropTypes.object,
  getReplies: PropTypes.func,
  replies: PropTypes.array,
  likeUnlikeReply: PropTypes.func,
  user: PropTypes.object,
  newLikesLength: PropTypes.number
};
