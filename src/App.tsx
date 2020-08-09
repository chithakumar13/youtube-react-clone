import React from 'react';
import {Route, Switch,withRouter} from 'react-router-dom';
import { Home } from './components/Home/Home.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch> 
    </div>
  );
}

export default withRouter(App);
