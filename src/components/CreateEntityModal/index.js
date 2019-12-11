import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { Switch } from "antd";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";
import { actions as forumActions } from "../../redux/modules/Forum";
import useForm from "react-hook-form";

const CreateForumModal = ({
  close,
  clearForm,
  createForum,
  themeModal,
  createTopic,
  forumId,
  title,
  isReply,
  user,
  createReply,
  selectedForumId,
  match,
  topicId,
  page,
  limit
}) => {

  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [switchValue, handleSwitch] = useState(false);

  const onSubmit = values => {
    //Create topic
    if (themeModal) {
      values.createdAt = new Date();
      values.forumId = forumId;

      createTopic(values);
      close();

      return
    }
    //Create reply
    if (isReply) {
      values.createdAt = new Date();
      values.userName = user && user.email;
      values.userAvatar = user && user.img;
      values.userId = user && user._id;
      values.forumId = selectedForumId;
      values.topicId = topicId;

      createReply(values, page, limit);
      close();

      return;
    }

    //Create forum
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
          {
            //Render replies fields
            isReply
              ? (
                <label className="d-flex form-label flex-column">
                  {title} Text:
                  <textarea name="text" ref={register} />
                </label>
              )
              : (
                <label className="d-flex form-label flex-column">
                  {title} Title:
                  <input name="title" ref={register} type="text"/>
                </label>
              )
          }

          {
            //Render forum fields
            !themeModal && !isReply && (
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
  state => ({
    user: state.authStore.user,
    selectedForumId: state.forumStore.selectedForumId
  }),
  dispatch => ({
    close: () => dispatch(modalActions.closeModal()),
    clearForm: () => dispatch(actions.clearError()),
    createForum: data => dispatch(forumActions.createForumRequest(data)),
    createTopic: data => dispatch(forumActions.createTopicRequest(data)),
    createReply: (data, page, limit) => dispatch(forumActions.createReplyRequest(data, page, limit))
  })
)(CreateForumModal);
