import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentTime } from "../../../helpers";

const TopicSingle = () => (
    <div className="topic d-flex justify-content-between mb-3">
        <div>
            <div className="topic--time-container mb-3">
                <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
                {getCurrentTime()} pm
            </div>
            <p>Wow man thats realy myne post</p>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
            <img className="topic--avatar" src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
            <p className="mt-2 mb-2">
                <strong>
                    Bill
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
