// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Exercises from './components/Exercises';
import Activity from './components/Activity';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/activity" component={Activity} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
