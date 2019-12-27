import React, { useEffect } from "react";
import { actions } from "../../redux/modules/Forum"
import { connect } from "react-redux";
import ForumContent from "./ForumContent";
import ProptTypes from "prop-types";
import AppSkeleton from "../AppSkeleton";

const ContentContainer = ({ getForums, forums }) => {

  useEffect(() => {
    getForums()
  }, []);

  const props = {
    forums
  };

  if (!forums.length) return <AppSkeleton/>;

  return <ForumContent {...props} />
};

export default connect(
  state => ({
    forums: state.forumStore.forums

  }),
  dispatch => ({
    getForums: () => dispatch(actions.getForumsRequest())
  })
)(ContentContainer);

ContentContainer.propTypes = {
  forums: ProptTypes.array,
  getForums: ProptTypes.func.isRequired
};
