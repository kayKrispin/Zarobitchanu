import React from "react";
import Particles from "./components/Particles";
import AuthenticatedHeader from "./components/AuthenticatedHeader"
import UnauthorizedHeader from "./components/UnauthorizedHeader";
import QuickLinks from "./components/QuickLinks";
import MainText from "./components/MainText";

const Header = props => (
  <div className="header-container">
    <div className="header-container--gradient h-100">
      <Particles/>
      <div className="header-container--upper d-flex justify-content-between">
        <QuickLinks />
        <div className="d-flex right-section align-items-center">
          {
            props.isAuthenticated
              ? <AuthenticatedHeader {...props}/>
              : <UnauthorizedHeader openModal={props.openModal} />
          }
        </div>
      </div>
      <MainText/>
    </div>
  </div>
);


export default Header;
