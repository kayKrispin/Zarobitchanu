import React from "react";

const LabeledInput = ({ register, title, name }) => (
    <label className="d-flex form-label flex-column">
        {title}
        <input name={name} ref={register} type="text"/>
    </label>
);

export default LabeledInput;
