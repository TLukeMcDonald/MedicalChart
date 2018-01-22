import React from 'react';
import Aside from '../components/Aside';
import "./../../assets/stylesheets/Main"

const Main = (props) => {
  console.log('Main component loaded');
  return (
    <div className="main">
      <div className='asideFrame'>
        <Aside/>
      </div>
      <div className='mainFrame'>
        <h1> Main </h1>
      </div>

    </div>
  );
};

export default Main;

