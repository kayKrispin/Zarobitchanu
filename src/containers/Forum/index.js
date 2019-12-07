import React from "react";
import Forum from "./Forum";
import { actions } from "../../redux/modules/Forum";
import { connect } from "react-redux";

const ForumContainer  = ({ className, id, themes, item, deleteForum }) => {

  const props = {
    className,
    id,
    item,
    themes,
    deleteForum
  };

  return <Forum {...props}/>
};

export default connect(
    null,
    dispatch => ({
        deleteForum: id => dispatch(actions.deleteForumRequest(id))
    })
)(ForumContainer);
