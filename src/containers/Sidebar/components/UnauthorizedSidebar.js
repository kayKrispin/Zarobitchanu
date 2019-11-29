import React from "react";
import { Card, Accordion } from "react-bootstrap";
import LoginForm from "../../../components/LoginForm";
import Toggler from "../../../components/Toggler";

const UnauthorizedSidebar = () => (
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
);

export default UnauthorizedSidebar;
