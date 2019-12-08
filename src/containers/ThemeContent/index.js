import React, { useEffect, useState } from "react";
import ThemeContent from "./ThemeContent";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Forum";
import { modalActions } from "../../redux/modules/Modal";

const ThemeContentContainer = ({ match, openModal, getTopics, forumTitle, topics, searchTopic, setForumId }) => {

  const forumId = match.params.id;
  const themes = [];

  useEffect(() => {
      setForumId(forumId);
      getTopics(forumId);
  }, []);

  const searchTopicByName = key => {
      searchTopic(key, forumId)
  };

  const props = {
    forumId,
    openModal,
    themes,
    forumTitle,
    topics,
    match,
    searchTopicByName
  };

  return <ThemeContent {...props} />
};

export default connect(
    state => ({
        forumTitle: state.forumStore.forumTitle,
        topics: state.forumStore.topics,
        filteredTopics: state.forumStore.filteredTopics,
    }),
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
        getTopics: id => dispatch(actions.getTopicsRequest(id)),
        searchTopic: (key, forumId) => dispatch(actions.searchTopicsRequest(key, forumId)),
        setForumId: id => dispatch(actions.setActiveForumidRequest(id))
    })
)(ThemeContentContainer);


