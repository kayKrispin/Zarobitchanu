import React from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";

const SidebarContainer = ({ isAuthenticated }) => {

  return <Sidebar isAuthenticated={isAuthenticated}/>
};

export default connect(
    state => ({
        isAuthenticated: state.authStore.isAuthenticated
    }),
    null
)(SidebarContainer);
