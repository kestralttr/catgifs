import {RECEIVE_TOTAL_COUNT} from '../actions/mainActions';

const _defaultState = {
  count: null,
  gifURL: null
};

const MainReducer = (state = _defaultState, action) => {
  let newState = {count: null, gifURL: null};

  console.log("reducer action type: ", action.type);

  if(action.json) {
    console.log(action.json);
  }

  switch (action.type) {
    case RECEIVE_TOTAL_COUNT:
      newState["count"] = action.json.pagination.total_count;
      console.log("newState: ", newState);
      return newState;
    default:
      return state;
  }

};

export default MainReducer;
