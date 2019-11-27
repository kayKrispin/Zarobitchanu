function getHeaders(extraHeaders = {}) {
    const headers = {
        "Content-Type": "application/json"
    };

    return headers;
}


async function modifiedFetch(url, params = {}) {
    const headers = getHeaders(params.headers);
console.log(params)

    const response = await fetch(url, {
        headers,
        ...params
    });


    // Response not in 200-299 range
    if (!response.ok) return Promise.reject(response);

    // Body is empty
    const text = await response.text();
    if (!text) return true;

    // Parse json from body
    try {
        return response;
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export default modifiedFetch;
