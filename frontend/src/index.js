import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Widget from './Widget' ;
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const customHistory = createBrowserHistory()
const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    
    <AppContainer>
    <MuiThemeProvider>
    <Router history={customHistory}>
    <Switch>
      <Route exact path="/" component={Component}/>
      <Route  path="/:Widget" component={Widget}/>
      </Switch>
    </Router>
    </MuiThemeProvider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
