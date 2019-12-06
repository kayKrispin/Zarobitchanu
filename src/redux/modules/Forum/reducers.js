export const createForumRequest = state => ({
  ...state
});

export const createForumRequestSuccess = (state, action) => ({
  ...state,
  ...action.forum,
  error: " "
});

export const createForumRequestError = (state, action) => ({
  ...state,
  forum: {},
  error: action.error
});


export const hideLoading = state => ({
  ...state,
  loading: false,
});

export const showLoading = state => ({
  ...state,
  loading: true,
});
