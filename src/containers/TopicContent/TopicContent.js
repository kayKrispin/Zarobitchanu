import React from "react";
import TopicHeader from "./components/TopicHeader";
import TopicSingle from "./components/TopicSingle";


const TopicContent = props => (
    <div className="topics-container">
        <TopicHeader {...props}/>
        <div className="topics-container--topics">
            <TopicSingle/>
            <TopicSingle/>
            <TopicSingle/>
            <TopicSingle/>
        </div>
    </div>
);

export default TopicContent;
