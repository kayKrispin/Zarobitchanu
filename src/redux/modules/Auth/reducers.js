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

export const verifyRequest = state => ({
    ...state
});

export const verifyRequestSuccess = (state, action) => ({
    ...state,
    ...action.user,
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


export const clearError = state => ({
    ...state,
    error: " ",
});
