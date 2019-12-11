export const registerRequest = state => ({
  ...state
});

export const registerRequestSuccess = (state, action) => ({
  ...state,
  ...action.user,
  emailVerifyed: false,
  error: " "
});

export const resetPasswordRequestSuccess = (state, action) => ({
  ...state,
  user: { ...action.user },
  error: " "
});

export const resetPasswordConfirmationRequestSuccess = (state, action) => ({
  ...state,
  message: action.message,
  error: " "
});

export const registerReuqestError = (state, action) => ({
  ...state,
  user: {},
  error: action.error,
});

export const verifyRequest = state => ({
  ...state
});

export const verifyRequestSuccess = (state, action) => ({
  ...state,
  ...action.user || {},
  isAuthenticated: true,
  verifying: false
});

export const verifyRequestError = state => ({
  ...state,
  isAuthenticated: false,
  verifying: false,
});

export const loginRequest = state => ({
  ...state
});

export const loginRequestSuccess = (state, action) => ({
  ...state,
  ...action.user,
  isAuthenticated: true,
  error: " "
});

export const loginRequestError = (state, action) => ({
  ...state,
  user: {},
  error: action.error,
});

export const showLoading = state => ({
  ...state,
  loading: true,
});

export const logoutRequestSuccess = state => ({
  ...state,
  loading: true,
  isAuthenticated: false,
  user: {}
});

export const hideLoading = state => ({
  ...state,
  loading: false,
});


export const clearError = state => ({
  user: { },
  error: " ",
});
