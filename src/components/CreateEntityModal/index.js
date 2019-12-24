import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { modalActions } from "../../redux/modules/Modal";
import { actions } from "../../redux/modules/Auth";
import { actions as forumActions } from "../../redux/modules/Forum";
import useForm from "react-hook-form";
import ForumTile from "./components/ForumTile";
import TopicTile from "./components/TopicTile";
import ThemeTile from "./components/ThemeTile";
import PropTypes from "prop-types";

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
  limit,
  isAuthenticated
}) => {

  const { register, handleSubmit } = useForm(); // initialise the hook
  const [switchValue, handleSwitch] = useState(false);

  const onSubmit = values => {
    //Create topic
    if (themeModal) {
      values.createdAt = new Date();
      values.forumId = forumId;
      values.email = user.email;
      values.img = user.img;

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
        <FontAwesomeIcon
          onClick={handleClose}
          className="mr-2 cross-icon"
          icon={["fas", "times"]}
        />
        {
          //Disable creating entitis if not authenticated

          isAuthenticated
            ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                {
                  //Render replies fields
                  isReply
                    ? <TopicTile
                      title={title}
                      register={register}
                    />
                    //Render theme fields
                    : <ThemeTile
                      title={title}
                      register={register}
                    />
                }
                {
                  //Render forum fields
                  !themeModal && !isReply &&
                  <ForumTile
                    register={register}
                    switchValue={switchValue}
                    handleSwitch={handleSwitch}
                  />
                }
                <button className="login-btn mt-3 w-100">
                  Create {title}
                </button>
              </form>
            )
            : <div className="text-center">
              <h4>Nope buddy, you need to register firstly to taste some functionality. </h4>
                  😃
            </div>
        }
      </div>
    </React.Fragment>

  )
};

export default connect(
  state => ({
    isAuthenticated: state.authStore.isAuthenticated,
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


CreateForumModal.propTypes = {
  close: PropTypes.func,
  clearForm: PropTypes.func,
  createForum: PropTypes.func,
  themeModal: PropTypes.bool,
  createTopic: PropTypes.func,
  isReply: PropTypes.bool,
  createReply: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  title: PropTypes.string
};
