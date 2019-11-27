export const registerRequest = state => ({
    ...state
});

export const registerRequestSuccess = (state, action) => ({
    ...state,
    user: action.user,
});

export const registerReuqestError = (state, action) => ({
    ...state,
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
