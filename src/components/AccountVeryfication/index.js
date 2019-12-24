import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Auth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";


const AccountVeryfication = ({
  handleActivate,
  match,
  isAccountActivated
}) => {

  useEffect(() => {

    //Set user field emailVerifyied to true
    handleActivate(match.params.code);
  }, []);

  if (isAccountActivated) return <Redirect to="/" />;

  return (
    <React.Fragment>
            hello there
    </React.Fragment>
  );
};

export default connect(
  state => ({
    isAccountActivated: state.authStore.user.emailVerifyed
  }),
  dispatch => ({
    handleActivate: code => dispatch(actions.activateAccountRequest(code))
  })
)(AccountVeryfication);


AccountVeryfication.propTypes = {
  handleActivate: PropTypes.func,
  match: PropTypes.object,
  isAccountActivated: PropTypes.bool
};
