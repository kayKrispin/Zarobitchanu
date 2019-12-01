import React from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import { actions } from "../../redux/modules/Auth";
import { connect } from "react-redux";
import useForm from "react-hook-form";

const ResetPassword = ({ handleResetConfirmation, match, confirmMessage }) => {

    const { register, handleSubmit, errors, watch } = useForm({}); // initialise the hook

    const onSubmit = (values, e) => {
        if (!values.password || Object.values(errors).length > 0) return;

        handleResetConfirmation(values.password, match.params.code );
        e.target.reset();
    };

    const props = {
        onSubmit,
        register,
        confirmMessage,
        handleSubmit,
        watch,
        errors
    };

    return <ResetPasswordForm {...props} />
};

export default connect(
    state => ({
        confirmMessage: state.authStore.message
    }),
    dispatch => ({
        handleResetConfirmation: (password, code) =>
            (dispatch(actions.resetPasswordConfirmationRequest(password, code)))
    })
)(ResetPassword);
