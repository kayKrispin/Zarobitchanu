import React from "react";
import TopicHeader from "./components/TopicHeader";
import TopicSingle from "./components/TopicSingle";


const TopicContent = () => (
    <div className="topics-container">
        <TopicHeader/>
        <div className="topics-container--topics">
            <TopicSingle/>
            <TopicSingle/>
            <TopicSingle/>
            <TopicSingle/>
        </div>
    </div>
);

export default TopicContent;
