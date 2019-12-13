import React from "react";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const Forum = props => {

  const isTopic = props.themes ? "topics" : "themes";
  const themesStyles = ["forum-container--right-section d-flex justify-content-end ml-4"];

  if (props.themes) themesStyles.push("themes-right-section");

  return (
    <div className={`forum-container ${props.className}`}>
      <Header
        isTopic={isTopic}
        {...props}
      />
      <div
        className={themesStyles.join(" ")}>
        <LeftSection {...props} />
        <RightSection {...props} isTopic={isTopic} />
      </div>
    </div>
  )
};

export default Forum;
