import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { Avatar } from "antd";

const RegisterFormContainer = () => {

  const [imageBlob, handleImageBlob] = useState("");
  let avatar =  imageBlob ?  <img className="user-avatar--icon" src={imageBlob} alt=""/>
    : <Avatar className="user-avatar--icon" icon="user"/>;

  const props = {
    imageBlob,
    handleImageBlob,
    avatar
  };

  return (
    <RegisterForm {...props} />
  )
};

export default RegisterFormContainer;
