import React from "react";
import CreateForumModal from "../../components/CreateEntityModal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Header = ({ openModal, isAdmin }) => (
  <div className="d-flex">
    <Link to="/" className="content-placeholder--home-btn">
      <FontAwesomeIcon className="mr-2" icon={["fas", "home"]} />
      <span className="title">
        Board home
      </span>
    </Link>
    {
      isAdmin && (
        <div
          onClick={() => openModal(
            <CreateForumModal
              title="Forum"
              themeModal={false}
            />, 500
          )}
          className="content-placeholder--home-btn ml-3">
          <FontAwesomeIcon className="mr-2" icon={["fas", "plus"]} />
          <span className="title">
        Add forum
          </span>
        </div>
      )
    }
  </div>
);

export default Header;


Header.propTypes = {
  openModal: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool
};
