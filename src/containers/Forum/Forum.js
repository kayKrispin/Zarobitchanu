import React from "react";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const Forum = props => {

  const isTopic = props.themes ? "topics" : "themes";

  return (
    <div className={`forum-container ${props.className}`}>
      <Header
        isTopic={isTopic}
        {...props}
      />
      <div
        className="forum-container--right-section d-flex
        flex-grow-1 justify-content-center ml-4"
      >
        <LeftSection
          {...props}
        />
        <RightSection/>
      </div>
    </div>
  )
};

export default Forum;
