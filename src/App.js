import React, { useEffect } from "react";
import Content from "./containers/ContentPlaceholder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { connect } from "react-redux";
import { actions } from "./redux/modules/Auth";
import PropTypes from "prop-types";
import AppSkeleton from "./containers/AppSkeleton";
import "./App.css";


const App = ({ verifyingToken, verifyToken }) => {

  useEffect(() => {
    verifyToken();
  }, []);

  if (verifyingToken) return <AppSkeleton/>;

  return (
    <React.Fragment>
      <Header/>
      <Content/>
      <Footer/>
      <Modal/>
    </React.Fragment>
  );
};

export default connect(
  state => ({ verifyingToken: state.authStore.verifying }),
  dispatch => ({ verifyToken: () => dispatch(actions.verifyRequest()) })
)(App);

App.propTypes = {
  verifyingToken: PropTypes.bool,
  verifyToken: PropTypes.func,
};
