import React from "react";
import Forum from "./Forum";
import { actions } from "../../redux/modules/Forum";
import { connect } from "react-redux";
import { sortByDate } from "../../helpers";

const ForumContainer = ({
  className,
  id,
  themes,
  item,
  deleteForum,
  match,
  deleteTopic,
  isAdmin
}) => {

  const forumId = match && match.params.id;
  const titleStyles = ["title"];

  if (!isAdmin) titleStyles.push("ml-4")

  let lastItem;

  //Delete forum or topic
  const deleteEntity = itemId => {
    if (themes) {
      deleteTopic(itemId, forumId);

      return
    }
    deleteForum(itemId);
  };

  //Get last created item in forum/topic
  if (!themes) {
    lastItem = item && item.lastCreatedItem && sortByDate(item.lastCreatedItem)[0];
  } else if (item.lastCreatedItem !== undefined) {
    lastItem = item && item.lastCreatedItem;
  }


  const props = {
    className,
    id,
    item,
    themes,
    forumId,
    deleteEntity,
    isAdmin,
    lastItem,
    titleStyles
  };

  return <Forum {...props}/>
};

export default connect(
  state => ({
    isAdmin: state.authStore.user.isAdmin,
  }),
  dispatch => ({
    deleteForum: id => dispatch(actions.deleteForumRequest(id)),
    deleteTopic: (topicId, forumId) => dispatch(actions.deleteTopicRequest({
      forumId: forumId, topicId: topicId
    }))
  })
)(ForumContainer);
