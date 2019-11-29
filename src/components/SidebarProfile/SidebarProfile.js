import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarProfile = ({ avatar, name, handleLogout }) => (
    <React.Fragment>
        <div className="login-divider mb-3"/>
        <div className="sidebar-profile d-flex ">
            {avatar}
            <div className="ml-4">
                <h3 className="sidebar-profile--title">Hello, {name}</h3>
                <p className="sidebar-profile--description">
                    <FontAwesomeIcon className="mr-2" icon={["fas", "user"]} />
                    Profile
                </p>
                <p onClick={handleLogout} className="sidebar-profile--description">
                    <FontAwesomeIcon className="mr-2" icon={["fas", "sign-out-alt"]} />
                    Logout
                </p>
            </div>
        </div>
        <div className="login-divider mb-3 mt-3"/>
    </React.Fragment>
);

export default SidebarProfile;
