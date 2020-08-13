import React from 'react';
import {Route, Switch,withRouter} from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { TopNav } from './components/TopNav/TopNav.component';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route path="/" component={Home} />
      </Switch> 
    </div>
  );
}

export default withRouter(App);
