import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Forum = ({ className }) => (
  <div className={`forum-container ${className} `}>
    <div className="forum-container--left-section d-flex align-items-center">
      <div className="forum-vision mr-4 ml-3 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon className="ml-2 mr-2 minus-sign" icon={["fas", "minus"]} />
      </div>
      <div className="d-flex flex-column">
        <h3 className="title">
          Lяхляндія
        </h3>
        <p>
          бийте братья ляха всюди де бачиите.казацька шабля блисне тай лях дрисне
        </p>
      </div>
    </div>
    <div className="forum-container--right-section d-flex flex-grow-1 justify-content-center ml-4">
      <div className="d-flex ml-3 topics-info mt-2">
        <p className="mr-4">
          7
        </p>
        <p className="ml-5">
          20
        </p>
      </div>

      <div className="d-flex align-items-start ml-5 flex-wrap">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1Mtx-INbdQ5D3Xmsyq-D3HjpKmXnhKiqJsyzfNxzJ8gx-ewB&s"
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
);

export default Forum;
