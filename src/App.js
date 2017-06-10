import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import MainContainer from './components/MainContainer';

const App = () => (
  <BrowserRouter>
      <Route exact path="/" component={MainContainer}/>
  </BrowserRouter>
);

export default App;
