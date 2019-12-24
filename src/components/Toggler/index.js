import React, { useState } from "react";
import PropTypes from "prop-types";

const Toggler = ({ onClick }) => {
  const [toggle, handleToggle] = useState(false);

  //Expand accordion component
  const handleClick = () => {
    onClick();
    handleToggle(!toggle);
  };

  return (
    <span onClick={handleClick} className="toggler">
      {!toggle ? "-" : "+"}
    </span>
  )
};

export default Toggler;

Toggler.propTypes = {
  onClick: PropTypes.func
};
