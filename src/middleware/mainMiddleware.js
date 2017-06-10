import {REQUEST_TOTAL_COUNT, receiveTotalCount, REQUEST_GIF, receiveGIF} from "../actions/mainActions";
import {fetchTotalCount, fetchGIF} from "../util/mainAPIUtil";

const MainMiddleware = ({getState,dispatch}) => next => action => {
  const totalCountSuccess = json => dispatch(receiveTotalCount(json));
  const GIFSuccess = json => dispatch(receiveGIF(json));

  console.log("middleware action type: ", action.type);
  switch(action.type) {
    case REQUEST_TOTAL_COUNT:
      fetchTotalCount(totalCountSuccess);
      return next(action);
    case REQUEST_GIF:
      fetchGIF(action.offset, GIFSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default MainMiddleware;
