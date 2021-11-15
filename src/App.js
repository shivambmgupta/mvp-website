import React, { memo, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Developer';
import { AlertData, Pages } from './constants/constants';
import 'antd/dist/antd.css';
import { Alert, Button } from 'antd';
import './App.css';

const App = () => (
  <div className="container">
    <div className="left"><Sidebar /></div>
    <div className="right">
      <div>
        <Suspense fallback={<div />}>
          <Router>
            <Navbar pages={Pages} />
            <Alert
              className="alert-container"
              message={AlertData.heading}
              description={AlertData.description}
              type={AlertData.type}
              showIcon
              closable={AlertData.closable}
              action={
                <Button
                  size="small"
                  type="primary"
                  onClick={() => {
                    window.open(AlertData.actionLink, '_blank').focus();
                  }}
                >
                  View
                </Button>
              }
            />
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
