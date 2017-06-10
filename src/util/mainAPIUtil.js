
export const fetchTotalCount = (success) => {
  fetch("http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC")
  .then((response) => {
    return response.json();})
  .then((json) => {
    success(json);
  });
};

export const fetchGIF = (offset,success) => {
  let url = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=1&offset=" + offset.toString();
  fetch(url)
  .then((response) => {
    return response.json();})
  .then((json) => {
    success(json);
  });
};
