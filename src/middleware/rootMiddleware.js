import {applyMiddleware} from 'redux';
import MainMiddleware from "./mainMiddleware";

const RootMiddleware = applyMiddleware(
  MainMiddleware
);

export default RootMiddleware;
