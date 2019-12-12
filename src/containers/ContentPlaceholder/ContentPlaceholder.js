import React from "react";
import Routes from "../../routes";
import Sidebar from "../Sidebar";
import Header from "./ContentPlaceholderHeader";
import { Row, Col } from "react-bootstrap";

const ContetPlaceholder = props => (
  <div className="main-container">
    <div className="content-placeholder">
      <Header {...props} />
      <Row className="mt-4">
        <Col xl={9}>
          <Routes/>
        </Col>
        <Col xl={3}>
          <Sidebar/>
        </Col>
      </Row>
    </div>
  </div>
);

export default ContetPlaceholder;
