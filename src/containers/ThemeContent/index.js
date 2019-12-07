import React, { useEffect } from "react";
import ThemeContent from "./ThemeContent";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Forum";
import { modalActions } from "../../redux/modules/Modal";

const ThemeContentContainer = ({ match, openModal, getTopics, forumTitle, topics }) => {

  const forumId = match.params.id;
  const themes = [];

  useEffect(() => {
      getTopics(forumId)
  }, []);

  const props = {
    forumId,
    openModal,
    themes,
    forumTitle,
    topics
  };

  return <ThemeContent {...props} />
};

export default connect(
    state => ({
        forumTitle: state.forumStore.forumTitle,
        topics: state.forumStore.topics
    }),
    dispatch => ({
        openModal: (content, width) => dispatch(modalActions.openModal(content, width)),
        getTopics: id => dispatch(actions.getTopicsRequest(id)),
    })
)(ThemeContentContainer);


