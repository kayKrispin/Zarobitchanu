import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {

  const [showModal, toggleModal] = useState(false);

  const props = {
    showModal,
    toggleModal,
  };

  return <Header {...props} />
};

export default HeaderContainer;
