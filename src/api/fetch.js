function getHeaders(extraHeaders = {}) {
    const headers = {
        "Content-Type": "application/json"
    };

    Object.keys(extraHeaders).forEach(key => {
        if (extraHeaders[key] === null) delete headers[key];
        else headers[key] = extraHeaders[key]
    });

    return headers;
}

async function modifiedFetch(url, params = {}) {
    const headers = getHeaders(params.headers);

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
        return JSON.parse(text);
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export default modifiedFetch;
