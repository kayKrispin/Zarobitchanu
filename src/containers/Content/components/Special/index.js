import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggler from "../../../../components/Toggler";
import Forum from "../../../Forum";
import React from "react";

const Special = () => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center mb-0">
        <h5 className="m-0 title flex-grow-3 font-weight-bold">
          Special themes
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
        <Card.Body>
          <Forum/>
          <Forum/>
          <Forum className="mb-0"/>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default Special;
