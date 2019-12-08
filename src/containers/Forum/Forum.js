import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Forum = ({ className, id, themes, item, deleteForum, deleteEntity, forumId }) => {

  const isTopic = themes ? "topics" : "themes";

  return (
      <div className={`forum-container ${className}`}>
          <div className="forum-container--left-section d-flex align-items-center">
              <div onClick={() => deleteEntity(item._id)} className="forum-vision mr-4 ml-3 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="ml-2 mr-2 minus-sign cursor-pointer" icon={["fas", "minus"]} />
              </div>
              <div className="d-flex flex-column">
                  <h3 className="title">
                      <Link to={`${isTopic}/${item && item._id}`}>
                          {item && item.title}
                      </Link>
                  </h3>
                  <p>
                      {
                          item && item.subTitle
                      }
                  </p>
              </div>
          </div>
          <div className="forum-container--right-section d-flex flex-grow-1 justify-content-center ml-4">
              <div className="d-flex ml-3 topics-info mt-2">
                  <p className="mr-4">
                      {!themes && item && item.topics.length}
                  </p>
                  <p className="ml-5">
                      {themes && item.replies && item.replies.length || 20}
                  </p>
              </div>

              <div className="d-flex align-items-start ml-5 flex-wrap">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1Mtx-INbdQ5D3Xmsyq-D3HjpKmXnhKiqJsyzfNxzJ8gx-ewB&s"
                      alt=""
                      className="avatar mr-3 mt-2"/>
                  <div className="flex-column d-flex">
                      <p className="theme-name">
                          Bаршава 2019
                      </p>
                      <p className="author-container">
                          by <span className="author-name">Varvar</span>
                      </p>
                      <p className="created-date">
                          Tue Jan 03, 2017 1:36 am
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Forum;
