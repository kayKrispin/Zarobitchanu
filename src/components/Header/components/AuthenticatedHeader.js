import React from "react";
import PropTypes from "prop-types";
import {Avatar} from "antd";

const AuthenticatedHeader = ({ userName, avatar, handleLogout }) => (
  <div className="header-container--authorized">
    {
      avatar ? <img className="img" src={avatar} alt=""/> : <Avatar className="user-avatar--icon" icon="user"/>
    }
    <p className="username">{userName}</p>
    <button onClick={handleLogout} className="logout-btn">Logout</button>
  </div>
);

export default AuthenticatedHeader;


AuthenticatedHeader.propTypes = {
  username: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};
