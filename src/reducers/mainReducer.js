import {RECEIVE_GIF} from '../actions/mainActions';

const _defaultState = {
  gifURL: null
};

const MainReducer = (state = _defaultState, action) => {
  let newState = {gifURL: state.gifURL};

  switch (action.type) {
    case RECEIVE_GIF:
      newState["gifURL"] = action.json.data[0].images.fixed_height.url;
      return newState;
    default:
      return state;
  }

};

export default MainReducer;
