import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { TopNav } from './components/TopNav/TopNav.component';
import { getVideos } from './store/api/api';

function App() {

  useEffect(() => {
    gapi.load('client', () => {
      gapi.client.setApiKey("AIzaSyDY8Fym_sZKDZlQ3H3qsfp7HcBzAf1HRnw");
      return gapi.client.load("youtube", "v3", () => {
        getVideos();
      })
    })
  }
    , [])

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
