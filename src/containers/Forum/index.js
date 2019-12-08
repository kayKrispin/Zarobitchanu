import React from "react";
import Forum from "./Forum";
import { actions } from "../../redux/modules/Forum";
import { connect } from "react-redux";

const ForumContainer  = ({ className, id, themes, item, deleteForum, match, deleteTopic }) => {

  const forumId = match && match.params.id;

  const deleteEntity = itemId => {
      if (themes) {
        deleteTopic(itemId, forumId);

        return
      }
      deleteForum(itemId);

  };

  const props = {
    className,
    id,
    item,
    themes,
    forumId,
    deleteEntity
  };

  return <Forum {...props}/>
};

export default connect(
    null,
    dispatch => ({
        deleteForum: id => dispatch(actions.deleteForumRequest(id)),
        deleteTopic: (topicId, forumId) => dispatch(actions.deleteTopicRequest({ forumId: forumId, topicId: topicId }))
    })
)(ForumContainer);
