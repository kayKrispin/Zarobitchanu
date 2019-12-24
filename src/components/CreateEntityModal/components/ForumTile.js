import React from "react";
import { Switch } from "antd";
import PropTypes from "prop-types";

const ForumTile = ({ register, switchValue, handleSwitch }) => (
  <div>
    <label className="d-flex form-label flex-column">
            Description:
      <input name="subTitle" ref={register} type="text"/>
    </label>
    <label className="d-flex form-label flex-column">
            General:
    </label>
    <Switch
      checked={switchValue}
      onChange={e => handleSwitch(e)}
      name="isSpecial"
      ref={register}
      type="text"
    />
  </div>
);

export default ForumTile;

ForumTile.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func,
  handleSwitch: PropTypes.func,
  switchValue: PropTypes.bool
};
