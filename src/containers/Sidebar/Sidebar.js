import  React from "react";
import { Accordion, Card } from "react-bootstrap";
import Toggler from "../../components/Toggler";
import LoginForm from "../../components/LoginFormMain";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Sidebar = () => (
  <div className="sidebar">
    <div className="upper-divider"/>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center pr-0 pl-0">
          <div className="d-flex align-items-center">
            <h5 className="title m-0">
              Login
            </h5>
            <div className="divider ml-2 mr-2"/>
            <h5 className="title m-0">
              Register
            </h5>
          </div>
          <Accordion.Toggle as={Toggler} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">
            <LoginForm/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
