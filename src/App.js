import React, { memo } from 'react';
import BlogList from './components/BlogsList';
import Developer from './components/Developer';

const App = (props) => {
  return (
    <div className="container">
      <div className="left"><Developer /></div>
      <div className="right"><BlogList /></div>
    </div>
  );
}

export default memo(App);