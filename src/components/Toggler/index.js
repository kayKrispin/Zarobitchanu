import React, {useState} from "react";

const Toggler = ({ onClick }) => {
  const [toggle, handleToggle] = useState(false);

  const handleClick = () => {
    onClick();
    handleToggle(!toggle);
  };

  return (
    <span onClick={handleClick} className="toggler">
      {
        !toggle ? "-" : "+"
      }
    </span>
  )
};


export default Toggler;
