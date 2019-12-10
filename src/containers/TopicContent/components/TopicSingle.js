import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentTime } from "../../../helpers";

const TopicSingle = ({ item, users }) => {

  const [counter, handleCount] = useState(0);
  const [isLiked, handleLike] = useState(false);
  const active = [];

  const handleBtn = () => {
    if (!isLiked) {
      handleCount(counter + 1);
      handleLike(true);
      active.push("active");
      return;
    } else {
      handleCount(counter - 1);
      handleLike(false);
      active.slice(0,1);
    }
  };

  return (
    <div className="topic d-flex justify-content-between mb-3">
      <div className="d-flex flex-column">
        <div className="topic--time-container mb-3">
          <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
          {getCurrentTime(item.createdAt)} pm
        </div>
        <p className="topic--text">
          {item.text}
        </p>
        <div onClick={() => handleBtn()} className="topic--like">
          <FontAwesomeIcon className={active.join(" ")} icon={["far", "thumbs-up"]} />
          <span className="ml-2">{counter}</span>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img className="topic--avatar" src={item.userAvatar} alt=""/>
        <p className="mt-2 mb-2 topic--fullName">
          <strong>
            {item.userName}
          </strong>
        </p>
        <span className="pb-2">
                Posts:
                <strong>
               {
                 users.length > 1
                 && users.filter(user=> user._id === item.userId)[0]
                 && users.filter(user=> user._id === item.userId)[0].posts.length
               }
                </strong>
            </span>
      </div>
    </div>
  )
};


export default TopicSingle;
