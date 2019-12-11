import React from "react";
import { Switch } from "antd";

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
