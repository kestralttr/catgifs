import {REQUEST_GIF, receiveGIF} from "../actions/mainActions";
import {fetchGIF} from "../util/mainAPIUtil";

const MainMiddleware = ({getState,dispatch}) => next => action => {
  const GIFSuccess = json => dispatch(receiveGIF(json));

  switch(action.type) {
    case REQUEST_GIF:
      fetchGIF(action.offset, GIFSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default MainMiddleware;
