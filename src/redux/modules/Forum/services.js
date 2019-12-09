import { API_URL } from "../../../api/constans";
import modifiedFetch from "../../../api/fetch";

export const createForum = async data => {
  try {
    return modifiedFetch(`${API_URL}/forum/createForum`, {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  catch (err) {
    if (err.response && err.response.data) throw err.response.data;
    throw err;
  }
};

export const getForums = async () => {
    try {
        return modifiedFetch(`${API_URL}/forum/getForums`, {
            method: "GET"
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const deleteForum = async id => {
    try {
        return modifiedFetch(`${API_URL}/forum/deleteForum`, {
            method: "POST",
            body: JSON.stringify({ id: id})
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const createTopic = async data => {
    try {
        return modifiedFetch(`${API_URL}/forum/createTopic`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const getTopics = async id => {
    try {
        return modifiedFetch(`${API_URL}/forum/getTopics`, {
            method: "POST",
            body: JSON.stringify({ id: id })
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const deleteTopic = async data => {
    try {
        return modifiedFetch(`${API_URL}/forum/deleteTopic`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const searchTopic = async ({ key, forumId }) => {
    try {
        return modifiedFetch(`${API_URL}/forum/searchTopic`, {
            method: "POST",
            body: JSON.stringify({ key, forumId })
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const createReply = async ({ data }) => {
    try {
        return modifiedFetch(`${API_URL}/forum/createReply`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};


export const getReplies = async ({ forumId, topicId }) => {
    try {
        return modifiedFetch(`${API_URL}/forum/getReplies`, {
            method: "POST",
            body: JSON.stringify({ forumId, topicId })
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};
