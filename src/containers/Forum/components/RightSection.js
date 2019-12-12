import React from "react";

const RightSection = () => (
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
);

export default RightSection;
