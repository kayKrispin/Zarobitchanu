import React from "react";
import { Pagination } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicHeader = () => (
    <div className="d-flex mb-3 align-items-center justify-content-between">
        <div>
            <button className="themes-container--new-topic mr-3">
                Post Reply
                <FontAwesomeIcon className="ml-2" icon={["fas", "reply"]} />
            </button>
            <input className="themes-container--search" placeholder="Search this topic" type="text"/>
        </div>
        <div className="font-weight-bolder d-flex flex-row align-items-center topic-container--pagination">
            <span className="mr-2">11 posts</span>
            <Pagination defaultCurrent={1} total={30}/>
        </div>
    </div>
);

export default TopicHeader;
