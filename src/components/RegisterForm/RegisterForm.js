import React from "react";
import PropTypes from "prop-types";

const RegisterForm = ({ imageBlob, handleImageBlob, avatar }) => (
    <div>
      <form action="">
        <div className="user-avatar">
          <div className="user-avatar--container">
            {avatar}
          </div>
          <p className="form-label mt-2">Choose your avatar</p>
          <input
            onChange={ e =>
              handleImageBlob(URL.createObjectURL(e.target.files[0]))
            }
            className="user-avatar--file-uploader"
            type="file"
          />
        </div>
        <label className="d-flex form-label flex-column">
          Email:
          <input type="text"/>
        </label>
        <label className="d-flex form-label flex-column">
          Password:
          <input type="text"/>
        </label>
        <label className="d-flex form-label flex-column">
          Confirm Password:
          <input type="text"/>
        </label>
        <button onClick={(e) => { e.preventDefault() }} className="login-btn mt-3 w-100">
          Register
        </button>

      </form>
    </div>
);


export default RegisterForm;


RegisterForm.propTypes = {
  imageBlob: PropTypes.string,
  handleImageBlob: PropTypes.func
};
