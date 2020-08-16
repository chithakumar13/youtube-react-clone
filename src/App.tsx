import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { TopNav } from './components/TopNav/TopNav.component';
import { getVideos } from './store/api/api';
import { connect } from 'react-redux';
import { IVideoState } from './store/interfaces/IVideoState'; 
import { YoutubeClientLoaded } from './store/action-creators/action-creator';

interface IApp{  
  setYoutubeCliendLoaded() : void
}

function App(props : IApp) {
  useEffect(() => {
    gapi.load('client', () => {
      gapi.client.setApiKey("AIzaSyDY8Fym_sZKDZlQ3H3qsfp7HcBzAf1HRnw");
      return gapi.client.load("youtube", "v3", () => {
        props.setYoutubeCliendLoaded();
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

const mapDispatchToProps = (dispatch: any) => {
  return { setYoutubeCliendLoaded: () => {  dispatch(YoutubeClientLoaded()) } }
}

export default withRouter(connect(null,mapDispatchToProps)(App));
