import React from "react";
import { Card, Accordion } from "react-bootstrap";
import Toggler from "../../../components/Toggler";
import SidebarProfile from "../../../components/SidebarProfile";


const AuthorizedSidebar = () => (
    <Card>
        <Card.Header className="d-flex justify-content-between align-items-center pr-0 pl-0">
            <div className="d-flex align-items-center">
                <h5 className="title m-0">
                    Profile
                </h5>
            </div>
            <Accordion.Toggle as={Toggler} variant="link" eventKey="0">
                Click me!
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
            <Card.Body className="p-0">
             <SidebarProfile/>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
);

export default AuthorizedSidebar;
