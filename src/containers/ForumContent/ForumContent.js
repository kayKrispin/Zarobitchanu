import React from "react";
import Information from "./components/Information";
import General from "./components/General";
import PropTypes from "prop-types";

const ForumContent = ({ forums }) => (
  <div className="content">
    <General forums={forums} />
    <Information />
  </div>
);

export default ForumContent;

ForumContent.propTypes = {
  forums: PropTypes.array
};
