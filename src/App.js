import React, { memo, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Developer';
import { Pages } from './constants/constants';
import 'antd/dist/antd.css';

const App = () => (
  <div className="container">
    <div className="left"><Sidebar /></div>
    <div className="right">
      <div>
        <Suspense fallback={<div />}>
          <Router>
            <Navbar pages={Pages} />
            <Switch>
              {
                Pages.map((page, index) => (
                  <Route
                    exact
                    path={page.pageLink}
                    render={() => <page.view />}
                    key={index}
                  />
                ))
              }
              <Redirect to="/" />
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  </div>
);

export default memo(App);
