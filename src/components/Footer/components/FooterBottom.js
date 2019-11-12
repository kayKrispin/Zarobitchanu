import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterBottom = () => (
  <div className="bottom d-flex justify-content-between pl-4 pr-4 pb-3 pt-3 align-items-center">
    <p className="content-placeholder--home-btn cursor-pointer mb-0">
      <FontAwesomeIcon className="mr-2" icon={["fas", "home"]} />
      <span className="title">
        Board home
      </span>
    </p>
    <div className="d-flex align-items-center">
      <p className="content-placeholder--home-btn cursor-pointer mb-0">
        <FontAwesomeIcon className="mr-2" icon={["fas", "envelope"]} />
        <span className="title">
        Contact us
      </span>
      </p>
      <p className="content-placeholder--home-btn cursor-pointer mr-3 ml-3 mb-0">
        <FontAwesomeIcon className="mr-2" icon={["fas", "users"]} />
        <span className="title">
        The team
      </span>
      </p>
      <p className="content-placeholder--home-btn cursor-pointer mb-0">
        <FontAwesomeIcon className="mr-2" icon={["fas", "compass"]} />
        <span className="title">
        Our location
      </span>
      </p>
    </div>
  </div>
);

export default FooterBottom;
