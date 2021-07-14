import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import App from '../App';
import BreedDetail from './BreedDetail';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(App)}/>
      <Route exact path="/breeds/:breedName" component={withRouter(BreedDetail)}/> 

    </Switch>
  
  </BrowserRouter>
);

export default Router;