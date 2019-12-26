import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentTime } from "../../../helpers";
import { Avatar } from "antd";

const TopicSingle = ({
  item,
  users,
  likeUnlikeReply,
  user,
  topicId,
  selectedForumId,
  page,
  pageLimit,
  newLikesLength
}) => {

  const [isLiked, handleLike] = useState(false);

  // Check if user liked the reply
  useEffect(() => {
    if (item.likes.filter(like => like.user === user._id).length) {
      handleBtn();
    }
  }, []);

  // Fill thumbs icon with certain color
  const handleBtn = () => {
    if (!isLiked) {
      handleLike(true);

      return;
    }
    handleLike(false);
  };

  return (
    <div className="topic d-flex flex-wrap-reverse justify-content-between mb-3">
      <div className="d-flex flex-column topic--main-text">
        <div className="topic--time-container mb-3">
          <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
          {getCurrentTime(item.createdAt)} pm
        </div>
        <p className="topic--text">
          {item.text}
        </p>
        <div onClick={() => handleBtn()} className="topic--like">
          <FontAwesomeIcon
            onClick={() => likeUnlikeReply(
              user._id,
              item.createdAt,
              !isLiked,
              topicId,
              selectedForumId,
              page,
              pageLimit
            )}
            className={isLiked ? "active" : ""}
            icon={["fas", "thumbs-up"]}
          />
          <span className="ml-2">{item.likes.length}</span>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center topic--user-info">
        {
          item.userAvatar
            ? <img className="topic--avatar" src={item.userAvatar} alt=""/>

            : <Avatar className="user-avatar--icon mr-2" icon="user"/>
        }
        <p className="mt-2 mb-2 topic--fullName">
          <strong>
            {item.userName}
          </strong>
        </p>
        <span className="pb-2">
                Posts:
          <strong>
            {
              users.length > 1 &&
                 users.filter(user => user._id === item.userId)[0] &&
                 users.filter(user => user._id === item.userId)[0].posts.length
            }
          </strong>
        </span>
      </div>
    </div>
  )
};


export default TopicSingle;
