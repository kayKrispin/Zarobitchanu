import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Switch } from "antd";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";
import { actions as forumActions } from "../../redux/modules/Forum";
import useForm from "react-hook-form";

const CreateForumModal = ({ close, clearForm, createForum }) => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [switchValue, handleSwitch] = useState(false);

    const onSubmit = values => {
        values.category = switchValue;

        console.log(values)
        createForum(values);
    };

    const handleClose = () => {
        close();
        clearForm();
    };

    return (
        <React.Fragment>
            <div>
                <FontAwesomeIcon onClick={handleClose} className="mr-2 cross-icon" icon={["fas", "times"]} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="d-flex form-label flex-column">
                        Forum Title:
                        <input name="title" ref={register}  type="text"/>
                    </label>
                    <label className="d-flex form-label flex-column">
                        Description:
                        <input name="subtitle" ref={register} type="text"/>
                    </label>
                    <label className="d-flex form-label flex-column">
                        General:
                    </label>
                    <Switch checked={switchValue} onChange={e => handleSwitch(e)} name="forumCategory" ref={register} type="text"/>
                    <button className="login-btn mt-3 w-100">
                        Create Forum
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
};

export default connect(
    null,
    dispatch => ({
        close: () => dispatch(modalActions.closeModal()),
        clearForm: () => dispatch(actions.clearError()),
        createForum: data => dispatch(forumActions.createForumRequest(data))
    })
)(CreateForumModal);
