import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentTime } from "../../../helpers";

const TopicSingle = ({ item }) => (
    <div className="topic d-flex justify-content-between mb-3">
        <div>
            <div className="topic--time-container mb-3">
                <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
                {getCurrentTime(item.createdAt)} pm
            </div>
            <p>
              {item.text}
            </p>
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
                     3
                </strong>
            </span>
        </div>
    </div>
);

export default TopicSingle;
