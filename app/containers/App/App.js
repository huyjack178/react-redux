/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Router, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import DashboardPage from 'containers/DashboardPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import { createBrowserHistory } from 'history';
import './style.scss';

const history = createBrowserHistory();

const App = () => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Router history={history}>
      <React.Fragment>
        <Header history={history} />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/configuration/frontend" component={FeaturePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  </div>
);

export default App;
