import React from "react";
import PropTypes from "prop-types";

const ThemeTile = ({ title, register }) => (
  <label className="d-flex form-label flex-column">
    {title} Title:
    <input name="title" ref={register} type="text"/>
  </label>
);

export default ThemeTile;


ThemeTile.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func
};
