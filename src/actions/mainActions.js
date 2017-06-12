export const REQUEST_GIF = "REQUEST_GIF";
export const RECEIVE_GIF = "RECEIVE_GIF";

export const requestGIF = (offset) => ({
  type: REQUEST_GIF,
  offset: offset
});

export const receiveGIF = (json) => ({
  type: RECEIVE_GIF,
  json: json
});
