import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "./components/Particles";
import AuthenticatedHeader from "./components/AuthenticatedHeader"
import UnauthorizedHeader from "./components/UnauthorizedHeader";


const Header = props => (
  <div className="header-container">
    <div className="header-container--gradient h-100">
      <Particles/>
      <div className="header-container--upper d-flex justify-content-between">
        <div className="d-flex left-section align-items-center">
          <FontAwesomeIcon className="mr-2" icon={["fas", "bars"]} />
          <h4 className="upper-item quick-links">
          Quick Links
          </h4>
          <FontAwesomeIcon className="ml-2" icon={["fas", "question-circle"]} />
          <h4 className="upper-item ml-2">
          FAQ
          </h4>
        </div>
        <div className="d-flex right-section align-items-center">

          {
            props.isAuthenticated
              ? <AuthenticatedHeader {...props}/>
              : <UnauthorizedHeader openModal={props.openModal} />
          }
        </div>
      </div>
      <div className="header-container--main text-center">
        <h1 className="text-uppercase title">
          zarobitchanu v0.01
        </h1>
        <h4>
        Oнлайн платформа для обговорення роботодавців за кордоном.
        </h4>
        <p className="text-uppercase font-weight-bold subtitle-description">
        дізнавайся.поширюй.карай.
        </p>
      </div>
    </div>
  </div>
);


export default Header;
