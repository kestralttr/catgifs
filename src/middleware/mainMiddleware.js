import {REQUEST_TOTAL_COUNT, receiveTotalCount} from "../actions/mainActions";
import {fetchTotalCount} from "../util/mainAPIUtil";

const MainMiddleware = ({getState,dispatch}) => next => action => {
  const totalCountSuccess = json => dispatch(receiveTotalCount(json));

  console.log("middleware action type: ", action.type);
  switch(action.type) {
    case REQUEST_TOTAL_COUNT:
      fetchTotalCount(totalCountSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default MainMiddleware;
