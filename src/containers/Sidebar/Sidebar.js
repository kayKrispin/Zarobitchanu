import  React from "react";
import UnauthorizedSidebar from "./components/UnauthorizedSidebar";
import AuthorizedSidebar from "./components/AuthenticatedSidebar";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ isAuthenticated, responseGoogle, responseFacebook }) => (
  <div className="sidebar">
    <div className="upper-divider"/>
    <Accordion defaultActiveKey="0">
        {
          isAuthenticated
              ? <AuthorizedSidebar/>
              : <UnauthorizedSidebar responseFacebook={responseFacebook} responseGoogle={responseGoogle} />
        }
    </Accordion>
    <div className="mt-2">
      <button className="buy-btn">
        <FontAwesomeIcon className="mr-2" icon={["fas", "shopping-cart"]} />
        Buy Now ($17.00)
      </button>
      <div>
        <img className="mt-3 w-100" src="https://hotline.ua/img/tx/206/2060138395.jpg" alt=""/>
        <img className="mt-3 w-100" src="https://img.mvideo.ru/Pdb/40064865b.jpg" alt=""/>
      </div>
    </div>
  </div>
);

export default Sidebar;
