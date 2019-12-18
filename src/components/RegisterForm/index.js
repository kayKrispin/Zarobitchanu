import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import useForm from "react-hook-form";
import { modalActions } from "../../redux/modules/Modal";
import { Avatar } from "antd";
import { connect } from "react-redux";
import { actions as authActions } from "../../redux/modules/Auth"

const RegisterFormContainer = ({ handleRegister, loading, serverError, userAvatar, close, user }) => {

  const [imageBlob, handleImageBlob] = useState(null);
  const [imageFile, handleImageFile] = useState(null);
  const { register, handleSubmit, errors } = useForm(); // initialise the form hook;

  //Validate and register user
  const onSubmit = (values, e) => {

    console.log(values)
    if (!values.email || Object.values(errors).length > 0) return;
    values.img = imageFile;
    handleRegister(values);
    e.target.reset();
  };

  //Save image file and image blob for img tag
  const handleImage = image => {
    handleImageBlob(URL.createObjectURL(image));
    handleImageFile(image);
  };

  const avatar = imageBlob
    ? <img className="user-avatar--icon" src={imageBlob} alt=""/>
    : <Avatar className="user-avatar--icon" icon="user"/>;

  const props = {
    imageBlob,
    handleImage,
    avatar,
    register,
    handleSubmit,
    loading,
    serverError,
    userAvatar,
    onSubmit,
    user,
    errors
  };


  return (
    <RegisterForm {...props} />
  )
};

export default connect(
  state => ({
    loading: state.authStore.loading,
    serverError: state.authStore.error,
    user: state.authStore.user
  }),
  dispatch => ({
    handleRegister: credentials => dispatch(authActions.registerRequest(credentials)),
    close: () => dispatch(modalActions.closeModal())
  })
)(RegisterFormContainer);
