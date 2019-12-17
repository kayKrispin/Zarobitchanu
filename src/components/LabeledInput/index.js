import React from "react";
import PropTypes from "prop-types";

const LabeledInput = ({
  register,
  title,
  name,
  required,
  content,
  pattern,
  requiredSingle
}) => {

  //Set custom field validation
  let registerFunction;

  if (required) {
    registerFunction = register({
      required: true,
      pattern: pattern
    })
  }

  //Set only required validation
  if (requiredSingle) {
    registerFunction = register({
      required
    })
  }

  return (
    <label className="d-flex form-label flex-column">
      {title}
      <input name={name} ref={registerFunction || register} type="text"/>
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
  requiredSingle: PropTypes.bool
};
