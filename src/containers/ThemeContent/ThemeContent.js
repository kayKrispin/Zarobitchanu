import React from "react";
import {Accordion, Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggler from "../../components/Toggler";
import Forum from "../Forum";

const ThemeContent = ({ themeTitle, themes }) => (
  <div className="themes-container">
    <h2>
      {themeTitle}
    </h2>
    <div className="d-flex mb-3 align-items-center justify-content-between">
      <div>
          <button className="themes-container--new-topic mr-3">
              New Topic
              <FontAwesomeIcon className="ml-2" icon={["fas", "pencil-alt"]} />
          </button>
          <input className="themes-container--search" placeholder="Search this forum" type="text"/>
      </div>
        <div>
            <p className="font-weight-bolder">6 Topics  Page 1 of 1</p>
        </div>
    </div>
    <Accordion className="mb-3" defaultActiveKey="0">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center mb-0">
          <h5 className="m-0 title flex-grow-3 themes-container--title font-weight-bold">
            Topics
          </h5>
          <div className="d-flex align-items-center flex-grow-1 justify-content-between">
            <div className="d-flex">
              <p className="m-0">
                <FontAwesomeIcon className="mr-2" icon={["fas", "scroll"]} />
              </p>
              <p className="m-0 mr-5 ml-5">
                <FontAwesomeIcon className="ml-2 mr-2" icon={["fas", "comments"]} />
              </p>
              <p className="m-0">
                <FontAwesomeIcon className="mr-2" icon={["fas", "clock"]} />
              </p>
            </div>
          </div>
          <Accordion.Toggle as={Toggler} variant="link" eventKey="0"/>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body back-speed={100}>
            {
              themes.map(id => (
                <Forum themes={true} id={id} className={id === 9 && "mb-0"} key={id} />
              ))
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </div>
);

export default ThemeContent;
