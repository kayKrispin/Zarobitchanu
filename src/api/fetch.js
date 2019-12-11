function getHeaders(extraHeaders = {}, removeContentType = false) {
  const headers = {
    "Content-Type": "application/json"
  };

  const token = JSON.parse(localStorage.getItem("token") || "{}");

  if (token) headers.Authorization = `Bearer ${token}`;
  if (removeContentType) delete headers["Content-Type"];

  Object.keys(extraHeaders).forEach(key => {
    if (extraHeaders[key] === null) delete headers[key];
    else headers[key] = extraHeaders[key]
  });

  return headers;
}

async function modifiedFetch(url, params = {}, removeContentType) {
  const headers = getHeaders(params.headers, removeContentType);

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
