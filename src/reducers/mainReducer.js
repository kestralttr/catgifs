import {RECEIVE_GIF} from '../actions/mainActions';

const _defaultState = {
  gifURL: null
};

const MainReducer = (state = _defaultState, action) => {
  let newState = {gifURL: state.gifURL};

  console.log("reducer action type: ", action.type);

  if(action.json) {
    console.log(action.json);
  }

  switch (action.type) {
    case RECEIVE_GIF:
    console.log(action.json);
      newState["gifURL"] = action.json.data[0].images.fixed_height.url;
      console.log("newState: ", newState);
      return newState;
    default:
      return state;
  }

};

export default MainReducer;
