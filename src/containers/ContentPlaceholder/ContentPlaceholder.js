import React from "react";
import ForumContent from "../ForumContent";
import ThemeContent from "../ThemeContent";
import TopicContent from "../TopicContent";
import Sidebar from "../Sidebar";
import { Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

const ContetPlaceholder = () => (
  <div className="main-container">
    <div className="content-placeholder">
      <div className="d-flex">
          <Link to="/" className="content-placeholder--home-btn">
              <FontAwesomeIcon className="mr-2" icon={["fas", "home"]} />
              <span className="title">
        Board home
      </span>
          </Link>
          <div className="content-placeholder--home-btn ml-3">
              <FontAwesomeIcon className="mr-2" icon={["fas", "plus"]} />
              <span className="title">
        Add forum
      </span>
          </div>
      </div>
      <Row className="mt-4">
        <Col xl={9}>
          <Switch>
            <Route exact path="/" component={ForumContent} />
            <Route exact path="/themes/:id" component={ThemeContent} />
            <Route exact path="/themes/topics/:id" component={TopicContent} />
          </Switch>
        </Col>
        <Col xl={3}>
          <Sidebar/>
        </Col>
      </Row>
    </div>
  </div>
);

export default ContetPlaceholder;
