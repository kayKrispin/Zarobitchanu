import React from "react";

const TopicTile = ({ title, register }) => (
  <label className="d-flex form-label flex-column">
    {title} Title:
    <input name="text" ref={register} type="text"/>
  </label>
);

export default TopicTile;
