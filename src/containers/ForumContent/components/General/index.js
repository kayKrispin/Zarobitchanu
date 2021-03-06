import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggler from "../../../../components/Toggler";
import Forum from "../../../Forum";
import React from "react";

const General = ({ forums }) => (
  <Accordion className="mb-3" defaultActiveKey="0">
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center mb-0">
        <h6 className="m-0 title-accordion font-weight-bold">
          General themes
        </h6>
        <div className="d-flex align-items-center justify-content-between forum-icons">
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
            forums && forums.map((item, index) => (
              <Forum key={index} item={item} className={index === 9 && "mb-0"} />
            ))
          }
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default General;
