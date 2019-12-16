import * as types from "./types";
import {
  openModal,
  closeModal
} from "./reducers";

const initialState = {
  isOpen: false,
  content: null,
  width: 300
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return openModal(state, action);
    case types.CLOSE_MODAL:
      return closeModal(state, action);
    default:
      return state;
  }
};
