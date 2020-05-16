import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './index.css';
import App from './App';
import Main from './components/Main';
import Success from './components/Success';
import Failure from './components/Failure';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={Main} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/failure" component={Failure} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
