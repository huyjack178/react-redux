import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage/Loadable';
import FrontEndPage from 'pages/Configuration/FrontEndPage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import SideNav from 'components/SideNav';
import NavBar from 'components/NavBar';
import './style.scss';

const App = () => (
  <div className="flexible-content">
    <NavBar />
    <SideNav />
    <main id="content" className="p-5">
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/configuration/frontend" component={FrontEndPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </main>
  </div>
);

export default App;
