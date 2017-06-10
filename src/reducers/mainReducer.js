import {RECEIVE_TOTAL_COUNT, RECEIVE_GIF} from '../actions/mainActions';

const _defaultState = {
  count: null,
  gifURL: null
};

const MainReducer = (state = _defaultState, action) => {
  let newState = {count: state.count, gifURL: state.gifURL};

  console.log("reducer action type: ", action.type);

  if(action.json) {
    console.log(action.json);
  }

  switch (action.type) {
    case RECEIVE_TOTAL_COUNT:
      newState["count"] = action.json.pagination.total_count;
      console.log("newState: ", newState);
      return newState;
    case RECEIVE_GIF:
    console.log(action.json);
      newState["gifURL"] = action.json.data[0].images.original.url;
      console.log("newState: ", newState);
      return newState;
    default:
      return state;
  }

};

export default MainReducer;
