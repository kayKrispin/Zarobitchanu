import React from "react";
import PropTypes from "prop-types";

const LabeledInput = ({
  register,
  title,
  name,
  required,
  content,
  pattern
}) => {

  //Set field validation
  let registerFunction;

  if (required) {
    registerFunction = register({
      required: true,
      pattern: pattern
    })
  }

  return (
    <label className="d-flex form-label flex-column">
      {title}
      <input name={name} ref={registerFunction} type="text"/>
      {content}
    </label>
  )
};


export default LabeledInput;

LabeledInput.propTypes = {
  register: PropTypes.func,
  title: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
};
