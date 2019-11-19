import React from "react";
import Information from "./components/Information";
import General from "./components/General";
import Special from "./components/Special";

const ForumContent = ({ forums }) => (
  <div className="content">
    <General forums={forums} />
    <Special forums={forums} />
    <Information />
  </div>
);

export default ForumContent;
