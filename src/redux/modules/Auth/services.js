import { API_URL } from "../../../api/constans";
import modifiedFetch from "../../../api/fetch";


export const register = async data => {

    const formData = new FormData();

    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('image', data.img);

    try {
        return fetch(`${API_URL}/signup`, {
            method: "POST",
            body: formData,
            image: true
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const login = async data => {
    try {
        return modifiedFetch(`${API_URL}/signin`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};

export const verify = async () => {
    try {
        return modifiedFetch(`${API_URL}/verify`, {
            method: "GET"
        });
    }
    catch (err) {
        if (err.response && err.response.data) throw err.response.data;
        throw err;
    }
};
