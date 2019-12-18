import React from "react";

const LeftSection = ({ item, themes }) => (
  <div>
    {
      item.lastCreatedItem ? (
        <div className="d-flex ml-3 topics-info mt-2">
          <p className="mr-4">
            {!themes && item && item.topics.length}
          </p>
          <p className="ml-5">
            {themes && item.replies && item.replies.length || 20}
          </p>
        </div>
      ) : <div className="empty-topic">Empty topic</div>
    }
  </div>
);

export default LeftSection;
