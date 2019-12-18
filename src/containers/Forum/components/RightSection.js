import React from "react";
import { getCurrentTime } from "../../../helpers";
import { Avatar } from "antd";

const RightSection = ({ lastItem }) => (
  <div>
    {
      lastItem && (
        <div className="d-flex align-items-start ml-5 flex-wrap">

          {
            (lastItem.img || lastItem.userAvatar)
              ? <img
                src={lastItem && (lastItem.img || lastItem.userAvatar)}
                alt=""
                className="avatar mr-3 mt-2"/>
              : <Avatar className="user-avatar--icon avatar mr-3 mt-2" size="small" icon="user"/>
          }
          <div className="flex-column d-flex">
            <p className="theme-name">
              {lastItem && (lastItem.title || lastItem.text)}
            </p>
            <p className="author-container">
              by <span className="author-name">
                {lastItem && lastItem.email
                  ? lastItem.email.slice(0, 5)
                  : lastItem.userName.slice(0, 5)}
              </span>
            </p>
            <p className="created-date">
              {lastItem && getCurrentTime(lastItem.createdAt)}
            </p>
          </div>
        </div>
      )
    }
  </div>
);

export default RightSection;
