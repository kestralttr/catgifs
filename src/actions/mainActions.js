export const REQUEST_TOTAL_COUNT = "REQUEST_TOTAL_COUNT";
export const RECEIVE_TOTAL_COUNT = "RECEIVE_TOTAL_COUNT";
export const REQUEST_GIF = "REQUEST_GIF";
export const RECEIVE_GIF = "RECEIVE_GIF";

export const requestTotalCount = () => ({
  type: REQUEST_TOTAL_COUNT
});

export const receiveTotalCount = (json) => {
console.log(json);
  return {
    type: RECEIVE_TOTAL_COUNT,
    json: json
  };
};

export const requestGIF = (offset) => ({
  type: REQUEST_GIF,
  offset: offset
});

export const receiveGIF = (json) => ({
  type: RECEIVE_GIF,
  json: json
});
