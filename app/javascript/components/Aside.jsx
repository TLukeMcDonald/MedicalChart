import React from 'react';
import "./../../assets/stylesheets/aside"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Aside = (props) => {
  console.log('Aside component loaded');


  return (

    <div className='aside'>


            <div className="sidebar" id="sidebar">
            <button id="b1">OPEN</button>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Article</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

        <div className="wrapper">

        </div>
    </div>
  );
};

export default Aside;
