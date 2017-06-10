import {combineReducers} from 'redux';
import MainReducer from './mainReducer';

const RootReducer = combineReducers({
  main: MainReducer
});

export default RootReducer;
