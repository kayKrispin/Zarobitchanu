import React from "react";
import { Card, Accordion } from "react-bootstrap";
import LoginForm from "../../../components/LoginForm";
import Toggler from "../../../components/Toggler";
import { GoogleLogin } from "react-google-login";
import PropTypes from "prop-types";


const UnauthorizedSidebar = ({ responseGoogle }) => (
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
        <div className="sidebar">
          <h3 className="mb-0 mt-3  social-title">Social login </h3>
        </div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || process.env.GOOGLE_ID}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="login-btn google-btn mt-3 w-100">
                            Login with Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default UnauthorizedSidebar;

UnauthorizedSidebar.propTypes = {
  responseGoogle: PropTypes.func
}
