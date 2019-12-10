import React from "react";
import TopicHeader from "./components/TopicHeader";
import TopicSingle from "./components/TopicSingle";


const TopicContent = props => (
    <div className="topics-container">
        <TopicHeader {...props}/>
        <div className="topics-container--topics">
          {
            props.replies && props.replies.map(reply => (
              <TopicSingle
                active={props.likeClass}
                counter={props.counter}
                handleLike={props.handleCount}
                users={props.users}
                key={reply.createdAt}
                item={reply}
              />
            ))
          }
          {
            props.replies.length < 1 && <span>There is no reply in this topics..cmon you can be a first one</span>
          }
        </div>
    </div>
);

export default TopicContent;
