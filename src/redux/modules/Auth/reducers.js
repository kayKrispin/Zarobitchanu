export const registerRequest = state => ({
    ...state
});

export const registerRequestSuccess = (state, action) => ({
    ...state,
    ...action.user,
    emailVerifyed: false,
    error: " "
});

export const registerReuqestError = (state, action) => ({
    ...state,
    user: {},
    error: action.error,
});

export const loginRequest = state => ({
    ...state
});

export const loginRequestSuccess = (state, action) => ({
    ...state,
    ...action.user,
    emailVerifyed: false,
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

export const hideLoading = state => ({
    ...state,
    loading: false,
});
