import React from "react";
import ForumContent from "./ForumContent";

const ContentContainer = () => {
  const forums = ["England", "Germany", "Poland", "Chech Republic", "Spain", "Italy", "Usa", "Austria", "Russia"];
  const props = {
    forums
  };

  return <ForumContent {...props} />
};

export default ContentContainer
