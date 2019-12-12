import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({
  item,
  deleteEntity,
  isTopic,
  isAdmin
}) => (
  <div className="forum-container--left-section d-flex align-items-center">
    {
      isAdmin && (
        <div
          onClick={() => deleteEntity(item._id)
          }
          className="forum-vision mr-4 ml-3 d-flex justify-content-center align-items-center"
        >
          <FontAwesomeIcon className="ml-2 mr-2 minus-sign cursor-pointer" icon={["fas", "minus"]} />
        </div>
      )
    }
    <div className="d-flex flex-column">
      <h3 className="title">
        <Link to={`${isTopic}/${item && item._id}`}>
          {item && item.title}
        </Link>
      </h3>
      <p>
        {item && item.subTitle}
      </p>
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  item: PropTypes.object,
  deleteEntity: PropTypes.func,
  isTopic: PropTypes.string,
  isAdmin: PropTypes.bool
};
