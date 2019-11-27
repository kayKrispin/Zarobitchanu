import { API_URL } from "../../../api/constans";


export const register = async data => {
    try {
        return fetch(`${API_URL}/signup`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};
