import React from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const ContetPlaceholder = () => (
  <div className="main-container">
    <div className="content-placeholder">
      <p className="content-placeholder--home-btn cursor-pointer">
        <FontAwesomeIcon className="mr-2" icon={["fas", "home"]} />
        <span className="title">
        Board home
      </span>
      </p>
      <Row className="mt-4">
        <Col xl={9}>
          <Content/>
        </Col>
        <Col xl={3}>
          <Sidebar/>
        </Col>
      </Row>
    </div>
  </div>
);

export default ContetPlaceholder;
