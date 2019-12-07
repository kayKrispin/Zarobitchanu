import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Switch } from "antd";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";
import { actions as forumActions } from "../../redux/modules/Forum";
import useForm from "react-hook-form";

const CreateForumModal = ({ close, clearForm, createForum, themeModal, createTopic, forumId }) => {

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [switchValue, handleSwitch] = useState(false);

    const title = themeModal ? "Topic" : "Forum";

    const onSubmit = values => {
        if (themeModal) {
            values.createdAt = new Date();
            values.forumId = forumId;

            createTopic(values);
            close();

            return
        }

        values.isSpecial = switchValue;
        values.createdAt = new Date();

        createForum(values);
        close();
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
                        {title} Title:
                        <input name="title" ref={register}  type="text"/>
                    </label>
                    {
                        !themeModal && (
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
                        )
                    }
                    <button className="login-btn mt-3 w-100">
                        Create {title}
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
        createForum: data => dispatch(forumActions.createForumRequest(data)),
        createTopic: data => dispatch(forumActions.createTopicRequest(data))
    })
)(CreateForumModal);
