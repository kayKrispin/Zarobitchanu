export const openModal = (state, action) => {
  return {
    ...state,
    isOpen: true,
    content: action.content,
    width: action.width
  }
};

export const closeModal = state => {
  return {
    ...state,
    isOpen: false,
    content: null,
  }
};
