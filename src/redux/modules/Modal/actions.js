import * as types from "./types";


export const openModal = (content, width) => ({
    type: types.OPEN_MODAL,
    content,
    width
});

export const closeModal = () => ({
  type: types.CLOSE_MODAL
});

