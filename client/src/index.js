import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch } from "react-router-dom";

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <App>
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();