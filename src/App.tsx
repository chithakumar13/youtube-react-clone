import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import TopNav from './components/TopNav/TopNav.component';
import { connect } from 'react-redux';
import { YoutubeClientLoaded } from './store/action-creators/action-creator';
import Search from './components/Search/Search.component';
import { SideBar } from './components/SideBar/SideBar.component';

interface IApp {
  setYoutubeCliendLoaded(): void
}

function App(props: IApp) {
  useEffect(() => {
    gapi.load('client', () => {
      gapi.client.setApiKey("AIzaSyBdT9NVewzwHrcGzMTpsPmTWtgUwH_5MyM");
      return gapi.client.load("youtube", "v3", () => {
        props.setYoutubeCliendLoaded();
      })
    })
  }
    , [])

  return (
    <div className="App">
      <TopNav />
      <SideBar />
      <Switch>
        <Route path="/result" component={Search} />        
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return { setYoutubeCliendLoaded: () => { dispatch(YoutubeClientLoaded()) } }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
