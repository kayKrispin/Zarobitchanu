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
