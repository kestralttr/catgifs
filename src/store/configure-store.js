import RootReducer from '../reducers/rootReducer';
import RootMiddleware from '../middleware/rootMiddleware';
import {createStore} from 'redux';

// enable redux devtools... can this be done with Webpack instead?
// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )
//
// export default (initialState) => {
//   return createStore(rootReducer, initialState, enhancers);
// };

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
