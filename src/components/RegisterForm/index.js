import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import useForm from "react-hook-form";
import { Avatar } from "antd";
import { connect } from "react-redux";
import { actions } from "../../redux/modules/Auth"

const RegisterFormContainer = ({ handleRegister }) => {
  const [imageBlob, handleImageBlob] = useState("");
  const { register, handleSubmit } = useForm(); // initialise the hook

  const onSubmit = values => {
      handleRegister(values)
  };

  let avatar =
      imageBlob
      ?  <img className="user-avatar--icon" src={imageBlob} alt=""/>
      : <Avatar className="user-avatar--icon" icon="user"/>;

  const props = {
    imageBlob,
    handleImageBlob,
    avatar,
    register,
    handleSubmit,
    onSubmit
  };

  return (
    <RegisterForm {...props} />
  )
};

export default connect(
    null,
    dispatch => ({
        handleRegister: credentials => dispatch(actions.registerRequest(credentials))
    })
)(RegisterFormContainer);
