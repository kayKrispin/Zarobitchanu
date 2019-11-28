import { API_URL } from "../../../api/constans";
import fetch from "../../../api/fetch";


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

export const login = async data => {
    try {
        return fetch(`${API_URL}/signin`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};
