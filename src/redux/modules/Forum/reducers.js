import { sortByDate } from "../../../helpers";

export const createForumRequest = state => ({
  ...state
});

export const createForumRequestSuccess = (state, action) => ({
  ...state,
  ...action.forum,
  error: ""
});

export const createForumRequestError = (state, action) => ({
  ...state,
  forum: {},
  error: action.error
});

export const getTopicsRequestSuccess = (state, action) => {

    const filteredTopics = sortByDate(action.forum[0].topics);

    return {
        ...state,
         topics: [...filteredTopics],
         forumTitle: action.forum[0].title,
         error: ""
    }
};

export const getTopicsRequestError = (state, action) => ({
    ...state,
    error: action.error
});

export const searchTopicsRequestSuccess = (state, action) => {

    return {
        ...state,
         topics: [...action.topics]
    }
};

export const deleteForumRequestSuccess = (state, action) => {

    const filteredForums = sortByDate(action.forums);

    return {
        ...state,
        forums: [...filteredForums],
        error: "",
    }
};

export const deleteForumRequestError = (state, action) => ({
    ...state,
    forum: {},
    error: action.error
});

export const deleteTopicRequestSuccess = (state, action) => {

    const filteredTopics = sortByDate(action.topics);

    return {
        ...state,
        forums: [...filteredTopics],
        error: "",
    }
};

export const deleteTopicRequestError = (state, action) => ({
    ...state,
    forum: {},
    error: action.error
});

export const setActiveForumId = (state, action) => ({
    ...state,
    selectedForumId: action.id
});

export const createReplySuccess = (state, action) => ({
    ...state,
    replies: action.replies.replies,
    users: action.replies.users,
    totalReplies: action.replies.totalReplies
});

export const createReplyError = (state, action) => ({
    ...state,
    error: action.error
});

export const getRepliesSuccess = (state, action) => ({
  ...state,
  replies: action.replies.replies,
  users: action.replies.users,
  totalReplies: action.replies.totalReplies
});

export const getRepliesError = (state, action) => ({
  ...state,
  error: action.error
});

export const getForumsRequestSuccess = (state, action) => {

    const filteredForums = sortByDate(action.forums);
    return {
    ...state,
    forums: [...filteredForums],
    error: "",
    }
};

export const getForumsRequestError = (state, action) => ({
    ...state,
    forum: {},
    forums: [],
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


