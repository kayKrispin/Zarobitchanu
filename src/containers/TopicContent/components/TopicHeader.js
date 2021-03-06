import React from "react";
import { Pagination } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateEntityModal from "../../../components/CreateEntityModal";

const TopicHeader = ({
  openModal,
  topicId,
  handlePage,
  handlePagination,
  totalReplies,
  page,
  pageLimit,
  totalPages
}) => (
  <div className="d-flex mb-3 align-items-center justify-content-between flex-wrap">
    <div>
      <button
        onClick={() => openModal(
          <CreateEntityModal
            topicId={topicId}
            isReply={true}
            page={page}
            limit={pageLimit}
            title="Reply"
          />, 500
        )}
        className="themes-container--new-topic">
                Post Reply
        <FontAwesomeIcon className="ml-2" icon={["fas", "reply"]} />
      </button>
    </div>
    <div className="font-weight-bolder d-flex flex-row align-items-center topic-container--pagination flex-wrap">
      <span className="mr-2 topics-container--amount">
        {totalReplies && totalReplies} replies
      </span>
      <Pagination
        simple={true}
        onChange={e => handlePagination(e)
        }
        defaultCurrent={1}
        total={typeof totalPages === "number" && totalPages}
      />
    </div>
  </div>
);

export default TopicHeader;
