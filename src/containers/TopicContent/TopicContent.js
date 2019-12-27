import React from "react";
import TopicHeader from "./components/TopicHeader";
import TopicSingle from "./components/TopicSingle";
import PropTypes from "prop-types";


const TopicContent = props => (
  <div className="topics-container">
    <TopicHeader {...props}/>
    <div className="topics-container--topics">
      {
        props.replies && props.replies.map((reply, index) => (
          <TopicSingle key={index} item={reply} {...props} />
        ))
      }
      {
        props.replies.length < 1 && (
          <span>There is no reply in this topics..cmon you can be a first one</span>
        )
      }
    </div>
  </div>
);

export default TopicContent;

TopicContent.propTypes = {
  replies: PropTypes.array
};
