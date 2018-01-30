import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Widget from './Widget' ;
import TopTen from './formulaire/TopTen' ;
import AdvancedView from './advanced/AdvancedView' ;
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
      <Route  path="/name/:Widget" component={Widget}/>
      <Route  path="/adv" component={AdvancedView}/>
      <Route  path="/topten" component={TopTen}/>
      </Switch>
    </Router>
    </MuiThemeProvider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
