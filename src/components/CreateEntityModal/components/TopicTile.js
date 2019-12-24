import React from "react";
import PropTypes from "prop-types";

const TopicTile = ({ title, register }) => (
  <label className="d-flex form-label flex-column">
    {title} Title:
    <input name="text" ref={register} type="text"/>
  </label>
);

export default TopicTile;

TopicTile.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func
};
