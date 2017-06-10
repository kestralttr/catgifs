export const REQUEST_TOTAL_COUNT = "REQUEST_TOTAL_COUNT";
export const RECEIVE_TOTAL_COUNT = "RECEIVE_TOTAL_COUNT";
export const REQUEST_GIF = "REQUEST_GIF";
export const RECEIVE_GIF = "RECEIVE_GIF";

export const requestTotalCount = () => ({
  type: REQUEST_TOTAL_COUNT
});

export const receiveTotalCount = (count) => ({
  type: RECEIVE_TOTAL_COUNT,
  count: count
});

export const requestGIF = (offset) => ({
  type: REQUEST_GIF,
  offset: offset
});

export const receiveGIF = (data) => ({
  type: RECEIVE_GIF,
  data: data
});
