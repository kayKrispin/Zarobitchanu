import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {

  const [showModal, toggleModal] = useState(false);
  const [activeModal, handleActiveModal] = useState("");

  const modalHandler = name => {
    handleActiveModal(name);
    toggleModal(!showModal);
  };

  const props = {
    showModal,
    toggleModal,
    activeModal,
    handleActiveModal,
    modalHandler,
  };

  return <Header {...props} />
};

export default HeaderContainer;
