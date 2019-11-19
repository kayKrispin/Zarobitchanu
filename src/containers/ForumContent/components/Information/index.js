import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggler from "../../../../components/Toggler";

const Information = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center mb-0 information-header">
          <h5 className="m-0 title flex-grow-3 font-weight-bold">
            <FontAwesomeIcon className="mr-2" icon={["fas", "info"]} />
            Information
          </h5>

          <Accordion.Toggle as={Toggler} variant="link" eventKey="0"/>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="information-container">
              <h3 className="title">Who is online?</h3>
              <p className="subtitle-info">
                In total there are <strong>2</strong> users online : 0 registered, 0 hidden and 2 guests
                (based on users active over the past 5 minutes)
                Most users ever online was
                <strong>29</strong>
                on Mon Mar 06, 2017 7:33 am
              </p>
            </div>
            <div className="information-container mt-2">
              <h3 className="title">Statistics</h3>
              <p className="subtitle-info">
                Total posts <strong>51</strong>•
                Total topics <strong>36</strong> •
                Total members <strong>292</strong> •
                Our newest member internet
              </p>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
};

export default Information;
